import Vue from 'vue'
import App from './App.vue'
import router from './router.js'


//import css
import './style/reset.css' //统一不同手机样式
import './style/border.css'//解决1px边框问题
//解决移动端click 300s延时
import fastClick from 'fastclick';

Vue.config.productionTip = false
fastClick.attach(document.body);



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
