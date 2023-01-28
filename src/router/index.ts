import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/login',
    name: 'login',
    component:  () => 
      import(/* webpackChunkName: "login" */ "../views/LoginView.vue"),
  },

  {
    path: '/test',
    name: 'test',
    component: () => 
      import(/*webpackChunckName: "test" */ "../views/TestView.vue"),
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
