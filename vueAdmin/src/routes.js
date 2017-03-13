import Login from './pages/Login.vue'
import NotFound from './pages/404.vue'
import Home from './pages/Home.vue'
import Welcome from './pages/welcome.vue'
import prdManage from './pages/gfjj/prdManage.vue'
import impProduct from './pages/gfjj/impProduct.vue'
import reportManage from './pages/gfjj/reportManage.vue'
import inputInvoice from './pages/gfjj/inputInvoice.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '基金编码',
        iconCls: 'el-icon-star-off',
        leaf: true,//只有一个节点
        children: [
            {
              path: '/product',
              component: prdManage,
              name: '基金编码管理'
            }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '报表凭证',
        iconCls: 'el-icon-star-off',
        leaf: true,//只有一个节点
        children: [
            {
              path: '/report',
              component: reportManage,
              name: '报表凭证管理'
            }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '进项发票',
        iconCls: 'el-icon-star-off',
        leaf: true,//只有一个节点
        children: [
            {
              path: '/inputInvoice',
              component: inputInvoice,
              name: '进项发票查询'
            }
        ]
    },
    {
      path: '/welcome',
      component: Welcome
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;