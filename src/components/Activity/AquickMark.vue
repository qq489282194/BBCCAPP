<template>
    <!-- 我的商家 -->
    <div class="business">
      <div class="bustit">扫一扫进行商家进驻</div>
      <div class="shade"></div>
      <div class="jiantou-shang" @click="changeBusCon"></div>
      <div class="bus_con" ref="bus_con">
        <div class="bustit">扫一扫进行商家进驻</div>
        <div class="markcon"></div>
        <div class="jiantou-xia" @click="changeBusCon"></div>
      </div>
    </div>
</template>
<script>
import store from '@/store'
import * as ACT_API from '@/api/activity'
export default {
  data() {
    return {
      directive: 'shang',
    }
  },
  methods: {
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
.bus_con {position: fixed; top: 100%; left: 0; height: 100%; width: 100%; background: #fff; padding-top: .5rem;}
.bus_con .markcon {width: 3.3rem; height: 3.3rem; margin: auto; background: pink;}
</style>


