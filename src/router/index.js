import Vue from 'vue'
import VueRouter from 'vue-router'
import One from '../views/One.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'root',
      redirect: '/1'
    },
    {
      path: '/1',
      name: 'shop',
      component: One
    },
    {
      path: '/2',
      name: 'shop',
      component: () => import("../views/Second.vue")
    },
    {
      path: '/3',
      name: 'shop',
      component: () => import("../views/Third.vue")
    },
    {
      path: '*',
      name: 'Not-Found',
      component: NotFound
    },
  ]
})
