<template>
  <section id="tmplDown">
    <el-row>
      <el-col :span="6">
        <h3>下载模块,编辑导入</h3>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <span>点击下载模块文件</span>
      </el-col>
      <el-col :span="10">
        <el-button @click.native="this.window.location.href='http://0.0.0.0:5000/gfjj/downTemplate'" type="primary">下载<i
            class="el-icon-download el-icon--right"></i></el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-button type="primary">
        <el-upload
            class="upload"
            action="http://10.0.0.0:5000/gfjj/upload"
            :on-success="handleSuccess"
            :on-error="handleError">
          <!--<i class="el-icon-upload"></i>-->
          <div class="el-upload__text"><em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传xlsx文件</div>
        </el-upload>
      </el-button>
    </el-row>
  </section>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        name: 'zds'
      }
    },
    methods: {
      handleSuccess: function(response, file, fileList) {
        console.log('success');
        this.$notify({
          title: '上传成功',
          message: '上传成功',
          type: 'success'
        })
      },
      handleError: function(err, file, fileList) {
        this.$notify({
          title: '上传失败',
          message: '上传失败',
          type: 'error'
        })
      }
    }
  }


</script>

<style>
  #tmplDown .el-row {
    padding: 10px;
  }

  #tmplDown h3 {
    color: #475669;
  }

  #tmplDown a {
    color: #30339f;
    padding: 20px;
  }

  .upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    width: 60px;
    height: 30px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .upload .el-icon-upload {
    font-size: 67px;
    color: #d9d9d9;
  }
</style>