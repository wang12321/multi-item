import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import config from '../config'

const projectName = process.env.VUE_APP_PROJECT_NAME
Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})
Object.assign(modules, config[projectName].store)

const store = new Vuex.Store({
  getters,
  modules
})
export default store
