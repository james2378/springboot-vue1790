<template>
	<div>

	<div class="container" :style='{"minHeight":"100vh","width":"100%","alignItems":"flex-start","background":"url(http://codegen.caihongy.cn/20230128/effb535f5a6142daa256f40fb8542933.jpg) no-repeat center bottom / 100% 100%,#fff","justifyContent":"flex-start","display":"flex"}'>
		<el-form class='rgs-form' v-if="pageFlag=='register'" :style='{"minHeight":"550px","padding":"20px 0 40px","boxShadow":"0 0px 0px rgba(64, 158, 255, .8)","margin":"20px 0 0 12%","borderRadius":"0","flexWrap":"wrap","background":"#fff","display":"flex","width":"44%","justifyContent":"center","height":"100%"}' ref="registerForm" :model="registerForm" :rules="rules">
			<div v-if="false" :style='{"margin":"0 0 10px 0","color":"rgba(64, 158, 255, 1)","textAlign":"center","width":"100%","lineHeight":"44px","fontSize":"20px","textShadow":"4px 4px 2px rgba(64, 158, 255, .5)"}'>USER / REGISTER</div>
			<div v-if="true" :style='{"padding":"0 0 10px","margin":"20px auto 40px","color":"#888","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230128/4cbad5a2e6f444188a2c08cb74dc8160.png) no-repeat center bottom","width":"700px","lineHeight":"50px","fontSize":"24px"}'>基于java语言的考试信息报名系统注册</p></div>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='xuesheng'" prop="xuehao">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>学号：</div>
				<el-input v-model="registerForm.xuehao"  placeholder="请输入学号" />
			</el-form-item>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='xuesheng'" prop="mima">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='xuesheng'" prop="mima">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='xuesheng'" prop="xueshengxingming">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>学生姓名：</div>
				<el-input v-model="registerForm.xueshengxingming"  placeholder="请输入学生姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='xuesheng'" prop="xingbie">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in xueshengxingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='xuesheng'" prop="shoujihaoma">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>手机号码：</div>
				<el-input v-model="registerForm.shoujihaoma"  placeholder="请输入手机号码" />
			</el-form-item>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='xuesheng'" prop="youxiang">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>邮箱：</div>
				<el-input v-model="registerForm.youxiang"  placeholder="请输入邮箱" />
			</el-form-item>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='xuesheng'" prop="zhuanye">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>专业：</div>
				<el-input v-model="registerForm.zhuanye"  placeholder="请输入专业" />
			</el-form-item>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='xuesheng'" prop="banji">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>班级：</div>
				<el-input v-model="registerForm.banji"  placeholder="请输入班级" />
			</el-form-item>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='xuesheng'" prop="touxiang">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="xueshengtouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='jiaoshi'" prop="jiaoshizhanghao">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>教师账号：</div>
				<el-input v-model="registerForm.jiaoshizhanghao"  placeholder="请输入教师账号" />
			</el-form-item>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='jiaoshi'" prop="mima">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>密码：</div>
				<el-input v-model="registerForm.mima" type="password" placeholder="请输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='jiaoshi'" prop="mima">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>确认密码：</div>
				<el-input v-model="registerForm.mima2" type="password" placeholder="请再次输入密码" />
			</el-form-item>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='jiaoshi'" prop="jiaoshixingming">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>教师姓名：</div>
				<el-input v-model="registerForm.jiaoshixingming"  placeholder="请输入教师姓名" />
			</el-form-item>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='jiaoshi'" prop="nianling">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>年龄：</div>
				<el-input v-model="registerForm.nianling"  placeholder="请输入年龄" />
			</el-form-item>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='jiaoshi'" prop="xingbie">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>性别：</div>
                <el-select v-model="registerForm.xingbie" placeholder="请选择性别" >
                  <el-option
                      v-for="(item,index) in jiaoshixingbieOptions"
                      :key="index"
                      :label="item"
                      :value="item">
                  </el-option>
                </el-select>
			</el-form-item>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='jiaoshi'" prop="lianxidianhua">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>联系电话：</div>
				<el-input v-model="registerForm.lianxidianhua"  placeholder="请输入联系电话" />
			</el-form-item>
			<el-form-item :style='{"width":"60%","padding":"0","margin":"0 auto 26px","position":"relative","height":"auto"}' v-if="tableName=='jiaoshi'" prop="touxiang">
				<div v-if="true" :style='{"color":"#3e97c6","left":"-150px","textAlign":"right","width":"150px","lineHeight":"44px","fontSize":"16px","position":"absolute"}'>头像：</div>
                <file-upload
					tip="点击上传头像"
					action="file/upload"
					:limit="1"
					:multiple="true"
					:fileUrls="registerForm.touxiang?registerForm.touxiang:''"
					@change="jiaoshitouxiangUploadChange"
				></file-upload>
			</el-form-item>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"10px 10px","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","margin":"0","color":"#288bbf","display":"block","outline":"none","borderRadius":"0","background":"linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(178,213,232,1) 100%)","width":"60%","fontSize":"24px","height":"auto"}' type="primary" @click="submitForm('registerForm')">注册</el-button>
			<el-button :style='{"border":"0","cursor":"pointer","padding":"0 0 10px","boxShadow":"0 0 0px rgba(64, 158, 255, .5)","margin":"20px 4% 0","color":"#333","display":"block","outline":"none","borderRadius":"8px","background":"url(http://codegen.caihongy.cn/20230128/a40a6371715e4ac89167c2b0af61c831.png) no-repeat center bottom","width":"42%","fontSize":"16px","height":"44px"}' @click="resetForm('registerForm')">重置</el-button>
			<router-link :style='{"cursor":"pointer","padding":"0 0 10px","margin":"20px 0 0","color":"#333","background":"url(http://codegen.caihongy.cn/20230128/a40a6371715e4ac89167c2b0af61c831.png) no-repeat left bottom","display":"inline-block","width":"42%","lineHeight":"40px","fontSize":"14px","textDecoration":"none","height":"44px"}' to="/login">已有账户登录</router-link>
		</el-form>
    </div>
  </div>
