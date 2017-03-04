import VueRouter from 'vue-router'
import Vue from 'vue'
import Index from './components/Index.vue'
// import Detail from './components/Detail'
// import NotFound from './components/NotFound'

Vue.use(VueRouter)

var router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
    // {
    //   path: '/detail/:id',
    //   name: 'detail',
    //   component: Detail
    // },
    // { path: '*',
    //   component: NotFound
    // }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

export default router