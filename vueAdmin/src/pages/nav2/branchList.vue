<template>
	<section>
		<!--搜索框-->
        <el-col :span="24" class="toolbar">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input v-model="filters.branchNo" placeholder="机构号"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" v-on:click="getBranch">查询</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <!--列表-->
        <template>
            <el-table :data="branchs" highlight-current-row v-loading="loading" style="width: 100%;">
                <el-table-column type="index" :span="2">

                </el-table-column>
                <el-table-column prop="branchNo" label="机构号" :span="4">

                </el-table-column>
                <el-table-column prop="branchName" label="机构名称" :span="4">

                </el-table-column>
                <el-table-column prop="preBranchNo" label="上级机构号" :span="4">

                </el-table-column>
                <el-table-column prop="branchType" label="机构类别" :span="4">

                </el-table-column>
            </el-table>
        </template>
	</section>
</template>

<script>
import { getBranchList } from '../../api/api'
import NProgress from 'nprogress'

export default {
	data() {
	return {
            filters: {
                branchNo: ''
            },
            loading: false,
            branchs: [
            ]
        }
    },
    methods: {
        getBranch: function() {
            let para = {
                page: 0,
                branchNo: this.filters.branchNo
            };
            this.loading = true;
            NProgress.start();
            getBranchList(para).then((res) => {
					this.branchs = res.data.branchs;
					this.loading = false;
					NProgress.done();
					console.log(res.data.branchs);
				});
        }
    },
}
</script>