import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage'),
    },
    {
      path: '/hello',
      name: 'hello-page',
      component: require('@/components/Hello'),
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
})
