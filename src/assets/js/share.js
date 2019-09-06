// export default const 
//分享功能
export let system_shareTo = function(title, description, imgSrc, url, groupRecordId, activityId, type) {
	// debugger
	var u = navigator.userAgent,
		app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	 let params = {"title": title,  "description":description,"imgSrc": imgSrc,"url": url,'groupRecordId':groupRecordId,'activityId':activityId,"type":type};
        if(isAndroid){
          window.JsToJava.shareTo(JSON.stringify(params));
        }else{
          window.webkit.messageHandlers.shareTo.postMessage(params);
        }
}
//点击进入商品详情
export let system_details = function(id, type) {
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
//点击进入登录页面
export let login_page = function(id, type) {
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
//首页原生后退
export let nativeBack = function(id, type) {
	// alert("首页后退")
	var u = navigator.userAgent,
		app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
	var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if (isAndroid) {
		window.JsToJava.finishWeb();
	} else {
		 window.webkit.messageHandlers.finishWeb.postMessage({});
	}
}
//判断是否是微信浏览器的函数
export let isWeiXin = function() {
	//window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
	var ua = window.navigator.userAgent.toLowerCase();
	//通过正则表达式匹配ua中是否含有MicroMessenger字符串
	if (ua.match(/MicroMessenger/i) == 'micromessenger') {
		return true;
	} else {
		return false;
	}
}

//判断是否是微信浏览器的函数
export let isShow = function() {
	let query = window.location.pathname
	// console.log('0.0.0',query)
	let vars = query.split("/");
	// debugger
	let pname = vars[2]
	// for (let i=0;i<vars.length;i++) {
	// 	let part = vars[i].split("/");
	// 	if(part[0] == variable){
	// 		pname = part[1]
	// 	}
	// }
	// debugger
	if(pname == "personal" || pname == "mymember"){
		return true;
	}else{
		return false;
	}
}

//判断是否iphone X
export let isIPhoneX = function(isIPhoneXsign) {
	var u = navigator.userAgent;
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if (isIOS) {
		if (screen.height == 812 && screen.width == 375) {
			//是iphoneX
			return true
		} else {
			//不是iphoneX
			return false
		}
	}	
}

//头部
export let setStatusBarClor = function(id, type) {
	// debugger
	console.log('dddd',id,type)
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
		window.JsToJava.setStatusBarStyple(params);
	} else {
		 window.webkit.messageHandlers.setStatusBarStyple.postMessage(params);
	}
}

export let phoneSign = function() {
	var u = navigator.userAgent,
		app = navigator.appVersion;
		var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
		var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
		if (isAndroid) {
			 return 'Android'
		}else{
			return 'iOS'
		} 
	}