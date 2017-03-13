<template>
  <section>
    <el-form :inline="true" :model="form" label-width="80px">
      <el-form-item label="月份">
        <el-date-picker
            style="width: 120px"
            v-model="form.month"
            @change="chooseDate"
            type="month"
            format="yyyy-MM"
            placeholder="请选择月份">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="报表类型">
        <el-select style="width: 150px" clearable v-model="form.report_type" placeholder="请选择报表类型">
          <el-option
              v-for="item in type_options"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="公司">
        <el-select style="width: 120px" clearable v-model="form.company_type" placeholder="请选择公司">
          <el-option
              v-for="item in company_options"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      </el-form-item>
    </el-form>
    <el-form :inline="true">
      <el-form-item label-width="80px">
        <el-button style="width: 120px" type="primary" @click.native="onSearch">查询</el-button>
      </el-form-item>
      <el-form-item label-width="10px">
        <el-button style="width: 120px" type="primary" @click.native="onCreate">生成</el-button>
      </el-form-item>
    </el-form>
    <template>
      <el-table :data="report" highlight-current-row style="width: 100%;">
        <el-table-column
            type="index"
            lable="#"
            width="60px">
        </el-table-column>
        <el-table-column prop="month" label="月份">
        </el-table-column>
        <el-table-column prop="company" label="公司">
        </el-table-column>
        <el-table-column prop="type" label="报表类型">
        </el-table-column>
        <el-table-column prop="name" label="文件名">
        </el-table-column>
        <el-table-column inline-template :context="_self" label="操作">
					<span>
						<el-button size="small" @click.native="handleDownload(row)"><i class="el-icon-download"></i>下载</el-button>
            <el-button size="small" @click.native="handleView(row)"><i class="el-icon-download"></i>预览</el-button>
					</span>
        </el-table-column>
      </el-table>
    </template>

    <el-dialog v-bind:title="dialogTitle" v-model="dialogVisible">
      <span>在正式项目中,你可以预览此文件</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click.native="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </section>
</template>

<script type="text/ecmascript-6">
  import { company, report_type, month } from '../../mockdata/report';
  export default {
    data() {
      return {
        type_options: [
          {label: '收入报表', value: 0},
          {label: '凭证', value: 1},
          {label: '手续费报表', value: 2}
        ],
        company_options: [
          {label: '广发基金', value: 0},
          {label: '瑞元', value: 1}
        ],
        form: {
          month: '2017-01',
          report_type: '',
          company_type: 0
        },
        report: [],
        dialogVisible: false,
        dialogTitle: ''
      };
    },
    methods: {
      chooseDate: function(val) {
        console.log('month: ' + val);
        this.form.month = val;
      },
      onSearch: function () {
        let c = this.form.company_type;
        let t = this.form.report_type;
        let m = this.form.month;
        let date = new Date(m);
        console.log(c, t, m);
        var css = [];
        var tss = [];
        var mss = [];
        if (c === '') {
          css = company;
        } else {
          css.push(company[c]);
        }
        if (m === '') {
          mss = month;
        } else {
          mss.push(m)
        }
        if (t === '') {
          tss = report_type;
        } else {
          tss.push(report_type[t])
        }
        const Reports = [];
        for (var cs of css) {
          for (var ts of tss) {
            for (var ms of mss) {
              Reports.push({
                month: ms,
                company: cs,
                type: ts,
                name: cs + '-' + ms + '-' + ts +'.xlsx'
              });
            }
          }
        };
        // console.log(Reports);
        this.report = Reports;
      },
      onCreate: function() {
        console.log('create');
        // alert('Demo不提供生成报表功能!');
        this.$msgbox({
          title: '警告',
          message: 'Demo不提供生成报表功能!',
          type: 'warning'
        });
      },
      handleDownload: function(row) {
        console.log(row.name);
        this.$msgbox({
          title: '警告',
          message: '在Demo里你不能下载文件!',
          type: 'warning'
        });
      },
      handleView: function(row) {
        console.log(row.name);
        this.dialogVisible = true;
        this.dialogTitle = row.name;
      }
    },
    mounted() {
      this.onSearch();
    }
  };











</script>
<style scoped>
</style>