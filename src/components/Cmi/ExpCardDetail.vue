<template>
  <div class="expcarddetail">
    <div class="header">
      卡详情
      <i class="icon-back" @click="goBack"></i>
    </div>

    <div class="card" :class="cardDetailMsg.status == 0 ? '' : 'failure'">
      <i class="icon-zhuxiao" v-show="cardDetailMsg.status == 1"></i>
      <i class="icon-shixiao" v-show="cardDetailMsg.status == 2"></i>
      <p class="card_name">{{cardDetailMsg.name}}</p>
      <p class="card_number">NO:{{cardDetailMsg.cardNum}}<i class="card_price">{{cardDetailMsg.amount}}元</i></p>
    </div>

    <div class="card_content">
      <ul>
        <li><i>余额</i><i>{{cardDetailMsg.amount}}元</i></li>
        <li><i>有效期</i><i>{{cardDetailMsg.expire == 0 ? '永久' : ''}}</i></li>
        <li><i>开卡日期</i><i>{{cardDetailMsg.createTime}}</i></li>
        <li v-show="cardDetailMsg.status == 2"><i>失效日期</i><i>{{cardDetailMsg.invalidTime}}</i></li>
        <li><i>状态</i><i>{{cardDetailMsg.status == 0 ? '有效' : cardDetailMsg.status == 1 ? '注销中' : '失效'}}</i></li>
      </ul>
    </div>

    <div class="refund" @click="applicationForRefund" v-show="cardDetailMsg.status == 0">申请退余额</div>
    <div class="refundInProgress" v-show="cardDetailMsg.status == 1">退款申请中</div>

    <!-- 寄回卡片 -->
    <div class="returnCard" v-show="showReturnCard">
      <div class="return_content">
        <span>你可以寄回卡片，这将不收取任何工本费</span>
        <p>物流公司<br><input type="text" placeholder="请填写物流公司" v-model="logisticsCompany"></p>
        <p>物流单号<br><input type="text" placeholder="请填写物流单号" v-model="trackingNumber"></p>
        <div class="return_btn">
          <a href="javascript:;" class="cancel" @click="showReturnCard = false">取消</a>
          <a href="javascript:;" class="confirm" @click="clickReturnCardConfirm">确定</a>
        </div>
      </div>
    </div>

    <!-- 确认最终退款 --> 
    <div class="newAlert" v-show="showRefund">
      <div class="alertCon">
        <div class="alertHeader">
          <div class="alertImg"><img src="../../assets/img/expcard/confirm_refund.png" alt=""></div>
        </div>
        <div class="alertBody">
          申请成功！退款将在15个工作日内退回到你绑定的账户中，请注意查看。
        </div>
        <div class="alertFooter refundAlertFooter">
          <a href="javascript:;" class="confirm" @click="ikonw">好的，我知道了</a>
        </div>
      </div>
    </div>

    <!-- 弹窗 -->
    <div class="newAlert" v-show="showNewAlert">
      <div class="alertCon">
        <i class="icon-close" @click="showNewAlert = false"></i>
        <div class="alertHeader">
          <div class="alertImg"><img src="../../assets/img/expcard/light.png" alt=""></div>
        </div>
        <div class="alertBody">
          {{alertCon.body}}
        </div>
        <div class="alertFooter">
          <a href="javascript:;" class="cancel" @click="judgeAlertType">{{alertCon.cancelCon}}</a>
          <a href="javascript:;" class="confirm" @click="judgeAlertType">{{alertCon.confirmCon}}</a>
        </div>
      </div>
    </div>

    <!-- 选择银行卡弹窗 -->
    <div class="chooseBank" v-show="showBankAlert">
      <div class="content">
        <h3>选择银行</h3>
        <ul>
          <li v-for="(item, index) in bankList" :key="item.bankid" @click="chooseBankName(item, index)">
            <div><img :src="chooseBankImg(item.brankname)" alt="" class="bankImg"></div>
            <div><p class="bankName">{{item.brankname}}</p><p class="bankNumber">{{item.cardnum}}</p></div>
            <div><p class="activeCircle" v-if="activeBankIndex == index"></p><p class="circle" v-else></p></div>
          </li>
        </ul>
        <div class="bankBtn">
          <a href="javascript:;" class="cancel" @click="showBankAlert = false">取消</a>
          <a href="javascript:;" class="confirm" @click="returnCard(activeBankId)">确认</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import * as USER1_API from '@/api/user1'
