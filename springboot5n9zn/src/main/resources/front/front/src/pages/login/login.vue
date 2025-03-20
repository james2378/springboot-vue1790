<template>
<div>
	<div class="container" :style='{"minHeight":"100vh","width":"100%","alignItems":"flex-start","background":"url(http://codegen.caihongy.cn/20230128/effb535f5a6142daa256f40fb8542933.jpg) no-repeat center bottom / 100% 100%,#fff","justifyContent":"flex-start","display":"flex"}'>
		<el-form ref="loginForm" :model="loginForm" :style='{"padding":"60px 0 40px","boxShadow":"0 0px 0px rgba(64, 158, 255, .8)","margin":"60px 0 0 12%","borderRadius":"o","background":"rgba(255,255,255,1)","width":"44%","height":"100%"}' :rules="rules">
			<div v-if="false" :style='{"margin":"0 0 10px 0","color":"rgba(64, 158, 255, 1)","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"20px","textShadow":"4px 4px 2px rgba(64, 158, 255, .5)"}'>USER / LOGIN</div>
			<div v-if="true" :style='{"padding":"0 0 10px ","margin":"20px auto 40px","color":"#888","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230128/4cbad5a2e6f444188a2c08cb74dc8160.png) no-repeat center bottom","width":"80%","lineHeight":"50px","fontSize":"24px","fontWeight":"500"}'>基于java语言的考试信息报名系统登录</div>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"60%","margin":"0 auto 20px","position":"relative","flexWrap":"wrap","display":"flex"}' prop="username">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>账号：</div>
				<input :style='{"border":"2px solid #ddd","padding":"0 10px","color":"#333","borderRadius":"8px","flex":"1","background":"#fff","width":"100%","fontSize":"14px","height":"44px"}' v-model="loginForm.username" placeholder="请输入账户">
			</el-form-item>
			<el-form-item v-if="loginType==1" class="list-item" :style='{"width":"60%","margin":"0 auto 20px","position":"relative","flexWrap":"wrap","display":"flex"}' prop="password">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>密码：</div>
				<input :style='{"border":"2px solid #ddd","padding":"0 10px","color":"#333","borderRadius":"8px","flex":"1","background":"#fff","width":"100%","fontSize":"14px","height":"44px"}' v-model="loginForm.password" placeholder="请输入密码" type="password">
			</el-form-item>
			<el-form-item v-if="roles.length>1" class="list-type" :style='{"width":"50%","margin":"20px auto 10px"}' prop="role">
				<el-radio v-model="loginForm.tableName" :label="item.tableName" v-for="(item, index) in roles" :key="index" @change.native="getCurrentRow(item)">{{item.roleName}}</el-radio>
			</el-form-item>
			<el-form-item :style='{"padding":"10px 0 10px","margin":"0 auto","alignItems":"center","textAlign":"right","display":"flex","width":"60%","height":"auto"}'>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"10px 0","margin":"0 auto","outline":"none","color":"#288bbf","borderRadius":"0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)","width":"100%","fontSize":"24px","height":"auto","order":"20"}' @click="submitForm('loginForm')">登录</el-button>
				<el-button v-if="loginType==1" :style='{"border":"0","cursor":"pointer","padding":"0","margin":"0","outline":"none","color":"#666","borderRadius":"8px","background":"none","width":"100px","fontSize":"16px","height":"40px","order":"3"}' @click="resetForm('loginForm')">重置</el-button>
			</el-form-item>
			<div :style='{"width":"100%","margin":"20px 0 0 0","alignItems":"center","flexWrap":"wrap","justifyContent":"center","display":"flex"}'>
			<router-link :style='{"cursor":"pointer","border":"2px solid #ddd","padding":"0 10px","margin":"0 10px 0 0","color":"#288bbf","borderRadius":"8px","textAlign":"center","background":"#eee","fontSize":"16px","textDecoration":"none","minWidth":"100px","lineHeight":"40px"}' :to="{path: '/register', query: {role: item.tableName,pageFlag:'register'}}" v-if="item.hasFrontRegister=='是'" v-for="(item, index) in roles" :key="index">注册{{item.roleName.replace('注册','')}}</router-link>
			</div>
		</el-form>
    </div>
