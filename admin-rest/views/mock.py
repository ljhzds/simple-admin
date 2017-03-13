# coding: utf-8
import json

from flask import Blueprint, request, jsonify

from ext import crossdomain
from mock_data import make_users, make_branchs, make_nodes


mock = Blueprint(name='mock', import_name=__name__, url_prefix='/mock')


@mock.route('/login', methods=['POST', 'GET', 'OPTIONS'])
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


@mock.route('/user/list', methods=['GET', 'OPTIONS'])
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


@mock.route('/branch/list', methods=['GET', 'OPTIONS'])
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


@mock.route('/node/list')
@crossdomain(origin='*')
def node_list():
    node = make_nodes()
    return jsonify({'node': node})
