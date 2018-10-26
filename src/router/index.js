import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/Template.vue'
import Login from '@/pages/Login/Template.vue'
import Create from '@/pages/Create/Template.vue'
import Detail from '@/pages/Detail/Template.vue'
import Edit from '@/pages/Edit/Template.vue'
import My from '@/pages/My/Template.vue'
import Register from '@/pages/Register/Template.vue'
import User from '@/pages/User/Template.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      component: Index
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/create',
      component: Create
    }, {
      path: '/detail',
      component:Detail 
    }, {
      path: '/edit',
      component: Edit
    }, {
      path: '/my',
      component: My
    }, {
      path: '/register',
      component: Register
    }, {
      path: '/user',
      component: User
    }
  ]
})
