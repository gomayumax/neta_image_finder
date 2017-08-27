import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello-page',
      component: require('@/components/Hello'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
})
