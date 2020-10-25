import Vue from 'vue'

import App from '@/App.vue'
import store from '@/store'
import router from '@/router'

import 'normalize.css/normalize.css' // css样式初始化
import '@/styles/index.scss' // 导入全局css

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import * as filters from './filters' // 全局过滤器
import permission from '@/directive/permission/permission.js' // 权限指令

Vue.directive('permission', permission) // 注册指令--权限
Vue.use(ElementUI)

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
