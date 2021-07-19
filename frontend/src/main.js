import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.min'
import 'bootstrap/dist/js/bootstrap.min'
import { NavbarPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false;
Vue.use(NavbarPlugin)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
