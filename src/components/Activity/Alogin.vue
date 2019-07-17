<template>
  <div>
    <!-- icon图片 -->
    <div class="iconimg">
      <p>图片</p>
    </div>
    <!-- 登录方式 -->
    <div class="loginway">
      <a href="javascript:;" class="welogin">微信登录</a>
      <a href="javascript:;" class="phonelogin">手机登录</a>
    </div>
    <div class="line">
      <p><span>其他登录方式</span></p>
    </div>
    <div class="otherway">
      <a href="javascript:;"></a>
      <a href="javascript:;"></a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Alogin',
  data() {
    return {}
  }
}
</script>
<style lang="css" scoped>
.iconimg {width: 100%; height: 15rem; background: #58bc58; position: relative;}
.iconimg p {width: 3rem; height: 3rem; background: #fff; position: absolute; top: 0; left: 0; right: 0; bottom: 0; margin: auto; text-align: center; line-height: 3rem;}
.loginway {padding: 0 1rem; padding-top: 1rem;}
.loginway a {display: block; height: 2rem; text-align: center; line-height: 2rem; font-size: .7rem; border-radius: 1rem; margin-bottom: 1rem; border: .05rem solid #f63b76; text-decoration: none;}
.welogin {background: #f63b76; color: #fff;}
.phonelogin {background: #fff; color: #f63b76;}
.line {padding: 0 20%;}
.line p {border-top: .05rem solid #bbb; position: relative;}
.line p span {position: absolute; left: 50%; transform: translateX(-50%); top: -.4rem; font-size: .5rem; background: #fff; padding: 0 .25rem; color: #bbb;}
</style>

