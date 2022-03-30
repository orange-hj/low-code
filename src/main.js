import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import globalMethods from '@/utils/globalMethods'

import './utils/globalRegister.js'

Vue.use(globalMethods)

Vue.config.productionTip = false
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')