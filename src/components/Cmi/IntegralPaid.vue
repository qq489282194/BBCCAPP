<template>
  <div style="min-height: 100vh;">
    <div class="header" ref="header">
      <i class="icon icon-back" @click="backRouter()"></i>
      积分代付
    </div>

    <div class="nav" ref="nav">
      <ul>
        <li v-for="(item, index) in navList" :key="index" :class="navActiveNum == index ? 'active' : ''" @click="changeNavActiveNum(index)">{{item}}</li>
      </ul>
    </div>

    <div class="main1" v-show="!payList.length">
      <div>
        <p class="nullImg"><img src="../../assets/img/null.png" alt=""> 暂无数据 ~</p>
      </div>
    </div>

    <div class="main" ref="main" v-show="payList.length">
      <div class="conList" v-for="item in payList">
        <div class="part"><p class="conTime">{{item.create_time | changeDate}}</p><p class="conType">{{item.order_status_text}}</p></div>
        <div class="part part2" v-for="item1 in item.sku_list" :key="item1.seller_id" @click="toPayListDetail(item)">
          <p class="conName"><img :src="item1.goods_image" alt="">{{item1.name}}</p>
          <p class="conPrice">
            ￥{{item1.original_price}}<br>
            <span class="conNumber">× {{item1.num}}</span><br>
          </p>
        </div>
        <span class="conAllPrice">总价：<u>￥</u><i>{{item.order_price}}</i></span>
        <div class="part part3">
          <p>对方信息</p>
          <p>账号：<img :src="item.others_pay_order.owner_icon?'https://oss.meibbc.com/'+item.others_pay_order.owner_icon:require('../../assets/img/1123.png')" alt="">{{item.others_pay_order.owner_nick_name}}</p>
          <p>手机号：{{item.others_pay_order.owner_phone}}</p>
        </div>
        <div class="part part4" v-show="item.order_status == 'CONFIRM'">
        <!-- <div class="part part4"> -->
          <a href="javascript:;" @click="ignorePayList(item.others_pay_order.order_sn)">忽略</a>
          <a href="javascript:;" class="confirmBtn" @click="changeAlertCon(0, item.sn, item.order_price)">确认支付</a>
        </div>
      </div>
    </div>

    <!-- 弹窗 -->
    <div class="newAlert" v-show="showNewAlert">
      <div class="alertCon">
        <div class="alertHeader">
          <div class="alertImg"><img :src="newAlertCon.img" alt=""></div>
        </div>
        <div class="alertBody" v-html="newAlertCon.body"></div>
        <div class="alertFooter">
          <a href="javascript:;" class="cancel" v-show="showCancelBtn" @click="showNewAlert = false">{{newAlertCon.cancelBtn}}</a>
          <a href="javascript:;" class="confirm" @click="clickConfirmBtn">{{newAlertCon.confirmBtn}}</a>
        </div>
      </div>
    </div>

    <!-- 确认密码弹窗 -->
    <div class="passwordAlert" v-show="showPasswordAlert" ref="passwordAlert">
      <div class="content">
        <p style="text-align: center;">请输入支付密码<span @click="closePasswordAlert"></span></p>
        <div class="pswInput">
          <van-password-input
            :value="value"
          />
        </div>
        <!-- <div class="passwordBtn">
          <a href="javascript:;" @click="cancelPassword">取消</a>
          <a href="javascript:;" @click="confirmPassword">确定</a>
        </div> -->
        <div>
          <van-number-keyboard
            :show="true"
            @input="onInput"
            @delete="onDelete"
            @blur="showKeyboard = false"
          />
        </div>
      </div>
    </div>

    <Dialogg :showType='2' :single="single" :singlepsd="singlepsd" :content="contentpswd" @viewShow="hasPswd"  v-show="hass_pswd" @openPasswordAlert="openPasswordAlert"></Dialogg>
    <Dialogg :showType='2' :wangji="wangji" :chongxin="chongxin" :content="pswdcuowu" @viewShow="hasPswd"  v-show="cuowu" @openPasswordAlert1="openPasswordAlert1"></Dialogg>
  </div>
</template>

