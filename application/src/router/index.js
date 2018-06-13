import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import authentication from '@/components/pages/authentication/authentication'
import * as auth from '@/components/pages/authentication'

const home = () => import('@/components/pages/home')
const project = () => import('@/components/pages/project/project')

const header = () => import('@/components/common/header')

Vue.component('app-header', header)

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			components: {
				default: home,
        header: header
			},
      meta: {
        requiredAuth: true
      }
		},
    {
      path: '/login',
      name: 'authentication',
      component: authentication
    },
    {
      path: '/project/:project_id',
      name: 'project',
      components: {
        default: project,
        header: header
      },
      meta: {
        requiredAuth: true
      },
    }
	]
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiredAuth) {
    if (auth.default.user.authenticated) {
      next();
    } else {
      router.push('/login');
    }
  } else {
    next();
  }
})

export default router
