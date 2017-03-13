<template>
  <section>
    <el-col :span="24" class="searchbar">
      <el-form :inline="true" :model="filters">
        <el-form-item>
          <el-input v-model="filters.bk_product" placeholder="基金编码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select clearable v-model="filters.nulls" label="空配置查询" placeholder="空配置查询">
            <el-option
                v-for="item in options"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="search" v-on:click="getPrd">查询</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="24">
      <el-form :inline="true" label-width="100px">
        <el-form-item label="现基金配置">
          <el-button type="text" @click.native="this.window.location.href='http://127.0.0.1:5000/gfjj/downTemplate'">导  出</el-button>
        </el-form-item>
        <el-form-item label="xlsx文件上传">
          <!--<el-button type="text" v-on:click="getPrd">导  入</el-button>-->
          <el-upload
              action="http://127.0.0.1:5000/gfjj/upload"
              :before-upload="beforeXlsxUpload"
              :on-success="handleXlsxScucess">
            <el-button type="text">点击上传</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
    </el-col>
    <template>
      <el-table :data="products" highlight-current-row v-loading="loading" style="width: 100%;">
        <el-table-column prop="bk_product" label="基金编码" width="120px" fixed>
        </el-table-column>
        <el-table-column prop="productcnname" label="基金名称" width="120px" fixed>
        </el-table-column>
        <el-table-column prop="company" label="所属公司" width="120px">
        </el-table-column>
        <el-table-column prop="producttype" label="境内外标志" width="120px">
        </el-table-column>
        <el-table-column prop="dincomecode" label="应收科目" width="120px">
        </el-table-column>
        <el-table-column prop="managerfeecode" label="管理费科目" width="120px">
        </el-table-column>
        <el-table-column prop="profitcode" label="业绩报酬科目" width="120px">
        </el-table-column>
        <el-table-column prop="preparecode" label="风金科目" width="120px">
        </el-table-column>
        <el-table-column prop="mibucode" label="弥补金科目" width="120px">
        </el-table-column>
        <el-table-column prop="riskpersent" label="风金比例" width="120px">
        </el-table-column>
        <el-table-column prop="mibupersent" label="弥补金比例" width="120px">
        </el-table-column>
        <el-table-column prop="flag" label="是否计算收入" width="120px">
        </el-table-column>
        <el-table-column prop="productcode" label="项目编号" width="120px">
        </el-table-column>
        <el-table-column inline-template :context="_self" label="操作" width="120px" fixed="right">
					<span>
						<el-button size="small" @click="handleEdit(row)"><i class="el-icon-edit"></i>修改</el-button>
					</span>
        </el-table-column>
      </el-table>
    </template>
    <!--分页-->
    <el-col :span="24" class="toolbar" style="padding-bottom:10px;">
      <el-pagination layout="prev, pager, next" :page-size="20" :total="page_count" style="float:right;">
      </el-pagination>
      <!--<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="page_count" style="float:right;">-->
      <!--</el-pagination>-->
    </el-col>

    <!--编辑界面-->
    <el-dialog :title="editFormTtile" v-model="editFormVisible" :close-on-click-modal="false">
      <el-form :model="editForm" label-width="80px" ref="editForm">
        <el-form-item label="基金编码" prop="id">
          <el-input v-model="editForm.bk_product" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="基金名称" prop="productcnname">
          <el-input v-model="editForm.productcnname" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="所属公司" prop="company">
          <el-input v-model="editForm.company" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="境内外标志" prop="producttype">
          <el-input v-model="editForm.producttype" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="应收科目" prop="dincomecode">
          <el-input v-model="editForm.dincomecode"></el-input>
        </el-form-item>
        <el-form-item label="管理费科目" prop="managerfeecode">
          <el-input v-model="editForm.managerfeecode"></el-input>
        </el-form-item>
        <el-form-item label="业绩报酬科目" prop="profitcode">
          <el-input v-model="editForm.profitcode"></el-input>
        </el-form-item>
        <el-form-item label="风金科目" prop="preparecode">
          <el-input v-model="editForm.preparecode"></el-input>
        </el-form-item>
        <el-form-item label="弥补金科目" prop="mibucode">
          <el-input v-model="editForm.mibucode"></el-input>
        </el-form-item>
        <el-form-item label="风金比例" prop="riskpersent">
          <el-input v-model="editForm.riskpersent"></el-input>
        </el-form-item>
        <el-form-item label="弥补金比例" prop="mibupersent">
          <el-input v-model="editForm.mibupersent"></el-input>
        </el-form-item>
        <el-form-item label="是否计算收入" prop="flag">
          <el-input v-model="editForm.flag"></el-input>
        </el-form-item>
        <el-form-item label="项目编号" prop="productcode">
          <el-input v-model="editForm.productcode"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click.native="editFormVisible = false">取 消</el-button>
        <el-button type="primary" @click.native="editSubmit" :loading="editLoading">{{btnEditText}}</el-button>
      </div>
    </el-dialog>

  </section>
