<template>
  <el-row class="panel">
    <el-col :span="24" class="panel-top">
      <el-col :span="20" style="font-size:26px;">
        <img src="../assets/gfjj_logo2.png" class="logo"> <span><i style="color:palevioletred">DEMO</i>
</span>
      </el-col>
      <el-col :span="4" class="rightbar">
        <el-dropdown trigger="click">
					<span class="el-dropdown-link" style="color:#c0ccda;cursor: pointer;">
						<img src="http://img1.imgtn.bdimg.com/it/u=2428798290,2425473743&fm=23&gp=0.jpg" class="head">
						{{sysUserName}}</span>
          <!--<span class="el-dropdown-link userinfo-inner"><img :src="this.sysUserAvatar"/> {{sysUserName}}</span>-->
          <el-dropdown-menu slot="dropdown">
            <!--<el-dropdown-item>我的消息</el-dropdown-item>-->
            <!--<el-dropdown-item>设置</el-dropdown-item>-->
            <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-col>
    <el-col :span="24" class="panel-center">
      <!--<el-col :span="4">-->
      <aside :span="2">
        <!--el-menu 去掉unique-opened-->
        <el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose"
                 @select="handleselect"
                 theme="dark" router>
          <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden">
            <el-submenu :index="index+''" v-if="!item.leaf">
              <template slot="title"><i :class="item.iconCls"></i>{{item.name}}</template>
              <el-menu-item v-for="child in item.children" :index="child.path" v-if="!child.hidden">{{child.name}}
              </el-menu-item>
            </el-submenu>
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path"><i
                :class="item.iconCls"></i>{{item.children[0].name}}
            </el-menu-item>
          </template>
        </el-menu>
      </aside>
      <!--</el-col>-->
      <!--<el-col :span="20" class="panel-c-c">-->
      <section class="panel-c-c">
        <div class="grid-content bg-purple-light">
          <el-col :span="24" style="margin-bottom:15px;">
            <strong style="width:200px;float:left;color: #475669;">{{$route.name}}</strong>
            <el-breadcrumb separator="/" style="float:right;">
              <el-breadcrumb-item v-for="item in $route.matched">
                {{ item.name }}
              </el-breadcrumb-item>
            </el-breadcrumb>
          </el-col>
          <el-col :span="24" style="background-color:#fff;box-sizing: border-box;">
            <!--<transition name="fade">-->
            <router-view></router-view>
            <!--</transition>-->
          </el-col>
        </div>
      </section>
      <!--</el-col>-->
    </el-col>
  </el-row>
</template>

<script>
	export default {
		data() {
			return {
				sysUserName: 'my',
				sysUserAvatar: 'https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png',
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				}
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					sessionStorage.removeItem('user');
					_this.$router.push('/login');
				}).catch(() => {

				});


			}
		},
		mounted() {
			var user = sessionStorage.getItem('user');
			if (user) {
				user = JSON.parse(user);
				this.sysUserName = user.name || '';
				this.sysUserAvatar = user.avatar || '';
			}
		}
	}


</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  .panel {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
  }

  .panel-top {
    height: 60px;
    line-height: 60px;
    background: #1F2D3D;
    /*background: #1D8CE0;*/
    color: #c0ccda;
  }

  .panel-top .rightbar {
    text-align: right;
    padding-right: 35px;
  }

  .panel-top .rightbar .head {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin: 10px 0px 10px 10px;
    float: right;
  }

  .panel-center {
    background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
  }

  .panel-c-c {
    background: #f1f2f7;
    position: absolute;
    right: 0px;
    top: 0px;
    bottom: 0px;
    left: 200px;
    overflow-y: scroll;
    padding: 30px;
  }

  .logout {
    background: url(../assets/logout_36.png);
    background-size: contain;
    width: 20px;
    height: 20px;
    float: left;
  }
  .logo {
    width: 40px;
    float: left;
    margin: 10px 10px 10px 18px;
  }

  .tip-logout {
    float: right;
    margin-right: 20px;
    padding-top: 5px;
  }

  .tip-logout i {
    cursor: pointer;
  }

  .admin {
    color: #c0ccda;
    text-align: center;
  }
</style>