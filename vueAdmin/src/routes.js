import Login from './pages/Login.vue'
import NotFound from './pages/404.vue'
import Home from './pages/Home.vue'
//import Main from './pages/Main.vue'
import userList from './pages/nav1/userList.vue'
import userManage from './pages/nav1/userManage.vue'
import branchList from './pages/nav2/branchList.vue'
import branchManage from './pages/nav2/branchManage.vue'
import node from './pages/nav3/node.vue'
import welcome from './pages/welcome.vue'
import echarts from './pages/charts/echarts.vue'

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
    { path: '/', component: Home, leaf: true, children: [{path: '/welcome', component: welcome, name: '欢迎'}], name: '首页' },
    {
        path: '/',
        component: Home,
        name: '用户',
        iconCls: 'fa fa-id-card',//图标样式class
        children: [
//            { path: '/main', component: Main, name: '主页', hidden: true },
//            { path: '/main', component: Main, name: '主页' },
            { path: '/userList', component: userList, name: '用户查询' },
            { path: '/userManage', component: userManage, name: '用户管理' },
//            { path: '/form', component: Form, name: 'Form' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '机构',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/branchList', component: branchList, name: '机构信息' },
            { path: '/branchManage', component: branchManage, name: '机构管理' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '',
        iconCls: 'fa fa-id-card',
        leaf: true,//只有一个节点
        children: [
            { path: '/node', component: node, name: '节点管理' }
        ]
    },
//    {
//        path: '/',
//        component: Home,
//        name: 'Charts',
//        iconCls: 'fa fa-bar-chart',
//        children: [
//            { path: '/echarts', component: echarts, name: 'echarts' }
//        ]
//    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;