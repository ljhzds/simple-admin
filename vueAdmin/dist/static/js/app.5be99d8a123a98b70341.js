webpackJsonp([2,0],{0:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var n=o(226),l=(r(n),o(25)),a=r(l),i=o(468),c=r(i),s=o(444),u=r(s);o(457);var d=o(486),p=r(d),m=o(225),f=r(m),v=o(171),_=r(v),b=o(77),h=r(b);o(458);var g=o(222),y=r(g);a.default.use(u.default),a.default.use(p.default),a.default.use(_.default),h.default.configure({showSpinner:!1});var x=new p.default({mode:"history",routes:y.default});x.afterEach(function(e){e.name&&(document.title=e.name)}),new a.default({el:"#app",template:"<App/>",router:x,store:f.default,components:{App:c.default}}).$mount("#app")},124:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.editProduct=t.getProducts=t.addUser=t.editUser=t.removeUser=t.getNodeList=t.getBranchList=t.getUserList=t.requestLogin=t.requestLogino=void 0;var n=o(193),l=r(n),a="",i="http://119.29.103.193:8081/login",c="http://119.29.103.193:8081/user/list",s="http://119.29.103.193:8081/branch/list",u="http://119.29.103.193:8081/node/list",d="http://119.29.103.193:8081/gfjj/product",p="http://119.29.103.193:8081/gfjj/product";t.requestLogino=function(e){return l.default.post(a+"/login",e).then(function(e){return e.data})},t.requestLogin=function(e){return l.default.post(i,e).then(function(e){return e.data})},t.getUserList=function(e){return l.default.get(c,{params:e})},t.getBranchList=function(e){return l.default.get(s,{params:e})},t.getNodeList=function(e){return l.default.get(u,{params:e})},t.removeUser=function(e){return l.default.get(a+"/user/remove",{params:e})},t.editUser=function(e){return l.default.get(a+"/user/edit",{params:e})},t.addUser=function(e){return l.default.get(a+"/user/add",{params:e})},t.getProducts=function(e){return l.default.get(d,{params:e})},t.editProduct=function(e){return l.default.post(p,e).then(function(e){return e.data})}},212:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",components:{}}},213:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{sysUserName:"my",sysUserAvatar:"https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png",form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){console.log("submit!")},handleopen:function(){},handleclose:function(){},handleselect:function(e,t){},logout:function(){var e=this;this.$confirm("确认退出吗?","提示",{}).then(function(){sessionStorage.removeItem("user"),e.$router.push("/login")}).catch(function(){})}},mounted:function(){var e=sessionStorage.getItem("user");e&&(e=JSON.parse(e),this.sysUserName=e.name||"",this.sysUserAvatar=e.avatar||"")}}},214:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(227),l=r(n),a=o(124),i=o(77),c=r(i);t.default={data:function(){return{logining:!1,ruleForm2:{account:"admin",checkPass:"123456"},rules2:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],checkPass:[{required:!0,message:"请输入密码",trigger:"blur"}]},checked:!0}},methods:{handleReset2:function(){this.$refs.ruleForm2.resetFields()},handleSubmit2:function(e){var t=this;this.$refs.ruleForm2.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.logining=!0,c.default.start();var o={username:t.ruleForm2.account,password:t.ruleForm2.checkPass};(0,a.requestLogin)(o).then(function(e){t.logining=!1,c.default.done(),console.log(e);var o=e.msg,r=e.code,n=e.user;console.log(r),200!==r&&201!==r?t.$notify({title:"错误",message:o,type:"error"}):(sessionStorage.setItem("user",(0,l.default)(n)),t.$router.push({path:"/welcome"}))})})}}}},215:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{name:"zds"}},methods:{handleSuccess:function(e,t,o){console.log("success"),this.$notify({title:"上传成功",message:"上传成功",type:"success"})},handleError:function(e,t,o){this.$notify({title:"上传失败",message:"上传失败",type:"error"})}}}},216:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(220);t.default={data:function(){return{filters:{voc_code:"",voc_no:"",voc_date:""},invoices:[]}},methods:{getVoc:function(){this.$msgbox({title:"警告",message:"Demo输入的条件将被忽略!",type:"warning"}),this.invoices=r.Invoices},handleEdit:function(e){console.log(e.voc_no),this.$msgbox({title:"警告",message:"Demo里修改发票信息无意义!",type:"warning"})},handleDel:function(e){console.log(e.voc_no),this.$msgbox({title:"警告",message:"Demo里删除发票信息无意义!",type:"warning"})},formatFlag:function(e,t){return 0==e.check_flag?"未认证":"已认证"},formatCheckDate:function(e,t){return 0==e.check_flag?"":e.check_date},formatAmount:function(e,t){return e.amount},formatTaxAmount:function(e,t){return(e.amount-e.amount/1.06).toFixed(2)}}}},217:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(124),l=o(77),a=r(l);t.default={data:function(){return{filters:{page:1,bk_product:"",nulls:[]},options:[{value:"1",label:"应收科目"},{value:"2",label:"管理费科目"},{value:"3",label:"业绩报酬科目"},{value:"4",label:"弥补金科目"},{value:"5",label:"项目编号"}],editFormVisible:!1,editFormTtile:"编辑",editForm:{bk_product:"",productcnname:"",company:"",producttype:"",dincomecode:"",managerfeecode:"",profitcode:"",preparecode:"",mibucode:"",riskpersent:"",mibupersent:"",flag:"",productcode:""},btnEditText:"提 交",editLoading:!1,page_count:0,loading:!1,products:[]}},methods:{getPrd:function(){var e=this,t={page:0,bk_product:this.filters.bk_product,nulls:this.filters.nulls};this.loading=!0,a.default.start(),(0,n.getProducts)(t).then(function(t){e.products=t.data.products,e.page_count=t.data.page_count,e.loading=!1,a.default.done()})},handleEdit:function(e){var t=this;t.editFormVisible=!0,t.editForm.bk_product=e.bk_product,t.editForm.productcnname=e.productcnname,t.editForm.company=e.company,t.editForm.producttype=e.producttype,t.editForm.dincomecode=e.dincomecode,t.editForm.managerfeecode=e.managerfeecode,t.editForm.profitcode=e.profitcode,t.editForm.preparecode=e.preparecode,t.editForm.mibucode=e.mibucode,t.editForm.riskpersent=e.riskpersent,t.editForm.mibupersent=e.mibupersent,t.editForm.flag=e.flag,t.editForm.productcode=e.productcode,console.log("123")},beforeXlsxUpload:function(e){var t=".xlsx"===e.name.slice(-5);return t||this.$message({type:"error",message:"只能上传xlsx文件",duration:1500,showClose:!0}),t},handleXlsxScucess:function(){this.$message({type:"success",message:"上传成功",duration:1500,showClose:!0})},editSubmit:function(){var e=this;e.$refs.editForm.validate(function(t){t&&e.$confirm("确认修改吗？","提示",{}).then(function(){e.editLoading=!0,a.default.start(),e.btnEditText="提交中";var t={bk_product:e.editForm.bk_product,productcnname:e.editForm.productcnname,company:e.editForm.company,producttype:e.editForm.producttype,dincomecode:e.editForm.dincomecode,managerfeecode:e.editForm.managerfeecode,profitcode:e.editForm.profitcode,preparecode:e.editForm.preparecode,mibucode:e.editForm.mibucode,riskpersent:e.editForm.riskpersent,mibupersent:e.editForm.mibupersent,flag:e.editForm.flag,productcode:e.editForm.productcode};(0,n.editProduct)(t).then(function(t){e.editLoading=!1,a.default.done(),console.log(t);var o="S"==t.code?"success":"error",r="S"==t.code?"成功":"失败";e.btnEditText="提 交",e.$notify({title:r,message:t.msg,type:o}),e.editFormVisible=!1,e.getPrd()})})})}},mounted:function(){this.getPrd()}}},218:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(125),l=r(n),a=o(221);t.default={data:function(){return{type_options:[{label:"收入报表",value:0},{label:"凭证",value:1},{label:"手续费报表",value:2}],company_options:[{label:"广发基金",value:0},{label:"瑞元",value:1}],form:{month:"2017-01",report_type:"",company_type:0},report:[],dialogVisible:!1,dialogTitle:""}},methods:{chooseDate:function(e){console.log("month: "+e),this.form.month=e},onSearch:function(){var e=this.form.company_type,t=this.form.report_type,o=this.form.month;new Date(o);console.log(e,t,o);var r=[],n=[],i=[];""===e?r=a.company:r.push(a.company[e]),""===o?i=a.month:i.push(o),""===t?n=a.report_type:n.push(a.report_type[t]);var c=[],s=!0,u=!1,d=void 0;try{for(var p,m=(0,l.default)(r);!(s=(p=m.next()).done);s=!0){var f=p.value,v=!0,_=!1,b=void 0;try{for(var h,g=(0,l.default)(n);!(v=(h=g.next()).done);v=!0){var y=h.value,x=!0,F=!1,k=void 0;try{for(var w,S=(0,l.default)(i);!(x=(w=S.next()).done);x=!0){var C=w.value;c.push({month:C,company:f,type:y,name:f+"-"+C+"-"+y+".xlsx"})}}catch(e){F=!0,k=e}finally{try{!x&&S.return&&S.return()}finally{if(F)throw k}}}}catch(e){_=!0,b=e}finally{try{!v&&g.return&&g.return()}finally{if(_)throw b}}}}catch(e){u=!0,d=e}finally{try{!s&&m.return&&m.return()}finally{if(u)throw d}}this.report=c},onCreate:function(){console.log("create"),this.$msgbox({title:"警告",message:"Demo不提供生成报表功能!",type:"warning"})},handleDownload:function(e){console.log(e.name),this.$msgbox({title:"警告",message:"在Demo里你不能下载文件!",type:"warning"})},handleView:function(e){console.log(e.name),this.dialogVisible=!0,this.dialogTitle=e.name}},mounted:function(){this.onSearch()}}},219:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(77);r(n);t.default={}},220:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Invoices=void 0;for(var n=o(465),l=r(n),a=[],i=0;i<10;i++)a.push({voc_code:40000001+i,voc_no:32880001+i,voc_date:"20170312",outputName:l.default.Random.cname(),amount:l.default.Random.float(100,1e4).toFixed(2),tax_amount:l.default.Random.float(100,1e4),check_flag:l.default.Random.integer(0,1),check_date:"20170312"});console.log(a),t.Invoices=a},221:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.month=t.report_type=t.company=void 0;var n=o(125),l=(r(n),["广发基金","瑞元"]),a=["收入报表","凭证","手续费报表","销售服务费报表"],i=["2017-01","2017-02","2017-03"];t.company=l,t.report_type=a,t.month=i},222:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(471),l=r(n),a=o(469),i=r(a),c=o(470),s=r(c),u=o(476),d=r(u),p=o(474),m=r(p),f=o(472),v=(r(f),o(475)),_=r(v),b=o(473),h=r(b),g=[{path:"/login",component:l.default,name:"",hidden:!0},{path:"/404",component:i.default,name:"",hidden:!0},{path:"/",component:s.default,name:"基金编码",iconCls:"el-icon-star-off",leaf:!0,children:[{path:"/product",component:m.default,name:"基金编码管理"}]},{path:"/",component:s.default,name:"报表凭证",iconCls:"el-icon-star-off",leaf:!0,children:[{path:"/report",component:_.default,name:"报表凭证管理"}]},{path:"/",component:s.default,name:"进项发票",iconCls:"el-icon-star-off",leaf:!0,children:[{path:"/inputInvoice",component:h.default,name:"进项发票查询"}]},{path:"/welcome",component:d.default},{path:"*",hidden:!0,redirect:{path:"/404"}}];t.default=g},223:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.increment=function(e){var t=e.commit;t("INCREMENT")},t.decrement=function(e){var t=e.commit;t("DECREMENT")}},224:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getCount=function(e){return e.count}},225:function(e,t,o){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=o(25),a=n(l),i=o(171),c=n(i),s=o(223),u=r(s),d=o(224),p=r(d);a.default.use(c.default);var m={count:10},f={INCREMENT:function(e){e.count++},DECREMENT:function(e){e.count--}};t.default=new c.default.Store({strict:!0,actions:u,getters:p,state:m,mutations:f})},457:function(e,t){},458:function(e,t){},459:function(e,t){},460:function(e,t){},461:function(e,t){},462:function(e,t){},463:function(e,t){},464:function(e,t){},467:function(e,t,o){e.exports=o.p+"static/img/gfjj_logo2.737c4d1.png"},468:function(e,t,o){o(463);var r=o(33)(o(212),o(483),null,null);e.exports=r.exports},469:function(e,t,o){var r=o(33)(null,o(478),null,null);e.exports=r.exports},470:function(e,t,o){o(459);var r=o(33)(o(213),o(477),"data-v-0a184e3d",null);e.exports=r.exports},471:function(e,t,o){o(461);var r=o(33)(o(214),o(481),"data-v-56d65ffb",null);e.exports=r.exports},472:function(e,t,o){o(462);var r=o(33)(o(215),o(482),null,null);e.exports=r.exports},473:function(e,t,o){var r=o(33)(o(216),o(479),null,null);e.exports=r.exports},474:function(e,t,o){o(460);var r=o(33)(o(217),o(480),null,null);e.exports=r.exports},475:function(e,t,o){o(464);var r=o(33)(o(218),o(484),"data-v-e3ea71ca",null);e.exports=r.exports},476:function(e,t,o){var r=o(33)(o(219),o(485),null,null);e.exports=r.exports},477:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticClass:"panel"},[r("el-col",{staticClass:"panel-top",attrs:{span:24}},[r("el-col",{staticStyle:{"font-size":"26px"},attrs:{span:20}},[r("img",{staticClass:"logo",attrs:{src:o(467)}}),e._v(" "),r("span",[r("i",{staticStyle:{color:"palevioletred"}},[e._v("DEMO")])])]),e._v(" "),r("el-col",{staticClass:"rightbar",attrs:{span:4}},[r("el-dropdown",{attrs:{trigger:"click"}},[r("span",{staticClass:"el-dropdown-link",staticStyle:{color:"#c0ccda",cursor:"pointer"}},[r("img",{staticClass:"head",attrs:{src:"http://img1.imgtn.bdimg.com/it/u=2428798290,2425473743&fm=23&gp=0.jpg"}}),e._v("\n\t\t\t\t\t\t"+e._s(e.sysUserName))]),e._v(" "),r("el-dropdown-menu",{slot:"dropdown"},[r("el-dropdown-item",{nativeOn:{click:function(t){e.logout(t)}}},[e._v("退出登录")])],1)],1)],1)],1),e._v(" "),r("el-col",{staticClass:"panel-center",attrs:{span:24}},[r("aside",{attrs:{span:2}},[r("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,theme:"dark",router:""},on:{open:e.handleopen,close:e.handleclose,select:e.handleselect}},[e._l(e.$router.options.routes,function(t,o){return t.hidden?e._e():[t.leaf?e._e():r("el-submenu",{attrs:{index:o+""}},[r("template",{slot:"title"},[r("i",{class:t.iconCls}),e._v(e._s(t.name))]),e._v(" "),e._l(t.children,function(t){return t.hidden?e._e():r("el-menu-item",{attrs:{index:t.path}},[e._v(e._s(t.name)+"\n              ")])})],2),e._v(" "),t.leaf&&t.children.length>0?r("el-menu-item",{attrs:{index:t.children[0].path}},[r("i",{class:t.iconCls}),e._v(e._s(t.children[0].name)+"\n            ")]):e._e()]})],2)],1),e._v(" "),r("section",{staticClass:"panel-c-c"},[r("div",{staticClass:"grid-content bg-purple-light"},[r("el-col",{staticStyle:{"margin-bottom":"15px"},attrs:{span:24}},[r("strong",{staticStyle:{width:"200px",float:"left",color:"#475669"}},[e._v(e._s(e.$route.name))]),e._v(" "),r("el-breadcrumb",{staticStyle:{float:"right"},attrs:{separator:"/"}},e._l(e.$route.matched,function(t){return r("el-breadcrumb-item",[e._v("\n                "+e._s(t.name)+"\n              ")])}))],1),e._v(" "),r("el-col",{staticStyle:{"background-color":"#fff","box-sizing":"border-box"},attrs:{span:24}},[r("router-view")],1)],1)])])],1)},staticRenderFns:[]}},478:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticStyle:{"font-size":"20px","text-align":"center",color:"rgb(192, 204, 218)"}},[e._v("404")])},staticRenderFns:[]}},479:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("el-form",{attrs:{inline:!0,model:e.filters,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"发票代码"}},[o("el-input",{model:{value:e.filters.voc_code,callback:function(t){e.filters.voc_code=t},expression:"filters.voc_code"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"发票号码"}},[o("el-input",{model:{value:e.filters.voc_no,callback:function(t){e.filters.voc_no=t},expression:"filters.voc_no"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"开票日期"}},[o("el-input",{model:{value:e.filters.voc_date,callback:function(t){e.filters.voc_date=t},expression:"filters.voc_date"}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary",icon:"search"},nativeOn:{click:function(t){e.getVoc(t)}}},[e._v("查询")])],1)],1),e._v(" "),[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.invoices,"highlight-current-row":""}},[o("el-table-column",{attrs:{type:"index",lable:"#",width:"60px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"voc_code",label:"发票代码"}}),e._v(" "),o("el-table-column",{attrs:{prop:"voc_no",label:"发票号码"}}),e._v(" "),o("el-table-column",{attrs:{prop:"voc_date",label:"发票日期"}}),e._v(" "),o("el-table-column",{attrs:{prop:"outputName",label:"销方名称"}}),e._v(" "),o("el-table-column",{attrs:{prop:"amount",formatter:e.formatAmount,label:"金额"}}),e._v(" "),o("el-table-column",{attrs:{prop:"tax_amount",formatter:e.formatTaxAmount,label:"税额"}}),e._v(" "),o("el-table-column",{attrs:{prop:"check_flag",formatter:e.formatFlag,label:"认证标志"}}),e._v(" "),o("el-table-column",{attrs:{prop:"check_date",formatter:e.formatCheckDate,label:"认证日期"}}),e._v(" "),o("el-table-column",{attrs:{context:e._self,label:"操作","min-width":"120px"},inlineTemplate:{render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",[o("el-button",{attrs:{size:"small"},nativeOn:{click:function(t){e.handleEdit(e.row)}}},[o("i",{staticClass:"el-icon-download"}),e._v("修改")]),e._v(" "),o("el-button",{attrs:{size:"small"},nativeOn:{click:function(t){e.handleDel(e.row)}}},[o("i",{staticClass:"el-icon-download"}),e._v("删除")])],1)},staticRenderFns:[]}})],1)]],2)},staticRenderFns:[]}},480:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("el-col",{staticClass:"searchbar",attrs:{span:24}},[o("el-form",{attrs:{inline:!0,model:e.filters}},[o("el-form-item",[o("el-input",{attrs:{placeholder:"基金编码"},model:{value:e.filters.bk_product,callback:function(t){e.filters.bk_product=t},expression:"filters.bk_product"}})],1),e._v(" "),o("el-form-item",[o("el-select",{attrs:{clearable:"",label:"空配置查询",placeholder:"空配置查询"},model:{value:e.filters.nulls,callback:function(t){e.filters.nulls=t},expression:"filters.nulls"}},e._l(e.options,function(e){return o("el-option",{attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.getPrd}},[e._v("查询")])],1)],1)],1),e._v(" "),o("el-col",{attrs:{span:24}},[o("el-form",{attrs:{inline:!0,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"现基金配置"}},[o("el-button",{attrs:{type:"text"},nativeOn:{click:function(e){this.window.location.href="http://127.0.0.1:5000/gfjj/downTemplate"}}},[e._v("导  出")])],1),e._v(" "),o("el-form-item",{attrs:{label:"xlsx文件上传"}},[o("el-upload",{attrs:{action:"http://127.0.0.1:5000/gfjj/upload","before-upload":e.beforeXlsxUpload,"on-success":e.handleXlsxScucess}},[o("el-button",{attrs:{type:"text"}},[e._v("点击上传")])],1)],1)],1)],1),e._v(" "),[o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.products,"highlight-current-row":""}},[o("el-table-column",{attrs:{prop:"bk_product",label:"基金编码",width:"120px",fixed:""}}),e._v(" "),o("el-table-column",{attrs:{prop:"productcnname",label:"基金名称",width:"120px",fixed:""}}),e._v(" "),o("el-table-column",{attrs:{prop:"company",label:"所属公司",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"producttype",label:"境内外标志",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"dincomecode",label:"应收科目",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"managerfeecode",label:"管理费科目",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"profitcode",label:"业绩报酬科目",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"preparecode",label:"风金科目",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"mibucode",label:"弥补金科目",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"riskpersent",label:"风金比例",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"mibupersent",label:"弥补金比例",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"flag",label:"是否计算收入",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"productcode",label:"项目编号",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{context:e._self,label:"操作",width:"120px",fixed:"right"},inlineTemplate:{render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",[o("el-button",{attrs:{size:"small"},on:{click:function(t){e.handleEdit(e.row)}}},[o("i",{staticClass:"el-icon-edit"}),e._v("修改")])],1)},staticRenderFns:[]}})],1)],e._v(" "),o("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"10px"},attrs:{span:24}},[o("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":20,total:e.page_count}})],1),e._v(" "),o("el-dialog",{attrs:{title:e.editFormTtile,"close-on-click-modal":!1},model:{value:e.editFormVisible,callback:function(t){e.editFormVisible=t},expression:"editFormVisible"}},[o("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"基金编码",prop:"id"}},[o("el-input",{attrs:{disabled:!0},model:{value:e.editForm.bk_product,callback:function(t){e.editForm.bk_product=t},expression:"editForm.bk_product"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"基金名称",prop:"productcnname"}},[o("el-input",{attrs:{disabled:!0},model:{value:e.editForm.productcnname,callback:function(t){e.editForm.productcnname=t},expression:"editForm.productcnname"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"所属公司",prop:"company"}},[o("el-input",{attrs:{disabled:!0},model:{value:e.editForm.company,callback:function(t){e.editForm.company=t},expression:"editForm.company"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"境内外标志",prop:"producttype"}},[o("el-input",{attrs:{disabled:!0},model:{value:e.editForm.producttype,callback:function(t){e.editForm.producttype=t},expression:"editForm.producttype"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"应收科目",prop:"dincomecode"}},[o("el-input",{model:{value:e.editForm.dincomecode,callback:function(t){e.editForm.dincomecode=t},expression:"editForm.dincomecode"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"管理费科目",prop:"managerfeecode"}},[o("el-input",{model:{value:e.editForm.managerfeecode,callback:function(t){e.editForm.managerfeecode=t},expression:"editForm.managerfeecode"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"业绩报酬科目",prop:"profitcode"}},[o("el-input",{model:{value:e.editForm.profitcode,callback:function(t){e.editForm.profitcode=t},expression:"editForm.profitcode"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"风金科目",prop:"preparecode"}},[o("el-input",{model:{value:e.editForm.preparecode,callback:function(t){e.editForm.preparecode=t},expression:"editForm.preparecode"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"弥补金科目",prop:"mibucode"}},[o("el-input",{model:{value:e.editForm.mibucode,callback:function(t){e.editForm.mibucode=t},expression:"editForm.mibucode"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"风金比例",prop:"riskpersent"}},[o("el-input",{model:{value:e.editForm.riskpersent,callback:function(t){e.editForm.riskpersent=t},expression:"editForm.riskpersent"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"弥补金比例",prop:"mibupersent"}},[o("el-input",{model:{value:e.editForm.mibupersent,callback:function(t){e.editForm.mibupersent=t},expression:"editForm.mibupersent"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"是否计算收入",prop:"flag"}},[o("el-input",{model:{value:e.editForm.flag,callback:function(t){e.editForm.flag=t},expression:"editForm.flag"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"项目编号",prop:"productcode"}},[o("el-input",{model:{value:e.editForm.productcode,callback:function(t){e.editForm.productcode=t},expression:"editForm.productcode"}})],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",slot:"footer"},[o("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){e.editSubmit(t)}}},[e._v(e._s(e.btnEditText))])],1)],1)],2)},staticRenderFns:[]}},481:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm card-box loginform",attrs:{model:e.ruleForm2,rules:e.rules2,"label-position":"left","label-width":"0px"}},[o("h3",{staticClass:"title"},[e._v("系统登录")]),e._v(" "),o("el-form-item",{attrs:{prop:"account"}},[o("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账号"},model:{value:e.ruleForm2.account,callback:function(t){e.ruleForm2.account=t},expression:"ruleForm2.account"}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"checkPass"}},[o("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},model:{value:e.ruleForm2.checkPass,callback:function(t){e.ruleForm2.checkPass=t},expression:"ruleForm2.checkPass"}})],1),e._v(" "),o("el-checkbox",{staticStyle:{margin:"0px 0px 35px 0px"},attrs:{checked:""},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("记住密码")]),e._v(" "),o("el-form-item",{staticStyle:{width:"100%"}},[o("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},nativeOn:{click:function(t){t.preventDefault(),e.handleSubmit2(t)}}},[e._v("登录")])],1)],1)},staticRenderFns:[]}},482:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{attrs:{id:"tmplDown"}},[o("el-row",[o("el-col",{attrs:{span:6}},[o("h3",[e._v("下载模块,编辑导入")])])],1),e._v(" "),o("el-row",[o("el-col",{attrs:{span:6}},[o("span",[e._v("点击下载模块文件")])]),e._v(" "),o("el-col",{attrs:{span:10}},[o("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){this.window.location.href="http://0.0.0.0:5000/gfjj/downTemplate"}}},[e._v("下载"),o("i",{staticClass:"el-icon-download el-icon--right"})])],1)],1),e._v(" "),o("el-row",[o("el-button",{attrs:{type:"primary"}},[o("el-upload",{staticClass:"upload",attrs:{action:"http://10.0.0.0:5000/gfjj/upload","on-success":e.handleSuccess,"on-error":e.handleError}},[o("div",{staticClass:"el-upload__text"},[o("em",[e._v("点击上传")])]),e._v(" "),o("div",{staticClass:"el-upload__tip",slot:"tip"},[e._v("只能上传xlsx文件")])])],1)],1)],1)},staticRenderFns:[]}},483:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},staticRenderFns:[]}},484:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("el-form",{attrs:{inline:!0,model:e.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"月份"}},[o("el-date-picker",{staticStyle:{width:"120px"},attrs:{type:"month",format:"yyyy-MM",placeholder:"请选择月份"},on:{change:e.chooseDate},model:{value:e.form.month,callback:function(t){e.form.month=t},expression:"form.month"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"报表类型"}},[o("el-select",{staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"请选择报表类型"},model:{value:e.form.report_type,callback:function(t){e.form.report_type=t},expression:"form.report_type"}},e._l(e.type_options,function(e){return o("el-option",{attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"公司"}},[o("el-select",{staticStyle:{width:"120px"},attrs:{clearable:"",placeholder:"请选择公司"},model:{value:e.form.company_type,callback:function(t){e.form.company_type=t},expression:"form.company_type"}},e._l(e.company_options,function(e){return o("el-option",{attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),o("el-form",{attrs:{inline:!0}},[o("el-form-item",{attrs:{"label-width":"80px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary"},nativeOn:{click:function(t){e.onSearch(t)}}},[e._v("查询")])],1),e._v(" "),o("el-form-item",{attrs:{"label-width":"10px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary"},nativeOn:{click:function(t){e.onCreate(t)}}},[e._v("生成")])],1)],1),e._v(" "),[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.report,"highlight-current-row":""}},[o("el-table-column",{attrs:{type:"index",lable:"#",width:"60px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"month",label:"月份"}}),e._v(" "),o("el-table-column",{attrs:{prop:"company",label:"公司"}}),e._v(" "),o("el-table-column",{attrs:{prop:"type",label:"报表类型"}}),e._v(" "),o("el-table-column",{attrs:{prop:"name",label:"文件名"}}),e._v(" "),o("el-table-column",{attrs:{context:e._self,label:"操作"},inlineTemplate:{render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",[o("el-button",{attrs:{size:"small"},nativeOn:{click:function(t){e.handleDownload(e.row)}}},[o("i",{staticClass:"el-icon-download"}),e._v("下载")]),e._v(" "),o("el-button",{attrs:{size:"small"},nativeOn:{click:function(t){e.handleView(e.row)}}},[o("i",{staticClass:"el-icon-download"}),e._v("预览")])],1)},staticRenderFns:[]}})],1)],e._v(" "),o("el-dialog",{attrs:{title:e.dialogTitle},model:{value:e.dialogVisible,callback:function(t){e.dialogVisible=t},expression:"dialogVisible"}},[o("span",[e._v("在正式项目中,你可以预览此文件")]),e._v(" "),o("span",{staticClass:"dialog-footer",slot:"footer"},[o("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],2)},staticRenderFns:[]}},485:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("el-row",[o("el-col",{attrs:{span:8,offset:8}},[o("h3",{staticStyle:{color:"black"}},[e._v("欢迎来到管理平台")])])],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=app.5be99d8a123a98b70341.js.map