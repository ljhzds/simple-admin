webpackJsonp([2,0],{0:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var n=o(222),a=(r(n),o(22)),l=r(a),i=o(464),s=r(i),c=o(440),d=r(c);o(453);var u=o(480),m=r(u),p=o(221),f=r(p),v=o(169),_=r(v),h=o(114),b=r(h);o(454);var g=o(218),y=r(g);l.default.use(d.default),l.default.use(m.default),l.default.use(_.default),b.default.configure({showSpinner:!1});var x=new m.default({routes:y.default});x.afterEach(function(e){e.name&&(document.title=e.name)}),new l.default({el:"#app",template:"<App/>",router:x,store:f.default,components:{App:s.default}}).$mount("#app")},121:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.editProduct=t.getProducts=t.addUser=t.editUser=t.removeUser=t.getNodeList=t.getBranchList=t.getUserList=t.requestLogin=t.requestLogino=void 0;var n=o(191),a=r(n),l="",i="http://119.29.103.193:8081/login",s="http://119.29.103.193:8081/user/list",c="http://119.29.103.193:8081/branch/list",d="http://119.29.103.193:8081/node/list",u="http://127.0.0.1:8081/gfjj/product",m="http://127.0.0.1:8081/gfjj/product";t.requestLogino=function(e){return a.default.post(l+"/login",e).then(function(e){return e.data})},t.requestLogin=function(e){return a.default.post(i,e).then(function(e){return e.data})},t.getUserList=function(e){return a.default.get(s,{params:e})},t.getBranchList=function(e){return a.default.get(c,{params:e})},t.getNodeList=function(e){return a.default.get(d,{params:e})},t.removeUser=function(e){return a.default.get(l+"/user/remove",{params:e})},t.editUser=function(e){return a.default.get(l+"/user/edit",{params:e})},t.addUser=function(e){return a.default.get(l+"/user/add",{params:e})},t.getProducts=function(e){return a.default.get(u,{params:e})},t.editProduct=function(e){return a.default.post(m,e).then(function(e){return e.data})}},209:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",components:{}}},210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{sysUserName:"my",sysUserAvatar:"https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png",form:{name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{onSubmit:function(){console.log("submit!")},handleopen:function(){},handleclose:function(){},handleselect:function(e,t){},logout:function(){var e=this;this.$confirm("确认退出吗?","提示",{}).then(function(){sessionStorage.removeItem("user"),e.$router.push("/login")}).catch(function(){})}},mounted:function(){var e=sessionStorage.getItem("user");e&&(e=JSON.parse(e),this.sysUserName=e.name||"",this.sysUserAvatar=e.avatar||"")}}},211:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(223),a=r(n),l=o(121),i=o(114),s=r(i);t.default={data:function(){return{logining:!1,ruleForm2:{account:"admin",checkPass:"123456"},rules2:{account:[{required:!0,message:"请输入账号",trigger:"blur"}],checkPass:[{required:!0,message:"请输入密码",trigger:"blur"}]},checked:!0}},methods:{handleReset2:function(){this.$refs.ruleForm2.resetFields()},handleSubmit2:function(e){var t=this;this.$refs.ruleForm2.validate(function(e){if(!e)return console.log("error submit!!"),!1;t.logining=!0,s.default.start();var o={username:t.ruleForm2.account,password:t.ruleForm2.checkPass};(0,l.requestLogin)(o).then(function(e){t.logining=!1,s.default.done(),console.log(e);var o=e.msg,r=e.code,n=e.user;console.log(r),200!==r&&201!==r?t.$notify({title:"错误",message:o,type:"error"}):(sessionStorage.setItem("user",(0,a.default)(n)),t.$router.push({path:"/welcome"}))})})}}}},212:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{name:"zds"}},methods:{handleSuccess:function(e,t,o){console.log("success"),this.$notify({title:"上传成功",message:"上传成功",type:"success"})},handleError:function(e,t,o){this.$notify({title:"上传失败",message:"上传失败",type:"error"})}}}},213:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=o(216);t.default={data:function(){return{filters:{voc_code:"",voc_no:"",voc_date:""},invoices:[]}},methods:{getVoc:function(){this.$msgbox({title:"警告",message:"Demo输入的条件将被忽略!",type:"warning"}),this.invoices=r.Invoices},handleEdit:function(e){console.log(e.voc_no),this.$msgbox({title:"警告",message:"Demo里修改发票信息无意义!",type:"warning"})},handleDel:function(e){console.log(e.voc_no),this.$msgbox({title:"警告",message:"Demo里删除发票信息无意义!",type:"warning"})},formatFlag:function(e,t){return 0==e.check_flag?"未认证":"已认证"},formatCheckDate:function(e,t){return 0==e.check_flag?"":e.check_date},formatAmount:function(e,t){return e.amount},formatTaxAmount:function(e,t){return(e.amount-e.amount/1.06).toFixed(2)}}}},214:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(121),a=o(114),l=r(a);t.default={data:function(){return{filters:{page:1,bk_product:"",nulls:[]},options:[{value:"1",label:"应收科目"},{value:"2",label:"管理费科目"},{value:"3",label:"业绩报酬科目"},{value:"4",label:"弥补金科目"},{value:"5",label:"项目编号"}],editFormVisible:!1,editFormTtile:"编辑",editForm:{bk_product:"",productcnname:"",company:"",producttype:"",dincomecode:"",managerfeecode:"",profitcode:"",preparecode:"",mibucode:"",riskpersent:"",mibupersent:"",flag:"",productcode:""},btnEditText:"提 交",editLoading:!1,page_count:0,loading:!1,products:[]}},methods:{getPrd:function(){var e=this,t={page:0,bk_product:this.filters.bk_product,nulls:this.filters.nulls};this.loading=!0,l.default.start(),(0,n.getProducts)(t).then(function(t){e.products=t.data.products,e.page_count=t.data.page_count,e.loading=!1,l.default.done()})},handleEdit:function(e){var t=this;t.editFormVisible=!0,t.editForm.bk_product=e.bk_product,t.editForm.productcnname=e.productcnname,t.editForm.company=e.company,t.editForm.producttype=e.producttype,t.editForm.dincomecode=e.dincomecode,t.editForm.managerfeecode=e.managerfeecode,t.editForm.profitcode=e.profitcode,t.editForm.preparecode=e.preparecode,t.editForm.mibucode=e.mibucode,t.editForm.riskpersent=e.riskpersent,t.editForm.mibupersent=e.mibupersent,t.editForm.flag=e.flag,t.editForm.productcode=e.productcode,console.log("123")},beforeXlsxUpload:function(e){var t=".xlsx"===e.name.slice(-5);return t||this.$message({type:"error",message:"只能上传xlsx文件",duration:1500,showClose:!0}),t},handleXlsxScucess:function(){this.$message({type:"success",message:"上传成功",duration:1500,showClose:!0})},editSubmit:function(){var e=this;e.$refs.editForm.validate(function(t){t&&e.$confirm("确认修改吗？","提示",{}).then(function(){e.editLoading=!0,l.default.start(),e.btnEditText="提交中";var t={bk_product:e.editForm.bk_product,productcnname:e.editForm.productcnname,company:e.editForm.company,producttype:e.editForm.producttype,dincomecode:e.editForm.dincomecode,managerfeecode:e.editForm.managerfeecode,profitcode:e.editForm.profitcode,preparecode:e.editForm.preparecode,mibucode:e.editForm.mibucode,riskpersent:e.editForm.riskpersent,mibupersent:e.editForm.mibupersent,flag:e.editForm.flag,productcode:e.editForm.productcode};(0,n.editProduct)(t).then(function(t){e.editLoading=!1,l.default.done(),console.log(t);var o="S"==t.code?"success":"error",r="S"==t.code?"成功":"失败";e.btnEditText="提 交",e.$notify({title:r,message:t.msg,type:o}),e.editFormVisible=!1,e.getPrd()})})})}},mounted:function(){this.getPrd()}}},215:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(122),a=r(n),l=o(217);t.default={data:function(){return{type_options:[{label:"收入报表",value:0},{label:"凭证",value:1},{label:"手续费报表",value:2}],company_options:[{label:"广发基金",value:0},{label:"瑞元",value:1}],form:{month:"2017-01",report_type:"",company_type:0},report:[],dialogVisible:!1,dialogTitle:""}},methods:{chooseDate:function(e){console.log("month: "+e),this.form.month=e},onSearch:function(){var e=this.form.company_type,t=this.form.report_type,o=this.form.month;new Date(o);console.log(e,t,o);var r=[],n=[],i=[];""===e?r=l.company:r.push(l.company[e]),""===o?i=l.month:i.push(o),""===t?n=l.report_type:n.push(l.report_type[t]);var s=[],c=!0,d=!1,u=void 0;try{for(var m,p=(0,a.default)(r);!(c=(m=p.next()).done);c=!0){var f=m.value,v=!0,_=!1,h=void 0;try{for(var b,g=(0,a.default)(n);!(v=(b=g.next()).done);v=!0){var y=b.value,x=!0,F=!1,w=void 0;try{for(var k,P=(0,a.default)(i);!(x=(k=P.next()).done);x=!0){var C=k.value;s.push({month:C,company:f,type:y,name:f+"-"+C+"-"+y+".xlsx"})}}catch(e){F=!0,w=e}finally{try{!x&&P.return&&P.return()}finally{if(F)throw w}}}}catch(e){_=!0,h=e}finally{try{!v&&g.return&&g.return()}finally{if(_)throw h}}}}catch(e){d=!0,u=e}finally{try{!c&&p.return&&p.return()}finally{if(d)throw u}}this.report=s},onCreate:function(){console.log("create"),this.$msgbox({title:"警告",message:"Demo不提供生成报表功能!",type:"warning"})},handleDownload:function(e){console.log(e.name),this.$msgbox({title:"警告",message:"在Demo里你不能下载文件!",type:"warning"})},handleView:function(e){console.log(e.name),this.dialogVisible=!0,this.dialogTitle=e.name}},mounted:function(){this.onSearch()}}},216:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Invoices=void 0;for(var n=o(461),a=r(n),l=[],i=0;i<10;i++)l.push({voc_code:40000001+i,voc_no:32880001+i,voc_date:"20170312",outputName:a.default.Random.cname(),amount:a.default.Random.float(100,1e4).toFixed(2),tax_amount:a.default.Random.float(100,1e4),check_flag:a.default.Random.integer(0,1),check_date:"20170312"});console.log(l),t.Invoices=l},217:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.month=t.report_type=t.company=void 0;var n=o(122),a=(r(n),["广发基金","瑞元"]),l=["收入报表","凭证","手续费报表","销售服务费报表"],i=["2017-01","2017-02","2017-03"];t.company=a,t.report_type=l,t.month=i},218:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=o(467),a=r(n),l=o(465),i=r(l),s=o(466),c=r(s),d=o(470),u=r(d),m=o(468),p=(r(m),o(471)),f=r(p),v=o(469),_=r(v),h=[{path:"/login",component:a.default,name:"",hidden:!0},{path:"/404",component:i.default,name:"",hidden:!0},{path:"/",component:c.default,name:"基金编码",iconCls:"el-icon-star-off",leaf:!0,children:[{path:"/product",component:u.default,name:"基金编码管理"}]},{path:"/",component:c.default,name:"报表凭证",iconCls:"el-icon-star-off",leaf:!0,children:[{path:"/report",component:f.default,name:"报表凭证管理"}]},{path:"/",component:c.default,name:"进项发票",iconCls:"el-icon-star-off",leaf:!0,children:[{path:"/inputInvoice",component:_.default,name:"进项发票查询"}]},{path:"*",hidden:!0,redirect:{path:"/404"}}];t.default=h},219:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.increment=function(e){var t=e.commit;t("INCREMENT")},t.decrement=function(e){var t=e.commit;t("DECREMENT")}},220:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.getCount=function(e){return e.count}},221:function(e,t,o){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t.default=e,t}function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=o(22),l=n(a),i=o(169),s=n(i),c=o(219),d=r(c),u=o(220),m=r(u);l.default.use(s.default);var p={count:10},f={INCREMENT:function(e){e.count++},DECREMENT:function(e){e.count--}};t.default=new s.default.Store({strict:!0,actions:d,getters:m,state:p,mutations:f})},453:function(e,t){},454:function(e,t){},455:function(e,t){},456:function(e,t){},457:function(e,t){},458:function(e,t){},459:function(e,t){},460:function(e,t){},463:function(e,t,o){e.exports=o.p+"static/img/gfjj_logo2.737c4d1.png"},464:function(e,t,o){o(459);var r=o(36)(o(209),o(478),null,null);e.exports=r.exports},465:function(e,t,o){var r=o(36)(null,o(473),null,null);e.exports=r.exports},466:function(e,t,o){o(455);var r=o(36)(o(210),o(472),"data-v-0a184e3d",null);e.exports=r.exports},467:function(e,t,o){o(457);var r=o(36)(o(211),o(476),"data-v-56d65ffb",null);e.exports=r.exports},468:function(e,t,o){o(458);var r=o(36)(o(212),o(477),null,null);e.exports=r.exports},469:function(e,t,o){var r=o(36)(o(213),o(474),null,null);e.exports=r.exports},470:function(e,t,o){o(456);var r=o(36)(o(214),o(475),null,null);e.exports=r.exports},471:function(e,t,o){o(460);var r=o(36)(o(215),o(479),"data-v-e3ea71ca",null);e.exports=r.exports},472:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",{staticClass:"panel"},[r("el-col",{staticClass:"panel-top",attrs:{span:24}},[r("el-col",{staticStyle:{"font-size":"26px"},attrs:{span:20}},[r("img",{staticClass:"logo",attrs:{src:o(463)}}),e._v(" "),r("span",[r("i",{staticStyle:{color:"palevioletred"}},[e._v("DEMO")])])]),e._v(" "),r("el-col",{staticClass:"rightbar",attrs:{span:4}},[r("el-dropdown",{attrs:{trigger:"click"}},[r("span",{staticClass:"el-dropdown-link",staticStyle:{color:"#c0ccda",cursor:"pointer"}},[r("img",{staticClass:"head",attrs:{src:"http://img1.imgtn.bdimg.com/it/u=2428798290,2425473743&fm=23&gp=0.jpg"}}),e._v("\n\t\t\t\t\t\t"+e._s(e.sysUserName))]),e._v(" "),r("el-dropdown-menu",{slot:"dropdown"},[r("el-dropdown-item",{nativeOn:{click:function(t){e.logout(t)}}},[e._v("退出登录")])],1)],1)],1)],1),e._v(" "),r("el-col",{staticClass:"panel-center",attrs:{span:24}},[r("aside",{attrs:{span:2}},[r("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.path,theme:"dark",router:""},on:{open:e.handleopen,close:e.handleclose,select:e.handleselect}},[e._l(e.$router.options.routes,function(t,o){return t.hidden?e._e():[t.leaf?e._e():r("el-submenu",{attrs:{index:o+""}},[r("template",{slot:"title"},[r("i",{class:t.iconCls}),e._v(e._s(t.name))]),e._v(" "),e._l(t.children,function(t){return t.hidden?e._e():r("el-menu-item",{attrs:{index:t.path}},[e._v(e._s(t.name)+"\n              ")])})],2),e._v(" "),t.leaf&&t.children.length>0?r("el-menu-item",{attrs:{index:t.children[0].path}},[r("i",{class:t.iconCls}),e._v(e._s(t.children[0].name)+"\n            ")]):e._e()]})],2)],1),e._v(" "),r("section",{staticClass:"panel-c-c"},[r("div",{staticClass:"grid-content bg-purple-light"},[r("el-col",{staticStyle:{"margin-bottom":"15px"},attrs:{span:24}},[r("strong",{staticStyle:{width:"200px",float:"left",color:"#475669"}},[e._v(e._s(e.$route.name))]),e._v(" "),r("el-breadcrumb",{staticStyle:{float:"right"},attrs:{separator:"/"}},e._l(e.$route.matched,function(t){return r("el-breadcrumb-item",[e._v("\n                "+e._s(t.name)+"\n              ")])}))],1),e._v(" "),r("el-col",{staticStyle:{"background-color":"#fff","box-sizing":"border-box"},attrs:{span:24}},[r("router-view")],1)],1)])])],1)},staticRenderFns:[]}},473:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",{staticStyle:{"font-size":"20px","text-align":"center",color:"rgb(192, 204, 218)"}},[e._v("404")])},staticRenderFns:[]}},474:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("el-form",{attrs:{inline:!0,model:e.filters,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"发票代码"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.filters.voc_code,expression:"filters.voc_code"}],domProps:{value:e.filters.voc_code},on:{input:function(t){e.filters.voc_code=t}}})],1),e._v(" "),o("el-form-item",{attrs:{label:"发票号码"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.filters.voc_no,expression:"filters.voc_no"}],domProps:{value:e.filters.voc_no},on:{input:function(t){e.filters.voc_no=t}}})],1),e._v(" "),o("el-form-item",{attrs:{label:"开票日期"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.filters.voc_date,expression:"filters.voc_date"}],domProps:{value:e.filters.voc_date},on:{input:function(t){e.filters.voc_date=t}}})],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary",icon:"search"},nativeOn:{click:function(t){e.getVoc(t)}}},[e._v("查询")])],1)],1),e._v(" "),[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.invoices,"highlight-current-row":""}},[o("el-table-column",{attrs:{type:"index",lable:"#",width:"60px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"voc_code",label:"发票代码"}}),e._v(" "),o("el-table-column",{attrs:{prop:"voc_no",label:"发票号码"}}),e._v(" "),o("el-table-column",{attrs:{prop:"voc_date",label:"发票日期"}}),e._v(" "),o("el-table-column",{attrs:{prop:"outputName",label:"销方名称"}}),e._v(" "),o("el-table-column",{attrs:{prop:"amount",formatter:e.formatAmount,label:"金额"}}),e._v(" "),o("el-table-column",{attrs:{prop:"tax_amount",formatter:e.formatTaxAmount,label:"税额"}}),e._v(" "),o("el-table-column",{attrs:{prop:"check_flag",formatter:e.formatFlag,label:"认证标志"}}),e._v(" "),o("el-table-column",{attrs:{prop:"check_date",formatter:e.formatCheckDate,label:"认证日期"}}),e._v(" "),o("el-table-column",{attrs:{context:e._self,label:"操作","min-width":"120px"},inlineTemplate:{render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",[o("el-button",{attrs:{size:"small"},nativeOn:{click:function(t){e.handleEdit(e.row)}}},[o("i",{staticClass:"el-icon-download"}),e._v("修改")]),e._v(" "),o("el-button",{attrs:{size:"small"},nativeOn:{click:function(t){e.handleDel(e.row)}}},[o("i",{staticClass:"el-icon-download"}),e._v("删除")])],1)},staticRenderFns:[]}})],1)]],2)},staticRenderFns:[]}},475:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("el-col",{staticClass:"searchbar",attrs:{span:24}},[o("el-form",{attrs:{inline:!0,model:e.filters}},[o("el-form-item",[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.filters.bk_product,expression:"filters.bk_product"}],attrs:{placeholder:"基金编码"},domProps:{value:e.filters.bk_product},on:{input:function(t){e.filters.bk_product=t}}})],1),e._v(" "),o("el-form-item",[o("el-select",{directives:[{name:"model",rawName:"v-model",value:e.filters.nulls,expression:"filters.nulls"}],attrs:{clearable:"",label:"空配置查询",placeholder:"空配置查询"},domProps:{value:e.filters.nulls},on:{input:function(t){e.filters.nulls=t}}},e._l(e.options,function(e){return o("el-option",{attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),o("el-form-item",[o("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.getPrd}},[e._v("查询")])],1)],1)],1),e._v(" "),o("el-col",{attrs:{span:24}},[o("el-form",{attrs:{inline:!0,"label-width":"100px"}},[o("el-form-item",{attrs:{label:"现基金配置"}},[o("el-button",{attrs:{type:"text"},nativeOn:{click:function(e){this.window.location.href="http://127.0.0.1:5000/gfjj/downTemplate"}}},[e._v("导  出")])],1),e._v(" "),o("el-form-item",{attrs:{label:"xlsx文件上传"}},[o("el-upload",{attrs:{action:"http://127.0.0.1:5000/gfjj/upload","before-upload":e.beforeXlsxUpload,"on-success":e.handleXlsxScucess}},[o("el-button",{attrs:{type:"text"}},[e._v("点击上传")])],1)],1)],1)],1),e._v(" "),[o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:e.products,"highlight-current-row":""}},[o("el-table-column",{attrs:{prop:"bk_product",label:"基金编码",width:"120px",fixed:""}}),e._v(" "),o("el-table-column",{attrs:{prop:"productcnname",label:"基金名称",width:"120px",fixed:""}}),e._v(" "),o("el-table-column",{attrs:{prop:"company",label:"所属公司",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"producttype",label:"境内外标志",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"dincomecode",label:"应收科目",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"managerfeecode",label:"管理费科目",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"profitcode",label:"业绩报酬科目",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"preparecode",label:"风金科目",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"mibucode",label:"弥补金科目",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"riskpersent",label:"风金比例",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"mibupersent",label:"弥补金比例",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"flag",label:"是否计算收入",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"productcode",label:"项目编号",width:"120px"}}),e._v(" "),o("el-table-column",{attrs:{context:e._self,label:"操作",width:"120px",fixed:"right"},inlineTemplate:{render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",[o("el-button",{attrs:{size:"small"},on:{click:function(t){e.handleEdit(e.row)}}},[o("i",{staticClass:"el-icon-edit"}),e._v("修改")])],1)},staticRenderFns:[]}})],1)],e._v(" "),o("el-col",{staticClass:"toolbar",staticStyle:{"padding-bottom":"10px"},attrs:{span:24}},[o("el-pagination",{staticStyle:{float:"right"},attrs:{layout:"prev, pager, next","page-size":20,total:e.page_count}})],1),e._v(" "),o("el-dialog",{directives:[{name:"model",rawName:"v-model",value:e.editFormVisible,expression:"editFormVisible"}],attrs:{title:e.editFormTtile,"close-on-click-modal":!1},domProps:{value:e.editFormVisible},on:{input:function(t){e.editFormVisible=t}}},[o("el-form",{ref:"editForm",attrs:{model:e.editForm,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"基金编码",prop:"id"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.editForm.bk_product,expression:"editForm.bk_product"}],attrs:{disabled:!0},domProps:{value:e.editForm.bk_product},on:{input:function(t){e.editForm.bk_product=t}}})],1),e._v(" "),o("el-form-item",{attrs:{label:"基金名称",prop:"productcnname"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.editForm.productcnname,expression:"editForm.productcnname"}],attrs:{disabled:!0},domProps:{value:e.editForm.productcnname},on:{input:function(t){e.editForm.productcnname=t}}})],1),e._v(" "),o("el-form-item",{attrs:{label:"所属公司",prop:"company"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.editForm.company,expression:"editForm.company"}],attrs:{disabled:!0},domProps:{value:e.editForm.company},on:{input:function(t){e.editForm.company=t}}})],1),e._v(" "),o("el-form-item",{attrs:{label:"境内外标志",prop:"producttype"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.editForm.producttype,expression:"editForm.producttype"}],attrs:{disabled:!0},domProps:{value:e.editForm.producttype},on:{input:function(t){e.editForm.producttype=t}}})],1),e._v(" "),o("el-form-item",{attrs:{label:"应收科目",prop:"dincomecode"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.editForm.dincomecode,expression:"editForm.dincomecode"}],domProps:{value:e.editForm.dincomecode},on:{input:function(t){e.editForm.dincomecode=t}}})],1),e._v(" "),o("el-form-item",{attrs:{label:"管理费科目",prop:"managerfeecode"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.editForm.managerfeecode,expression:"editForm.managerfeecode"}],domProps:{value:e.editForm.managerfeecode},on:{input:function(t){e.editForm.managerfeecode=t}}})],1),e._v(" "),o("el-form-item",{attrs:{label:"业绩报酬科目",prop:"profitcode"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.editForm.profitcode,expression:"editForm.profitcode"}],domProps:{value:e.editForm.profitcode},on:{input:function(t){e.editForm.profitcode=t}}})],1),e._v(" "),o("el-form-item",{attrs:{label:"风金科目",prop:"preparecode"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.editForm.preparecode,expression:"editForm.preparecode"}],domProps:{value:e.editForm.preparecode},on:{input:function(t){e.editForm.preparecode=t}}})],1),e._v(" "),o("el-form-item",{attrs:{label:"弥补金科目",prop:"mibucode"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.editForm.mibucode,expression:"editForm.mibucode"}],domProps:{value:e.editForm.mibucode},on:{input:function(t){e.editForm.mibucode=t}}})],1),e._v(" "),o("el-form-item",{attrs:{label:"风金比例",prop:"riskpersent"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.editForm.riskpersent,expression:"editForm.riskpersent"}],domProps:{value:e.editForm.riskpersent},on:{input:function(t){e.editForm.riskpersent=t}}})],1),e._v(" "),o("el-form-item",{attrs:{label:"弥补金比例",prop:"mibupersent"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.editForm.mibupersent,expression:"editForm.mibupersent"}],domProps:{value:e.editForm.mibupersent},on:{input:function(t){e.editForm.mibupersent=t}}})],1),e._v(" "),o("el-form-item",{attrs:{label:"是否计算收入",prop:"flag"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.editForm.flag,expression:"editForm.flag"}],domProps:{value:e.editForm.flag},on:{input:function(t){e.editForm.flag=t}}})],1),e._v(" "),o("el-form-item",{attrs:{label:"项目编号",prop:"productcode"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.editForm.productcode,expression:"editForm.productcode"}],domProps:{value:e.editForm.productcode},on:{input:function(t){e.editForm.productcode=t}}})],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",slot:"footer"},[o("el-button",{nativeOn:{click:function(t){e.editFormVisible=!1}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary",loading:e.editLoading},nativeOn:{click:function(t){e.editSubmit(t)}}},[e._v(e._s(e.btnEditText))])],1)],1)],2)},staticRenderFns:[]}},476:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("el-form",{ref:"ruleForm2",staticClass:"demo-ruleForm card-box loginform",attrs:{model:e.ruleForm2,rules:e.rules2,"label-position":"left","label-width":"0px"}},[o("h3",{staticClass:"title"},[e._v("系统登录")]),e._v(" "),o("el-form-item",{attrs:{prop:"account"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm2.account,expression:"ruleForm2.account"}],attrs:{type:"text","auto-complete":"off",placeholder:"账号"},domProps:{value:e.ruleForm2.account},on:{input:function(t){e.ruleForm2.account=t}}})],1),e._v(" "),o("el-form-item",{attrs:{prop:"checkPass"}},[o("el-input",{directives:[{name:"model",rawName:"v-model",value:e.ruleForm2.checkPass,expression:"ruleForm2.checkPass"}],attrs:{type:"password","auto-complete":"off",placeholder:"密码"},domProps:{value:e.ruleForm2.checkPass},on:{input:function(t){e.ruleForm2.checkPass=t}}})],1),e._v(" "),o("el-checkbox",{directives:[{name:"model",rawName:"v-model",value:e.checked,expression:"checked"}],staticStyle:{margin:"0px 0px 35px 0px"},attrs:{checked:""},domProps:{value:e.checked},on:{input:function(t){e.checked=t}}},[e._v("记住密码")]),e._v(" "),o("el-form-item",{staticStyle:{width:"100%"}},[o("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary",loading:e.logining},nativeOn:{click:function(t){t.preventDefault(),e.handleSubmit2(t)}}},[e._v("登录")])],1)],1)},staticRenderFns:[]}},477:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{attrs:{id:"tmplDown"}},[o("el-row",[o("el-col",{attrs:{span:6}},[o("h3",[e._v("下载模块,编辑导入")])])],1),e._v(" "),o("el-row",[o("el-col",{attrs:{span:6}},[o("span",[e._v("点击下载模块文件")])]),e._v(" "),o("el-col",{attrs:{span:10}},[o("el-button",{attrs:{type:"primary"},nativeOn:{click:function(e){this.window.location.href="http://0.0.0.0:5000/gfjj/downTemplate"}}},[e._v("下载"),o("i",{staticClass:"el-icon-download el-icon--right"})])],1)],1),e._v(" "),o("el-row",[o("el-button",{attrs:{type:"primary"}},[o("el-upload",{staticClass:"upload",attrs:{action:"http://10.0.0.0:5000/gfjj/upload","on-success":e.handleSuccess,"on-error":e.handleError}},[o("div",{staticClass:"el-upload__text"},[o("em",[e._v("点击上传")])]),e._v(" "),o("div",{staticClass:"el-upload__tip",slot:"tip"},[e._v("只能上传xlsx文件")])])],1)],1)],1)},staticRenderFns:[]}},478:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("router-view")],1)},staticRenderFns:[]}},479:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",[o("el-form",{attrs:{inline:!0,model:e.form,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"月份"}},[o("el-date-picker",{directives:[{name:"model",rawName:"v-model",value:e.form.month,expression:"form.month"}],staticStyle:{width:"120px"},attrs:{type:"month",format:"yyyy-MM",placeholder:"请选择月份"},domProps:{value:e.form.month},on:{change:e.chooseDate,input:function(t){e.form.month=t}}})],1),e._v(" "),o("el-form-item",{attrs:{label:"报表类型"}},[o("el-select",{directives:[{name:"model",rawName:"v-model",value:e.form.report_type,expression:"form.report_type"}],staticStyle:{width:"150px"},attrs:{clearable:"",placeholder:"请选择报表类型"},domProps:{value:e.form.report_type},on:{input:function(t){e.form.report_type=t}}},e._l(e.type_options,function(e){return o("el-option",{attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),o("el-form-item",{attrs:{label:"公司"}},[o("el-select",{directives:[{name:"model",rawName:"v-model",value:e.form.company_type,expression:"form.company_type"}],staticStyle:{width:"120px"},attrs:{clearable:"",placeholder:"请选择公司"},domProps:{value:e.form.company_type},on:{input:function(t){e.form.company_type=t}}},e._l(e.company_options,function(e){return o("el-option",{attrs:{label:e.label,value:e.value}})}))],1)],1),e._v(" "),o("el-form",{attrs:{inline:!0}},[o("el-form-item",{attrs:{"label-width":"80px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary"},nativeOn:{click:function(t){e.onSearch(t)}}},[e._v("查询")])],1),e._v(" "),o("el-form-item",{attrs:{"label-width":"10px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary"},nativeOn:{click:function(t){e.onCreate(t)}}},[e._v("生成")])],1)],1),e._v(" "),[o("el-table",{staticStyle:{width:"100%"},attrs:{data:e.report,"highlight-current-row":""}},[o("el-table-column",{attrs:{type:"index",lable:"#",width:"60px"}}),e._v(" "),o("el-table-column",{attrs:{prop:"month",label:"月份"}}),e._v(" "),o("el-table-column",{attrs:{prop:"company",label:"公司"}}),e._v(" "),o("el-table-column",{attrs:{prop:"type",label:"报表类型"}}),e._v(" "),o("el-table-column",{attrs:{prop:"name",label:"文件名"}}),e._v(" "),o("el-table-column",{attrs:{context:e._self,label:"操作"},inlineTemplate:{render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("span",[o("el-button",{attrs:{size:"small"},nativeOn:{click:function(t){e.handleDownload(e.row)}}},[o("i",{staticClass:"el-icon-download"}),e._v("下载")]),e._v(" "),o("el-button",{attrs:{size:"small"},nativeOn:{click:function(t){e.handleView(e.row)}}},[o("i",{staticClass:"el-icon-download"}),e._v("预览")])],1)},staticRenderFns:[]}})],1)],e._v(" "),o("el-dialog",{directives:[{name:"model",rawName:"v-model",value:e.dialogVisible,expression:"dialogVisible"}],attrs:{title:e.dialogTitle},domProps:{value:e.dialogVisible},on:{input:function(t){e.dialogVisible=t}}},[o("span",[e._v("在正式项目中,你可以预览此文件")]),e._v(" "),o("span",{staticClass:"dialog-footer",slot:"footer"},[o("el-button",{attrs:{type:"primary"},nativeOn:{click:function(t){e.dialogVisible=!1}}},[e._v("确 定")])],1)])],2)},staticRenderFns:[]}}});
//# sourceMappingURL=app.fcef99dd48e183ec93a2.js.map