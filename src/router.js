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
      const position = {}
      // new navigation.
      // scroll to anchor by returning the selector
      if (to.hash) {
        position.selector = to.hash
      }
      // check if any matched route config has meta that requires scrolling to top
      if (to.matched.some(m => m.meta.scrollToTop)) {
        // cords will be used if no selector is provided,
        // or if the selector didn't match any element.
        position.x = 0
        position.y = 0
      }
      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return position
    }
  }
})

export default router