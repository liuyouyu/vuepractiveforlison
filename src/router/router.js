import Home from '@/views/Home.vue'

export default [
  {
    path: '/',
    alias:'home_page',//别名
    name: 'home2',//vue-cli自带的
    component: Home
  },
  {
    path: '/about',
    name: 'about',//vue-cli自带的
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  // 路由参数
  {
    path: '/argu/:name',
    name:'argu',
    component: () => import('@/views/argu.vue')
  },
  // 嵌套路由
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [{
      path: 'child',//注意此处没有斜线 '/child'
      component: () => import('@/views/child.vue')

    }]
  },
  // 命名路由
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [{
      path: 'child',//注意此处没有斜线 '/child'
      component: () => import('@/views/child.vue')

    }]
  },
  // 命名路由
  {
    path: '/parent',
    name:'parent',
    component: () => import('@/views/parent.vue'),
    children: [{
      path: 'child',//注意此处没有斜线 '/child'
      component: () => import('@/views/child.vue')

    }]
  },
  // 命名视图
  {
    path: '/named_view',
    components: {
      default: () => import('@/views/parent.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue'),
    }
  },
  // 重定向
  {
    path: '/main',
    redirect: {
      name: 'home'
    },
    redirect: '/',
    redirect: to=>{
      return {
        name:"home"
      }
    },
    redirect: to=>{
      console.log(to)
      return "/"
    },
    redirect: to=>"/"
  },
  // 别名 alias


  // 编程式的导航
  {
    path:'/',

  }
]
