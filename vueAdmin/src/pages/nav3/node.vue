<template>
	<section>
		<!--搜索框-->
		<el-col :span="24" class="toolbar">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.nodeName" placeholder="节点名称"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getNode">查询</el-button>
				</el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">新增</el-button>
                </el-form-item>
			</el-form>
		</el-col>
		<!--列表-->
		<template>
			<el-table :data="node" highlight-current-row v-loading="loading" style="width: 100%;">
				<el-table-column type="index" label="序号" :span="1">

				</el-table-column>
				<el-table-column prop="nodeId" label="节点编号" :span="1">

				</el-table-column>
				<el-table-column prop="nodeName" label="节点名称" :span="4">

				</el-table-column>
				<el-table-column prop="nodeIP" label="节点IP" :span="4">

				</el-table-column>
				<el-table-column prop="nodePORT" label="节点端口" :span="2">

				</el-table-column>
				<el-table-column prop="nodeType" label="节点类型" :span="2">

				</el-table-column>
                <el-table-column prop="nodeStat" label="节点状态" :span="2">

                </el-table-column>
				<el-table-column inline-template :context="_self" label="操作" min-width="120">
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
                <el-form-item label="节点编号" prop="nodeId">
                    <el-input v-model="editForm.nodeId" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="节点名称" prop="nodeName">
                    <el-input v-model="editForm.nodeName" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="节点IP" prop="nodeIP">
                    <el-input v-model="editForm.nodeIP" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="节点端口" prop="nodePORT">
                    <el-input v-model="editForm.nodePORT" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="节点类型" prop="nodeType">
                    <el-input v-model="editForm.nodeType" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="节点状态" prop="nodeStat">
                    <el-input v-model="editForm.nodeStat" auto-complete="off"></el-input>
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
import { getNodeList, removeUser, editUser, addUser } from '../../api/api'

import NProgress from 'nprogress'

export default {
	data() {
	return {
            filters: {
                nodeName: ''
            },
            loading: false,
            node: [
            ],
            editFormVisible: false,//编辑界面显是否显示
			editFormTtile: '编辑',//编辑界面标题
			//编辑界面数据
            editForm: {
                nodeId: '',
                nodeName: '',
                nodeIP: '',
                nodePORT: '',
                nodeType: '',
                nodeStat: ''
            },
            editLoading: false,
            btnEditText: '提 交',
            editFormRules: {
					nodeId: [
						{ required: true, message: '请输入节点编号', trigger: 'blur' }
					]
			}
        }
    },
    methods: {
        getNode: function() {
            let para = {
                page: 0,
                nodeName: this.filters.nodeName
            };
            this.loading = true;
            NProgress.start();
            getNodeList(para).then((res) => {
					this.node = res.data.node;
					this.loading = false;
					NProgress.done();
					console.log(res.data.node);
				});
        },
        //删除
        handleDel: function (row) {
            //console.log(row);
            var _this = this;
            this.$confirm('确认删除该节点吗?', '提示', {
                //type: 'warning'
            }).then(() => {
                _this.listLoading = true;
                NProgress.start();
                let para = { nodeId: row.nodeId };
                removeUser(para).then((res) => {
                    _this.listLoading = false;
                    NProgress.done();
                    _this.$notify({
                        title: '成功',
                        message: '删除成功',
                        type: 'success'
                    });
                    _this.getNodeList();
                });

            }).catch(() => {

            });
        },
        //显示编辑界面
        handleEdit: function (row) {
            this.editFormVisible = true;
            this.editFormTtile = '编辑';
            this.editForm.nodeId = row.nodeId;
            this.editForm.nodeName = row.nodeName;
            this.editForm.nodeIP = row.nodeIP;
            this.editForm.nodePORT = row.nodePORT;
            this.editForm.nodeType = row.nodeType;
            this.editForm.nodeStat = row.nodeStat;
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

                        if (_this.editForm.nodeId === '') {
                            //新增
                            let para = {
                                nodeId: _this.editForm.nodeId,
                                nodeName: _this.editForm.nodeName,
                                nodeIP: _this.editForm.nodeIP,
                                nodePORT: _this.editForm.nodePORT,
                                nodeType: _this.editForm.nodeType,
                                nodeStat: _this.editForm.nodeStat,
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
                                _this.getNodeList();
                            });
                        } else {
                            //编辑
                            let para = {
                                nodeId: _this.editForm.nodeId,
                                nodeName: _this.editForm.nodeName,
                                nodeIP: _this.editForm.nodeIP,
                                nodePORT: _this.editForm.nodePORT,
                                nodeType: _this.editForm.nodeType,
                                nodeStat: _this.editForm.nodeStat,
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
                                _this.getNodeList();
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

            this.editForm.nodeId = '';
            this.editForm.nodeName = '';
            this.editForm.nodeIP = '';
            this.editForm.nodePORT = '';
            this.editForm.nodeType = '';
            this.editForm.nodeStat = '';
        },

    },
}
</script>