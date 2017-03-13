import Mock from 'mockjs';

const Invoices = [];
for (let i = 0; i < 10; i++) {
  Invoices.push({
    voc_code: 40000001 + i,
    voc_no: 32880001 + i,
    voc_date: '20170312',
    outputName: Mock.Random.cname(),
    amount: Mock.Random.float(100, 10000).toFixed(2),
    tax_amount: Mock.Random.float(100, 10000),
    check_flag: Mock.Random.integer(0, 1),
    check_date: '20170312'
  });
}
console.log(Invoices);
export { Invoices };