/*
 * @Author: tangyouchao 
 * @email: 1186446929@qq.com 
 * @Github: https://github.com/Tycalwayslove 
 * @Date: 2018-11-08 21:19:48 
 * @Last Modified by: tangyouchao
 * @Last Modified time: 2018-11-08 21:33:29
 */
import Vue from "vue";
import Vuex from "vuex";

//引入模块
import state from "./states";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import createLogger from "vuex/dist/logger"; //修改会去控制台打一个状态

Vue.use(Vuex);
//可以去vuex 官网看看 https://vuex.vuejs.org/zh/guide/strict.html
const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  strict: debug,
  plugins: debug ? [createLogger()] : []
});
