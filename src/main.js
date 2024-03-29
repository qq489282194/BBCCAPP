// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import mixin from './utils/mixin'
import md5 from 'js-md5';
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()
Es6Promise.polyfill()
import NutUI from '@nutui/nutui';
// import { DatePicker } from '@nutui/nutui';
import { Button,Popup,Picker,Loading,List,Swipe,SwipeItem,Icon,NumberKeyboard,PasswordInput,Field  } from 'vant'
// import 'vant/lib/index.css';
import 'vant/lib/button/style'
import 'vant/lib/popup/style'
import 'vant/lib/picker/style'
import 'vant/lib/loading/style'
import 'vant/lib/list/style'
import 'vant/lib/icon/style'
import 'vant/lib/field/style'
import 'vant/lib/number-keyboard/style'
import 'vant/lib/password-input/style'
import 'vant/lib/toast/style'
import 'vant/lib/swipe/style'
import 'vant/lib/swipe-item/style'
import 'vant/lib/image-preview/style'
// import { ShortPassword } from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
import $ from 'jquery'
import store from "./store";
import axios from 'axios'

// Vue.use(vant)
Vue.use(Button).use(Popup).use(Picker).use(Loading).use(List).use(Swipe).use(SwipeItem).use(Icon).use(Field).use(NumberKeyboard).use(PasswordInput)
NutUI.install(Vue);
// ShortPassword.install(Vue)
/*全局混入方法*/
Vue.mixin(mixin)

import VConsole from 'vconsole/dist/vconsole.min.js'
let vConsole = new VConsole()

Vue.prototype.$http = axios
Vue.prototype.GLOBAL = {
	baseURLUser: 'http://testuser.meibbc.com/dev/',
	upLoadURL: 'http://testapi.base.meibbc.com',
	shareImgURL: 'http://testapi.buyer.meibbc.com'
}

Vue.config.productionTip = false

Vue.prototype.$md5 = md5;
Vue.prototype.$ = $;
var eventBus = {
	install(Vue,options) {
		Vue.prototype.$bus = new Vue()
	}
};
Vue.use(eventBus);

//调原生
Vue.prototype.$system_details = function(id, type) {
	var u = navigator.userAgent,
		app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	let params = {
		"modelId": id,
		"type": type
	};
	if (isAndroid) {
		params = JSON.stringify(params)
		window.JsToJava.toDetail(params);
	} else {
		window.webkit.messageHandlers.toDetail.postMessage(params)
	}
}

// 原生图片下载
Vue.prototype.$savePhoto = function(params) {
  var u = navigator.userAgent, app = navigator.appVersion;
  console.log('测试跟原生通讯---登录')
  // console.log(u)
  // let params = {
	// 	"modelId": "1",
	// 	"type": "14"
  // };
  
  var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
  var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  if(isAndroid){
    let par = JSON.stringify(params)
    window.JsToJava.savePhoto(par)
    console.log(22222)
    console.log(par)
    console.log(22222)
  }else{
    window.webkit.messageHandlers.savePhoto.postMessage(params);
  }
}

Vue.prototype.$jsToJava = function(cb) {
	var u = navigator.userAgent,
	    app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if (isAndroid) {
	    let userId = window.JsToJava.getUserId()
	    cb && cb(userId)
	} else {
	    window.webkit.messageHandlers.getUserId.postMessage({});
	}
  }

// 微信授权
Vue.prototype.$getShopAuthorize = function(path, cb, oldUserId) {
	var serverUrl = "appmini.meibbc.com/user/webauth/wxAuthorizeRedirect"; //域名
	// var serverUrl = "user.meibbc.com/user/webauth/wxAuthorizeRedirect"; //域名
	// var serverUrl = ".meibbc.com/user/webauth/wxAuthorizeRedirect"; //域名
	// var newServerUrl = "testmallh5.meibbc.com"; //域名
	// var serverUrl = "appmini.meibbc.com/bbc-personal/actindex/abeforelogin"; //域名
	// var newServerUrl = "localhost:2001/abeforelogin"; //域名
	var newServerUrl = "testuser.meibbc.com/bbc-personal/abeforelogin"; //域名
	// var newServerUrl = "appmini.meibbc.com/h5malltest/"; //域名
	var Appid = "wx7ee90195b0f6646c";
	var redirectUrl = encodeURIComponent('http://' + serverUrl);
	//var STATE = encodeURIComponent('http://' + newServerUrl + '/#/Beforelogin?path=' + path +'&goods_id='+goods_id+'&oldUserId=' + oldUserId);
	// if(!oldUserId){
	//   var STATE = encodeURIComponent('http://' + newServerUrl + '/#/Beforelogin?path=' + path + '&goods_id=' + goods_id);  
	// }else if(!goods_id){
	//   var STATE = encodeURIComponent('http://' + newServerUrl + '/#/Beforelogin?path=' + path + '&oldUserId=' + oldUserId);
	// }
	// else{
	//   var STATE = encodeURIComponent('http://' + newServerUrl + '/#/Beforelogin?path=' + path  + '&goods_id=' + goods_id + '&oldUserId=' + oldUserId);
	// }
	if (oldUserId) {
		var STATE = encodeURIComponent('http://' + newServerUrl + '?oldUserId=' + oldUserId);
	} else {
		var STATE = '';
	}
	var Scope = "snsapi_userinfo";
	var turl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + Appid + '&redirect_uri=' + redirectUrl +
			'&response_type=code&scope=' + Scope + '&state=' + STATE + '#wechat_redirect';
	if (window.location.href.indexOf('code') < 0) {
			window.location.href = turl
	}
	cb && cb()
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
