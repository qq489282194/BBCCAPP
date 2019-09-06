<template>
  <div class="container">
    <topcomom :icon="icon">下载美胸汇APP</topcomom>
    <div class="background_img">
      <img v-if="ipx" :src="backgroundImgIpx" alt>
      <img v-else :src="backgroundImg" alt>
      <div :class="ipx ? 'btn_box mt5ipx':'btn_box mt5'">
        <div class="download_btn" @click="handleToDownloadAPP">立即下载美胸汇</div>
      </div>
    </div>
  </div>
</template>

<script>
import topcomom from '@/components/common/Topcomomnew'

export default {
  data() {
    return {
      icon:{
        back:0
      },
      backgroundImg: require("../../assets/img/download.png"),
      backgroundImgIpx: require("../../assets/img/download1.png"),
      ipx:false
    };
  },
  components: {
    topcomom
  },
  mounted () {
    // console.log(window.innerHeight/window.innerWidth,88)
    if(window.innerHeight/window.innerWidth > 2){
      this.ipx = true
    }else{
      this.ipx = false
    }
  },
  methods: {
    // 点击下载APP
    handleToDownloadAPP() {
      console.log(navigator.userAgent)
      var useragent = navigator.userAgent;
      if (useragent.indexOf("iPhone") > -1) {
        window.location.href = "http://itunes.apple.com/us/app/id1168544548";
      } else {
        window.location.href ="http://a.app.qq.com/o/simple.jsp?pkgname=com.ruixing.bbc";
      }
    }
  }
};
</script>

<style lang="css" scoped>
.background_img{
  margin-top: 1.3rem;
}
.mt5{
  margin-top: .5rem;
}
.mt5ipx{
  margin-top: .74rem;
}
.btn_box{
  width: 100%;
  padding: 0 .64rem;
}
.download_btn {
  height: .88rem;
  border-radius: .44rem;
  background: #F63B75;
  font-size: .32rem;
  text-align: center;
  line-height: .88rem;
  color: white;
}
</style>
