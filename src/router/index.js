import Vue from 'vue'
import Router from 'vue-router'

/*懒加载*/
const home = () => import('views/home/Home')
const category = () => import('views/category/Category')
const cart = () => import('views/cart/Cart')
const profile = () => import('views/profile/Profile')

/*安装插件*/
Vue.use(Router)

// 添加这下面一段代码，就可以解决报错
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

/*创建routes*/
const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/category',
        component: category
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/profile',
        component: profile
    },
]
/*创建对象*/
const router = new Router({
    routes,
    mode: 'history'
})

export default router