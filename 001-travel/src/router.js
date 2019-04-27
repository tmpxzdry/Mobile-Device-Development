import Vue from 'vue'
import VueRouter from "vue-router";


import Home from './pages/Home.vue';
import City from './pages/City.vue';
import Detail from './pages/Detail.vue'
import 'babel-polyfill'

Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        }, {
            path: '/city',
            component: City
        }, {
            path: '/detail/:id',
            component: Detail
        }
    ],
    scrollBehavior(to, from, savePosition) {
        return { x: 0, y: 0 }//页面切换回到顶部
    }
})
export default router;