</div>
</template>

<script>

export default {
	//数据集合
	data() {
		return {
            baseUrl: this.$config.baseUrl,
            loginType: 1,
			roleMenus: [{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-copy","buttons":["新增","查看","修改","删除"],"menu":"学生","menuJump":"列表","tableName":"xuesheng"}],"menu":"学生管理"},{"child":[{"appFrontIcon":"cuIcon-keyboard","buttons":["新增","查看","修改","删除"],"menu":"教师","menuJump":"列表","tableName":"jiaoshi"}],"menu":"教师管理"},{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["新增","查看","修改","删除","审核","准考证"],"menu":"考试报名","menuJump":"列表","tableName":"kaoshibaoming"}],"menu":"考试报名管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["新增","查看","修改","删除"],"menu":"考试信息","menuJump":"列表","tableName":"kaoshixinxi"}],"menu":"考试信息管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["新增","查看","修改","删除","考试成绩"],"menu":"准考证","menuJump":"列表","tableName":"zhunkaozheng"}],"menu":"准考证管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["新增","查看","修改","删除"],"menu":"考试成绩","menuJump":"列表","tableName":"kaoshichengji"}],"menu":"考试成绩管理"},{"child":[{"appFrontIcon":"cuIcon-vip","buttons":["新增","查看","修改","删除"],"menu":"新闻资讯","tableName":"news"},{"appFrontIcon":"cuIcon-flashlightopen","buttons":["查看","修改"],"menu":"关于我们","tableName":"aboutus"},{"appFrontIcon":"cuIcon-phone","buttons":["查看","修改"],"menu":"系统简介","tableName":"systemintro"},{"appFrontIcon":"cuIcon-goodsnew","buttons":["新增","查看","修改","删除"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","考试报名"],"menu":"考试信息列表","menuJump":"列表","tableName":"kaoshixinxi"}],"menu":"考试信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","支付"],"menu":"考试报名","menuJump":"列表","tableName":"kaoshibaoming"}],"menu":"考试报名管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看"],"menu":"准考证","menuJump":"列表","tableName":"zhunkaozheng"}],"menu":"准考证管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看"],"menu":"考试成绩","menuJump":"列表","tableName":"kaoshichengji"}],"menu":"考试成绩管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","考试报名"],"menu":"考试信息列表","menuJump":"列表","tableName":"kaoshixinxi"}],"menu":"考试信息模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"学生","tableName":"xuesheng"},{"backMenu":[{"child":[{"appFrontIcon":"cuIcon-camera","buttons":["查看","审核","准考证"],"menu":"考试报名","menuJump":"列表","tableName":"kaoshibaoming"}],"menu":"考试报名管理"},{"child":[{"appFrontIcon":"cuIcon-paint","buttons":["查看"],"menu":"考试信息","menuJump":"列表","tableName":"kaoshixinxi"}],"menu":"考试信息管理"},{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","考试成绩"],"menu":"准考证","menuJump":"列表","tableName":"zhunkaozheng"}],"menu":"准考证管理"},{"child":[{"appFrontIcon":"cuIcon-circle","buttons":["查看","修改","删除"],"menu":"考试成绩","menuJump":"列表","tableName":"kaoshichengji"}],"menu":"考试成绩管理"}],"frontMenu":[{"child":[{"appFrontIcon":"cuIcon-album","buttons":["查看","考试报名"],"menu":"考试信息列表","menuJump":"列表","tableName":"kaoshixinxi"}],"menu":"考试信息模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"教师","tableName":"jiaoshi"}],
			loginForm: {
				username: '',
				password: '',
				tableName: '',
				code: '',
			},
			role: '',
            roles: [],
			rules: {
				username: [
					{ required: true, message: '请输入账户', trigger: 'blur' }
				],
				password: [
					{ required: true, message: '请输入密码', trigger: 'blur' }
				]
			},
			codes: [{
				num: 1,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 2,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 3,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}, {
				num: 4,
				color: '#000',
				rotate: '10deg',
				size: '16px'
			}]
		}
	},
  components: {
  },
	created() {
        for(let item in this.roleMenus) {
            if(this.roleMenus[item].hasFrontLogin=='是') {
                this.roles.push(this.roleMenus[item]);
            }
        }
	},
	mounted() {
	},
    //方法集合
    methods: {
		randomString() {
			var len = 4;
			var chars = [
			  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
			  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
			  'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G',
			  'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
			  'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2',
			  '3', '4', '5', '6', '7', '8', '9'
			]
			var colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
			var sizes = ['14', '15', '16', '17', '18']
			
			var output = []
			for (var i = 0; i < len; i++) {
			  // 随机验证码
			  var key = Math.floor(Math.random() * chars.length)
			  this.codes[i].num = chars[key]
			  // 随机验证码颜色
			  var code = '#'
			  for (var j = 0; j < 6; j++) {
			    var key = Math.floor(Math.random() * colors.length)
			    code += colors[key]
			  }
			  this.codes[i].color = code
			  // 随机验证码方向
			  var rotate = Math.floor(Math.random() * 45)
			  var plus = Math.floor(Math.random() * 2)
			  if (plus == 1) rotate = '-' + rotate
			  this.codes[i].rotate = 'rotate(' + rotate + 'deg)'
			  // 随机验证码字体大小
			  var size = Math.floor(Math.random() * sizes.length)
			  this.codes[i].size = sizes[size] + 'px'
			}
		},
      getCurrentRow(row) {
        this.role = row.roleName;
      },
      submitForm(formName) {
        if (this.roles.length!=1) {
            if (!this.role) {
                this.$message.error("请选择登录用户类型");
                return false;
            }
        } else {
            this.role = this.roles[0].roleName;
            this.loginForm.tableName = this.roles[0].tableName;
        }
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.get(`${this.loginForm.tableName}/login`, {params: this.loginForm}).then(res => {
              if (res.data.code === 0) {
                localStorage.setItem('Token', res.data.token);
                localStorage.setItem('UserTableName', this.loginForm.tableName);
                localStorage.setItem('username', this.loginForm.username);
                localStorage.setItem('adminName', this.loginForm.username);
                localStorage.setItem('sessionTable', this.loginForm.tableName);
                localStorage.setItem('role', this.role);
                localStorage.setItem('keyPath', this.$config.indexNav.length+2);
                this.$router.push('/index/center');
                this.$message({
                  message: '登录成功',
                  type: 'success',
                  duration: 1500,
                });
              } else {
                this.$message.error(res.data.msg);
              }
            });
          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.container {
		position: relative;
		background: url(http://codegen.caihongy.cn/20230128/effb535f5a6142daa256f40fb8542933.jpg) no-repeat center bottom / 100% 100%,#fff;
		
		.el-form-item {
		  & /deep/ .el-form-item__content {
		    width: 100%;
		  }
		}
		
		.list-item /deep/ .el-input .el-input__inner {
			border: 2px solid #ddd;
			border-radius: 8px;
			padding: 0 10px;
			color: #333;
			flex: 1;
			background: #fff;
			width: 100%;
			font-size: 14px;
			height: 44px;
		}
		
		.list-code /deep/ .el-input .el-input__inner {
			border: 2px solid #ddd;
			border-radius: 8px;
			padding: 0 10px;
			outline: none;
			color: #333;
			background: #fff;
			display: inline-block;
			vertical-align: middle;
			width: calc(100% - 110px);
			font-size: 14px;
			height: 44px;
		}
		
		.list-type /deep/ .el-radio__input .el-radio__inner {
			background: rgba(53, 53, 53, 0);
			border-color: #999;
		}
		.list-type /deep/ .el-radio__input.is-checked .el-radio__inner {
			background: #288bbf;
			border-color: #288bbf;
		}
		.list-type /deep/ .el-radio__label {
			color: #999;
			font-size: 14px;
		}
		.list-type /deep/ .el-radio__input.is-checked+.el-radio__label {
			color: #288bbf;
			font-size: 14px;
		}
	}
</style>
