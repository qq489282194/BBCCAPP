import Vue from 'vue'
import axios from "axios"
import store from "@/store/index"

const service = axios.create({
  baseURL:  "/bbc",
  // baseURL:  "http://testuser.meibbc.com/dev",
  // 预发布
  // baseURL:  "http://papp.meibbc.com/",
  // 测试
  // baseURL:  "http://tapp.meibbc.com/",
  // baseURL:  "http://39.108.143.243:8787",
  // baseURL:  "http://192.168.0.26:7002",
  timeout: 15000,
})

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  // let token = sessionStorage.getItem("token");
  let token = store.state.token
  let serverVersion = store.state.serverVersion
  config.headers.common['Authorization'] = token;
  config.headers.common['serverVersion'] = serverVersion;
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 添加响应拦截器
service.interceptors.response.use(function (response) {
  let status = response.data.code;
  let row = response.data;
  if(status == 200){
    if(row === "" || row == null){
      row = true;
    }
  }else if(status == 10001){
    row = false;
  }
  // 对响应数据做点什么
  return row;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default function request(options) {
  return service(options)
}

