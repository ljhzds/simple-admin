# coding utf-8
from ext import db


class Product(db.Model):
    __tablename__ = 'product'
    bk_product = db.Column(db.String(20), primary_key=True)
    productcnname = db.Column(db.String(100))
    company = db.Column(db.String(100))
    producttype = db.Column(db.String(20))
    productcode = db.Column(db.String(10))
    dincomecode = db.Column(db.String(20))
    managerfeecode = db.Column(db.String(20))
    profitcode = db.Column(db.String(20))
    preparecode = db.Column(db.String(20))
    mibucode = db.Column(db.String(20))
    riskpersent = db.Column(db.String(10))
    mibupersent = db.Column(db.String(10))
    flag = db.Column(db.String(1))

    # @property
    # def riskpersent(self):
    #     try:
    #         return round(float(self.riskpersent), 2)
    #     except ValueError as e:
    #         raise e


if __name__ == '__main__':
    p = Product(bk_prodct='124')
    print(p)