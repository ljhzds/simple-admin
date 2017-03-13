# coding: utf-8
import os
import json

import openpyxl
from flask import current_app, Blueprint, request, jsonify, send_from_directory
from werkzeug.utils import secure_filename

from ext import crossdomain, db, columns_to_dict
from models.gfjj import Product
from config import *

xlsx_file = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir, 'importProduct.xlsx'))
template_file = os.path.abspath(os.path.join(os.path.dirname(__file__), os.pardir, 'product_template.xlsx'))

gfjj = Blueprint(name='gfjj', import_name=__name__, url_prefix='/gfjj')


def save_xlsx(xlsx_file):
    book = openpyxl.load_workbook(xlsx_file)
    sheet = book.worksheets[0]

    for row in sheet.rows[2:]:
        bk_product = row[0].value
        productcnname = row[1].value
        company = row[2].value
        producttype = row[3].value
        productcode = row[4].value
        dincomecode = row[5].value
        managerfeecode = row[6].value
        profitcode = row[7].value
        preparecode = row[8].value
        mibucode = row[9].value
        riskpersent = row[10].value
        mibupersent = row[11].value
        flag = row[12].value
        if not bk_product:
            continue
        p = Product.query.get(bk_product)

        if not p:
            p = Product(bk_product=bk_product)

        p.productcnname = productcnname
        p.company = company
        p.producttype = producttype
        p.productcode = productcode
        p.dincomecode = dincomecode
        p.managerfeecode = managerfeecode
        p.profitcode = profitcode
        p.preparecode = preparecode
        p.mibucode = mibucode
        p.riskpersent = riskpersent
        p.mibupersent = mibupersent
        p.flag = flag

        db.session.add(p)
        db.session.commit()


@gfjj.route('/update', methods=['OPTION', 'POST', 'GET'])
@crossdomain(origin='*')
def upload():
    try:
        save_xlsx(xlsx_file)
        return jsonify({'code': 'S', 'msg': '更新成功'})
    except Exception as e:
        return jsonify({'code': 'F', 'msg': 'ok'})


@gfjj.route('/product', methods=['GET', 'POST', 'OPTIONS'])
@crossdomain(origin='*')
def products():
    if request.method == 'POST':
        data = json.loads(request.data.decode())
        print(data)
        try:
            p = Product.query.get(data['bk_product'])
            for key, value in data.items():
                s = "p.{} = '{}'".format(key, value)
                print(s)
                exec(s)
            db.session.add(p)
            db.session.commit()
            return jsonify({'code': 'S', 'msg': '更新成功'})
        except Exception as e:
            print(e)
            return jsonify({'code': 'F', 'msg': '更新失败'})
    elif request.method == 'OPTIONS':
        return jsonify({'code': 'S', 'msg': '更新成功'})
    elif request.method == 'GET':
        bk_product = request.args.get('bk_product')
        if bk_product:
            products = Product.query.filter(Product.bk_product.like('%{}%'.format(bk_product))).order_by(Product.bk_product)
        else:
            products = Product.query.order_by(bk_product)

        prd = [columns_to_dict(p) for p in products]
        page_count = int(len(prd)/15) + 10
        return jsonify({'products': prd, 'page_count': page_count})


@gfjj.route('/downTemplate')
@crossdomain(origin='*')
def down_template():
    return send_from_directory(os.path.dirname(template_file), "product_template.xlsx", as_attachment=True)


@gfjj.route('/avatar')
@crossdomain(origin='*')
def avatar():
    return send_from_directory(os.path.dirname(template_file), "avatar.jpg", as_attachment=True)


@gfjj.route('/upload', methods=['GET', 'POST', 'OPTIONS'])
@crossdomain(origin='*')
def upload_file():
    def allowed_file(filename):
        return '.' in filename and \
                filename.rsplit('.', 1)[1] in current_app.config['ALLOWED_EXTENSIONS']

    if request.method != 'POST':
        return jsonify({'code': 'F', 'msg': '错误的请求方式'})
    file = request.files['file']
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(xlsx_file)
        save_xlsx(xlsx_file)
        return jsonify({'code': 'S', 'msg': '上传成功'})
    return jsonify({'code': 'F', 'msg': '只能上传xlsx文件'})


if __name__ == '__main__':
    save_xlsx(xlsx_file)