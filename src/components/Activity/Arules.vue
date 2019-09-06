<template>
  <div class="arules">
    <div class="rulesLogo" @click="!rulesShow && showRules()"></div>
    <div class="actrules" ref="actrules" v-show="rulesShow">
      <div class="rulestit">活动细则</div>
      <div class="closebtn" @click="rulesShow && showRules()"></div>
      <ul class="rulescon" v-if="rulesPage == 'asharer'">
        <li><span>第一步</span><span>：点击【邀请商家】，邀请潜在商家用户</span></li>
        <li><span>第二步</span><span>：潜在商家用户进行H5页面，完成手机号码输入即可完成关系绑定（注7日内完成绑定的商家有效）</span></li>
        <li><span>第三步</span><span>：绑定的商家通过平台完成服务交易，您可获得相关推广收益<br>互动培训Q群：733827052</span></li>
      </ul>
      <ul class="rulescon" v-if="rulesPage == 'abysharer'">
        <li><span>第一步</span><span> 点击我要进驻按钮，完成手机验证</span></li>
        <li><span>第二步</span><span> 点击页面下方商家入驻及管理，弹出入驻小程序码</span></li>
        <li><span>第三步</span><span> 长按或扫描小程序码，进入商家小程序注册，完成相关信息及资质上传</span></li>
        <li><span>第四步</span><span> 等待平台官方审核</span></li>
        <li><span>第五步</span><span> 审核通过，完善服务，等客上门</span></li>
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
.rulesLogo {width: .9rem; height: .72rem; background: url('../../assets/img/activity/rules.png') no-repeat center; background-size: cover; position: absolute;; top: 9.43rem; right: 0; z-index: 3;}
.actrules {width: 5.9rem; height: 5.76rem; border-radius: .2rem; background: #fff; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); z-index: 999;}
.closebtn {position: absolute; width: .4rem; height: .4rem; top: .3rem; right: .3rem; background: url('../../assets/img/activity/close.png') no-repeat center; background-size: cover;}
.rulestit {font-size: .32rem; line-height: .35rem; text-align: center; margin-bottom: .40rem; margin-top: .35rem;}
.rulestit::before {content: ""; width: .74rem; height: .03rem; position: absolute; left: 1.45rem; top: 0.5rem; background: url('../../assets/img/activity/rules-left.png') no-repeat center; background-size: cover;}
.rulestit::after {content: ""; width: .74rem; height: .03rem; position: absolute; left: 3.66rem; top: 0.5rem; background: url('../../assets/img/activity/rules-right.png') no-repeat center; background-size: cover;}
.rulescon {font-size: .28rem; line-height: .42rem; color: #333;}
.rulescon li {margin-bottom: .20rem; padding-left: .61rem; padding-right: .37rem; position: relative;}
.rulescon li::before {content: ""; display: block; width: .12rem; height: .14rem; position: absolute; left: .36rem; top: .13rem; background: url('../../assets/img/activity/rules1.png') no-repeat center; background-size: cover;}
.rulescon li span:nth-child(1) {font-weight: bold;}

/* .rulescon li span:nth-child(1) {font-family: 'PingFang-SC-Bold'; font-weight: bold;}
.rulescon li span:nth-child(2) {font-family: 'PingFang-SC-Medium';} */
</style>

