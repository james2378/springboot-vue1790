<template>
<div class="home-preview" :style='{"width":"100%","margin":"10px auto"}'>




	<!-- 系统简介 -->
	<div :style='{"padding":"0 7%","boxShadow":"0 0px 0px rgba(255, 255, 255, .3)","margin":"40px 0","background":"none","width":"100%","position":"relative","height":"500px"}'>
	  <div :style='{"margin":"0 auto 60px","color":"#333","textAlign":"right","width":"50%","lineHeight":"50px","fontSize":"30px","float":"left","fontWeight":"500","height":"50px"}'>{{systemIntroductionDetail.title}}</div>
	  <div :style='{"padding":"0 10px","margin":"0 0 60px","color":"#666","textAlign":"left","width":"50%","lineHeight":"50px","fontSize":"24px","float":"left"}'>{{systemIntroductionDetail.subtitle}}</div>
	  <div :style='{"width":"100%","padding":"0 10px","flexWrap":"wrap","justifyContent":"space-between","display":"flex","height":"auto"}'>
	    <img :style='{"border":"1px solid #ddd","padding":"10px","margin":"0","backgroundColor":"rgba(255,255,255,.9)","objectFit":"cover","left":"3%","flex":1,"display":"block","width":"24%","position":"absolute","height":"320px"}' :src="baseUrl + systemIntroductionDetail.picture1">
	    <img :style='{"border":"1px solid #ddd","padding":"20px","margin":"0","objectFit":"cover","flex":1,"background":"rgba(255,255,255,.9)","display":"block","width":"24%","position":"absolute","right":"3%","height":"320px"}' :src="baseUrl + systemIntroductionDetail.picture2">
	    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
	  </div>
	  <div :style='{"padding":"60px 20px 20px","margin":"0 0 0 25%","overflow":"hidden","color":"#333","textAlign":"left","background":"url(http://codegen.caihongy.cn/20230127/03ad723288d44044a8b922de0a51127f.png) no-repeat left top,#e0edf2","width":"49%","lineHeight":"2","fontSize":"16px","textIndent":"2em","float":"left","height":"320px"}' v-html="systemIntroductionDetail.content"></div>
	  <div :style='{"top":"60px","left":"0","background":"url(http://codegen.caihongy.cn/20230127/9b960911d44148759e8047661d17347b.png) no-repeat center bottom","display":"block","width":"100%","position":"absolute","height":"20px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>
	
<div class="news" :style='{"width":"100%","margin":"0","position":"relative","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230127/9a8312998bcc4b55aefae7725f58f713.jpg) no-repeat center top","display":"block"}'>
	<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"100%","padding":"0 0 40px","margin":"60px auto 40px","lineHeight":"50px","textAlign":"center","background":"url(http://codegen.caihongy.cn/20230127/9b960911d44148759e8047661d17347b.png) no-repeat center bottom"}'>
		<span :style='{"color":"#15a6e1","fontSize":"32px"}'>新闻资讯</span>
	</div>
	
	
	
	
	
	
	
	
	<!-- 样式七 -->
	<div v-if="newsList.length" class="list list7 index-pv1" :style='{"padding":"0","margin":"0 7%","flexWrap":"wrap","background":"none","display":"flex","width":"86%","justifyContent":"space-between","height":"auto"}'>
	  <div v-for="(item,index) in newsList" v-if="index<4" :key="index" @click="toDetail('newsDetail', item)" class="new7-list-item animation-box" style="cursor: pointer;" :style='{"boxShadow":"1px 2px 6px #bddeeb","margin":"0 0 40px","background":"#ebf6fc","width":"23.5%","position":"relative","transition":"background 0.3s ease-in-out","height":"auto"}'>
	    <img :style='{"width":"100%","padding":"4px","objectFit":"cover","height":"280px"}' style="box-sizing: border-box;object-fit: cover;width: 100%;height: 250px;" :src="baseUrl + item.picture">
	    <div :style='{"padding":"0 10px","whiteSpace":"nowrap","overflow":"hidden","color":"#3d96c5","textAlign":"center","fontSize":"18px","lineHeight":"40px","textOverflow":"ellipsis","fontWeight":"500"}' class="new7-list-item-title line1">{{ item.title }}</div>
	    <div :style='{"padding":"0 10px","margin":"0 0 30px","overflow":"hidden","color":"#666","textAlign":"left","width":"100%","fontSize":"14px","lineHeight":"24px","textIndent":"2em","height":"120px"}' class="new7-list-item-descript line1">{{ item.introduction }}</div>
	    <div :style='{"padding":"0 10px","color":"#fff","textAlign":"right","background":"#3e97c6","bottom":"-16px","display":"inline-block","fontSize":"14px","lineHeight":"32px","position":"absolute","right":"20px"}' class="new7-list-item-time">{{ item.addtime.split(' ')[0] }}</div>
	    <div :style='{"width":"100%","padding":"0 10px","alignItems":"center","justifyContent":"space-between","display":"none","height":"auto"}'>
	      <div :style='{"color":"#666","fontSize":"14px","lineHeight":"24px"}'>新闻咨询</div>
	      <div :style='{"color":"#999","fontSize":"14px","lineHeight":"24px"}'>→</div>
	    </div>
	  </div>
	</div>
	
	
	
	
	<div @click="moreBtn('news')" :style='{"border":"0","padding":"0 20px","margin":"20px auto 50px","textAlign":"center","background":"none","display":"inline-block","width":"auto","lineHeight":"40px"}'>
		<span :style='{"color":"#3e97c6","fontSize":"18px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#3e97c6","fontSize":"18px"}' class="el-icon-d-arrow-right"></i>
	</div>
	
