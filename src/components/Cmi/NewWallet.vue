<template>
  <div>
    <!-- <div class="wahead">
      <i class="icon-back back" @click="closeHtml()"></i>
      <p>积分&C米</p>
      <div @click="MixinToUrl('cmi-wallet-detail')">
        <i class="icon-tanhao"></i>
        <p>明细</p>
      </div>
    </div> -->

    <topcomom :icon="icon">积分&C米</topcomom>

    <div class="integral">
      <img src="../../assets/img/wallet/jifen_iandaizi_icon@2x.png" alt="">
      <div class="now">
        <!-- <span>8756.3</span> -->
        <p>当前积分</p>
        <span v-if="postUserByUserid.allalance != 0" v-html="postUserByUserid.allalance">0.00</span>
        <span v-if="postUserByUserid.allalance == 0">0.00</span>
        <!-- <p>当前积分</p> -->
        <h5 @click="MixinToUrl('cmi-wallet-detail')">明细<i class="icon-mingxi"></i></h5>
      </div>
      <ul>
        <li>
          <p>可用积分</p>
          <span v-if="postUserByUserid.actAalance != 0" v-html="postUserByUserid.actAalance">0.00</span>
          <span v-if="postUserByUserid.actAalance == 0">0.00</span>
          <!-- <p>可用积分</p> -->
        </li>
        <li>
          <!-- <span>652.45</span> -->
          <p>计算中的积分<i class="icon-tanhao2" @click="dialogShow"></i></p>
          <span v-if="postUserByUserid.frozonaalance != 0" v-html="postUserByUserid.frozonaalance">0.00</span>
          <span v-if="postUserByUserid.frozonaalance == 0">0.00</span>
          <!-- <p>计算中的积分<i class="icon-tanhao2" @click="cpm"></i></p> -->
        </li>
      </ul>
    </div>

    <div class="bot">
      <div @click="MixinToUrl('cmi-newdetail')">
        <i class="icon-cmi cmi"></i>
        <p>我的C米</p>
        <span v-if="postUserByUserid.integral != 0">{{postUserByUserid.integral}}<i class="icon-jiantou"></i></span>
        <span v-if="postUserByUserid.integral == 0">0<i class="icon-jiantou"></i></span>
        
      </div>
      <div @click="MIXINToDetail('','18')">
        <i class="icon-gouwu cmi"></i>
        <p>C米购物</p>
        <span><i class="icon-jiantou"></i></span>
      </div>
      <ul>
        <li @click="MIXINToDetail('','23')">
          <p>积分购物</p>
          <i class="icon-jiantou"></i>
        </li>
        <li @click="MixinToUrl('giftPoint')">
          <p>积分转赠</p>
          <i class="icon-jiantou"></i>
        </li>
        <li @click="MixinToUrl('cmi-integral-paid')">
          <p>积分代付</p>
          <i class="icon-jiantou"></i>
        </li>
        <!-- <li @click="MixinToUrl('scorePay')">
          <p>积分兑换</p>
          <i class="icon-jiantou"></i>
        </li> -->
      </ul>
    </div>

    <Dialog :showType='2' :single="single" :content="content" @viewShow="dialog_show = false"  v-show="dialog_show" ></Dialog>

    <div class="Shade"></div>
  </div>
</template>

<script>
import * as USER_API from '@/api/user'
import store from "@/store/index"
import topcomom from '@/components/common/Topcomomnew'
import Dialog from '../Dialog/Dialog'
export default {
  data() {
    return {
      // 积分
      postUserByUserid:{
        // 可用积分
        actAalance:0,
        // 冻结积分
        frozonaalance:0,
        // 可用C米
        integral:0,
        // 总积分
        allalance:0,
      },
      icon:{
        back:0
      },
      dialog_show:false,
      single:false,
      content:"",
    }
  },
  mounted() {
    this.loadPostUserByUserid()
  },
  computed:{
    userId(){
      return store.state.userId
    },
    token(){
      return store.state.token
    },
  },
  components: {
    topcomom,
    Dialog
  },
  watch:{
    userId (val) {
      if(val != '' && val != "(null)" ){
        this.loadPostUserByUserid();
      }
    },
    token(val){
      if(val != ""){
        this.loadPostUserByUserid();
      }
    },
  },
  methods: {
    loadPostUserByUserid(){
      let params = { "token":this.token, "userid":this.userId, };
      // this.loadFindIntegralList()
      USER_API.postUserByUserid(params).then(data => {
        if(data){
          this.postUserByUserid = data
          let allalance = data.actAalance + data.frozonaalance
          this.postUserByUserid.allalance = allalance.toFixed(2)
        }
      });
    },
    cpm(){
      this.$dialog({
        title: "",
        content: "你还有部分积分在计算中，计算完成后将自动转化为可用积分。",
        noOkBtn:true,
        cancelBtnTxt:'好的，我知道了',
        closeBtn:true,  //显式右上角关闭按钮
        onOkBtn(event) {  //确定按钮点击事件
          // alert("okBtn");
          // this.close(); //关闭对话框
        },
        onCancelBtn(event) {  //取消按钮点击事件，默认行为关闭对话框
          this.close()
          // alert("cancelBtn");
          // return false;  //阻止默认“关闭对话框”的行为
        },
        onCloseBtn(event) { //右上角关闭按钮点击事件
          // alert("closeBtn");
          //return false;  //阻止默认“关闭对话框”的行为
        },
        closeCallback(target) {
          // alert("will close");  //对话框关闭回调函数，无论通过何种方式关闭都会触发
        }
      });
    },
    changeAlertCon(type, sn, price, body) {
        this.showCancelBtn = true
        document.getElementsByClassName('alertFooter')[0].classList.remove('refundAlertFooter')
        this.newAlertCon = {
          img: require('../../assets/img/integralpaid/tip1.png'),
          body: `你还有部分积分在计算中，计算完成后将自动转化为可用积分。`,
          cancelBtn: '取消',
          confirmBtn: '确认'
        }
        this.activeSn = sn
        this.showNewAlert = true
    },
    dialogShow(){
      // debugger
      this.content = '你还有部分积分在计算中，计算完成后将自动转化为可用积分。'
      this.dialog_show = true
    },
  }
}
</script>

