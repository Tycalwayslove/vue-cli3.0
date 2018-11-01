import Vue from "vue";
import { Button, Cell, Tabbar, TabItem } from "mint-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@common/css/index.scss";

Vue.component(Button.name, Button);
Vue.component(Cell.name, Cell);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
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
