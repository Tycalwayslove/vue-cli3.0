/*
 * @Author: tangyouchao 
 * @email: 1186446929@qq.com 
 * @Github: https://github.com/Tycalwayslove 
 * @Date: 2018-11-08 21:38:21 
 * @Last Modified by: tangyouchao
 * @Last Modified time: 2018-11-08 22:33:45
 */
import * as type from "@store/mutations/type";

export default {
  //设置用户信息和是否登陆
  [type.SET_USER_INFO](state, userinfo) {
    state.user_info = userinfo || {};
    if (userinfo) {
        localStorage.setItem("user_info", JSON.stringify(userinfo));
    } else {
        localStorage.removeItem("user_info");
    }
  }
};
