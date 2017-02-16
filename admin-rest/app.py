#!/usr/bin/env python
import os
import json
from datetime import timedelta
from functools import update_wrapper
from flask import Flask, abort, request, jsonify, g, url_for, make_response, Response, current_app
from flask_sqlalchemy import SQLAlchemy
from flask_httpauth import HTTPBasicAuth
from werkzeug.security import generate_password_hash, check_password_hash
from itsdangerous import (TimedJSONWebSignatureSerializer
                          as Serializer, BadSignature, SignatureExpired)

from ext import make_users, make_branchs, make_nodes

# initialization
app = Flask(__name__)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy dog'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True

# extensions
db = SQLAlchemy(app)
auth = HTTPBasicAuth()


# http://flask.pocoo.org/snippets/56/
def crossdomain(origin=None, methods=None, headers=None,
                max_age=21600, attach_to_all=True,
                automatic_options=True):
    if methods is not None:
        methods = ', '.join(sorted(x.upper() for x in methods))
    if headers is not None and not isinstance(headers, str):
        headers = ', '.join(x.upper() for x in headers)
    if not isinstance(origin, str):
        origin = ', '.join(origin)
    if isinstance(max_age, timedelta):
        max_age = max_age.total_seconds()

    def get_methods():
        if methods is not None:
            return methods

        options_resp = current_app.make_default_options_response()
        return options_resp.headers['allow']

    def decorator(f):
        def wrapped_function(*args, **kwargs):
            if automatic_options and request.method == 'OPTIONS':
                resp = current_app.make_default_options_response()
            else:
                resp = make_response(f(*args, **kwargs))
            if not attach_to_all and request.method != 'OPTIONS':
                return resp

            h = resp.headers

            h['Access-Control-Allow-Origin'] = origin
            h['Access-Control-Allow-Methods'] = get_methods()
            h['Access-Control-Max-Age'] = str(max_age)
            if headers is not None:
                h['Access-Control-Allow-Headers'] = headers
            else:
                h['Access-Control-Allow-Headers'] = "Origin, X-Requested-With, Content-Type, Accept"
            return resp

        f.provide_automatic_options = False
        return update_wrapper(wrapped_function, f)
    return decorator

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(32), index=True)
    password_hash = db.Column(db.String(64))

    def hash_password(self, password):
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.password_hash, password)

    def generate_auth_token(self, expiration=600):
        s = Serializer(app.config['SECRET_KEY'], expires_in=expiration)
        return s.dumps({'id': self.id})

    @staticmethod
    def verify_auth_token(token):
        s = Serializer(app.config['SECRET_KEY'])
        try:
            data = s.loads(token)
        except SignatureExpired:
            return None    # valid token, but expired
        except BadSignature:
            return None    # invalid token
        user = User.query.get(data['id'])
        return user


@auth.verify_password
def verify_password(username_or_token, password):
    # first try to authenticate by token
    user = User.verify_auth_token(username_or_token)
    if not user:
        # try to authenticate with username/password
        user = User.query.filter_by(username=username_or_token).first()
        if not user or not user.verify_password(password):
            return False
    g.user = user
    return True


@app.route('/api/users', methods=['POST', 'OPTIONS'])
def new_user():
    username = request.json.get('username')
    password = request.json.get('password')
    if username is None or password is None:
        abort(400)    # missing arguments
    if User.query.filter_by(username=username).first() is not None:
        abort(400)    # existing user
    user = User(username=username)
    user.hash_password(password)
    db.session.add(user)
    db.session.commit()
    return (jsonify({'username': user.username}), 201,
            {'Location': url_for('get_user', id=user.id, _external=True)})


@app.route('/api/users/<int:id>')
def get_user(id):

    user = User.query.get(id)
    if not user:
        abort(400)
    return jsonify({'username': user.username})


@app.route('/api/token')
@auth.login_required
def get_auth_token():
    token = g.user.generate_auth_token(600)
    return jsonify({'token': token.decode('ascii'), 'duration': 600})


@app.route('/api/resource')
@auth.login_required
def get_resource():
    return jsonify({'data': 'Hello, %s!' % g.user.username})


@app.route('/login', methods=['POST', 'GET', 'OPTIONS'])
@crossdomain(origin='*')
def login():
    code = 200
    msg = '登录成功!'
    user = {
        'id': 1,
        'username': 'admin',
        'password': '123456',
        'avatar': 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
        'name': 'admin'
    }

    username = ''
    password = ''
    print(request.data)
    request_data = json.loads(request.data.decode())
    print(request_data)
    if request.method == 'POST':
        username = request_data.get('username')
        password = request_data.get('password')
        pass
    print(username, password)
    if user['username'] != username or password != user['password']:
        code = '500'
        msg = '账号或密码错误'
        user = dict()
    else:
        user['password'] = ''

    data = {
        'code': code,
        'msg': msg,
        'user': user
    }
    # data = [code, msg, user]
    print(jsonify(data))
    return jsonify(data)


@app.route('/user/list', methods=['GET', 'OPTIONS'])
@crossdomain(origin='*')
def user_list():
    users = make_users()
    print(request.args)
    page = request.args.get('page')
    name = request.args.get('name')
    print(page, name)
    if name:
        users = [u for u in users if name in u['name']]
    try:
        page = int(page)
    except:
        return jsonify(users)
    if isinstance(page, int) and page != 0:
        start = page*20-20
        end = page*20
        print(users)
        print(start, end)
        users = users[start: end]

    return jsonify({'users': users})


@app.route('/branch/list', methods=['GET', 'OPTIONS'])
@crossdomain(origin='*')
def branch_list():
    branchs = make_branchs()
    print(branchs)
    print(request.args)
    page = request.args.get('page')
    branchNo = request.args.get('branchNo')
    print(page, branchNo)
    if branchNo:
        branchs = [b for b in branchs if branchNo in b['branchNo']]
    try:
        page = int(page)
    except:
        return jsonify(branchs)
    if isinstance(page, int) and page != 0:
        start = page*20-20
        end = page*20
        branchs = branchs[start: end]

    return jsonify({'branchs': branchs})


@app.route('/node/list')
@crossdomain(origin='*')
def node_list():
    node = make_nodes()
    return jsonify({'node': node})

if __name__ == '__main__':
    if not os.path.exists('test.sqlite'):
        db.create_all()

    app.run(host='0.0.0.0', debug=True)