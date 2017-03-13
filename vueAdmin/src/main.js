import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import 'normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import NProgress from 'nprogress'//页面顶部进度条
import 'nprogress/nprogress.css'
import routes from './routes'

// 测试api
//import Mock from './mock';
//Mock.bootstrap();

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)

NProgress.configure({ showSpinner: false });

const router = new VueRouter({
  mode: 'history',
  routes
})

// 跳转到登录页面 先注释掉
//router.beforeEach((to, from, next) => {
//  //NProgress.start();
//  if (to.path == '/login') {
//    sessionStorage.removeItem('user');
//  }
//  let user = JSON.parse(sessionStorage.getItem('user'));
//  if (!user && to.path != '/login') {
//    next({ path: '/login' })
//  } else {
//    next()
//  }
//})
//router.beforeEach((to, from, next) => {
//  if (to.path == '/') {
//    next({ path: '/product' })
//  }
//})

router.afterEach(function (to) {
  if (to.name) {
      document.title = to.name;
  }
});

//router.afterEach(transition => {
//NProgress.done();
//});

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  store,
  components: { App }
  //render: h => h(Login)
}).$mount('#app')

//router.replace('/login')