<style scoped>
#app>div{background: #F2F2F2;}
.wahead{height: 1.28rem;text-align: center;line-height: 1.6rem;font-size: .36rem;border-bottom: 1px solid #E6E7E8;position: relative;background: white;}
.wahead .back{position: absolute;left: .24rem;top: .7rem;}
.wahead p{display: inline-block;}
.wahead div{display: inline-block;position:absolute;right: .31rem;}
.wahead div p{font-size: .3rem;}

.integral{height: 3.5rem;background: url('../../assets/img/wallet/card.png');margin-top: 2rem;color: white;width: 92%;margin-left: .3rem;background-size: 100% 100%;position: relative;}
.integral img{height: .82rem;width: .82rem;position: absolute;top: -.41rem;left: 50%;transform: translateX(-50%);}
.integral .now{text-align: center;padding-top: .52rem;}
.integral .now span{font-size: .64rem;color: #ECD5A2;}
.integral .now p{font-size: .24rem;color: #A08854;}
.integral .now h5{font-size: .22rem;color: #ECD5A2;font-weight: 400;float: right;margin-top: -.6rem;margin-right: .38rem;}
.integral ul{text-align: center;margin-top: .22rem;}
.integral ul li{float: left;width: calc(100% / 2);}
/* .integral ul li:nth-child(1){border-right: .05rem solid rgba(176, 154, 104, .2);} */

.integral ul li span{font-size: .4rem;color: #ECD5A2;}
.integral ul li p{font-size: .22rem;color: #A08854;margin-top: .1rem;position: relative;margin-bottom: .06rem;}

.alertFooter {display: flex; justify-content: space-between;}
.alertFooter a {width: 2.08rem; height: .7rem; border-radius: .35rem; text-align: center; line-height: .7rem; font-size: .3rem; border: .01rem solid #F63B75;}
.alertFooter .cancel {color: #F63B75;}
.alertFooter .confirm {color: #fff; background: #F63B75;}
.refundAlertFooter {justify-content: center;}
.refundAlertFooter a {width: 3.04rem;}


.Shade{position: absolute;top: 0;bottom: 0;left: 0;right: 0;background: #F2F2F2;z-index: -1;}

.bot{height: 100%;padding: 0 .3rem;padding-top: .3rem;}
.bot>div p{display: inline-block;}
.bot>div .cmi{margin-left: .26rem;margin-right: .1rem;}
.bot>div{height: 1rem;background: white;border-radius: .1rem;line-height: 1rem;font-size: .3rem;border-top: 1px solid #f2f2f2;}
.bot span{float: right;margin-right: .26rem;color: #EBAF47;}
.bot ul{margin-top: .2rem;border-radius: .2rem;}
.bot ul li{padding: 0 .26rem;height: 1rem;background: white;line-height: 1rem;font-size: .3rem;}
.bot ul li p{border-top: 1px solid #E5E5E5;}
.bot ul li i{float: right;margin-top: -.6rem;}
.bot ul li:nth-child(1) p{border: none;}
.icon-back{width: .16rem; height: .26rem; background: url("../../assets/img/mymember/back@2x.png");background-size: 100% 100%;display: inline-block}
.icon-tanhao{width: .28rem; height: .28rem; background: url("../../assets/img/newmember/tanhao.png");background-size: 100% 100%;display: inline-block}
.icon-tanhao1{width: .24rem; height: .24rem; background: url("../../assets/img/newmember/tanhao1.png");background-size: 100% 100%;display: inline-block;position: absolute;top: .06rem;right: .66rem; }
.icon-tanhao2{width: .24rem; height: .24rem; background: url("../../assets/img/newmember/tanhao2.png");background-size: 100% 100%;display: inline-block;position: absolute;top: .06rem;right: .66rem; }
.icon-cmi{width: .28rem; height: .28rem; background: url("../../assets/img/cmi/cmi1.png");background-size: 100% 100%;display: inline-block}
.icon-jiantou{width: .12rem; height: .18rem; background: url("../../assets/img/wallet/-s-jiantou_qb_icon@3x.png");background-size: 100% 100%;display: inline-block;margin-left: .2rem;}
.icon-gouwu{width: .32rem; height: .32rem; background: url("../../assets/img/wallet/Cmgw_jifen_icon@2x.png");background-size: 100% 100%;display: inline-block;margin-left: .2rem;}
.icon-mingxi{width: .12rem; height: .18rem; background: url("../../assets/img/wallet/mingxi.png");background-size: 100% 100%;display: inline-block;margin-left: .1rem;}

</style>
