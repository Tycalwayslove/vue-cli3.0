import axios from "axios";
import router from "@/router";
import store from "@store";
import { DEV_HOST } from "./config";

const instance = axios.create({
  //默认地址
  baseUrl: DEV_HOST,
  //设置请求超时设置
  timeout: 5000,
  header: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  data: {}
});

//POST 传参序列化
instance.interceptor.request.use(config => {});

instance.interceptor.response.use(res => {});

export default options => {
  return new Promise((resolve, reject) => {
    instance(options)
      .then(
        response => {
          resolve(response.data);
        },
        err => {
          reject(err);
        }
      )
      .catch(error => {
        reject(error);
      });
  });
};
