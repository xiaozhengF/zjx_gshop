import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:4000/'
Vue.prototype.$http=axios
new Vue({
    router,
    el:'#app',
    render:h=>h(App)
})