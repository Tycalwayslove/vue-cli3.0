import axios from "axios";
import qs from "qs";
import router from "@/router";
import store from "@/store";
import {
  DEV_HOST
} from "./config";
import {
  getUrlVars,
  browser,
  isPlatform,
  encrSort
} from "@common/js/common";

const instance = axios.create({
  //默认地址
  baseURL: DEV_HOST,
  //设置请求超时设置
  timeout: 5000,
  header: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"
  },
  data: {}
});
//POST 传参序列化
instance.interceptors.request.use(
  config => {
    // 添加时间戳等基础参数
    encrSort(config);
    //data对象序列化
    if (config.method === "post") {
      config.data = qs.stringify(config.data);
    }
    console.log(config);
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(res => {
    let data = res.data;
    if (data.code === 1001 || data.code === 1002) {
      console.log('请登录');
    }

    return res;
  },
  err => {

  }
);

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