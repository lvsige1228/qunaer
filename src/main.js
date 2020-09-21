// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import REM from "./assets/rem";
Vue.prototype.$REM = REM;
Vue.config.productionTip = false;
// 全局引入 main.js
import fastClick from 'fastclick'

fastClick.attach(document.body);
//------------------------------------------------
import store from './store/index'
//-------------------------------------------------

import VueAwesomeSwiper from 'vue-awesome-swiper'
import "swiper/dist/css/swiper.css"
Vue.use(VueAwesomeSwiper);

import Vant from 'vant';
import 'vant/lib/index.css';
import './assets/styles/animate.css';

Vue.use(Vant);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
