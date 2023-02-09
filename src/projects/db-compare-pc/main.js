import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@base/styles/index.scss' // global css

import App from './App'
import store from '@base/store'
import router from './router'

import '@/icons' // icon
import '@dbpc/permission' // permission control
import * as filters from '@/filters' // global filters

Vue.use(ElementUI)

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

// 引入 vue-ele-component-ff css
import 'vue-ele-component-ff/lib/index/style/index.css'
// 全部引入 vue-ele-component-ff js
import VueEleComponentFF from 'vue-ele-component-ff'
// 在ElementUI后调用
Vue.use(ElementUI).use(VueEleComponentFF)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

