import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";


/* eslint-disable no-new */

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

Vue.use(IconsPlugin);


import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/js/bootstrap.js";

import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

new Vue({

  render: (h) => h(App),
}).$mount("#app");
