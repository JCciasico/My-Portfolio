import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import{BootstrapVue, IconsPlugin} from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(router)


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import router from './router'

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
