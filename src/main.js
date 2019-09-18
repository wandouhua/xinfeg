import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from './components/Header'
import Footer from './components/Footer'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
//引入elementui组件的轮播图
import { Carousel, CarouselItem } from 'element-ui'
Vue.use(ElementUI)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.config.productionTip = false
    //设置ajax请求基础路径
axios.defaults.baseURL = "http://localhost:5050";
//将axios注册vue实例
Vue.prototype.axios = axios;
Vue.component("my-header", Header);
Vue.component("my-footer", Footer);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')