</div>

	<!-- 关于我们 -->
	<div :style='{"padding":"50px 7% 60px","boxShadow":"0 0px 0px rgba(255, 255, 255, .3)","margin":"0 auto","background":"url(http://codegen.caihongy.cn/20230127/e1b074885e304a40bcfa7de91c22b700.png) no-repeat center bottom,#e0edf2","display":"block","width":"100%","position":"relative","height":"600px"}'>
	  <div :style='{"color":"#fff","textAlign":"right","background":"#15a6e1","width":"21%","lineHeight":"50px","fontSize":"24px","position":"absolute","right":"28%","float":"left"}'>{{aboutUsDetail.title}}</div>
	  <div :style='{"margin":"0 auto","color":"#eee","textAlign":"left","background":"#15a6e1","width":"21%","lineHeight":"50px","fontSize":"18px","position":"absolute","right":"7%","float":"right"}'>{{aboutUsDetail.subtitle}}</div>
	  <div :style='{"padding":"0","flexWrap":"wrap","display":"flex","width":"49%","float":"left","justifyContent":"space-between","height":"auto"}'>
	    <img :style='{"border":"10px solid #15a6e1","width":"100%","margin":"0 10px","objectFit":"cover","display":"block","height":"480px"}' :src="baseUrl + aboutUsDetail.picture1">
	    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture2">
	    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture3">
	  </div>
	  <div :style='{"padding":"60px 20px","margin":"80px 0 0 0","overflow":"hidden","color":"#333","background":"url(http://codegen.caihongy.cn/20230127/26adbfa03b974a4b8b465c121356adec.png) no-repeat left top,#fff","width":"49%","lineHeight":"24px","fontSize":"16px","float":"right","textIndent":"2em","height":"400px"}' v-html="aboutUsDetail.content"></div>
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	  <div :style='{"width":"285px","background":"url(\"http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg\") 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
	</div>

