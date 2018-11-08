/*
 * @Author: tangyouchao 
 * @email: 1186446929@qq.com 
 * @Github: https://github.com/Tycalwayslove 
 * @Date: 2018-11-08 21:19:17 
 * @Last Modified by: tangyouchao
 * @Last Modified time: 2018-11-08 21:45:14
 */

import * as actions from "@store/actions/type";
import * as mutations from "@store/mutations/type";
export default {
  // 设置用户信息和登录
  [actions.SET_USER_INFO]({ commit }, userinfo) {
    commit(mutations.SET_USER_INFO, userinfo);
  }
};
