import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@store";
import axios from 'axios';

import "normalize.css";

// import './mock/mock';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
import FastClick from "fastclick";
FastClick.attach(document.body);
// import pdf from "@/components/pdf";
// Vue.use(pdf);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
