import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
/*new Vue({
    el: '#test',
    data () {
        return {
            info: null
        }
    },
    mounted () {
        axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (this.info = response))
    }
})*/
