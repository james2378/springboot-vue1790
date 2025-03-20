<template>
	<div class="navbar">
		<div class="title" :style='{"width":"100%","padding":"0 0 0 40%","margin":"0px","position":"absolute","background":"none","height":"100%"}'>
			<el-image v-if="false" class="title-img" :style='{"width":"44px","objectFit":"cover","borderRadius":"100%","float":"left","height":"44px"}' src="http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg" fit="cover" />
			<span class="title-name" :style='{"padding":"0px","lineHeight":"64px","fontSize":"24px","color":"#333","fontWeight":"500"}'>{{this.$project.projectName}}</span>
		</div>
		<div class="right" :style='{"padding":"4px 0px 0 0px","top":"0","background":"none","display":"flex","width":"28%","lineHeight":"50px","position":"absolute","right":"40px","float":"right","justifyContent":"flex-end","zIndex":"999"}'>
			<div :style='{"cursor":"pointer","color":"#333","margin":"0 5px"}' class="nickname">{{this.$storage.get('role')}} {{this.$storage.get('adminName')}}</div>
			<div :style='{"cursor":"pointer","color":"#333","margin":"0 5px"}' v-if="this.$storage.get('role')!='管理员'" class="logout" @click="onIndexTap">退出到前台</div>
			<div :style='{"cursor":"pointer","color":"#333","margin":"0 5px"}' class="logout" @click="onLogout">退出登录</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dialogVisible: false,
				ruleForm: {},
				user: {},
			};
		},
		created() {
			
		},
		mounted() {
			let sessionTable = this.$storage.get("sessionTable")
			this.$http({
				url: sessionTable + '/session',
				method: "get"
			}).then(({
				data
			}) => {
				if (data && data.code === 0) {
					this.user = data.data;
					this.$storage.set('userid',data.data.id);
				} else {
					let message = this.$message
					message.error(data.msg);
				}
			});
		},
		methods: {
			onLogout() {
				let storage = this.$storage
				let router = this.$router
				storage.clear()
				router.replace({
					name: "login"
				});
			},
			onIndexTap(){
				window.location.href = `${this.$base.indexUrl}`
			},
		}
	};
</script>


<style lang="scss" scoped>
	.navbar {
	
	}
</style>
