import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "@/store";
import { Util } from '@/services/util';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/LayoutView.vue'),
    children: [
      { path: '/counter', name: 'counter', component: () => import('../views/CounterView.vue') },
      { path: '/employees', name: 'employees', component: () => import('../views/EmployeesView.vue') },
      { path: '/user-list', name: 'user-list', component: () => import('../views/UserListView.vue') },
    ]
  },
  // {
  //   path: '/counter',
  //   name: 'counter',
  //   component: () => import('../views/CounterView.vue')
  // },
  // {
  //   path: '/employees',
  //   name: 'employees',
  //   component: () => import('../views/EmployeesView.vue')
  // },
  // {
  //   path: '/user-list',
  //   name: 'user-list',
  //   component: () => import('../views/UserListView.vue')
  // },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  const isAuthenticated = Util.getCookie('userEmail') ? true : false

  // if (to.name !== 'Login' && !isAuthenticated) {
  //   return { name: 'Login' }
  // }

  // console.log(store.getters.getCounterState.count);
  // if (to.name !== 'home') {
  //   return { name: 'home' };
  // }
})

export default router
