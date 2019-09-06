// import axios from 'axios'
// import API from '@/api/api_user'
import $ from "jquery"
import wx from 'weixin-js-sdk'
var wxTitle
var wxDesc
var wxImgUrl
var url
export let systemt_wxFun = function(title, desc, imgUrl, weixinurl, type='') {
	// debugger
	if(!weixinurl){
		weixinurl = '#/Home'
	}
    wxTitle = title;
    wxDesc = desc;
    wxImgUrl = imgUrl;
    url = location.href.split('#')[0];
    console.log(url)
    //url = encodeURIComponent(window.location.href.split('#')[0]);
    var getdatapath = "https://app.meibbc.com/BeautifyBreast/questionnaire!getdata.action";
    
    if (type) {
        url = ''
    }
    
    $.get(getdatapath, {
        "url": url
    }, function(data) {
        var jsonDate = eval('(' + data + ')');
        //alert(jsonDate.timestamp+"--sss-"+jsonDate.nonceStr+"---"+jsonDate.signature);
        wx.config({
            debug: false,
            appId: 'wx7ee90195b0f6646c',
            timestamp: jsonDate.timestamp,
            nonceStr: jsonDate.nonceStr,
            signature: jsonDate.signature,
            jsApiList: [
                // 'onMenuShareTimeline', 'onMenuShareAppMessage',
                'onMenuShareAppMessage', 
                'onMenuShareTimeline',
                'hideMenuItems'
            ]
        });
        // debugger
        //处理验证失败的信息
        wx.error(function(res) {
            console.log('验证失败返回的信息:', res);
        });
        //处理验证成功的信息
        wx.ready(function() {
            wx.hideMenuItems({
                menuList: [
                    'menuItem:share:qq',
                    'menuItem:share:weiboApp',
                    'menuItem:share:facebook',
                    'menuItem:share:QZone',
                    'menuItem:share:email',
                    'menuItem:openWithSafari',
                ] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
            });
			//分享url
			let urlshare = url + weixinurl
			// let urlshare = url
            //分享到朋友圈
            wx.onMenuShareTimeline({
                title: title, // 分享标题
                link: urlshare, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                desc: desc,
                success: function(res) {
                    // 用户确认分享后执行的回调函数
                    logUtil.printLog("分享到朋友圈成功返回的信息为:", res);
                    _this.showMsg("分享成功!")
                },
                cancel: function(res) {
                    // 用户取消分享后执行的回调函数
                    logUtil.printLog("取消分享到朋友圈返回的信息为:", res);
                }
            });
            //分享给朋友
            wx.onMenuShareAppMessage({
                title: title, // 分享标题
                desc: desc, // 分享描述
                link: urlshare, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                imgUrl: imgUrl, // 分享图标
                type: '', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function(res) {
                    // 用户确认分享后执行的回调函数
                    logUtil.printLog("分享给朋友成功返回的信息为:", res);
                    console.log('用户成功分享给朋友')
                },
                cancel: function(res) {
                    // 用户取消分享后执行的回调函数
                    logUtil.printLog("取消分享给朋友返回的信息为:", res);
                    console.log('用户取消分享给朋友')
                }
            });
           

            // wx.openAddress({

            //     success: function(res) {
            //         //姓名:res.userName 电话:res.telNumber 邮编:res.postalCode 
            //         //省:res.provinceName 市:res.cityName 区:res.countryName 详细地址:res.detailInfo
            //         $(".payone").empty();
            //         $(".payone").append('<div style="width: 100%;height: 30px;line-height: 30px;">' +
            //             '<span id="userName">' + res.userName + '</span>' +
            //             '  <span id="telNumber">电话:' + res.telNumber + '</span>' +
            //             '  <span id="postalCode">邮编:' + res.postalCode + '</span>' +
            //             '</div>' +
            //             '<div style="width: 100%;height: auto;line-height: 30px;">' +
            //             '<span id="provinceName">' + res.provinceName + '</span>' +
            //             '<span id="cityName">' + res.cityName + '</span>' +
            //             '<span id="countryName">' + res.countryName + '</span>' +
            //             '<span id="detailInfo">' + res.detailInfo + '</span>' +
            //             '</div>');
            //         // 用户成功拉出地址 
            //     },
            //     cancel: function(res) {
            //         // 用户取消拉出地址
            //         console.log("拉取地址失败")
            //         console.log(res)
            //     }
            // });

            // document.querySelector('#getLocation').onclick = function () {
            // 	                       wx.getLocation({                
            // 	                           type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
            // 	                           success: function (res) {alert(1)
            // 	                               var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
            // 	                               var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
            // 	                               var speed = res.speed; // 速度，以米/每秒计
            // 	                               var accuracy = res.accuracy; // 位置精度
            // 	                               alert("latitude"+latitude +" longitude"+longitude);
            // 	                           },
            // 	                           cancel: function (res) {
            // 	                               alert('用户拒绝授权获取地理位置');
            // 	                           }
            // 	                       });
            // 	               };
        });
    });
}

/* wx.ready(function() {
	// config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
	document.getElementById('audio').play();
	//获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
	//  alert(userId);
	var linkurl = window.location.href;
	//   alert(linkurl);
	wx.onMenuShareTimeline({
		title: wxDesc, // 分享标题
		link: linkurl, // 分享链接
		imgUrl: wxImgUrl, // 分享图标
		success: function() {
			// 用户确认分享后执行的回调函数
		},
		cancel: function() {
			// 用户取消分享后执行的回调函数
		}
	});

	//获取“分享给朋友”按钮点击状态及自定义分享内容接口
	wx.onMenuShareAppMessage({
		title: wxTitle, // 分享标题
		desc: wxDesc, // 分享描述
		link: linkurl, // 分享链接
		imgUrl: wxImgUrl, // 分享图标
		type: '', // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		success: function() {
			// 用户确认分享后执行的回调函数
		},
		cancel: function() {
			// 用户取消分享后执行的回调函数
		}
	});

});

wx.error(function(res) {
	// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
}); */