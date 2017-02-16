<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getUser">查询</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<template>
			<el-table :data="users" highlight-current-row v-loading="loading" style="width: 100%;">
				<el-table-column type="index" :span="2">
				</el-table-column>
				<el-table-column prop="id" label="ID" :span="4" sortable>
				</el-table-column>
				<el-table-column prop="name" label="姓名" :span="5" sortable>
				</el-table-column>
				<el-table-column prop="sex" label="性别" :span="2" :formatter="formatSex" sortable>
				</el-table-column>
				<el-table-column prop="branch" label="所属机构" :span="5" sortable>
				</el-table-column>
				<el-table-column prop="role" label="角色" :span="4" sortable>
				</el-table-column>
		</el-table>
		</template>
	</section>
</template>
<script>
	import { getUserList } from '../../api/api';
	import NProgress from 'nprogress'
	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				loading: false,
				users: [
				]
			}
		},
		methods: {
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			//获取用户列表
			getUser: function () {
				let para = {
				    page: 0,
					name: this.filters.name
				};
				this.loading = true;
				NProgress.start();
				getUserList(para).then((res) => {
					this.users = res.data.users;
					this.loading = false;
					NProgress.done();
					console.log(res.data.users);
					console.log(this.users);
				});
			}
		},
		// 是否直接载入
		// mounted() {
		//	this.getUser();
		// }
	};
</script>

<style scoped>
	
</style>