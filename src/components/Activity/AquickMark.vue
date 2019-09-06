<template>
    <!-- 我的商家 -->
    <div class="business" ref="business" @touchstart="touchstart" @touchmove="touchmove" @quickmark="changeBusCon">
      <div class="bustit">商家入驻及管理</div>
      <div class="shade"></div>
      <div class="jiantou-shang" @click="changeBusCon"></div>
      <div class="bus_con" ref="bus_con">
        <div class="bustit">长按识别二维码</div>
        <div class="markcon" id="qrDiv">
          <img :src="codeUrl" alt="">
          <!-- <div class="erweima" id="imagQrDiv"></div> -->
          <!-- <qrcode-vue :value="codeUrl" :size="size" level="H"></qrcode-vue> -->
        </div>
        <div class="miaoshu">完成注册后，如有疑问，请<br>添加美胸汇商家客服微信BBCCZS，<br>或添加官方交流Q群733827052</div>
        <div class="jiantou-xia" @click="changeBusCon"></div>
      </div>
    </div>
</template>
<script>
import store from '@/store'
import * as ACT_API from '@/api/activity'
import QrcodeVue from 'qrcode.vue'
export default {
  data() {
    return {
      directive: 'shang',
      codeUrl: require('../../assets/img/activity/erweima4.jpg'),
      size: null,
      startX: '',
      startY: '',
      isTouch: true
    }
  },
  computed: {
    
  },
  mounted() {
    this.changeSize()
    this.$bus.$on('quickmark', this.changeBusCon)
  },
  components: {
    QrcodeVue
  },
  methods: {
    touchstart() {
      // event.preventDefault() //阻止默认事件（长按的时候出现复制）

      this.startX = event.changedTouches[0].pageX
      this.startY = event.changedTouches[0].pageY  
      // console.log(window.screen.height / 5)
    },
    touchmove() { // 如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
      // event.preventDefault()

      var moveEndX = event.changedTouches[0].pageX
      var moveEndY = event.changedTouches[0].pageY
      var X = moveEndX - this.startX
      var Y = moveEndY - this.startY
      // console.log(Y)
      if (Math.abs(X) > Math.abs(Y) && X > 0) {
        console.log('left 2 right')
      } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
        console.log('right 2 left')
      } else if (Math.abs(Y) > Math.abs(X) && Y > 40) {
        if (this.isTouch) {
          console.log('top 2 bottom')
          this.$(this.$refs.bus_con).animate({
            top: '100%'
          })
          this.directive = 'shang'
          this.isTouch = false
          let _this = this
          let touchTimer = setTimeout(() => {
            _this.isTouch = true
            clearTimeout(touchTimer)
          }, 500)
        } 
      } else if (Math.abs(Y) > Math.abs(X) && Y < -40) {
        if (this.isTouch) {
          console.log('bottom 2 top')
          this.$(this.$refs.bus_con).animate({
            top: 0
          })
          this.directive = 'xia'
          this.isTouch = false
          let _this = this
          let touchTimer = setTimeout(() => {
            _this.isTouch = true
            clearTimeout(touchTimer)
          }, 500)
        }
      } else {
        console.log('just touch')
      }
    },
    // 点击箭头显示隐藏buscon
    changeBusCon(e) {
      if (this.directive == 'shang') {
        this.$(this.$refs.bus_con).animate({
          top: 0
        })
        // this.$(e.target).removeClass('jiantou-shang').addClass('jiantou-xia')
        this.directive = 'xia'
      } else {
        this.$(this.$refs.bus_con).animate({
          top: '100%'
        })
        // this.$(e.target).removeClass('jiantou-xia').addClass('jiantou-shang')
        this.directive = 'shang'
      }
    },
    changeSize() {
      this.size = this.$('#qrDiv').width()
    }
  }
}
</script>
<style lang="css" scoped>
/* 商家 */
.business {width: 100%; height: 1.54rem; margin-top: -.3rem; position: relative; z-index: 99; background: url('../../assets/img/activity/白色底@2x.png') no-repeat center; background-size: cover; padding-top: 0.3rem;}
.jiantou-shang {width: .32rem; height: .32rem; position: absolute; left: 3.5rem; background: url('../../assets/img/activity/shang.png') no-repeat center; background-size: cover; animation: shangxia 1.3s infinite linear;}
.jiantou-xia {width: .32rem; height: .32rem; position: absolute; background: url('../../assets/img/activity/xia.png') no-repeat center; background-size: cover; left: 3.5rem; top: 12.62rem; animation: shangxia1 1.3s infinite linear; z-index: 99;}
.shade {width: 100%; height: 1.29rem; background: url('../../assets/img/activity/zhezhao.png') no-repeat center; background-size: cover; position: absolute; left: 0; bottom: 0;}
.bustit {margin: auto; font-size: .32rem; text-align: center; color: #333333; position: relative; margin-bottom: .55rem;}
.bustit::before {content: ""; display: block; width: 1.2rem; height: .16rem; background: url('../../assets/img/activity/shangjia_zuo.png') no-repeat center; background-size: cover; position: absolute; left: 1rem; top: .15rem;}
.bustit::after {content: ""; display: block; width: 1.2rem; height: .16rem; background: url('../../assets/img/activity/shangjia_you.png') no-repeat center; background-size: cover; position: absolute; left: 5.3rem; top: .15rem;}
.bus_con {position: fixed; top: 100%; left: 0; height: 100%; width: 100%; background: #fff; padding-top: .5rem; z-index: 999;}
.bus_con .markcon {width: 3.78rem; height: 3.78rem; background: url('../../assets/img/activity/erweima.png') no-repeat center; background-size: cover; margin: 1.15rem auto; padding: .22rem;}
.bus_con .markcon img {width: 100%; height: 100%;}
.miaoshu {padding: 0 .5rem; text-align: center;}
.erweima {width: 100%; height: 100%; background: url('../../assets/img/activity/erweima.jpg') no-repeat center; background-size: cover;}
</style>