<script>
import * as USER_API from '@/api/user'
import * as USER_API3 from '@/api/user3'
import store from '@/store'
import { Dialog } from 'vant';
import Dialogg from '../Dialog/Dialog'
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      navList: ['全部', '进行中', '已完成', '取消'],
      navActiveNum: 0,
      showNewAlert: false,
      showCancelBtn: true,
      showKeyboard: false,
      showPasswordAlert: true,
      value: '',
      payList: [],
      activeSn: '',
      payListParams: {
        goods_name: '',
        order_status: '',
        page_no: 1,
        page_size: 10
      },
      newAlertCon: {
        img: '',
        body: '',
        cancelBtn: '',
        confirmBtn: ''
      },
      single:false,
      singlepsd:false,
      contentpswd:"",
      hass_pswd:false,
      wangji:false,
      chongxin:false,
      cuowu:false,
      pswdcuowu:'',
    }
  },
  filters: {
    changeDate(date) {
      date = date * 1000
      let Year = new Date(date).getFullYear()
      let Month = new Date(date).getMonth() + 1
      let Day = new Date(date).getDate()
      return `${Year}-${Month}-${Day}`
    }
  },
  components: {
    Dialogg
  },
  mounted() {
    this.initPayList();
    // this.changeAlertCon(0);
  },
  methods: {
    ignorePayList(order_sn) {
      // 忽略订单信息
      Dialog.confirm({
        message: '确认忽略订单吗？'
      }).then(() => {
        // on confirm
        USER_API3.ignorePayList(order_sn).then(res => {
          console.log(res)
          if (res.message == 'success') {
            this.initPayList()
          }
        })
      }).catch(() => {
        // on cancel
      });
    },
    hasPswd(){
      this.hass_pswd = false
    },
    openPasswordAlert1() {
      this.cuowu = false
      this.$(this.$refs.passwordAlert).fadeIn();
    },
    initPayList(order_status = 'ALL') {
      // 初始化列表
      let params = {
        ...this.payListParams,
        order_status,
      }
      USER_API3.getPayList(params).then(res => {
        console.log(res)
        if (res.data) {
          this.payList = res.data
        }
      })
    },
    changeNavActiveNum(index) {
      this.navActiveNum = index
      window.scrollTo(0,0);
      switch (this.navActiveNum) {
        case 0: this.initPayList(); break;
        case 1: this.initPayList('CONFIRM'); break;
        case 2: this.initPayList('COMPLETE'); break;
        case 3: this.initPayList('CANCELLED'); break;
      }
    },
    clickConfirmBtn(e) {
      if (e.target.innerHTML == '确认') {
        // 表示需要进行支付
        // this.changeAlertCon(1)
        let user_id = store.state.userId

        USER_API.checkHasPayPassword(user_id).then(res => {
          console.log(res)
          if (res.status == 1) {
            // this.showPasswordAlert = true
            this.showNewAlert = false
            this.$(this.$refs.passwordAlert).fadeIn();
          } else {
            // Dialog.alert({
            //   message: '请前去设置密码'
            // }).then(() => {
            //   // on close
            // })
            this.showNewAlert = false
            this.hass_pswd = true
            this.contentpswd = '抱歉！你还没有设置支付密码，不能完成支付操作。是否现在去设置支付密码？'
            
            this.singlepsd = true
            this.single = true
          }
          // this.hass_pswd = false
        })
      } else {
        // 表示取消弹窗
        this.hass_pswd = false
        this.showNewAlert = false
      }
    },
    closePasswordAlert() {
      // 关闭密码弹窗
      this.$(this.$refs.passwordAlert).fadeOut();
      this.value = '';
    },
    openPasswordAlert() {
      this.hass_pswd = false
    },
    changeAlertCon(type, sn, price, body) {
      // 对弹窗的封装 0.是否支付 1.支付成功 2.支付失败
      if (type == 0) {
        this.showCancelBtn = true
        document.getElementsByClassName('alertFooter')[0].classList.remove('refundAlertFooter')
        this.newAlertCon = {
          img: require('../../assets/img/integralpaid/tip1.png'),
          body: `<span style="text-align: left; display: block;">该笔交易将消耗<i style="color: #F63B75">${price}</i>积分，确认进行支付？</span>`,
          cancelBtn: '取消',
          confirmBtn: '确认'
        }
        this.activeSn = sn
        this.showNewAlert = true
      } else if (type == 1) {
        this.showCancelBtn = false
        document.getElementsByClassName('alertFooter')[0].classList.add('refundAlertFooter')
        this.newAlertCon = {
          img: require('../../assets/img/integralpaid/tip_success.png'),
          body: `积分代付成功！`,
          confirmBtn: '好的，我知道了'
        }
        this.showNewAlert = true
      } else if (type == 2) {
        this.showCancelBtn = false
        document.getElementsByClassName('alertFooter')[0].classList.add('refundAlertFooter')
        this.newAlertCon = {
          img: require('../../assets/img/integralpaid/tip_failed.png'),
          body,
          confirmBtn: '好的，我知道了'
        }
        this.showNewAlert = true
      }
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
      if (this.value && this.value.length == 6) {
        let params = {
          pay_pwd: this.$md5(this.value),
          sn: this.activeSn,
          trade_type: 'order'
        }
        USER_API3.confirmPay(params).then(res => {
          // this.showPasswordAlert = false
          this.closePasswordAlert()
          this.showNewAlert = false
          this.value = ''
          console.log(res)
          if (res.code == 0) {
            this.changeAlertCon(1)
            this.initPayList()
          } else {
            if(res.code == 2) {
              this.cuowu = true
              this.pswdcuowu = '支付密码错误，请重试'
              this.wangji = true
              this.chongxin = true
              this.payPassword = ''
            }else {
              this.changeAlertCon(2, '', '', res.message)
            }
          }
          // Dialog.alert({
          //   message: res.message
          // }).then(() => {
          //   // on close
          // });
        }).catch(err => {
          console.log(err.response, '==================')
          // this.showPasswordAlert = false
          this.closePasswordAlert()
          this.showNewAlert = false
          this.value = ''
          this.changeAlertCon(2, '', '', '<span style="text-align: left; display: block;">支付失败，您没有足够的积分！</span>')
          // Dialog.alert({
          //   message: err.response.data.message
          // }).then(() => {
          //   // on close
          // });
        })
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    cancelPassword() {
      // 取消支付
      if (this.value) {
        this.value = ''
      }
      // this.showPasswordAlert = false
      this.closePasswordAlert()
      this.showNewAlert = true
    },
    confirmPassword() {
      // 确认支付
      if (this.value && this.value.length == 6) {
        let params = {
          pay_pwd: this.$md5(this.value),
          sn: this.activeSn,
          trade_type: 'order'
        }
        USER_API3.confirmPay(params).then(res => {
          // this.showPasswordAlert = false
          this.closePasswordAlert()
          this.showNewAlert = false
          this.value = ''
          console.log(res)
          if (res.code == 0) {
            this.changeAlertCon(1)
            this.initPayList()
          } else {
            this.changeAlertCon(2, '', '', res.message)
          }
          // Dialog.alert({
          //   message: res.message
          // }).then(() => {
          //   // on close
          // });
        }).catch(err => {
          console.log(err.response, '==================')
          // this.showPasswordAlert = false
          this.closePasswordAlert()
          this.showNewAlert = false
          this.value = ''
          this.changeAlertCon(2, '', '', '<span style="text-align: left; display: block;">支付失败，您没有足够的积分！</span>')
          // Dialog.alert({
          //   message: err.response.data.message
          // }).then(() => {
          //   // on close
          // });
        })
      }
    },
    toPayListDetail(all, item) {
      this.$router.push({
        name: 'cmi-integral-paid-detail',
        params: {
          all
        }
      })
    },
  }
}
</script>

<style scoped>
.header {text-align: center; position: fixed; width: 100%; height: 1.4rem; padding-top: .63rem; font-size: .36rem; color: #333333; background: #fff;}

.nav {position: fixed; top: 1.4rem; left: 0; width: 100%; background: #fff;}
.nav ul {display: flex;}
.nav ul li {flex: 1; text-align: center; font-size: .28rem; color: #666; padding: .2rem 0;}
.nav ul .active {color: #F63B75; position: relative;}
.nav ul .active::after {content: ""; display: block; width: .4rem; height: .06rem; background: #F63B75; position: absolute; left: 50%; bottom: 0; transform: translateX(-50%);}

.main1 {background: #fff; padding-top: 2.4rem;}

.main {background: #F2F2F2; padding-top: 2.4rem; min-height: 100vh;}
.main .conList {width: 100%; background: #fff; margin-bottom: .2rem; padding: .25rem .25rem;}
.main .part {display: flex; justify-content: space-between;}
.main .part2 {padding-bottom: .1rem;}
.main .conTime {font-size: .26rem; color: #999999; margin-bottom: .2rem;}
.main .conType {font-size: .26rem; color: #F63B75;}
.main .conName {font-size: .26rem; color: #303030; flex: 3.2;}
.main .conName img {width: 1.4rem; height: 1.4rem; margin-right: .21rem; float: left;}
.main .conPrice {font-size: .26rem; color: #666; flex: .8; text-align: right;}
.main .conPrice .conNumber {font-size: .22rem; display: inline-block; margin-bottom: .5rem;}
.main .conAllPrice {font-size: .24rem; color: #333; white-space: nowrap; border-bottom: .01rem solid #E5E5E5; padding-bottom: .2rem; margin-bottom: .2rem; display: block; text-align: right;}
.main .conAllPrice u {text-decoration: none; color: #F63B75; font-size: .22rem;}
.main .conAllPrice i {color: #F63B75; font-size: .31rem;}
.main .part3 {flex-direction: column; font-size: .26rem;}
.main .part3 p {color: #666; line-height: .45rem; white-space: nowrap;}
.main .part3 p:nth-child(1) {color: #333;}
.main .part3 p:nth-child(2) img {width: .4rem; height: .4rem; display: inline-block; margin-right: .1rem; border-radius: 50%;}
.main .part4 {justify-content: flex-end;}
.main .part4 a {width: 1.5rem; height: .52rem; border-radius: .26rem; border: .02rem solid #909090; color: #666; font-size: .26rem; text-align: center; line-height: .52rem; margin-left: .3rem;}
.main .part4 .confirmBtn {border-color: #F63B75; color: #F63B75;}

.newAlert {position: fixed; width: 100%; height: 100%; background: rgba(0,0,0,.4); top: 0; left: 0;}
.alertCon {width: 5.36rem; position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); background: #fff; border-radius: .2rem; padding-top: .92rem; padding-bottom: 1.44rem;}
.alertCon .alertHeader {width: 1.4rem; height: 1.4rem; background: #fff; border-radius: 50%; position: absolute; left: 50%; top: 0; transform: translate(-50%,-50%);}
.alertCon .alertHeader .alertImg {width: 100%; height: 100%; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto;}
.alertCon .alertHeader .alertImg img {width: 100%; height: 100%;}
.alertCon .alertBody {font-size: .32rem; color: #333; text-align: center; padding: 0 .47rem; font-family: PingFang-SC-Bold; font-weight: bold;}
.alertCon .alertFooter {display: flex; justify-content: space-between; border-top: .01rem solid #E6E7E8; position: absolute; bottom: 0; left: 0; width: 100%;}
.alertCon .alertFooter a {height: .87rem; flex: 1; text-align: center; line-height: .87rem; font-size: .34rem;}
.alertCon .alertFooter a:nth-child(1) {border-right: .01rem solid #E6E7E8;}
.alertCon .alertFooter .cancel {color: #999;}
.alertCon .alertFooter .confirm {color: #F63B75;}

.alertCon .refundAlertFooter {justify-content: center;}
.alertCon .refundAlertFooter a {width: 3.04rem;}

.passwordAlert {width: 100%; height: 100%; background: rgba(0,0,0,.4); position: fixed; left: 0; top: 0; display: none;}
/* .passwordAlert {position: absolute; left: 0; bottom: 0; width: 100%; background: #fff;} */
.passwordAlert .content {position: absolute; left: 0; bottom: 0; background: #fff; width: 100%; padding-top: .5rem;}
.passwordAlert .content>p {font-size: .34rem; color: #2B2B2B; padding-bottom: .34rem; margin-bottom: .7rem; border-bottom: .01rem solid #CFCFCF; position: relative;}
.passwordAlert .content>p span {display: block; position: absolute; width: .23rem; height: .22rem; background: url('../../assets/img/integralpaid/close.png') no-repeat center; background-size: contain; right: .3rem; top: 0.1rem;}
.passwordAlert .content .passwordBtn {display: flex; margin-top: .4rem; border-top: .01rem solid #E6E7E8;}
.passwordAlert .content .passwordBtn a {flex: 1; height: .87rem; text-align: center; line-height: .87rem; font-size: .34rem;}
.passwordAlert .content .passwordBtn a:nth-child(1) {border-right: .01rem solid #E6E7E8;}
.passwordAlert .content .passwordBtn a:nth-child(2) {color: #F63B75;}
.pswInput {padding-bottom: .6rem;}

.van-number-keyboard {position: relative;}

.nullImg {width: 4rem; height: 4rem; margin: 2rem auto; text-align: center; font-size: .26rem; color: #999;}
.nullImg img {width: 100%; height: 100%; margin-bottom: .4rem;}

.icon {display: block;}
.icon-back {width: .2rem; height: .35rem; background: url('../../assets/img/back.png') no-repeat center; background-size: contain; position: absolute; left: .24rem; top: .70rem;}
</style>
