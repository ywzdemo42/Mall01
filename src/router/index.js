import Vue from 'Vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/'
        }
    ],
    mode: 'history'
})