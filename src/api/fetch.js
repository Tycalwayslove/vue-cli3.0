import axios from "axios";
import qs from "qs";
import router from "@/router";
import store from "@/store";
import {
  DEV_HOST
} from "./config";

const instance = axios.create({
  header: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
  },
  data:{}
});
//POST 传参序列化
instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(res => {
    let data = res.data;

    return res;
  },
  err => {

  }
);

export default options => {
    console.log(options);
  return new Promise((resolve, reject) => {
    instance(options)
      .then(
        response => {
          resolve(response);
          console.log(response);
        },
        err => {
          reject(err);
          console.log(err);
        }
      )
      .catch(error => {
          reject(error);
          console.log(error);
      });
  });
};