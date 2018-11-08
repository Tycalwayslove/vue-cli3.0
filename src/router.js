import Vue from "vue";
import Router from "vue-router";
import Home from "@pages/Home/index";
import Login from "@pages/account/login";
import Register from "@pages/account/register";



Vue.use(Router);
export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      redirect:'/home'
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
        name: "register",
        component: Register
    }
  ]
});
