import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Home.vue'
Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}



const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path:'/home',
    component: Home,
  },
  {
    path: '/classify',
    component: () => import('views/Classify/Classify'),
  },
  {
    path: '/cart',
    component: () => import("views/Cart/Cart"),
  },
  {
    path: '/My',
    component: () => import("views/My/My"),
  },
  {
    path: '/Carousel',
    component: () => import("views/Home/Carousel/Carousel"),
  },
  {
    path: '/GoodsSearch',
    component: () => import("views/Home/GoodsSearch/GoodsSearch"),
  },
  {
    path: '/Particulars/:id',
    props:true,
    component: () => import("views/Particulars/Particulars"),
  },
  {
    path:'/GoodsSearch/:id',
    props:true,
    component: () => import("views/Classify/GoodsSearch/GoodsSearch"),  
    children:[
      {
        path:'/GoodsSearch/:id/',
        redirect:'/GoodsSearch/:id/product',
        component: () => import("views/Classify/Product/Product"), 
      },
      {
        path:'/GoodsSearch/:id/product',
        component: () => import("views/Classify/Product/Product"), 
      },
      {
        path:'/GoodsSearch/:id/sales',
        component: () => import("views/Classify/Sales/Sales"), 
      },
      {
        path:'/GoodsSearch/:id/price',
        component: () => import("views/Classify/Price/Price"), 
      },
    ]
  }
]
const router = new VueRouter({
  routes,
  mode:'history',
})
export default router
