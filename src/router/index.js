import Vue from 'vue'
import Router from 'vue-router'

import home from '@/pages/home/home'
import page1 from '@/pages/page1/page1'
import page2 from '@/pages/page2/page2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/page1',
      name: 'page1',
      component: page1
    },
    {
      path: '/page2',
      name: 'page2',
      component: page2
    }
  ]
})
