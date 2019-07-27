<template>
  <div class="arules">
    <div class="rulesLogo" @click="!rulesShow && showRules()"></div>
    <div class="actrules" ref="actrules" v-show="rulesShow">
      <div class="rulestit">活动细则</div>
      <div class="closebtn" @click="rulesShow && showRules()"></div>
      <ul class="rulescon" v-if="rulesPage == 'asharer'">
        <li><span>第一步 梦想开启</span><span>：输入手机号码，识别并完成身份认领，开启拓展商家入驻。</span></li>
        <li><span>第二步 梦想传递</span><span>：完成身份领取后，分享本页面至朋友圈、好友、商家（注：手机号码为绑定关系的唯一邀请码)。</span></li>
        <li><span>第三步 梦想收获</span><span>：商家通过分享的页面入驻平台，你即可享有商家通过平台产生收益（按比例）的推广提成。</span></li>
      </ul>
      <ul class="rulescon" v-if="rulesPage == 'abysharer'">
        <li><span>第一步</span><span>输入手机号码，确定邀请商家身份</span></li>
        <li><span>第二步</span><span>长按或扫描二维码进入“小程序商家版”，填写商家，上传资质</span></li>
        <li><span>第三步</span><span>填写商家资质及信息，提交登录等待审核</span></li>
        <li><span>第四步</span><span>等待通过审核，上架服务及商品，轻松引流拓客</span></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['rulesPage'],
  data() {
    return {
      rulesShow: false
    }
  },
  methods: {
    // 显示隐藏规则内容
    showRules() {
      if (!this.rulesShow) {
        this.$(this.$refs.actrules).fadeIn()
      } else {
        this.$(this.$refs.actrules).fadeOut()
      }
      this.rulesShow = !this.rulesShow
    }
  }
}
</script>
<style lang="css" scoped>
.rulesLogo {width: .9rem; height: .72rem; background: url('../../assets/img/activity/rules.png') no-repeat center; background-size: cover; position: absolute;; top: 9.43rem; right: 0;}
.actrules {width: 5.9rem; height: 5.76rem; border-radius: .2rem; background: #fff; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);}
.closebtn {position: absolute; width: .4rem; height: .4rem; top: .3rem; right: .3rem; background: url('../../assets/img/activity/close.png') no-repeat center; background-size: cover;}
.rulestit {font-size: .32rem; line-height: .35rem; text-align: center; margin-bottom: .40rem; margin-top: .35rem;}
.rulestit::before {content: ""; width: .74rem; height: .03rem; position: absolute; left: 1.45rem; top: 0.5rem; background: url('../../assets/img/activity/rules-left.png') no-repeat center; background-size: cover;}
.rulestit::after {content: ""; width: .74rem; height: .03rem; position: absolute; left: 3.66rem; top: 0.5rem; background: url('../../assets/img/activity/rules-right.png') no-repeat center; background-size: cover;}
.rulescon {font-size: .28rem; line-height: .42rem; color: #333;}
.rulescon li {margin-bottom: .30rem; padding-left: .61rem; padding-right: .37rem; position: relative;}
.rulescon li::before {content: ""; display: block; width: .12rem; height: .14rem; position: absolute; left: .36rem; top: .13rem; background: url('../../assets/img/activity/rules1.png') no-repeat center; background-size: cover;}
.rulescon li span:nth-child(1) {font-family: 'PingFang-SC-Bold'; font-weight: bold;}
.rulescon li span:nth-child(2) {font-family: 'PingFang-SC-Medium';}
</style>

