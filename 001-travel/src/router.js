import Vue from 'vue'
import VueRouter from "vue-router";


import Home from './pages/Home.vue';
import City from './pages/City.vue';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        }, {
            path: '/city',
            component: City
        }
    ]
})
export default router;