</template>

<script type="text/ecmascript-6">
  import { getProducts, editProduct } from '../../api/api';
	import NProgress from 'nprogress';
	export default {
	  data() {
	    return {
	      filters: {
	        page: 1,
	        bk_product: '',
	        nulls: []
	      },
	      options: [{
          value: '1',
          label: '应收科目'
        }, {
          value: '2',
          label: '管理费科目'
        }, {
          value: '3',
          label: '业绩报酬科目'
        }, {
          value: '4',
          label: '弥补金科目'
        }, {
          value: '5',
          label: '项目编号'
        }],
	      editFormVisible: false,
	      editFormTtile: '编辑',
	      //编辑界面数据
				editForm: {
					bk_product: '',
					productcnname: '',
					company: '',
					producttype: '',
					dincomecode: '',
					managerfeecode: '',
					profitcode: '',
					preparecode: '',
					mibucode: '',
					riskpersent: '',
					mibupersent: '',
					flag: '',
					productcode: ''
				},
				btnEditText: '提 交',
				editLoading: false,
	      page_count: 0,
	      loading: false,
	      products: []
	    }
	  },
	  methods: {
	    // 产品查询
	    getPrd: function() {
	      let para = {
	        page: 0,
	        bk_product: this.filters.bk_product,
	        nulls: this.filters.nulls,
	      };
	      this.loading = true;
	      NProgress.start();
	      getProducts(para).then((res) => {
	        this.products = res.data.products;
	        this.page_count = res.data.page_count;
	        this.loading = false;
	        NProgress.done();
	      });
	    },
	    handleEdit: function(row) {
	      var _this = this;
	      _this.editFormVisible = true;
	      _this.editForm.bk_product = row.bk_product;
	      _this.editForm.productcnname = row.productcnname;
	      _this.editForm.company = row.company;
        _this.editForm.producttype = row.producttype;
        _this.editForm.dincomecode = row.dincomecode;
        _this.editForm.managerfeecode = row.managerfeecode;
        _this.editForm.profitcode = row.profitcode;
        _this.editForm.preparecode = row.preparecode;
        _this.editForm.mibucode = row.mibucode;
        _this.editForm.riskpersent = row.riskpersent;
        _this.editForm.mibupersent = row.mibupersent;
        _this.editForm.flag = row.flag;
        _this.editForm.productcode = row.productcode;
	      console.log("123");
	    },
	    beforeXlsxUpload: function(file) {
	      const isXlsx = file.name.slice(-5) === '.xlsx';
	      if (!isXlsx) {
	        this.$message({
            type: 'error',
            message: '只能上传xlsx文件',
            duration: 1500,
            showClose: true
          });
	      }
	      return isXlsx;
	    },
      handleXlsxScucess: function() {
        this.$message({
          type: 'success',
          message: '上传成功',
          duration: 1500,
          showClose: true
        });
      },
	    //编辑
			editSubmit: function () {
				var _this = this;
				_this.$refs.editForm.validate((valid) => {
					if (valid) {
						_this.$confirm('确认修改吗？', '提示', {}).then(() => {
							_this.editLoading = true;
							NProgress.start();
							_this.btnEditText = '提交中';
              //编辑
              let para = {
                bk_product : _this.editForm.bk_product,
                productcnname : _this.editForm.productcnname,
                company : _this.editForm.company,
                producttype : _this.editForm.producttype,
                dincomecode : _this.editForm.dincomecode,
                managerfeecode : _this.editForm.managerfeecode,
                profitcode : _this.editForm.profitcode,
                preparecode : _this.editForm.preparecode,
                mibucode : _this.editForm.mibucode,
                riskpersent : _this.editForm.riskpersent,
                mibupersent : _this.editForm.mibupersent,
                flag : _this.editForm.flag,
                productcode : _this.editForm.productcode
              };
              editProduct(para).then((data) => {
                _this.editLoading = false;
                NProgress.done();
                console.log(data);
                let _type = data.code == 'S' ? 'success' : 'error';
                let _title = data.code == 'S' ? '成功' : '失败';
                _this.btnEditText = '提 交';
                _this.$notify({
                  title: _title,
                  message: data.msg,
                  type: _type
                });
                _this.editFormVisible = false;
                _this.getPrd();
							});
						});
			    }
			  });
			},
	  },
	  mounted() {
			this.getPrd();
		}
	}





</script>

<style>
  .el-upload__files {
    display: none;
  }

</style>