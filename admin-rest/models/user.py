# coding: utf-8
from werkzeug.security import generate_password_hash, check_password_hash
from itsdangerous import Serializer

from ext import db


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

# class User(db.Model):
#     __tablename__ = 'users'
#     id = db.Column(db.Integer, primary_key = True)
#     username = db.Column(db.String(32), index = True)
#     password_hash = db.Column(db.String(128))
#
#     def hash_password(self, password):
#         self.password_hash = generate_password_hash(password=password)
#
#     def verify_password(self, password):
#         return check_password_hash(self.password_hash, password)