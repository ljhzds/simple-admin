# coding: utf-8
from datetime import datetime
from werkzeug.security import check_password_hash
from .ext import db


# user 关联机构
# user权限关联机构
# 这两项待添加


user_role = db.Table('user_role',
                     db.Column('user_id', db.Integer, db.ForeignKey('user.id')),
                     db.Column('role_id', db.Integer, db.ForeignKey('role.id')),
                     db.Column('create_at', db.DateTime, default=datetime.now)
                     )

role_permission = db.Table('role_permission',  # 角色权限关联表
                           db.Column('permission_id', db.Integer, db.ForeignKey('permission.id')),
                           db.Column('role_id', db.Integer, db.ForeignKey('role.id')),
                           db.Column('created_at', db.DateTime, default=datetime.now),
                           )

role_menu = db.Table('role_menu',  # 用户菜单关联表
                     db.Column('role_id', db.Integer, db.ForeignKey('role.id')),
                     db.Column('menu_id', db.Integer, db.ForeignKey('menu.id')),
                     db.Column('created_at', db.DateTime, default=datetime.now),
                     db.Column('is_delete', db.Boolean, default=False),
                     )


class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    password = db.Column(db.String(256))
    email = db.Column(db.String(128))
    mobile = db.Column(db.String(15))
    name = db.Column(db.String(50))
    gender = db.Column(db.SmallInteger)  # 1 male 2 female

    roles = db.relationship('Role', secondary=user_role,
                            backref=db.backref('users', lazy='dynamic'))

    def __init__(self, name, email):
        self.name = name
        self.email = email

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymons(self):
        return False

    def get_id(self):
        return self.id

    def __str__(self):
        return self.name

    @staticmethod
    def validate_login(password_hash, password):
        return check_password_hash(password_hash, password)

    @property
    def permissions(self):
        permissions = Permission.query.join(role_permission).join(Role).join(user_role).join(User).\
            filter(
            User.id == self.id
        )
        return permissions

    @property
    def menus(self):
        menus = Menu.query.join(role_menu).join(Role).join(user_role).join(User).\
            filter(
            User.id == self.id
        )
        return menus

    def check(self, action):
        permission = self.permissions.filter(Permission.action==action)
        return bool(permission)


class Role(db.Model):
    __tablename__ = 'role'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))


class Permission(db.Model):
    __tablename__ = 'permission'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    action = db.Column(db.String(250), unique=True)


class Menu(db.Model):
    __tablename__ = 'menu'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    icon = db.Column(db.String(50))
    url = db.Column(db.String(250))
    order = db.Column(db.SmallInteger, default=0)
    bg_color = db.Column(db.String(50))
