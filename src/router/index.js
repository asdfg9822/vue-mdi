import Vue from 'vue'
import Router from 'vue-router'
import MdiMain from '@/mdi/MdiMain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MdiMain',
      component: MdiMain
    }
  ]
})
