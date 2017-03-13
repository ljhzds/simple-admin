#!/usr/bin/env python
import os
import json

from flask import Flask, abort, request, jsonify, g, url_for, make_response, Response, current_app
from flask_sqlalchemy import SQLAlchemy
from flask_httpauth import HTTPBasicAuth

from ext import db, crossdomain
from models.user import User
from views.mock import mock
from views.gfjj import gfjj

# initialization
app = Flask(__name__)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy dog'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///db.sqlite'
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = True

# extensions
# db = SQLAlchemy(app)
db.app = app
db.init_app(app)
app.register_blueprint(mock)
app.register_blueprint(gfjj)
auth = HTTPBasicAuth()
app.config.from_object('config')


if __name__ == '__main__':
    if not os.path.exists('test.sqlite'):
        db.create_all()

    app.run(host='0.0.0.0', debug=True)