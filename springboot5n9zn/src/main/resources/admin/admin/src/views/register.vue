<template>
	<div>
		<div class="container" :style='{"minHeight":"100vh","padding":"150px 0 180px","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230218/3d5ee9f39b7b41b2b947267e07af2616.jpg) no-repeat center center / 100% 100%","display":"flex","width":"100%","justifyContent":"center"}'>
			<el-form v-if="pageFlag=='register'" :style='{"padding":"40px 40px 100px","margin":"0px 0 0px 0","borderColor":"#ba6476 #812d58 #ba6476","display":"flex","justifyContent":"center","borderRadius":"10px","flexWrap":"wrap","background":"#fff","borderWidth":"0px","width":"880px","position":"relative","borderStyle":"solid","height":"auto"}' ref="rgsForm" class="rgs-form" :model="rgsForm">
				<div v-if="true" :style='{"padding":"0 40px","margin":"20px auto 20px","overflow":"hidden","color":"#fff","textAlign":"left","background":"url(http://codegen.caihongy.cn/20230218/e12b426c44e94cb286a5f2597d4629cb.png) no-repeat right top,#5dae8b","width":"100%","lineHeight":"40px","fontSize":"18px","height":"40px"}' class="title">基于java语言的考试信息报名系统注册</div>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">学号</div>
					<el-input  v-model="ruleForm.xuehao"  autocomplete="off" placeholder="学号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">学生姓名</div>
					<el-input  v-model="ruleForm.xueshengxingming"  autocomplete="off" placeholder="学生姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">性别</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in xueshengxingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">手机号码</div>
					<el-input  v-model="ruleForm.shoujihaoma"  autocomplete="off" placeholder="手机号码"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">邮箱</div>
					<el-input  v-model="ruleForm.youxiang"  autocomplete="off" placeholder="邮箱"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">专业</div>
					<el-input  v-model="ruleForm.zhuanye"  autocomplete="off" placeholder="专业"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">班级</div>
					<el-input  v-model="ruleForm.banji"  autocomplete="off" placeholder="班级"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='xuesheng'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">头像</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="xueshengtouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">教师账号</div>
					<el-input  v-model="ruleForm.jiaoshizhanghao"  autocomplete="off" placeholder="教师账号"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">密码</div>
					<el-input  v-model="ruleForm.mima"  autocomplete="off" placeholder="密码"  type="password"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">确认密码</div>
					<el-input  v-model="ruleForm.mima2" autocomplete="off" placeholder="确认密码" type="password" />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">教师姓名</div>
					<el-input  v-model="ruleForm.jiaoshixingming"  autocomplete="off" placeholder="教师姓名"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">年龄</div>
					<el-input  v-model="ruleForm.nianling"  autocomplete="off" placeholder="年龄"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">性别</div>
                    <el-select v-model="ruleForm.xingbie" placeholder="请选择性别" >
                        <el-option
                            v-for="(item,index) in jiaoshixingbieOptions"
                            v-bind:key="index"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">联系电话</div>
					<el-input  v-model="ruleForm.lianxidianhua"  autocomplete="off" placeholder="联系电话"  type="text"  />
				</el-form-item>
				<el-form-item :style='{"padding":"0","margin":"0 auto 15px","flexWrap":"wrap","display":"block","width":"60%","position":"relative","height":"auto"}' class="list-item" v-if="tableName=='jiaoshi'">
					<div v-if="true" :style='{"color":"#5dae8b","left":"-130px","textAlign":"right","width":"120px","lineHeight":"40px","fontSize":"14px","position":"absolute","fontWeight":"600"}' class="lable">头像</div>
                    <file-upload
                        tip="点击上传头像"
                        action="file/upload"
                        :limit="3"
                        :multiple="true"
                        :fileUrls="ruleForm.touxiang?ruleForm.touxiang:''"
                        @change="jiaoshitouxiangUploadChange"
                    ></file-upload>
				</el-form-item>
				<button :style='{"border":"0px solid #f4ca93","cursor":"pointer","padding":"0 40px 0 250px","margin":"20px auto 5px","color":"#fff","bottom":"40px","display":"block","letterSpacing":"4px","minWidth":"150px","right":"40px","outline":"none","borderRadius":"0px","background":"url(http://codegen.caihongy.cn/20230218/84e36e455f5a4e4cb21a76e8802d3b0d.png) no-repeat left top,#5dae8b","width":"auto","fontSize":"16px","position":"absolute","height":"44px"}' type="button" class="r-btn" @click="login()">注册</button>
				<div :style='{"cursor":"pointer","padding":"0","margin":"20px auto 0","color":"#666","display":"block","width":"100%","lineHeight":"1","fontSize":"12px","textDecoration":"underline"}' class="r-login" @click="close()">已有账号，直接登录</div>
			</el-form>
			
		</div>
	</div>
</template>

<script>

