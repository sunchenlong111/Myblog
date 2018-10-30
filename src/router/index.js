import Vue from 'vue'
import Router from 'vue-router'
// import Index from '@/pages/Index/Template.vue'
// import Login from '@/pages/Login/Template.vue'
// import Create from '@/pages/Create/Template.vue'
// import Detail from '@/pages/Detail/Template.vue'
// import Edit from '@/pages/Edit/Template.vue'
// import My from '@/pages/My/Template.vue'
// import Register from '@/pages/Register/Template.vue'
// import User from '@/pages/User/Template.vue'

import store from '../store'

window.store = store

Vue.use(Router)

// const router = new Router({
//   routes: [{
//       path: '/',
//       component: Index
//     },
//     {
//       path: '/register',
//       component: Register
//     },
//     {
//       path: '/login',
//       component: Login
//     },
//     {
//       path: '/create',
//       component: Create,
//       meta: {
//         requireAuth: true
//       }
//     }, {
//       path: '/detail/:blogId',
//       component: Detail
//     }, {
//       path: '/edit/:blogId',
//       component: Edit,
//       meta: {
//         requireAuth: true
//       }
//     }, {
//       path: '/my',
//       component: My,
//       meta: {
//         requireAuth: true
//       }
//     }, {
//       path: '/user/:userId',
//       component: User
//     }
//   ]
// })

const router = new Router({
  routes:[
    {
      path:'/',
      component: () => import('@/pages/Index/Template.vue')
    },
    {
      path:'/login',
      component: ()=> import('@/pages/Login/Template.vue')
    },{
      path:'/detail/:blogId',
      component: () => import('@/pages/Detail/Template.vue')
    },
    {
      path: '/edit/:blogId',
      component: () => import('@/pages/Edit/Template.vue'),
      meta: {requireAuth:true}
    },
    {
      path: '/create',
      component: () => import('@/pages/Create/Template.vue'),
      meta: {requireAuth:true}
    },
    {
      path: '/user/:userId',
      component: () => import('@/pages/User/Template.vue'),
      meta: {requireAuth:true}
    },
    {
      path: '/my',
      component: ()=> import('@/pages/My/Template.vue'),
      meta: {requireAuth:true}
    },
     {
      path: '/register',
      component: ()=> import('@/pages/Register/Template.vue'),
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    console.log(store.getters.isLogin)
    store.dispatch('checkLogin').then(isLogin => {
      //调用beforeEach，一开始我们默认的是false，当登陆刷新的时候，这里是异步请求查询是
      //否登录，结果是登陆的状态，但是一开始是默认的false，它还没等响应回过来，就已经判断
      //他是未登录状态跳转到了登录界面，所以会造成明明是登录转态了刷新还是会跑到login界面
      //所以这里我们要先做一次异步获得isLogin，然后再让其判断是否要跳转
      if (!isLogin) {
        next({
          path: '/login',
          query: {
            redirect: to.fullPath
          } //记录查询参数中的路径
        })
      } else {
        next()
      }
    })

  } else {
    next()
  }
})

export default router
