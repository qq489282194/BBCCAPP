<template>
  <div></div>
</template>
<script>
export default {
  data() {
    return {
      oldUserId: ''
    }
  },
  mounted() {
    let oldUrl = window.location.search.slice(1)
    this.oldUserId = oldUrl.split('=')[1]
    this.getShopAuthorize('Login', (res)=>{
      console.log(res,'-----微信授权Login------')	
    }, this.oldUserId)
  },
  methods: {
    // 微信授权页面
    getShopAuthorize(path, cb, oldUserId) {
      var serverUrl = "appmini.meibbc.com/user/webauth/wxAuthorizeRedirect"; //域名
      // var newServerUrl = "testmallh5.meibbc.com"; //域名
      var newServerUrl = "localhost:8080/actindex/abysharer"; //域名
      // var newServerUrl = "testuser.meibbc.com/bbc-personal/actindex/abysharer"; //域名
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
    },
  }
}
</script>

