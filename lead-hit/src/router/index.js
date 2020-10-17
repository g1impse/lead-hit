import Vue from 'vue'
import VueRouter from 'vue-router'

import Analytics from '../views/Analytics.vue'
import Authorization from '../views/Authorization.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Analytics',
    meta: { auth: true },
    component: Analytics
  },
  {
    path: '/authorization',
    name: 'Authorization',
    component: Authorization
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('leadhit-site-id');
	if(to.matched.some(route => route.meta.auth) && !token){
		next({ name: 'Authorization' });
	}
	else{
		next();
	}
});

export default router
