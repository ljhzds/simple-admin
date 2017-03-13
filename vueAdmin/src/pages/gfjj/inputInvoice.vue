<template>
  <section>
    <el-form :inline="true" :model="filters" label-width="80px">
      <el-form-item label="发票代码">
        <el-input v-model="filters.voc_code"></el-input>
      </el-form-item>
      <el-form-item label="发票号码">
        <el-input v-model="filters.voc_no">
        </el-input>
      </el-form-item>
      <el-form-item label="开票日期">
        <el-input v-model="filters.voc_date">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="search" @click.native="getVoc">查询</el-button>
      </el-form-item>
    </el-form>
    <template>
      <el-table :data="invoices" highlight-current-row style="width: 100%;">
        <el-table-column
            type="index"
            lable="#"
            width="60px">
        </el-table-column>
        <el-table-column prop="voc_code" label="发票代码">
        </el-table-column>
        <el-table-column prop="voc_no" label="发票号码">
        </el-table-column>
        <el-table-column prop="voc_date" label="发票日期">
        </el-table-column>
        <el-table-column prop="outputName" label="销方名称">
        </el-table-column>
        <el-table-column prop="amount" :formatter="formatAmount" label="金额">
        </el-table-column>
        <el-table-column prop="tax_amount" :formatter="formatTaxAmount" label="税额">
        </el-table-column>
        <el-table-column prop="check_flag" :formatter="formatFlag" label="认证标志">
        </el-table-column>
        <el-table-column prop="check_date" :formatter="formatCheckDate" label="认证日期">
        </el-table-column>
        <el-table-column inline-template :context="_self" label="操作" min-width="120px">
					<span>
						<el-button size="small" @click.native="handleEdit(row)"><i class="el-icon-download"></i>修改</el-button>
            <el-button size="small" @click.native="handleDel(row)"><i class="el-icon-download"></i>删除</el-button>
					</span>
        </el-table-column>
      </el-table>
    </template>
  </section>
</template>
<script>
  import { Invoices } from '../../mockdata/invoices';
  export default {
    data() {
      return {
        filters: {
          voc_code: '',
          voc_no: '',
          voc_date: ''
        },
        invoices: []
      }
    },
    methods: {
      getVoc: function() {
        this.$msgbox({
          title: '警告',
          message: 'Demo输入的条件将被忽略!',
          type: 'warning'
        });
        this.invoices = Invoices;
      },
      handleEdit: function(row) {
        console.log(row.voc_no);
        this.$msgbox({
          title: '警告',
          message: 'Demo里修改发票信息无意义!',
          type: 'warning'
        });
      },
      handleDel: function(row) {
        console.log(row.voc_no);
        this.$msgbox({
          title: '警告',
          message: 'Demo里删除发票信息无意义!',
          type: 'warning'
        });
      },
      formatFlag: function (row, column) {
				return row.check_flag == 0 ? '未认证' : '已认证';
			},
			formatCheckDate: function (row, column) {
				return row.check_flag == 0 ? '' : row.check_date;
			},
			formatAmount: function (row, column) {
        return row.amount;
			},
			formatTaxAmount: function(row, column) {
			  return (row.amount-row.amount/1.06).toFixed(2);
			}

    }
  }
</script>