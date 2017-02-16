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
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">新增</el-button>
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
				<el-table-column inline-template :context="_self" label="操作" :span="6">
					<span>
						<el-button size="small" @click="handleEdit(row)">编辑</el-button>
						<el-button type="danger" size="small" @click="handleDel(row)">删除</el-button>
					</span>
				</el-table-column>
			</el-table>
		</template>
        <!--编辑界面-->
        <el-dialog :title="editFormTtile" v-model="editFormVisible" :close-on-click-modal="false">
            <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
                <el-form-item label="机构号" prop="branchNo">
                <el-input v-model="editForm.branchNo" auto-complete="off"></el-input>
            </el-form-item>
                <el-form-item label="机构名称" prop="branchName">
                    <el-input v-model="editForm.branchName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="上级机构号" prop="branchNo">
                    <el-input v-model="editForm.preBranchNo" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="机构类别" prop="branchType">
                    <el-input v-model="editForm.branchType" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="editFormVisible = false">取 消</el-button>
                <el-button type="primary" @click.native="editSubmit" :loading="editLoading">{{btnEditText}}</el-button>
            </div>
        </el-dialog>
	</section>
</template>

<script>
import { getBranchList, removeUser, editUser, addUser } from '../../api/api'
import NProgress from 'nprogress'

export default {
	data() {
	    return {
            filters: {
                branchNo: ''
            },
            loading: false,
            branchs: [
            ],
            editFormVisible: false,//编辑界面显是否显示
			editFormTtile: '编辑',//编辑界面标题
			//编辑界面数据
            editForm: {
                branchNo: '',
                branchName: '',
                preBranchNo: '',
                branchType: ''
            },
            editLoading: false,
            btnEditText: '提 交',
            editFormRules: {
					branchNo: [
						{ required: true, message: '请输入机构号', trigger: 'blur' }
					]
			}
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
        },
        //删除
        handleDel: function (row) {
            //console.log(row);
            var _this = this;
            this.$confirm('确认删除该机构吗?', '提示', {
                //type: 'warning'
            }).then(() => {
                _this.listLoading = true;
                NProgress.start();
                let para = { branchNo: row.branchNo };
                removeUser(para).then((res) => {
                    _this.listLoading = false;
                    NProgress.done();
                    _this.$notify({
                        title: '成功',
                        message: '删除成功',
                        type: 'success'
                    });
                    _this.getBranchList();
                });

            }).catch(() => {

            });
        },
        //显示编辑界面
        handleEdit: function (row) {
            this.editFormVisible = true;
            this.editFormTtile = '编辑';
            this.editForm.branchNo = row.branchNo;
            this.editForm.branchName = row.branchName;
            this.editForm.preBranchNo = row.preBranchNo;
            this.editForm.branchType = row.branchType;
        },
        //编辑 or 新增
        editSubmit: function () {
            var _this = this;

            _this.$refs.editForm.validate((valid) => {
                if (valid) {

                    _this.$confirm('确认提交吗？', '提示', {}).then(() => {
                        _this.editLoading = true;
                        NProgress.start();
                        _this.btnEditText = '提交中';

                        if (_this.editForm.branchNo === '') {
                            //新增
                            let para = {
                                branchNo: _this.editForm.branchNo,
                                branchName: _this.editForm.branchName,
                                preBranchNo: _this.editForm.preBranchNo,
                                branchType: _this.editForm.branchType,
                            };
                            addUser(para).then((res) => {
                                _this.editLoading = false;
                                NProgress.done();
                                _this.btnEditText = '提 交';
                                _this.$notify({
                                    title: '成功',
                                    message: '提交成功',
                                    type: 'success'
                                });
                                _this.editFormVisible = false;
                                _this.getBranchList();
                            });
                        } else {
                            //编辑
                            let para = {
                                branchNo: _this.editForm.branchNo,
                                branchName: _this.editForm.branchName,
                                preBranchNo: _this.editForm.preBranchNo,
                                branchType: _this.editForm.branchType,
                            };
                            editUser(para).then((res) => {
                                _this.editLoading = false;
                                NProgress.done();
                                _this.btnEditText = '提 交';
                                _this.$notify({
                                    title: '成功',
                                    message: '提交成功',
                                    type: 'success'
                                });
                                _this.editFormVisible = false;
                                _this.getBranchList();
                            });

                        }

                    });

                }
            });

        },
        //显示新增界面
        handleAdd: function () {
            var _this = this;

            this.editFormVisible = true;
            this.editFormTtile = '新增';

            this.editForm.branchNo = '';
            this.editForm.branchName = '';
            this.editForm.preBranchNo = '';
            this.editForm.branchType = '';
        },

    },
}
</script>