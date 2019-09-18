import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Details from './views/Details.vue'
import NotFound from './views/NotFound.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/Details', component: Details },
        { path: '/Index', component: Index },
        { path: '/', component: Index },
        { path: "/*", component: NotFound }
    ]
})