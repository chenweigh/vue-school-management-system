import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import Login from './views/Login/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login/Login.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "login" */ './views/Home/Home.vue')
    },
  ]
})
