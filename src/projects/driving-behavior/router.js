import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)
let home = 'Home'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: (resolve) => require([`./views/${home}.vue`],resolve),
      meta: {
        title: '驾驶行为',
        isShowHead: 'showLeft',
        lefttext: ' '
      }
    }
  ]
})
