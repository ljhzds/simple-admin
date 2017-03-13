import axios from 'axios';

let base = '';
let login_url = 'http://wbook.shuxiang.space/login';
let user_list = 'http://119.29.103.193:8081/user/list'
let branch_list = 'http://119.29.103.193:8081/branch/list'
let node_list = 'http://119.29.103.193:8081/node/list'
let product_list = 'http://wbook.shuxiang.space/gfjj/product'
let product_update = 'http://wbook.shuxiang.space/gfjj/product'

//console.log(login_url);
export const requestLogino = params => { return axios.post(`${base}/login`, params).then(res => res.data); };
export const requestLogin = params => { return axios.post(login_url, params).then(res => res.data); };

//export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };
export const getUserList = params => { return axios.get(user_list, { params: params }); };

export const getBranchList = params => { return axios.get(branch_list, {params: params}); };
export const getNodeList = params => { return axios.get(node_list, {params: params}); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };

export const getProducts = params => { return axios.get(product_list, { params: params }); };
export const editProduct = params => { return axios.post(product_update, params).then(res => res.data); };