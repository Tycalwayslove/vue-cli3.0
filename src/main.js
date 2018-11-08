import Vue from "vue";
// import { Button, Cell, Tabbar, TabItem, TabContainer } from "mint-ui";
// 为何我按需引入文件还更大一点？？？？
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import "@common/css/index.scss";
import App from "./App.vue";
import router from "./router";
import store from "@store";
Vue.use(MintUI);
import "normalize.css";
Vue.config.productionTip = false;
import FastClick from "fastclick";
FastClick.attach(document.body);
// import pdf from "@/components/pdf";
// Vue.use(pdf);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
