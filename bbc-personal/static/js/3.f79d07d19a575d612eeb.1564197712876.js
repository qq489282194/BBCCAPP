webpackJsonp([3],{"4i/c":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=e("Ty/O"),a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"show",rawName:"v-show",value:this.rulesShow,expression:"rulesShow"}],staticClass:"shade"},[this._m(0)])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"actrules"},[e("div",{staticClass:"rulestit"},[t._v("活动细则")]),t._v(" "),e("ul",{staticClass:"rulescon"},[e("li",[e("span",[t._v("第一步 梦想开启")]),e("span",[t._v("：输入手机号码，识别并完成身份认领，开启拓展商家入驻。")])]),t._v(" "),e("li",[e("span",[t._v("第二步 梦想传递")]),e("span",[t._v("：完成身份领取后，分享本页面至朋友圈、好友、商家（注：手机号码为绑定关系的唯一邀请码)。")])]),t._v(" "),e("li",[e("span",[t._v("第三步 梦想收获")]),e("span",[t._v("：商家通过分享的页面入驻平台，你即可享有商家通过平台产生收益（按比例）的推广提成。")])])])])}]};var r={data:function(){return{show:!0,rulesShow:!1,phone:"",errorMsg:"",errorSms:"",sms:"",toClick:!0,oldUserId:"",data_oldUserId:"",data_newUserId:"",toShareUrl:""}},components:{Arules:e("VU/8")({props:["rulesShow"]},a,!1,function(t){e("D5Xn")},"data-v-022e9470",null).exports},mounted:function(){if(localStorage.getItem("openid")||localStorage.getItem("unionId")){var t=window.location.href;this.toShareUrl=t.replace("/bbc-personal","")+"?oldUserId="+localStorage.getItem("oldUserId"),this.bindUserRelation()}else{this.toShareUrl=window.location.href;var s=window.location.search.slice(1);this.oldUserId=s.split("=")[1],this.$getShopAuthorize("Login",function(t){console.log(t,"-----微信授权Login------")},this.oldUserId)}},methods:{bindUserRelation:function(){this.data_oldUserId=localStorage.getItem("oldUserId"),this.data_newUserId=localStorage.getItem("userId"),n.a(this.data_oldUserId,this.data_newUserId).then(function(t){console.log("绑定关系是否成功",t.msg)})},sendSms:function(){var t=this,s=60,e=setInterval(function(){t.toClick=!1,s-=1,t.$refs.sendSms.innerHTML=s+"s后重新获取",s<=0&&(clearInterval(e),t.toClick=!0,t.$refs.sendSms.innerHTML="获取验证码")},1e3);this.phone},confirmMsg:function(){var t={recive:this.phone,code:this.sms};n.b(t).then(function(t){console.log("验证码",t)})},shareFun:function(t,s){var e=this.toShareUrl;this._system_shareTo("","","",e,"","",t)}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"sharer"},[t._v("\n    this is bysharer content\n  ")]),t._v(" "),e("div",{staticClass:"join"},[e("van-button",{attrs:{type:"primary",size:"small"},on:{click:function(s){t.show=!0}}},[t._v("我要参与")]),t._v(" "),e("van-button",{attrs:{type:"primary",size:"small"},on:{click:function(s){return t.shareFun("weChat",1)}}},[t._v("我要分享")])],1),t._v(" "),e("Arules",{attrs:{rulesShow:!1}}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"shade"},[e("div",{staticClass:"popup"},[e("p",{staticClass:"pop_tit"},[t._v("输入手机号码，完成身份认领即可开启商家拓展，后续我们也会为您提供更好的服务。")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"phoneSms"},[e("input",{attrs:{type:"text",placeholder:"输入验证码"}}),e("span",{ref:"sendSms",staticClass:"sendSms",on:{click:function(s){t.toClick&&t.sendSms()}}},[t._v("获取验证码")])]),t._v(" "),e("a",{staticClass:"confirm",attrs:{href:"javascript:;"}},[t._v("确定")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"phoneNum"},[s("input",{attrs:{type:"text",placeholder:"请输入手机号"}})])}]};var o=e("VU/8")(r,i,!1,function(t){e("9MHy")},"data-v-35197ae1",null);s.default=o.exports},"9MHy":function(t,s){},D5Xn:function(t,s){}});
//# sourceMappingURL=3.f79d07d19a575d612eeb.1564197712876.js.map