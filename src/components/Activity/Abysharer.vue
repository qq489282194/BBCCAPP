<template>
  <div>
    <!-- 分享者内容 -->
    <div class="sharer">
      this is bysharer content
    </div>
    <!-- 我要参与 -->
    <div class="join">
      <van-button type="primary" size="small" @click="show = true">我要参与</van-button>
      <van-button type="primary" size="small">我要分享</van-button>
    </div>
    <!-- 活动细则 -->
    <div class="actrules">
      <div class="rulestit">活动细则</div>
      <ul class="rulescon">
        <li>1.xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>2.xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
        <li>3.xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</li>
      </ul>
    </div>
    <!-- 电话弹窗 -->
    <van-popup v-model="show" :style="{ width: '60%', padding: '10px' }">
      <p class="phonetit">为了更好的服务您我们需要获取您的电话，输入电话参与活动。</p>
      <van-cell-group>
        <van-field v-model="phone" placeholder="请输入手机号" :error-message="errorMsg" @blur="errorMsg = phone.length == 11 ? '' : '手机号码格式错误'"/>
        <van-field v-model="sms" center clearable placeholder="请输入短信验证码" :error-message="errorSms">
          <van-button slot="button" size="mini" type="primary" @click="sendSms">发送验证码</van-button>
        </van-field>
      </van-cell-group>
      <p class="confirm"><van-button type="primary" size="small" @click="confirmMsg">确定</van-button></p>
    </van-popup>
  </div>
</template>
<script>
import * as ACT_API from '@/api/activity'
export default {
  data() {
    return {
      show: false,
      phone: '',
      errorMsg: '',
      errorSms: '',
      sms: '',
      newUserId: '',
      // 微信授权信息
      path: null,
      openid: '',
      unionId: '',
      oldUserId: '',
    }
  },
  mounted() {
    // this.LoginWechat();
    this.getOldUrl()
  },
  methods: {
    // 拿到绑定关系的url
    getOldUrl() {
      let urlStr = window.location.href.split('?')[1]
      let obj = {}
			if (urlStr) {
				let str = urlStr
				let firstArr = str.split('&')
				let arr = []
				firstArr.map(item => {
					obj[item.split('=')[0]] = decodeURIComponent(item.split('=')[1])
        })
      }
      this.oldUserId = obj.oldUserId
      this.newUserId = obj.userId
      console.log('父级绑定关系id：', this.oldUserId)
      console.log('当前用户id', this.newUserId)
      this.bindUserRelation()
    },
    // 绑定用户上下级关系
    bindUserRelation() {
      ACT_API.bindUserRelation(this.oldUserId, this.newUserId).then(response => {
        console.log('绑定关系是否成功', response.msg)
      })
    },
    // 发送信息
    sendSms() {
      let params = {
        phone: this.phone
      }
      ACT_API.sendSms(params).then(response => {
        console.log('发送信息', response)
      })
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
    wejoin() {
      console.log(1)
    }
  }
}
</script>
<style lang="css" scoped>
.sharer {width: 100%; height: 8rem; background: pink; text-align: center; line-height: 8rem; margin-bottom: .8rem;}
.join {text-align: center; margin-bottom: .8rem;}
.actrules {width: 100%; border-top: .02rem solid #bbb; padding-top: .2rem; color: #101010;}
.rulestit {margin: auto; font-size: .36rem; text-align: center; margin-bottom: .04rem;}
.rulescon li {font-size: .28rem; margin-left: .4rem; margin-bottom: .2rem;}
.phonetit {font-size: .28rem; line-height: .28rem; margin-bottom: .16rem;}
.confirm {padding-top: .16rem; text-align: center;}
</style>