<div class="lists" :style='{"width":"100%","padding":"30px 7%","margin":"0 auto","position":"relative","background":"url(http://codegen.caihongy.cn/20230127/3dc7a96395244ef894fde9c1deda72e9.jpg) no-repeat center bottom,linear-gradient(180deg, rgba(209,238,254,1) 0%, rgba(252,253,254,1) 40%, rgba(252,253,254,1) 100%),#fcfdfe","display":"block"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"margin":"0 auto 20px","alignItems":"center","background":"url(http://codegen.caihongy.cn/20230127/9b960911d44148759e8047661d17347b.png) no-repeat center bottom","display":"flex","width":"100%","lineHeight":"50px","justifyContent":"center"}'>
	  <span :style='{"padding":"0 0 30px","fontSize":"32px","lineHeight":"50px","color":"#111"}'>考试信息展示</span>
	</div>
	
	
	
	
	
	
	<!-- 样式五 -->
	<div class="list list5 index-pv1">
		<div id="lists-five-swiperkaoshixinxi" class="swiper-container lists-five-swiper" :style='{"width":"100%","padding":"50px 10px","margin":"40px 0 0","background":"none"}'>
			<div class="swiper-wrapper">
				<div :style='{"border":"0","cursor":"pointer","padding":"20px","borderRadius":"4px","background":"none","fontSize":"0","position":"relative"}' class="swiper-slide" v-for="(item,index) in kaoshixinxiList" :key="index" @click="toDetail('kaoshixinxiDetail', item)">
					<img :style='{"border":"0","width":"200px","padding":"30px 20px","objectFit":"contain","background":"url(http://codegen.caihongy.cn/20230128/d927f93371f746899f81fd3ae78502d1.png) no-repeat center top / 100% 100%","height":"220px"}' v-if="preHttp(item.fengmian)" :src="item.fengmian.split(',')[0]" alt="" />
					<img :style='{"border":"0","width":"200px","padding":"30px 20px","objectFit":"contain","background":"url(http://codegen.caihongy.cn/20230128/d927f93371f746899f81fd3ae78502d1.png) no-repeat center top / 100% 100%","height":"220px"}' v-else :src="baseUrl + (item.fengmian?item.fengmian.split(',')[0]:'')" alt="" />
				</div>
			</div>
			<!-- Add Arrows -->
			<div class="swiper-button-next"></div>
			<div class="swiper-button-prev"></div>
		</div>
	</div>
	
	
	
	
	
	<div @click="moreBtn('kaoshixinxi')" :style='{"border":"0","padding":"0 20px","margin":"40px auto 50px","textAlign":"center","background":"none","display":"inline-block","width":"100%","lineHeight":"40px"}'>
		<span :style='{"color":"#3e97c6","fontSize":"18px"}'>查看更多</span>
		<i v-if="true" :style='{"color":"#3e97c6","fontSize":"18px"}' class="el-icon-d-arrow-right"></i>
	</div>
	

</div>


</div>
</template>

<script>
  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        newsList: [],

        kaoshixinxiList: [],
      }
    },
    created() {
      this.baseUrl = this.$config.baseUrl;
      this.getNewsList();
      this.getAboutUs();
      this.getSystemIntroduction();
      this.getList();
    },
    //方法集合
    methods: {
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getNewsList() {
			this.$http.get('news/list', {params: {
				page: 1,
				limit: 4,
                sort: 'addtime',
			order: 'desc'}}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
          let autoSortUrl = "";
			
			this.$http.get('kaoshixinxi/list', {params: {
				page: 1,
				limit: 8,
			}}).then(res => {
				if (res.data.code == 0) {
					this.kaoshixinxiList = res.data.data.list;
					
					// 商品列表样式五
					this.$nextTick(() => {
						new Swiper('#lists-five-swiperkaoshixinxi', {
							loop: true,
							speed: 500,
							slidesPerView: Number(5),
							spaceBetween: Number(10),
							autoplay: {"delay":3000,"disableOnInteraction":false},
							centeredSlides: true,
							watchSlidesProgress: true,
							on: {
								setTranslate: function() {
									var slides = this.slides
									for (var i = 0; i < slides.length; i++) {
										var slide = slides.eq(i)
										var progress = slides[i].progress
										// slide.html(progress.toFixed(2)); //看清楚progress是怎么变化的
										slide.css({
											'opacity': '',
											'background': ''
										});
										slide.transform(''); //清除样式
						
										slide.transform('scale(' + (1.5 - Math.abs(progress) / 4) + ')');
									}
								},
								setTransition: function(transition) {
									for (var i = 0; i < this.slides.length; i++) {
										var slide = this.slides.eq(i)
										slide.transition(transition);
									}
								},
							},
							navigation: {"nextEl":".swiper-button-next","prevEl":".swiper-button-prev"},
						});
					})
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {detailObj: JSON.stringify(item)}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
	
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				opacity: 0.75;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				background: #fff;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				-webkit-perspective: 1000px;
				perspective: 1000px;
				opacity: 0.75;
				transition: 0.3s;
			}
		}
	}
</style>