</div>
</template>

<script>

export default {
    //数据集合
    data() {
		return {
            pageFlag : '',
			tableName: '',
			registerForm: {
                xingbie: '',
                xingbie: '',
            },
			rules: {},
            xueshengxingbieOptions: [],
            jiaoshixingbieOptions: [],
		}
    },
	mounted() {
	},
    created() {
      this.pageFlag = this.$route.query.pageFlag;
      this.tableName = this.$route.query.role;
      if ('xuesheng' == this.tableName) {
        this.rules.xuehao = [{ required: true, message: '请输入学号', trigger: 'blur' }];
      }
      if ('xuesheng' == this.tableName) {
        this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
      }
      if ('xuesheng' == this.tableName) {
        this.rules.xueshengxingming = [{ required: true, message: '请输入学生姓名', trigger: 'blur' }];
      }
        this.xueshengxingbieOptions = "男,女".split(',');
      if ('xuesheng' == this.tableName) {
        this.rules.shoujihaoma = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
      }
      if ('jiaoshi' == this.tableName) {
        this.rules.jiaoshizhanghao = [{ required: true, message: '请输入教师账号', trigger: 'blur' }];
      }
      if ('jiaoshi' == this.tableName) {
        this.rules.mima = [{ required: true, message: '请输入密码', trigger: 'blur' }];
      }
      if ('jiaoshi' == this.tableName) {
        this.rules.jiaoshixingming = [{ required: true, message: '请输入教师姓名', trigger: 'blur' }];
      }
      if ('jiaoshi' == this.tableName) {
        this.rules.nianling = [{ required: true, validator: this.$validate.isIntNumer, trigger: 'blur' }];
      }
        this.jiaoshixingbieOptions = "男,女".split(',');
      if ('jiaoshi' == this.tableName) {
        this.rules.lianxidianhua = [{ required: true, validator: this.$validate.isMobile, trigger: 'blur' }];
      }
    },
    //方法集合
    methods: {
      // 获取uuid
      getUUID () {
        return new Date().getTime();
      },
        // 下二随
      xueshengtouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },
      jiaoshitouxiangUploadChange(fileUrls) {
          this.registerForm.touxiang = fileUrls.replace(new RegExp(this.$config.baseUrl,"g"),"");
      },

        // 多级联动参数


      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            var url=this.tableName+"/register";
               if(`xuesheng` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
               if(`jiaoshi` == this.tableName && this.registerForm.mima!=this.registerForm.mima2) {
                this.$message.error(`两次密码输入不一致`);
                return
               }
            this.$http.post(url, this.registerForm).then(res => {
              if (res.data.code === 0) {
                this.$message({
                  message: '注册成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.$router.push('/login');
                  }
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

		.el-date-editor.el-input {
			width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border: 2px solid #ddd;
						border-radius: 8px;
						padding: 0 10px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #333;
						width: 100%;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 2px solid #ddd;
						border-radius: 8px;
						padding: 0 10px;
						outline: none;
						color: #333;
						width: 440px;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 2px solid #ddd;
						border-radius: 8px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #333;
						width: 100%;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border: 2px solid #ddd;
						border-radius: 8px;
						padding: 0 10px 0 30px;
						box-shadow: 0 0 0px rgba(64, 158, 255, .5);
						outline: none;
						color: #333;
						width: 100%;
						font-size: 14px;
						height: 40px;
					}
		
		.rgs-form /deep/ .el-upload--picture-card {
			background: transparent;
			border: 0;
			border-radius: 0;
			width: auto;
			height: auto;
			line-height: initial;
			vertical-align: middle;
		}
		
		.rgs-form /deep/ .upload .upload-img {
		  		  border: 2px solid #ddd;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #999;
		  		  width: 120px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 2px solid #ddd;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #999;
		  		  width: 120px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 2px solid #ddd;
		  		  cursor: pointer;
		  		  border-radius: 8px;
		  		  color: #999;
		  		  width: 120px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
</style>
