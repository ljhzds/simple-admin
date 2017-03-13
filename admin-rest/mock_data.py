# coding: utf-8

import uuid
import random
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()


def make_users():
    users = list()
    xing = ['张', '刘', '王']
    ming = [str(i) for i in range(1, 10)]
    for i in range(86):
        user = dict()
        user['id'] = uuid.uuid4().__str__().replace('-', '')[:10]
        user['name'] = ''.join([random.choice(xing), random.choice(ming)])
        user['sex'] = random.choice([0, 1])
        user['branch'] = random.choice(['机构1', '机构2'])
        user['role'] = random.choice(['管理员', '操作员'])
        users.append(user)
    # data = {'users': users}
    return users


def make_branchs():
    branchs = list()
    branchs_no = [('100000', '机构1'), ('200000', '机构2')]
    for i in range(2):
        branch = dict()
        branch['branchNo'] = branchs_no[i][0]
        branch['branchName'] = branchs_no[i][1]
        branch['preBranchNo'] = branchs_no[i][0]
        branch['branchType'] = '管理机构'
        branchs.append(branch)
    return branchs


def make_nodes():
    nodes = list()
    for i in range(5):
        node = dict()
        node['nodeId'] = i+1
        node['nodeName'] = '节点'+str(i+1)
        node['nodeIP'] = 'xx.xx.xx.{}'.format(127+i)
        node['nodePORT'] = '8080'
        node['nodeType'] = '普通节点'
        node['nodeStat'] = '正常'
        nodes.append(node)
    return nodes