<template>
  <div class="main-view">
    <div class="header">测试APP</div>
    <div class="content">
      <div class="cc">
        <div><input v-model="url" type="text" placeholder="请输入地址"></div>
        <!-- <div><input v-model="userId" type="text" placeholder="请输入userId(可选)"></div> -->
        
        <div @click="openApp" class="btns">打开APP</div>
      </div>
    </div>
    
  </div>
</template>
<script>
import * as USER_API from "@/api/user";
import store from "@/store";
import { calcTimeHeader } from "@/assets/js/util.js";
export default {
  data() {
    return {
      userId: '',
      url: 'http://192.168.0.113:2001/'
    };
  },
  // computed:{
  //     user_id(){
  //       return store.state.userId
  //     },
  //     token(){
  //       return store.state.token
  //     },
  //   },
  components: {},
  created(){},
  mounted() {
    if(store.state.userId){
      this.user_id = store.state.userId
    }else{
      this.user_id = this.$route.query.userId
    }
    window.addEventListener("scroll", this.handlerScroll);
    var ios = navigator.userAgent.indexOf('iphone');//判断是否为ios

  },
  
  methods: {
    openApp(){
      var u = navigator.userAgent, app = navigator.appVersion;
      var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
      var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if(isAndroid){
        location.href = `launchapp://app/bbcc?type=3&modelId=${this.url}`;
          // location.href = 'launchapp://app/bbcc';
        setTimeout(()=>{
          location.href = 'http://appment.meibbc.com/apk-admin/seoH5/weixin.html';
        },2500)
      }else{
        // window.webkit.messageHandlers.toDetail.postMessage(params)
        location.href = `BeautifulBreastClub://type=3&modelId=${this.url.split('//')[1]}`;
      }
          
    },
    // 时间格式
    format(timestamp) {
        var d = new Date(timestamp * 1000);
        return (d.getFullYear()) + "-" + (d.getMonth() + 1) + "-" + (d.getDate()) + " " + (d.getHours()) + ":" + (d.getMinutes()) + ":" + (d.getSeconds());
    },
  }
};
</script>
<style lang="scss" scoped>
.header{
  text-align: center;
  line-height: 0.8rem /* 50/100 */;
  // padding-top: .4rem;
  // background: #000;
  border-bottom: 1px solid #f1f1f1;
  position: relative;
  color: #fff;
  flex: 0 0 .4rem; /* 40/100 */
  font-size: .32rem /* 36/100 */;
  background: #D43D3D;
}
.content{
  height: 7.0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  input{
    border: 1px solid #f1f1f1;
    height: .7rem;
    width: 5.0rem;
    padding: .1rem .2rem;
    font-size: .28rem;
    margin-bottom: .2rem;
    border-radius: .1rem;
  }
  .btns{
    width: 5.0rem;
    background: #D43D3D;
    color: #fff;
    text-align: center;
    line-height: .8rem;
    margin-top: .8rem;
    border-radius: .2rem;
  }
}
</style>
