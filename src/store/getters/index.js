/*
 * @Author: tangyouchao 
 * @email: 1186446929@qq.com 
 * @Github: https://github.com/Tycalwayslove 
 * @Date: 2018-11-08 21:26:28 
 * @Last Modified by: tangyouchao
 * @Last Modified time: 2018-11-08 21:35:27
 */
import * as type from "@store/getters/type";
export default {
  //获取用户信息
  [type.GET_USER_INFO]: state => {
    return state.user_info;
  }
};
