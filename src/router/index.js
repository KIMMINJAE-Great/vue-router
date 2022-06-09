import { createRouter, createWebHistory } from "vue-router"
import Home from "@/components/Home.vue"
import Join from "@/components/Join.vue"
import Login from "@/components/Login.vue"
import About from "@/components/About.vue"
import List from "@/components/List.vue"
import NotFound from "@/components/NotFound.vue"
import Bootstrap from "@/components/Bootstrap.vue"


const routes = [
  //alias 기존 주소에 별칭 부여, redirect 다른 페이지로 이동
  {path: "/", name:"Home",component: Home, alias: '/main',},
  // {path: "/portfolio", component: Porfolio, redirect:'/main'  },
  {path: "/join", name:"Join", component: Join},
  {path: "/login", name:"Login", component: Login},
  {path: "/about", name:"About", component: About, redirect:'/main'},
  {path: '/:catchAll(.*)+', component: NotFound},
  {path: "/list", name:"List", component:List},
  {path: "/bootstrap", name:"Bootstrap", component: Bootstrap},
  
]

const router = createRouter({
  //createWebHistory url에 변화없이 사용
  //createHashJistory #을 넣는 주소가 됨
  history:createWebHistory(), routes,
})

export default router