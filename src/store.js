import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      user_info:localStorage.getItem("user_info")
  },
  getters:{
      getUserInfo:state=>{
          return state.user_info_info;
      }
  },
  mutations: {
      setuserinfo:(state,userinfo)=>{
          state.user_info = userinfo || {};
          if(userinfo === null ){
              localStorage.removeItem('user_info');
            }else{
              localStorage.setItem('user_info', userinfo);
          }
      }
    }
});