import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import './customize.scss'

import router from './router'
import store from './store'
import {sync} from 'vuex-router-sync'



Vue.config.productionTip = false


Vue.use(BootstrapVue)

sync(store ,router)



new Vue({
    router: router,
    store: store,
    render: h => h(App)
    
}).$mount('#app')

