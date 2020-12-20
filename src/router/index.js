import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'relogin',
    redirect:'/login'
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/index',
    name: 'index',
    component: ()=>import('../views/Index.vue')
  },
  {
    path: '/botnav',
    name: 'botnav',
    component: ()=>import('../views/Botnav.vue'),
    children:[
      {
        path: 'index',
        name: 'reindex',
        component: ()=>import('../views/Index.vue')
      },
      {
        path: 'list',
        name: 'list',
        component: ()=>import('../views/List.vue')
      },
      {
        path: 'search',
        name: 'search',
        component: ()=>import('../views/Search.vue')
      },
      {
        path: 'cart',
        name: 'cart',
        meta:{
          requireAuth:true  //当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
        },
        component: ()=>import('../views/Cart.vue')
      },
      {
        path: 'mine',
        name: 'mine',
        meta:{
          requireAuth:true  //当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
        },
        component: ()=>import('../views/Mine.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//navigation guard  回调不起作用  以下代码解决回调不起作用的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => err)
}


export default router
