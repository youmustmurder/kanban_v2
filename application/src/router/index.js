import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import authentication from '@/components/pages/authentication/authentication'
import * as auth from '@/components/pages/authentication'

import home from '@/components/pages/home'

const router = new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			components: {
				default: home
			},
      meta: {
        requiredAuth: true
      }
		},
    {
      path: '/login',
      name: 'authentication',
      component: authentication
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
