const company = ['广发基金', '瑞元']
const report_type = ['收入报表', '凭证', '手续费报表', '销售服务费报表'];
const month = ['2017-01', '2017-02', '2017-03'];

const make_report = function (cs, rs, ms) {
  const Reports = [];
  for (var c of cs) {
    for (var t of rs) {
      for (var m of ms) {
        Reports.push({
          month: m,
          company: c,
          type: t,
          name: c + '-' + m + '-' + t +'.xlsx'
        });
      }
    }
  };
  return Reports;
 };
const search_report = function (c, m, t) {
  var css = [];
  var rss = [];
  var mss = [];
  if (!c) {
    css = company;
  } else {
    css.push(company[c]);
  }
  if (!m) {
    mss = month;
  } else {
    mss.push(m)
  }
  if (!t) {
    tss = report_type;
  } else {
    tss.push(report_type[t])
  }
  return make_report(css, rss, mss);
}
//for (let r of Reports) {
//  console.log(r.name);
//}
export { company, report_type, month };