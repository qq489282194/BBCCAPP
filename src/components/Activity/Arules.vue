<template>
  <div>
    <div class="rulesLogo"></div>
    <div class="shade" v-show="rulesShow">
      <div class="actrules">
        <div class="rulestit">活动细则</div>
        <ul class="rulescon">
          <li><span>第一步 梦想开启</span><span>：输入手机号码，识别并完成身份认领，开启拓展商家入驻。</span></li>
          <li><span>第二步 梦想传递</span><span>：完成身份领取后，分享本页面至朋友圈、好友、商家（注：手机号码为绑定关系的唯一邀请码)。</span></li>
          <li><span>第三步 梦想收获</span><span>：商家通过分享的页面入驻平台，你即可享有商家通过平台产生收益（按比例）的推广提成。</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['rulesShow']
}
</script>
<style lang="css" scoped>
.rulesLogo {width: .9rem; height: .72rem; background: url()}
.shade {width: 100%; height: 100%; background: rgba(0,0,0,.4); position: fixed; top: 0; left: 0;}
.actrules {width: 5.9rem; height: 5.76rem; border-radius: .2rem; background: #fff; position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%);}
.rulestit {font-size: .32rem; line-height: .35rem; text-align: center; margin-bottom: .60rem; margin-top: .35rem;}
.rulescon {font-size: .28rem; line-height: .42rem; color: #333;}
.rulescon li {margin-bottom: .38rem; padding-left: .61rem; padding-right: .37rem;}
.rulescon li span:nth-child(1) {font-family: 'PingFang-SC-Bold'; font-weight: bold;}
.rulescon li span:nth-child(2) {font-family: 'PingFang-SC-Medium';}
</style>

