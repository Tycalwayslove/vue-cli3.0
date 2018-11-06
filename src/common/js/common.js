"use strict";

import store from "@/store";
import md5 from "js-md5";
export function browser() {
  let u = navigator.userAgent;
  let app = navigator.appVersion;
  return {
    trident: u.indexOf("Trident") > -1, //IE内核
    presto: u.indexOf("Presto") > -1, //opera内核
    webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
    gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
    ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
    android: u.indexOf("Android") > -1 || u.indexOf("Adr") > -1, //android终端
    iPhone: u.indexOf("iPhone") > -1, //是否为iPhone或者QQHD浏览器
    iPad: u.indexOf("iPad") > -1, //是否iPad
    webApp: u.indexOf("Safari") == -1, //是否web应该程序，没有头部与底部
    weixin: u.indexOf("MicroMessenger") > -1, //是否微信 （2015-01-22新增）
    qq: u.match(/QQ\//i) == "QQ/" //是否QQ
  };
}

export function getUrlVars(url) {
  var vars = [],
    hash;
  var hashes = url.slice(url.indexOf("?") + 1).split("&");
  for (var i = 0; i < hashes.length; i++) {
    hash = hashes[i].split("=");
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

//平台判断
export function isPlatform() {
  const platform = store.state.platform;
  const lats = platform == "1" || platform == "2" ? true : false;
  const pf = platform == "1" ? "ios" : platform == "2" ? "android" : "";
  return {
    lats,
    pf
  };
}

//判断object是否有值
export function isObject(value) {
  return JSON.stringify(value) != "{}" ? true : false;
}
// 复制到剪切板
export function copyToClipboard(elem) {
  var targetId = "_hiddenCopyText_";
  var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
  var origSelectionStart, origSelectionEnd;
  if (isInput) {
    target = elem;
    origSelectionStart = elem.selectionStart;
    origSelectionEnd = elem.selectionEnd;
  } else {
    target = document.getElementById(targetId);
    if (!target) {
      var target = document.createElement("textarea");
      target.style.position = "absolute";
      target.style.left = "-9999px";
      target.style.top = "0";
      target.id = targetId;
      document.body.appendChild(target);
    }
    target.textContent = elem.textContent;
  }
  var currentFocus = document.activeElement;
  target.focus();
  target.setSelectionRange(0, target.value.length);

  var succeed;
  try {
    succeed = document.execCommand("copy");
  } catch (e) {
    succeed = false;
  }

  if (currentFocus && typeof currentFocus.focus === "function") {
    currentFocus.focus();
  }
  if (isInput) {
    elem.setSelectionRange(origSelectionStart, origSelectionEnd);
  } else {
    target.textContent = "";
  }
  return succeed;
}

export function objKeySort(arys) {
  //先用Object内置类的keys方法获取要排序对象的属性名，再利用Array原型上的sort方法对获取的属性名进行排序，newkey是一个数组
  var newkey = Object.keys(arys).sort();

  var newObj = {};
  for (var i = 0; i < newkey.length; i++) {
    newObj[newkey[i]] = arys[newkey[i]];
  }
  return newObj;
}

export function encrSort(config) {
  let timestamp = Math.round(new Date().getTime() / 1000).toString();
  let user_agent = navigator.userAgent;
  let nonce = md5(Math.random() + timestamp);
  config.data.base_timestamp = timestamp;
  config.data.base_nonce = nonce;
  let data = objKeySort(config.data);
  let str = "";
  for (var i in data) {
    str += data[i];
  }
  data.base_sign = md5(str + "Mhu51P9M9BZc");
  return (config.data = data);
}
