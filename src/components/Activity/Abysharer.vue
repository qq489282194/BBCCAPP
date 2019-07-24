<template>
  <div>
    <!-- 分享者内容 -->
    <div class="sharer">
      this is bysharer content
    </div>
    <!-- 我要参与 -->
    <div class="join">
      <van-button type="primary" size="small" @click="show = true">我要参与</van-button>
      <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要分享</van-button>
    </div>
    <!-- 活动细则 -->
    <Arules :rulesShow="false"></Arules>
    <!-- 电话弹窗 -->
    <div class="shade" v-show="show">
      <div class="popup">
        <p class="pop_tit">输入手机号码，完成身份认领即可开启商家拓展，后续我们也会为您提供更好的服务。</p>
        <div class="phoneNum"><input type="text" placeholder="请输入手机号"></div>
        <div class="phoneSms"><input type="text" placeholder="输入验证码"><span class="sendSms" @click="toClick && sendSms()" ref="sendSms">获取验证码</span></div>
        <a href="javascript:;" class="confirm">确定</a>
      </div>
    </div>
    <!-- <van-popup v-model="show" :style="{ width: '60%', padding: '10px' }">
      <p class="phonetit">为了更好的服务您我们需要获取您的电话，输入电话参与活动。</p>
      <van-cell-group>
        <van-field v-model="phone" placeholder="请输入手机号" :error-message="errorMsg" @blur="errorMsg = phone.length == 11 ? '' : '手机号码格式错误'"/>
        <van-field v-model="sms" center clearable placeholder="请输入短信验证码" :error-message="errorSms">
          <van-button slot="button" size="mini" type="primary" @click="sendSms">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <p class="confirm"><van-button type="primary" size="small" @click="confirmMsg">确定</van-button></p>
    </van-popup> -->
  </div>
</template>
<script>
import * as ACT_API from '@/api/activity'
import Arules from '@/components/Activity/Arules'
export default {
  data() {
    return {
      show: true,
      rulesShow: false,
      phone: '',
      errorMsg: '',
      errorSms: '',
      sms: '',
      toClick: true,
      // 微信授权信息
      oldUserId: '',
      data_oldUserId: '',
      data_newUserId: '',
      toShareUrl: '',
    }
  },
  components: {
    Arules
  },
  mounted() {
    if (!localStorage.getItem('openid') && !localStorage.getItem('unionId')) {
      this.toShareUrl = window.location.href
      let oldUrl = window.location.search.slice(1)
      this.oldUserId = oldUrl.split('=')[1]
      this.$getShopAuthorize('Login', (res)=>{
        console.log(res,'-----微信授权Login------')	
      }, this.oldUserId)
    } else {
      let urlStr = window.location.href
      this.toShareUrl = urlStr.replace('/bbc-personal', '') + '?oldUserId=' + localStorage.getItem('oldUserId')
      this.bindUserRelation()
    }
  },
  methods: {
    // 绑定用户上下级关系
    bindUserRelation() {
      this.data_oldUserId = localStorage.getItem('oldUserId')
      this.data_newUserId = localStorage.getItem('userId')
      ACT_API.bindUserRelation(this.data_oldUserId, this.data_newUserId).then(response => {
        console.log('绑定关系是否成功', response.msg)
      })
    },
    // 发送信息
    sendSms() {
      let _this = this
      let count = 60
      let countDownTimer = setInterval(() => {
        this.toClick = false
        count -= 1
        this.$refs.sendSms.innerHTML = `${count}s后重新获取`
        if (count <= 0) {
          clearInterval(countDownTimer)
          this.toClick = true
          this.$refs.sendSms.innerHTML = `获取验证码`
        }
      }, 1000)
      let params = {
        phone: this.phone
      }
      // ACT_API.sendSms(params).then(response => {
      //   console.log('发送信息', response)
      // })
    },
    // 确认信息
    confirmMsg() {
      let params = {
        recive: this.phone,
        code: this.sms
      }
      ACT_API.checkCode(params).then(response => {
        console.log('验证码', response)
      })
    },
    // 分享模块
    shareFun(type,typeNumber) {
      let title = ''
      let description = "";
      let imgSrc = "";
      let hostUrl = this.toShareUrl
      // let hostUrl = this.article.shareUrl
      let activityId = "";
      this._system_shareTo(title,description,imgSrc,hostUrl,"",activityId,type);
    }
  }
}
</script>
<style lang="css" scoped>
.sharer {width: 100%; height: 8rem; background: pink; text-align: center; line-height: 8rem; margin-bottom: .8rem;}
.join {text-align: center; margin-bottom: .8rem;}

/* 电话弹窗 */
.shade {width: 100%; height: 100%; background: rgba(0,0,0,.4); position: fixed; top: 0; left: 0;}
.popup {width: 5.8rem; height: 5.76rem; border-radius: .2rem; background: #fff; position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%);}
.pop_tit {font-size: .26rem; color: #333; font-family: 'PingFang-SC-Medium'; width: 5rem; margin: 0 auto; margin-top: 1.16rem; margin-bottom: 0.43rem; line-height: .42rem;}
.popup div {width: 5.02rem; height: .7rem; border: .01rem solid #cfcfcf; margin: auto; margin-bottom: .3rem; border-radius: .1rem; position: relative;}
.popup input {border: none; width: 100%; height: 100%; float: left; padding-left: .21rem;}
.sendSms {position: absolute; font-size: .22rem; color: #F63B75; right: .21rem; top: .18rem;}
.confirm {display: block; position: absolute; width: 2.3rem; height: .7rem; background:linear-gradient(0deg,rgba(81,234,236,1),rgba(89,67,197,1)); border-radius: .04rem; font-size: .32rem; color: #fff; text-align: center; line-height: .7rem; left: 1.75rem; bottom: 0.53rem;}
</style>

