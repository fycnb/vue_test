import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // 浏览器进度条
import 'nprogress/nprogress.css' // 浏览器进度条样式
import { getToken } from '@/utils/auth' // 从cookie获取token

NProgress.configure({ showSpinner: false }) // 进度环显示隐藏

const whiteList = ['/login', '/auth-redirect'] // 地址白名单

router.beforeEach(async(to, from, next) => {
  NProgress.start()

  document.title = to.meta.title

  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasPermissions = store.getters.permissions && store.getters.permissions.length > 0
      if (hasPermissions) {
        next()
      } else {
        try {
          const { data } = await store.dispatch('user/getInfo')

          const accessRoutes = await store.dispatch('permission/generateRoutes', data.permissions)

          router.addRoutes(accessRoutes)

          await store.dispatch('dict/setDict')

          next({ ...to, replace: true })
        } catch (error) {
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
