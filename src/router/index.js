import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import City from "../components/City";
import CityTwo from "../components/CityTwo";
import Home from "../components/Home";
import detail from "../components/Home/detail";
import Citys from "../components/Citys";
Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/City',
      name: 'City',
      component: City,
    },
    {
      path: '/CityTwo',
      name: 'CityTwo',
      component: CityTwo,
    },
    {
      path:'/detail/:id',  //动态路由
      name: 'detail',
      component: detail,
    },
    {
      path:'/Citys',
      name: 'Citys',
      component: Citys,
    }
  ],

  scrollBehavior(to,from,savedPosition){
    return{x:0,y:0}
  }
})
