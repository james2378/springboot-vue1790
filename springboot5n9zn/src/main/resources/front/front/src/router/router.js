import VueRouter from 'vue-router'

//引入组件
import Index from '../pages'
import Home from '../pages/home/home'
import Login from '../pages/login/login'
import Register from '../pages/register/register'
import Center from '../pages/center/center'
import News from '../pages/news/news-list'
import NewsDetail from '../pages/news/news-detail'
import xueshengList from '../pages/xuesheng/list'
import xueshengDetail from '../pages/xuesheng/detail'
import xueshengAdd from '../pages/xuesheng/add'
import jiaoshiList from '../pages/jiaoshi/list'
import jiaoshiDetail from '../pages/jiaoshi/detail'
import jiaoshiAdd from '../pages/jiaoshi/add'
import kaoshibaomingList from '../pages/kaoshibaoming/list'
import kaoshibaomingDetail from '../pages/kaoshibaoming/detail'
import kaoshibaomingAdd from '../pages/kaoshibaoming/add'
import kaoshixinxiList from '../pages/kaoshixinxi/list'
import kaoshixinxiDetail from '../pages/kaoshixinxi/detail'
import kaoshixinxiAdd from '../pages/kaoshixinxi/add'
import zhunkaozhengList from '../pages/zhunkaozheng/list'
import zhunkaozhengDetail from '../pages/zhunkaozheng/detail'
import zhunkaozhengAdd from '../pages/zhunkaozheng/add'
import kaoshichengjiList from '../pages/kaoshichengji/list'
import kaoshichengjiDetail from '../pages/kaoshichengji/detail'
import kaoshichengjiAdd from '../pages/kaoshichengji/add'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch(err => err)
}

//配置路由
export default new VueRouter({
	routes:[
		{
      path: '/',
      redirect: '/index/home'
    },
		{
			path: '/index',
			component: Index,
			children:[
				{
					path: 'home',
					component: Home
				},
				{
					path: 'center',
					component: Center,
				},
				{
					path: 'news',
					component: News
				},
				{
					path: 'newsDetail',
					component: NewsDetail
				},
				{
					path: 'xuesheng',
					component: xueshengList
				},
				{
					path: 'xueshengDetail',
					component: xueshengDetail
				},
				{
					path: 'xueshengAdd',
					component: xueshengAdd
				},
				{
					path: 'jiaoshi',
					component: jiaoshiList
				},
				{
					path: 'jiaoshiDetail',
					component: jiaoshiDetail
				},
				{
					path: 'jiaoshiAdd',
					component: jiaoshiAdd
				},
				{
					path: 'kaoshibaoming',
					component: kaoshibaomingList
				},
				{
					path: 'kaoshibaomingDetail',
					component: kaoshibaomingDetail
				},
				{
					path: 'kaoshibaomingAdd',
					component: kaoshibaomingAdd
				},
				{
					path: 'kaoshixinxi',
					component: kaoshixinxiList
				},
				{
					path: 'kaoshixinxiDetail',
					component: kaoshixinxiDetail
				},
				{
					path: 'kaoshixinxiAdd',
					component: kaoshixinxiAdd
				},
				{
					path: 'zhunkaozheng',
					component: zhunkaozhengList
				},
				{
					path: 'zhunkaozhengDetail',
					component: zhunkaozhengDetail
				},
				{
					path: 'zhunkaozhengAdd',
					component: zhunkaozhengAdd
				},
				{
					path: 'kaoshichengji',
					component: kaoshichengjiList
				},
				{
					path: 'kaoshichengjiDetail',
					component: kaoshichengjiDetail
				},
				{
					path: 'kaoshichengjiAdd',
					component: kaoshichengjiAdd
				},
			]
		},
		{
			path: '/login',
			component: Login
		},
		{
			path: '/register',
			component: Register
		},
	]
})