import store from '@/store'
import { Dialog } from 'vant';
export default {
  data() {
    return {
      cashCardId: '', // 卡ID
      cardDetailMsg: {},
      showReturnCard: false, // 是否显示寄回卡片的弹窗
      showRefund: false, // 显示最终确认弹窗
      showNewAlert: false, // 显示其余弹窗
      showBankAlert: false, // 显示银行弹窗
      refundIsShow: true, // 1.显示‘申请退余额’  0.显示‘退款申请中’
      alertCon: {
        body: '',
        cancelCon: '',
        confirmCon: ''
      },
      logisticsCompany: '',
      trackingNumber: '',
      bankList: [],
      activeBankId: 0,
      activeBankIndex: 0,
      getCashParams: {
      }
    }
  },
  mounted() {
    this.initCardDetail()
  },
  methods: {
    applicationForRefund() {
      // 点击申请退款按钮
      let params = {
        userId: store.state.userId
      }
      console.log(params)
      USER1_API.findBankCardList(params).then(res => {
        console.log(res)
        if (res.status == 1) {
          this.bankList = res.data
          this.activeBankId = res.data[0].bankid
          this.changeNewAlert(1)
        } else {
          this.changeNewAlert(2)
        }
      })
    },
    clickReturnCardConfirm() {
      // 点击寄回卡片确定
      if (this.logisticsCompany.trim() && this.trackingNumber.trim()) {
        this.showReturnCard = false
        this.showBankAlert = true
      } else {
        Dialog.alert({
          message: '物流公司和物流单号不能为空！'
        }).then(() => {
          // on close
        });
      }
    },
    initCardDetail() {
      // 初始化卡详情
      this.cashCardId = this.$route.query.cashCardId
      USER1_API.findCardDetail(this.cashCardId).then(res => {
        console.log(res)
        if (res.data) {
          this.cardDetailMsg = res.data
        }
      })
    },
    judgeAlertType(e) {
      // 判断弹窗的类型
      let txt = e.target.innerHTML
      if (txt == '寄回卡片') {
        this.showNewAlert = false
        this.showReturnCard = true
      } else if (txt == '直接退余额') {
        this.changeNewAlert(3)
      } else if (txt == '绑定银行卡') {
        console.log('绑定银行卡')
        this.MIXINToDetail('', 33)
      } else if (txt == '确定') {
        this.showNewAlert = false
        this.showBankAlert = true
        this.logisticsCompany = ''
        this.trackingNumber = ''
      } else if (txt == '取消') {
        this.showNewAlert = false
        this.logisticsCompany = ''
        this.trackingNumber = ''
      }
    },
    returnCard(bankid) {
      // 寄回卡片(提现)
      if (bankid) {
        // 选择银行卡
        let isBill
        if (this.logisticsCompany.trim() && this.trackingNumber.trim()) {
          isBill = 0
        } else {
          isBill = 1
        }
        let params = {
          bankId: bankid,
          cashCardId: this.$route.query.cashCardId,
          company: this.logisticsCompany,
          number: this.trackingNumber,
          userId: store.state.userId,
          isBill
        }
        
        // console.log(params)
        USER1_API.getCardCash(params).then(res => {
          console.log(res)
          if (res.status == 1) {
            this.showBankAlert = false
            this.showRefund = true
            this.refundIsShow = false
          } else {
            alert('退款失败')
          }
        })
      } else {
        // 未选择银行卡
        Dialog.alert({
          message: '请选择银行卡'
        }).then(() => {
          // on close
        });
      }
      
      // this.showRefund = true
      // console.log('寄回卡片（提现）')
    },
    changeNewAlert(type) {
      // 弹窗封装
      // 1.是否直接退款  2.是否绑定银行卡  3.直接扣款提示
      if (type == 1) {
        this.showNewAlert = true
        this.alertCon = {
          body: `该体验卡还剩${this.cardDetailMsg.amount}元余额，是否申请退款？退款后将不再享受各种优惠。`,
          cancelCon: '寄回卡片',
          confirmCon: '直接退余额'
        }
      } else if (type == 2) {
        this.showNewAlert = true
        this.alertCon = {
          body: '您还没有绑定银行卡，不能申请退款余额操作',
          cancelCon: '取消',
          confirmCon: '绑定银行卡'
        }
      } else if (type == 3) {
        this.alertCon = {
          body: '直接退款将扣除部分工本费，是否确认操作',
          cancelCon: '取消',
          confirmCon: '确定'
        }
      }
    },
    chooseBankImg(bankName) {
      // 根据银行名字来选择对应图标
      if (bankName.indexOf('工商') != -1) {
        return require('../../assets/img/expcard/zhongguo_bank.png');
      } else if (bankName.indexOf('农业') != -1) {
        return require('../../assets/img/expcard/nongye_bank.png');
      } else if (bankName.indexOf('建设') != -1) {
        return require('../../assets/img/expcard/jianshe_bank.png');
      } else if (bankName.indexOf('招商') != -1) {
        return require('../../assets/img/expcard/zhaoshang_bank.png');
      } else if (bankName == '中国银行') {
        return require('../../assets/img/expcard/zhongguo_bank.png');
      }
    },
    ikonw() {
      this.showRefund = false;
      this.initCardDetail();
    },
    chooseBankName(item, index) {
      // 选择银行时默认选中
      this.activeBankId = item.bankid
      this.activeBankIndex = index
    },
    goBack() {
      this.$router.replace({
        name: 'cmi-expcard',
        params: {
          status: this.cardDetailMsg.status
        }
      })
    }
  }
}
</script>
<style scoped>
.header {text-align: center; font-size: .36rem; color: #333; font-weight: bold; padding-top: .71rem; padding-bottom: .34rem; margin-bottom: .3rem; position: relative; border-bottom: .01rem solid #cfcfcf;}

.card {width: 7.1rem; height: 2.9rem; background: #252525 url('../../assets/img/expcard/card_detail_background.png') no-repeat center; background-size: contain; margin: auto; margin-bottom: .3rem; border-radius: .2rem; padding-top: .51rem; position: relative;}
.card .card_name {font-size: .36rem; color: #FFEAB3; margin-left: .47rem; margin-bottom: 1.2rem;}
.card .card_number {font-size: .26rem; color: #FFEAB1; margin-left: .49rem; background:linear-gradient(0deg,rgba(255,202,126,1) 0%, rgba(255,238,159,1) 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent;}
.card .card_price {display: block; float: right; color: #FFEAB1; margin-right: .48rem; background:linear-gradient(0deg,rgba(255,202,126,1) 0%, rgba(255,238,159,1) 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent;}
.failure::after {content: ""; display: block; width: 100%; height: 100%; background: rgba(255,255,255,.4); position: absolute; top: 0; left: 0;}


.card_content ul {padding: 0 .24rem; margin-bottom: 1rem;}
.card_content ul li {display: flex; justify-content: space-between; align-items: center; height: 1rem; width: 100%; border-bottom: .01rem solid #E5E5E5;}
.card_content ul li i:nth-of-type(1) {font-size: .3rem; color: #333; font-weight: bold;}
.card_content ul li i:nth-of-type(2) {font-size: .3rem; color: #909090;}

.refund {width: 5.2rem; height: .88rem; border-radius: .44rem; background: #F63B75; color: #fff; font-size: .3rem; text-align: center; line-height: .88rem; margin: auto;}
.refundInProgress {width: 5.2rem; height: .88rem; border-radius: .44rem; background: #CFCFCF; color: #fff; font-size: .3rem; text-align: center; line-height: .88rem; margin: auto;}

.returnCard {position: fixed; width: 100%; height: 100%; background: rgba(0,0,0,.4); top: 0; left: 0;}
.return_content {width: 5.72rem; height: 5.92rem; background: #fff; border-radius: .2rem; padding: .47rem .49rem; position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%);}
.return_content span {color: #333; font-size: .32rem;}
.return_content p {color: #666; font-size: .28rem; line-height: .48rem;}
.return_content p:nth-of-type(1) {margin-top: .45rem;}
.return_content p:nth-of-type(2) {margin-bottom: .46rem;}
.return_content p input {width: 4.69rem; height: .7rem; border: none; background: #F2F2F2; padding-left: .25rem;}
.return_btn {display: flex; justify-content: space-around; margin-top: .3rem;}
.return_btn a {width: 2.08rem; height: .7rem; border-radius: .35rem; text-align: center; line-height: .7rem; font-size: .3rem; border: .01rem solid #F63B75;}
.return_btn .cancel {color: #F63B75;}
.return_btn .confirm {color: #fff; background: #F63B75;}

.newAlert {position: fixed; width: 100%; height: 100%; background: rgba(0,0,0,.4); top: 0; left: 0;}
.alertCon {width: 5.72rem; height: 4.32rem; position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); background: #fff; border-radius: .2rem; padding: 0 .47rem; padding-top: 1.1rem;}
.alertCon .alertHeader {width: 1.7rem; height: 1.7rem; background: #fff; border-radius: 50%; position: absolute; left: 50%; top: 0; transform: translate(-50%,-50%);}
.alertCon .alertHeader .alertImg {width: .92rem; height: .99rem; position: absolute; top: 0; right: 0; bottom: 0; left: 0; margin: auto;}
.alertCon .alertHeader .alertImg img {width: 100%; height: 100%;}
.alertCon .alertBody {font-size: .32rem; color: #333; margin-bottom: .57rem;}
.alertCon .alertFooter {display: flex; justify-content: space-between;}
.alertCon .alertFooter a {width: 2.08rem; height: .7rem; border-radius: .35rem; text-align: center; line-height: .7rem; font-size: .3rem; border: .01rem solid #F63B75;}
.alertCon .alertFooter .cancel {color: #F63B75;}
.alertCon .alertFooter .confirm {color: #fff; background: #F63B75;}

.alertCon .refundAlertFooter {justify-content: center;}
.alertCon .refundAlertFooter a {width: 3.04rem;}

.chooseBank {position: fixed; width: 100%; height: 100%; background: rgba(0,0,0,.4); top: 0; left: 0;}
.chooseBank .content {width: 5.72rem; height: 6.64rem; background: #fff; border-radius: .2rem; left: 50%; top: 50%; transform: translate(-50%,-50%); position: absolute; padding: .40rem .48rem;}
.chooseBank .content h3 {font-size: .34rem; color: #333333; text-align: center; margin-bottom: .58rem;}
.chooseBank .content li>div {float: left;}
.chooseBank .content li>div:nth-child(1) {width: .48rem; height: .48rem; margin-top: .1rem; margin-right: .18rem;}
.chooseBank .content li>div:nth-child(1) img {width: 100%; height: 100%;}
.chooseBank .content li .bankName {font-size: .28rem; color: #333333;}
.chooseBank .content li .bankNumber {font-size: .20rem; color: #999999;}
.chooseBank .content li>div:nth-child(3) {float: right;}
.chooseBank .content li .circle {width: .32rem; height: .32rem; border-radius: 50%; border: .01rem solid #999999; margin-top: .15rem;}
.chooseBank .content li .activeCircle {width: .32rem; height: .32rem; border-radius: 50%; border: .01rem solid #F63B75; margin-top: .15rem; background: url('../../assets/img/expcard/bank_active_bg.png') no-repeat center; background-size: contain;}
.chooseBank .content li::after {content: ""; display: block; width: 100%; height: 0; clear: both; overflow: hidden; visibility: hidden;}
.chooseBank .content .bankBtn {display: flex; justify-content: space-around; margin-top: .6rem;}
.chooseBank .content .bankBtn a {width: 2.08rem; height: .7rem; text-align: center; line-height: .7rem; font-size: .3rem; border: .01rem solid #F63B75; border-radius: .35rem;}
.chooseBank .content .bankBtn .cancel {color: #F63B75;}
.chooseBank .content .bankBtn .confirm {background: #F63B75; color: #fff;}

.icon-back {display: block; width: .2rem; height: .35rem; color: #999; background: url('../../assets/img/back.png') no-repeat center; background-size: contain; position: absolute; left: .24rem; top: .79rem;}
.icon-zhuxiao {display: block; position: absolute; width: 1.13rem; height: 1.04rem; background: url('../../assets/img/expcard/zhuxiaozhong.png') no-repeat center; background-size: contain; top: 0; right: 0;}
.icon-shixiao {display: block; position: absolute; width: 1.13rem; height: 1.04rem; background: url('../../assets/img/expcard/yishixiao.png') no-repeat center; background-size: contain; top: 0; right: 0;}
.icon-close {display: block; position: absolute; width: .2rem; height: .2rem; background: url('../../assets/img/expcard/close.png') no-repeat center; background-size: contain; top: .24rem; right: .24rem;}
</style>
