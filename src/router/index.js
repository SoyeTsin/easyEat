import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Menu from '@/components/menu/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }, {
      path: '/index',
      name: 'index',
      component: Index
    }, {
      path: '/menu',
      name: 'menu',
      component: Menu
    }
  ]
})
