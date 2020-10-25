import container from '@/container'

const systemRouter = {
  path: '/home',
  component: container,
  redirect: '/home/my',
  name: 'system',
  meta: {
    title: 'system',
    icon: 'system',
    permissions: ['system']
  },
  children: [
    {
      path: '/system/department',
      component: () => import('@/views/system/department/index'),
      name: 'system-department-index',
      meta: { title: 'department', permissions: ['system-department-index'] }
    }
  ]
}

export default systemRouter