export default {
	data() {
		return {
			ruleForm: {
                xingbie: '',
                xingbie: '',
			},

            pageFlag : '',
			tableName:"",
			rules: {},
            xueshengxingbieOptions: [],
            jiaoshixingbieOptions: [],
		};
	},
	mounted(){
        this.pageFlag = this.$storage.get("pageFlag");
		let table = this.$storage.get("loginTable");
		this.tableName = table;
        this.xueshengxingbieOptions = "男,女".split(',')
        this.jiaoshixingbieOptions = "男,女".split(',')
	},
	created() {
    
	},
	destroyed() {
		  	},
	methods: {
		// 获取uuid
		getUUID () {
			return new Date().getTime();
		},
		close(){
			this.$router.push({ path: "/login" });
		},
        xueshengtouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },
        jiaoshitouxiangUploadChange(fileUrls) {
            this.ruleForm.touxiang = fileUrls;
        },

        // 多级联动参数


		// 注册
		login() {
			var url=this.tableName+"/register";
					if((!this.ruleForm.xuehao) && `xuesheng` == this.tableName){
						this.$message.error(`学号不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `xuesheng` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `xuesheng` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.xueshengxingming) && `xuesheng` == this.tableName){
						this.$message.error(`学生姓名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`xuesheng` == this.tableName && this.ruleForm.shoujihaoma&&(!this.$validate.isMobile(this.ruleForm.shoujihaoma))){
						this.$message.error(`手机号码应输入手机格式`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
				
					if((!this.ruleForm.jiaoshizhanghao) && `jiaoshi` == this.tableName){
						this.$message.error(`教师账号不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((!this.ruleForm.mima) && `jiaoshi` == this.tableName){
						this.$message.error(`密码不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					if((this.ruleForm.mima!=this.ruleForm.mima2) && `jiaoshi` == this.tableName){
						this.$message.error(`两次密码输入不一致`);
						return
					}
					if((!this.ruleForm.jiaoshixingming) && `jiaoshi` == this.tableName){
						this.$message.error(`教师姓名不能为空`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`jiaoshi` == this.tableName && this.ruleForm.nianling&&(!this.$validate.isIntNumer(this.ruleForm.nianling))){
						this.$message.error(`年龄应输入整数`);
						return
					}
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					
					if(`jiaoshi` == this.tableName && this.ruleForm.lianxidianhua&&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
						this.$message.error(`联系电话应输入手机格式`);
						return
					}
					
					
					
					
            if(this.ruleForm.touxiang!=null) {
                this.ruleForm.touxiang = this.ruleForm.touxiang.replace(new RegExp(this.$base.url,"g"),"");
            }
					
					
					
					
					
					
					
					
					
					
				
			
			this.$http({
				url: url,
				method: "post",
				data:this.ruleForm
			}).then(({ data }) => {
				if (data && data.code === 0) {
					this.$message({
						message: "注册成功",
						type: "success",
						duration: 1500,
						onClose: () => {
							this.$router.replace({ path: "/login" });
						}
					});
				} else {
					this.$message.error(data.msg);
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
	.container {
	  position: relative;
	  background: url(http://codegen.caihongy.cn/20230218/3d5ee9f39b7b41b2b947267e07af2616.jpg) no-repeat center center / 100% 100%;

		.el-date-editor.el-input {
		  width: 100%;
		}
		
		.rgs-form .el-input /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px;
						box-shadow: inset 0px 0px 24px 0px #e8f9f2;
						margin: 0;
						color: #666;
						background: none;
						width: 100%;
						font-size: 14px;
						border-color: #c7ebdb;
						border-width: 1px;
						border-style: solid;
						height: 36px;
					}
		
		.rgs-form .el-select /deep/ .el-input__inner {
						border: 0px solid #333;
						padding: 0 10px;
						color: #999;
						font-size: 14px;
						border-color: #c7ebdb;
						border-radius: 4px;
						box-shadow: inset 0px 0px 24px 0px #e8f9f2;
						outline: none;
						background: none;
						width: 100%;
						border-width: 1px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px 0 30px;
						box-shadow: inset 0px 0px 24px 0px #e8f9f2;
						outline: none;
						color: #999;
						background: none;
						width: 100%;
						font-size: 14px;
						border-color: #c7ebdb;
						border-width: 1px;
						border-style: solid;
						height: 40px;
					}
		
		.rgs-form .el-date-editor /deep/ .el-input__inner {
						border-radius: 4px;
						padding: 0 10px 0 30px;
						box-shadow: inset 0px 0px 24px 0px #e8f9f2;
						outline: none;
						color: #999;
						background: none;
						width: 100%;
						font-size: 14px;
						border-color: #c7ebdb;
						border-width: 1px;
						border-style: solid;
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
		  		  border: 1px solid #c7ebdb;
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  box-shadow: inset 0px 0px 24px 0px #e8f9f2;
		  		  margin: 10px 0;
		  		  color: #999;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload-list .el-upload-list__item {
		  		  border: 1px solid #c7ebdb;
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  box-shadow: inset 0px 0px 24px 0px #e8f9f2;
		  		  margin: 10px 0;
		  		  color: #999;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
		
		.rgs-form /deep/ .el-upload .el-icon-plus {
		  		  border: 1px solid #c7ebdb;
		  		  cursor: pointer;
		  		  border-radius: 4px;
		  		  box-shadow: inset 0px 0px 24px 0px #e8f9f2;
		  		  margin: 10px 0;
		  		  color: #999;
		  		  width: 160px;
		  		  font-size: 32px;
		  		  line-height: 80px;
		  		  text-align: center;
		  		  height: 80px;
		  		}
	}
</style>
