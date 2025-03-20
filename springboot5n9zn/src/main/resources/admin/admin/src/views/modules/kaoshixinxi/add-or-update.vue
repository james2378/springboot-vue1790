<template>
	<div class="addEdit-block" :style='{"padding":" 30px 20px","flexWrap":"wrap","background":"none","display":"flex"}' style="width: 100%;">
		<el-form
			:style='{"padding":"30px 40px","boxShadow":"0 0px 0px #999","borderRadius":"6px","flexWrap":"wrap","background":"none","display":"flex","justifyContent":"space-between"}'
			class="add-update-preview"
			ref="ruleForm"
			:model="ruleForm"
			:rules="rules"
			label-width="150px"
		>
			<template >
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' class="input" v-if="type!='info'"  label="考试编号" prop="kaoshibianhao">
					<el-input v-model="ruleForm.kaoshibianhao" placeholder="考试编号" clearable  :readonly="ro.kaoshibianhao"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' v-else class="input" label="考试编号" prop="kaoshibianhao">
					<el-input v-model="ruleForm.kaoshibianhao" placeholder="考试编号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' class="input" v-if="type!='info'"  label="科目名称" prop="kemumingcheng">
					<el-input v-model="ruleForm.kemumingcheng" placeholder="科目名称" clearable  :readonly="ro.kemumingcheng"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' v-else class="input" label="科目名称" prop="kemumingcheng">
					<el-input v-model="ruleForm.kemumingcheng" placeholder="科目名称" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' class="input" v-if="type!='info'"  label="考试时间" prop="kaoshishijian">
					<el-input v-model="ruleForm.kaoshishijian" placeholder="考试时间" clearable  :readonly="ro.kaoshishijian"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' v-else class="input" label="考试时间" prop="kaoshishijian">
					<el-input v-model="ruleForm.kaoshishijian" placeholder="考试时间" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' class="input" v-if="type!='info'"  label="考试地点" prop="kaoshididian">
					<el-input v-model="ruleForm.kaoshididian" placeholder="考试地点" clearable  :readonly="ro.kaoshididian"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' v-else class="input" label="考试地点" prop="kaoshididian">
					<el-input v-model="ruleForm.kaoshididian" placeholder="考试地点" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' class="input" v-if="type!='info'"  label="报名费用" prop="baomingfeiyong">
					<el-input v-model="ruleForm.baomingfeiyong" placeholder="报名费用" clearable  :readonly="ro.baomingfeiyong"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' v-else class="input" label="报名费用" prop="baomingfeiyong">
					<el-input v-model="ruleForm.baomingfeiyong" placeholder="报名费用" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' class="input" v-if="type!='info'"  label="注意事项" prop="zhuyishixiang">
					<el-input v-model="ruleForm.zhuyishixiang" placeholder="注意事项" clearable  :readonly="ro.zhuyishixiang"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' v-else class="input" label="注意事项" prop="zhuyishixiang">
					<el-input v-model="ruleForm.zhuyishixiang" placeholder="注意事项" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' class="select" v-if="type!='info'" label="教师账号" prop="jiaoshizhanghao">
					<el-select :disabled="ro.jiaoshizhanghao" @change="jiaoshizhanghaoChange" v-model="ruleForm.jiaoshizhanghao" placeholder="请选择教师账号">
						<el-option
							v-for="(item,index) in jiaoshizhanghaoOptions"
							v-bind:key="index"
							:label="item"
							:value="item">
						</el-option>
					</el-select>
				</el-form-item>
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' class="input" v-else-if="ruleForm.jiaoshizhanghao" label="教师账号" prop="jiaoshizhanghao">
					<el-input v-model="ruleForm.jiaoshizhanghao" placeholder="教师账号" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' class="input" v-if="type!='info'"  label="教师姓名" prop="jiaoshixingming">
					<el-input v-model="ruleForm.jiaoshixingming" placeholder="教师姓名" clearable  :readonly="ro.jiaoshixingming"></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' v-else class="input" label="教师姓名" prop="jiaoshixingming">
					<el-input v-model="ruleForm.jiaoshixingming" placeholder="教师姓名" readonly></el-input>
				</el-form-item>
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' class="upload" v-if="type!='info' && !ro.fengmian" label="封面" prop="fengmian">
					<file-upload
						tip="点击上传封面"
						action="file/upload"
						:limit="3"
						:multiple="true"
						:fileUrls="ruleForm.fengmian?ruleForm.fengmian:''"
						@change="fengmianUploadChange"
					></file-upload>
				</el-form-item>
				<el-form-item :style='{"padding":"0px","boxShadow":"0px 0px 0px 0px #d2b3aa","margin":"0 0 20px 0","borderColor":"#d3a7be","borderRadius":"0px","background":"#fff","borderWidth":"0px","display":"block","width":"100%","minWidth":"500px","borderStyle":"solid"}' class="upload" v-else-if="ruleForm.fengmian" label="封面" prop="fengmian">
					<img v-if="ruleForm.fengmian.substring(0,4)=='http'" class="upload-img" style="margin-right:20px;" v-bind:key="index" :src="ruleForm.fengmian.split(',')[0]" width="100" height="100">
					<img v-else class="upload-img" style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.fengmian.split(',')" :src="$base.url+item" width="100" height="100">
				</el-form-item>
			</template>
			<el-form-item :style='{"width":"100%","padding":"0","margin":"0 auto","background":"none"}' class="btn">
				<el-button :style='{"border":"1px solid #6ebe9b","cursor":"pointer","padding":"0 16px","boxShadow":"inset 0px 0px 56px 0px #5dae8b","margin":"20px 40px 20px 0","color":"#fff","minWidth":"120px","outline":"none","borderRadius":"4px","background":"#fff","width":"auto","lineHeight":"44px","fontSize":"14px","height":"44px"}'  v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
				<el-button :style='{"border":"1px solid #e68888","cursor":"pointer","padding":"0 16px","boxShadow":"inset 0px 0px 56px 0px #ff7676","margin":"0","color":"#fff","minWidth":"120px","outline":"none","borderRadius":"4px","background":"#fff","width":"auto","lineHeight":"44px","fontSize":"14px","height":"44px"}' v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
				<el-button :style='{"border":"1px solid #e68888","cursor":"pointer","padding":"0 16px","boxShadow":"inset 0px 0px 56px 0px #ff7676","margin":"0","color":"#fff","minWidth":"120px","outline":"none","borderRadius":"4px","background":"#fff","width":"auto","lineHeight":"44px","fontSize":"14px","height":"44px"}' v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
			</el-form-item>
		</el-form>
    

  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
	data() {
		let self = this
		var validateIdCard = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!checkIdCard(value)) {
				callback(new Error("请输入正确的身份证号码"));
			} else {
				callback();
			}
		};
		var validateUrl = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isURL(value)) {
				callback(new Error("请输入正确的URL地址"));
			} else {
				callback();
			}
		};
		var validateMobile = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isMobile(value)) {
				callback(new Error("请输入正确的手机号码"));
			} else {
				callback();
			}
		};
		var validatePhone = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isPhone(value)) {
				callback(new Error("请输入正确的电话号码"));
			} else {
				callback();
			}
		};
		var validateEmail = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isEmail(value)) {
				callback(new Error("请输入正确的邮箱地址"));
			} else {
				callback();
			}
		};
		var validateNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isNumber(value)) {
				callback(new Error("请输入数字"));
			} else {
				callback();
			}
		};
		var validateIntNumber = (rule, value, callback) => {
			if(!value){
				callback();
			} else if (!isIntNumer(value)) {
				callback(new Error("请输入整数"));
			} else {
				callback();
			}
		};
		return {
			id: '',
			type: '',
			
			
			ro:{
				kaoshibianhao : false,
				kemumingcheng : false,
				kaoshishijian : false,
				kaoshididian : false,
				baomingfeiyong : false,
				zhuyishixiang : false,
				jiaoshizhanghao : false,
				jiaoshixingming : false,
				fengmian : false,
			},
			
			
			ruleForm: {
				kaoshibianhao: '',
				kemumingcheng: '',
				kaoshishijian: '',
				kaoshididian: '',
				baomingfeiyong: '',
				zhuyishixiang: '',
				jiaoshizhanghao: '',
				jiaoshixingming: '',
				fengmian: '',
			},
		
			jiaoshizhanghaoOptions: [],
			
			rules: {
				kaoshibianhao: [
				],
				kemumingcheng: [
				],
				kaoshishijian: [
				],
				kaoshididian: [
				],
				baomingfeiyong: [
					{ validator: validateNumber, trigger: 'blur' },
				],
				zhuyishixiang: [
				],
				jiaoshizhanghao: [
				],
				jiaoshixingming: [
				],
				fengmian: [
				],
			}
		};
	},
	props: ["parent"],
	computed: {



	},
    components: {
    },
	created() {
	},
	methods: {
		
		// 下载
		download(file){
			window.open(`${file}`)
		},
		// 初始化
		init(id,type) {
			if (id) {
				this.id = id;
				this.type = type;
			}
			if(this.type=='info'||this.type=='else'){
				this.info(id);
			}else if(this.type=='logistics'){
				this.logistics=false;
				this.info(id);
			}else if(this.type=='cross'){
				var obj = this.$storage.getObj('crossObj');
				for (var o in obj){
						if(o=='kaoshibianhao'){
							this.ruleForm.kaoshibianhao = obj[o];
							this.ro.kaoshibianhao = true;
							continue;
						}
						if(o=='kemumingcheng'){
							this.ruleForm.kemumingcheng = obj[o];
							this.ro.kemumingcheng = true;
							continue;
						}
						if(o=='kaoshishijian'){
							this.ruleForm.kaoshishijian = obj[o];
							this.ro.kaoshishijian = true;
							continue;
						}
						if(o=='kaoshididian'){
							this.ruleForm.kaoshididian = obj[o];
							this.ro.kaoshididian = true;
							continue;
						}
						if(o=='baomingfeiyong'){
							this.ruleForm.baomingfeiyong = obj[o];
							this.ro.baomingfeiyong = true;
							continue;
						}
						if(o=='zhuyishixiang'){
							this.ruleForm.zhuyishixiang = obj[o];
							this.ro.zhuyishixiang = true;
							continue;
						}
						if(o=='jiaoshizhanghao'){
							this.ruleForm.jiaoshizhanghao = obj[o];
							this.ro.jiaoshizhanghao = true;
							continue;
						}
						if(o=='jiaoshixingming'){
							this.ruleForm.jiaoshixingming = obj[o];
							this.ro.jiaoshixingming = true;
							continue;
						}
						if(o=='fengmian'){
							this.ruleForm.fengmian = obj[o];
							this.ro.fengmian = true;
							continue;
						}
				}
				









			}
			
			
			// 获取用户信息
			this.$http({
				url: `${this.$storage.get('sessionTable')}/session`,
				method: "get"
			}).then(({ data }) => {
				if (data && data.code === 0) {
					
					var json = data.data;
				} else {
					this.$message.error(data.msg);
				}
			});
			
            this.$http({
				url: `option/jiaoshi/jiaoshizhanghao`,
				method: "get"
            }).then(({ data }) => {
				if (data && data.code === 0) {
					this.jiaoshizhanghaoOptions = data.data;
				} else {
					this.$message.error(data.msg);
				}
            });
			
		},
			// 下二随
			jiaoshizhanghaoChange () {
				this.$http({
					url: `follow/jiaoshi/jiaoshizhanghao?columnValue=`+ this.ruleForm.jiaoshizhanghao,
					method: "get"
				}).then(({ data }) => {
					if (data && data.code === 0) {
						if(data.data.jiaoshixingming){
							this.ruleForm.jiaoshixingming = data.data.jiaoshixingming
						}
					} else {
						this.$message.error(data.msg);
					}
				});
			},
    // 多级联动参数

    info(id) {
      this.$http({
        url: `kaoshixinxi/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
        this.ruleForm = data.data;
        //解决前台上传图片后台不显示的问题
        let reg=new RegExp('../../../upload','g')//g代表全部
        } else {
          this.$message.error(data.msg);
        }
      });
    },


    // 提交
    onSubmit() {


















	if(this.ruleForm.fengmian!=null) {
		this.ruleForm.fengmian = this.ruleForm.fengmian.replace(new RegExp(this.$base.url,"g"),"");
	}

var objcross = this.$storage.getObj('crossObj');

      //更新跨表属性
       var crossuserid;
       var crossrefid;
       var crossoptnum;
       if(this.type=='cross'){
                var statusColumnName = this.$storage.get('statusColumnName');
                var statusColumnValue = this.$storage.get('statusColumnValue');
                if(statusColumnName!='') {
                        var obj = this.$storage.getObj('crossObj');
                       if(statusColumnName && !statusColumnName.startsWith("[")) {
                               for (var o in obj){
                                 if(o==statusColumnName){
                                   obj[o] = statusColumnValue;
                                 }
                               }
                               var table = this.$storage.get('crossTable');
                             this.$http({
                                 url: `${table}/update`,
                                 method: "post",
                                 data: obj
                               }).then(({ data }) => {});
                       } else {
                               crossuserid=this.$storage.get('userid');
                               crossrefid=obj['id'];
                               crossoptnum=this.$storage.get('statusColumnName');
                               crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
                        }
                }
        }
       this.$refs["ruleForm"].validate(valid => {
         if (valid) {
		 if(crossrefid && crossuserid) {
			 this.ruleForm.crossuserid = crossuserid;
			 this.ruleForm.crossrefid = crossrefid;
			let params = { 
				page: 1, 
				limit: 10, 
				crossuserid:this.ruleForm.crossuserid,
				crossrefid:this.ruleForm.crossrefid,
			} 
			this.$http({ 
				url: "kaoshixinxi/page", 
				method: "get", 
				params: params 
			}).then(({ 
				data 
			}) => { 
				if (data && data.code === 0) { 
				       if(data.data.total>=crossoptnum) {
					     this.$message.error(this.$storage.get('tips'));
					       return false;
				       } else {
					 this.$http({
					   url: `kaoshixinxi/${!this.ruleForm.id ? "save" : "update"}`,
					   method: "post",
					   data: this.ruleForm
					 }).then(({ data }) => {
					   if (data && data.code === 0) {
					     this.$message({
					       message: "操作成功",
					       type: "success",
					       duration: 1500,
					       onClose: () => {
						 this.parent.showFlag = true;
						 this.parent.addOrUpdateFlag = false;
						 this.parent.kaoshixinxiCrossAddOrUpdateFlag = false;
						 this.parent.search();
						 this.parent.contentStyleChange();
					       }
					     });
					   } else {
					     this.$message.error(data.msg);
					   }
					 });

				       }
				} else { 
				} 
			});
		 } else {
			 this.$http({
			   url: `kaoshixinxi/${!this.ruleForm.id ? "save" : "update"}`,
			   method: "post",
			   data: this.ruleForm
			 }).then(({ data }) => {
			   if (data && data.code === 0) {
			     this.$message({
			       message: "操作成功",
			       type: "success",
			       duration: 1500,
			       onClose: () => {
				 this.parent.showFlag = true;
				 this.parent.addOrUpdateFlag = false;
				 this.parent.kaoshixinxiCrossAddOrUpdateFlag = false;
				 this.parent.search();
				 this.parent.contentStyleChange();
			       }
			     });
			   } else {
			     this.$message.error(data.msg);
			   }
			 });
		 }
         }
       });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.kaoshixinxiCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
    fengmianUploadChange(fileUrls) {
	    this.ruleForm.fengmian = fileUrls;
    },
  }
};
</script>
<style lang="scss" scoped>
	.amap-wrapper {
		width: 100%;
		height: 500px;
	}
	
	.search-box {
		position: absolute;
	}
	
	.el-date-editor.el-input {
		width: auto;
	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__label {
	  	  padding: 0 10px 0 0;
	  	  text-shadow: 0 1px 10px #fff;
	  	  color: #666;
	  	  background: none;
	  	  display: inline-block;
	  	  width: 150px;
	  	  font-size: 14px;
	  	  line-height: 40px;
	  	  text-align: right;
	  	}
	
	.add-update-preview .el-form-item /deep/ .el-form-item__content {
	  margin-left: 150px;
	}
	
	.add-update-preview .el-input /deep/ .el-input__inner {
	  	  border: 1px solid #c7ebdb;
	  	  border-radius: 4px;
	  	  padding: 0 12px;
	  	  box-shadow: inset 0px 0px 24px 0px #e8f9f2;
	  	  outline: none;
	  	  color: #666;
	  	  background: #fff;
	  	  display: inline-block;
	  	  width: auto;
	  	  font-size: 14px;
	  	  min-width: 300px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-select /deep/ .el-input__inner {
	  	  border: 1px solid #c7ebdb;
	  	  border-radius: 4px;
	  	  padding: 0 10px;
	  	  box-shadow: inset 0px 0px 24px 0px #e8f9f2;
	  	  outline: none;
	  	  color: #666;
	  	  background: #fff;
	  	  width: auto;
	  	  font-size: 14px;
	  	  min-width: 300px;
	  	  height: 40px;
	  	}
	
	.add-update-preview .el-date-editor /deep/ .el-input__inner {
	  	  border: 1px solid #c7ebdb;
	  	  border-radius: 4px;
	  	  padding: 0 10px 0 30px;
	  	  box-shadow: inset 0px 0px 24px 0px #e8f9f2;
	  	  outline: none;
	  	  color: #666;
	  	  background: #fff;
	  	  width: auto;
	  	  font-size: 14px;
	  	  min-width: 300px;
	  	  height: 40px;
	  	}
	
	.add-update-preview /deep/ .el-upload--picture-card {
		background: transparent;
		border: 0;
		border-radius: 0;
		width: auto;
		height: auto;
		line-height: initial;
		vertical-align: middle;
	}
	
	.add-update-preview /deep/ .upload .upload-img {
	  	  border: 1px solid #c7ebdb;
	  	  cursor: pointer;
	  	  border-radius: 4px;
	  	  box-shadow: inset 0px 0px 24px 0px #e8f9f2;
	  	  color: #aaa;
	  	  background: #fff;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 100px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview /deep/ .el-upload-list .el-upload-list__item {
	  	  border: 1px solid #c7ebdb;
	  	  cursor: pointer;
	  	  border-radius: 4px;
	  	  box-shadow: inset 0px 0px 24px 0px #e8f9f2;
	  	  color: #aaa;
	  	  background: #fff;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 100px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview /deep/ .el-upload .el-icon-plus {
	  	  border: 1px solid #c7ebdb;
	  	  cursor: pointer;
	  	  border-radius: 4px;
	  	  box-shadow: inset 0px 0px 24px 0px #e8f9f2;
	  	  color: #aaa;
	  	  background: #fff;
	  	  width: 200px;
	  	  font-size: 32px;
	  	  line-height: 100px;
	  	  text-align: center;
	  	  height: 100px;
	  	}
	
	.add-update-preview .el-textarea /deep/ .el-textarea__inner {
	  	  border: 1px solid #c7ebdb;
	  	  border-radius: 4px;
	  	  padding: 12px;
	  	  box-shadow: inset 0px 0px 24px 0px #e8f9f2;
	  	  outline: none;
	  	  color: #666;
	  	  background: #fff;
	  	  width: auto;
	  	  font-size: 14px;
	  	  min-height: 150px;
	  	  min-width: 640px;
	  	  height: auto;
	  	}
</style>
