<template>
  <div >
     <header>
      <div class="header-div" >
        <a @click="backRouter()" class="icon-left-a">
          <i class="icon-left"></i>
        </a>
        <span class="header-title">积分转赠</span>
        <img class="head_img" src="../../assets/img/cmi/record.png" @click="toGiftHistory" >
      </div>
    </header>
    <div class="gif-index">
      <div class="backcolor">
        <div class="input-view flex-row-center  input-view-b">  
          <span>对方账号:</span>
          <input  type="number" placeholder="请输入对方手机号" oninput="if(value.length>11) value=value.slice(0,11)" v-model="phone" value='phone' />
        </div>
        <div class="input-view flex-row-center">  
          <span>确认账号:</span>
          <input type="number"  placeholder="请再次输入对方手机号" oninput="if(value.length>11) value=value.slice(0,11)"  v-model="repeatPhone"  value='repeatPhone'/>
        </div>
        <!-- <div class="line-bg"></div> -->
        <div class="flex-row-center title-center">
          <span>转赠额度:</span>
        </div>
        <div class="je-view flex-row-center">
          <div class="je-box">
            <div  class="je-box-top flex-row-center">
              <input type="number" @keyup="handleInput" placeholder="请输入转赠额度" v-model="gift_num" value='gift_num' style="ime-mode:disabled">
              <p v-if="chaoe">超出额度</p>
            </div>
            <div class="je-box-bottom flex-row-center"> <span>可用额度：{{integral}}</span></div>
          </div>
        </div>
      </div>

        <div class="je-view flex-row-center">
          <div class="btn" @click="doGift" v-if="btncolor">确认</div>
          <div class="btn" style="background:#CFCFCF" v-else>确认</div>
        </div>
          <div class="flex-row-center title-bottom">
          <span>请认真核对信息，转赠后将不可退回。</span>
        </div>
    </div>

    <!-- 确认密码弹窗 -->
    <div :class="show ? 'passwordAlertHidden':'passwordAlert'" v-show="true" ref="passwordAlert">
    <!-- <div class="passwordAlertHidden" v-if="show == false" ref="passwordAlert"> -->
      <div class="content">
        <p style="text-align: center;">请输入支付密码<span @click="closePasswordAlert"></span></p>
        <div class="pswInput">
          <van-password-input
            :value="payPassword"
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
    
    <!-- <div v-show="show"  class="overlay flex-column-center">
      <div class="gift-box ">
        <div class="flex-column-center"> <span class="gift-box-span">{{show_text ? '确认支付':'输入支付密码'}}</span></div>
        <div class="box-content">
          <div class="box-content-text flex-row-center" v-show='show_text'>
            <p>是否给<span >{{phone}}</span> 用户转赠<span  > {{gift_num}}</span> 积分？ 转赠完成后，积分不可退回。</p>
            </div>
          <van-password-input :value="payPassword" type="number" v-show='!show_text' />
        </div>
        <div class="box-btn-view flex-row-center">
          <div class="box-btn-child" @click="cancel">取消</div>
          <div class="box-btn-child" @click="confirm">确认</div>
        </div>
      </div>
      <van-number-keyboard :show="true" @input="onInput" @delete="onDelete" @blur="showKeyboard = false"/>
    </div> -->
    <Dialog :showType='1' :single="single" :content="content" @viewShow="dialogShow"  v-show="dialog_show" ></Dialog>
    <Dialog :showType='2' :single="single" :singlepsd="singlepsd" :content="contentpswd" @viewShow="hass_pswd = false"  v-show="hass_pswd" @openPasswordAlert="openPasswordAlert"></Dialog>
    <Dialog :showType='2' :wangji="wangji" :chongxin="chongxin" :content="pswdcuowu" @viewShow="hasPswd"  v-show="cuowu" @openPasswordAlert1="openPasswordAlert1"></Dialog>
  </div>
</template>
<script>
import { Toast } from 'vant';
import * as USER_API from "@/api/user";
import store from "@/store";
import md5 from 'js-md5'
import { calcTimeHeader } from "@/assets/js/util.js";
import axios from 'axios';
import Dialog from '../Dialog/Dialog'

export default {
  data() {
    return {
      repeatText:'',
      show:false,
      showKeyboard:false,
      payPassword:'',
      show_text:true,
      integral:0,
      phone:'',
      repeatPhone:'',
      gift_num:'',
      user_id:'',
      value:'',
      single:false,
      singlepsd:false,
      content:"",
      contentpswd:"",
      has_pswd:false,
      hass_pswd:false,
      dialog_show:false,
      btncolor:false,
      chaoe:false,
      wangji:false,
      chongxin:false,
      cuowu:false,
      pswdcuowu:'',
    };
  },
  components: {
    Dialog
  },
  mounted() {
    if(store.state.userId){
      this.user_id = store.state.userId
    }else{
      this.user_id = this.$route.query.userId
    }
    this.getIntegral()
    
    
  },
  methods: {
    //确认转账
    doGift(){
      if(this.phone == ''){
         Toast('账号不能为空');
      }

      let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
        if (this.phone && !myreg.test(this.phone)) {
          Toast('填写账号格式不对');
          return
        }
      if(this.phone && this.repeatPhone == ''){
        Toast('确认账号不能为空');
      }
      if(this.repeatPhone && this.phone != this.repeatPhone){
        Toast('确认账号不正确');
      }
      if(this.gift_num == ''){
         Toast('转赠额度不能为空');
      }
      let gifnum = /^\d+$/
      if(this.gift_num && !gifnum.test(this.gift_num)){
        Toast('转赠额度只能输入正整数');
        return
      }

      if(this.phone != '' && this.phone == this.repeatPhone  && this.repeatPhone != '' && this.gift_num != '') {
        this.show = true
        this.checkHasPayPwd()
      }

    },
    cancel(){
      this.show = false
      this.value = ''
      this.show_text = true
    },
    confirm(){
      if(this.show_text){
        this.show_text = false
      }else{
        if(this.payPassword.length != 6){
          Toast('请输入6位支付密码');
          return
        }
        this.IntegralGive(this.payPassword)
        this.show = false
        this.show_text = true
        this.payPassword = ''
      }
    },
    openPasswordAlert() {
      this.hass_pswd = false
    },
    openPasswordAlert1() {
      this.show = true
      this.cuowu = false
      this.$(this.$refs.passwordAlert).animate({
        bottom: 0,
        left: 0
      });
    },
    handleInput(){
      let gifnum = /^\d+$/
      if(this.gift_num && this.gift_num <= this.integral && gifnum.test(this.gift_num)){
        // debugger
        this.btncolor = true
      }else{
        this.btncolor = false
      }
      if(this.gift_num > this.integral){
        this.chaoe = true
      }else{
        this.chaoe = false
      }
      
      if(this.gift_num && !gifnum.test(this.gift_num)){
        Toast('转赠额度只能输入正整数');
      }
    },
    dialogShow(){
      this.dialog_show = false
    },
    hasPswd(){
      this.hass_pswd = false
      this.getIntegral()
      this.checkHasPayPwd()
    },
     onInput(key) {
      this.payPassword = (this.payPassword + key).slice(0, 6);
      if(this.payPassword.length >= 6) {
        this.IntegralGive()
      }
    },
    onDelete() {
      this.payPassword = this.payPassword.slice(0, this.payPassword.length - 1);
    },
    toGiftHistory(){
      
        //  this.$router.push('/giftHistory' ,query:{grade1: 4})
          this.$router.push({path: '/giftHistory', query: {user_id: this.user_id}})
    },
    //查询积分
    getIntegral(){
      let params = {};
      params.userId = this.user_id;
      USER_API.getIntegralByUserId(params).then(data => {
        if(data.status == 1){
          this.integral = data.data.actAalance
        }
       })
    },
    //积分转赠
    IntegralGive(payPassword){
      let integralGivenAO = {};
      integralGivenAO.confirmPhone = this.repeatPhone;
      integralGivenAO.money = this.gift_num;
      integralGivenAO.payPassword = md5(this.payPassword);
      integralGivenAO.phone = this.phone; 
      integralGivenAO.userId = this.user_id; 
      USER_API.give(integralGivenAO).then(data => {
        if(data.status == 1){
          this.getIntegral()
          this.phone= ''
          this.gift_num =''
          this.repeatPhone=''
          //  Toast('积分转赠成功');
           this.content = '积分转赠成功'
           this.dialog_show = true
           this.closePasswordAlert()
        }else{
          // Toast(data.msg);
          this.cuowu = true
          this.pswdcuowu = '支付密码错误，请重试'
          this.wangji = true
          this.chongxin = true
          this.payPassword = ''
          this.closePasswordAlert()
        }
       })
    },
    // 检查是否有支付密码
    checkHasPayPwd(){
      console.log("-----",this.user_id)
       USER_API.checkHasPayPwd(this.user_id).then(data => {
         console.log(data)
        //  debugger
         if(data.status == 1){
            this.has_pswd = true
            this.$(this.$refs.passwordAlert).animate({
              bottom: 0,
              left: 0
            });
         }else{
           console.log('000')
          if(!this.has_pswd){
            this.contentpswd = '抱歉！你还没有设置支付密码，不能完成转赠操作。是否现在去设置支付密码？'
            this.hass_pswd = true
            this.singlepsd = true
            this.single = true
            // setTimeout(this.hasPswd,30000)
            //  Toast('您还没有设置支付密码，请前去设置');
            return
          }
         }
         
       })

    },
    closePasswordAlert() {
      // 关闭密码弹窗
      this.show = !this.show
      this.$(this.$refs.passwordAlert).animate({
        left: 0,
        bottom: '-100%',
      })
      this.payPassword = '';
    },
   
    
  },
  beforeDestroy(){
    this.hasPswd()
  },
    
};
</script>
<style lang="css" scoped>
 .header-div{background: white;display: flex;flex-direction: row;justify-content: space-between;align-items: center; border-bottom: 0.01rem solid #E6E7E8 }
 .header-div .header-title{z-index: 1}
 .head_img{width:0.36rem;height: 0.38rem;margin-right:0.3rem ;z-index: 99;}
 .flex-row-center{display: flex;flex-direction: row;align-items: center}
 .gif-index{top: 1.4rem;height: calc(100vh - 1.4rem);position: absolute;width: 100%;overflow-y: auto;background: #F2F2F2;}
 .backcolor{background: white;margin: 0 .3rem;border-radius: .2rem;padding-bottom: .3rem;}

 .input-view{ margin-right: 0.28rem}
 .input-view span{ margin: 0.28rem;font-size: .3rem;}
 .input-view input{width:4.57rem;height: 0.65rem;border:none; border-bottom:0.01rem solid #E5E5E5;padding-left:0.2rem;font-size: .3rem;}
.input-view input::-webkit-input-placeholder{color: #CFCFCF;}
 .input-view-b{margin: 0.4rem 0;}
 .line-bg{width:90%; border:0.01rem solid #E5E5E5;margin: 1.23rem 5% 0 5%}
 .title-center{width:100%; margin-top: 0.5rem;font-size:0.3rem;font-weight:500;margin-left: .28rem;}

 .je-view{ width:100%;justify-content: center;margin-top: 0.4rem}
 .je-box{width:100%;height: 2.3rem;border-radius:0.1rem;color:#999999;padding: 0 .32rem;}

 .je-box input{width:4.3rem}
 .je-box-top{width:100%;height: 60%; border-bottom: 0.01rem solid #CFCFCF;font-size: 0.38rem}
 .je-box-top p{color: #F64D3B;font-size: .26rem;margin-left:.8rem;}
 .je-box-top input{ border: 0rem;font-size: 0.6rem;font-weight: bold; }
 .je-box-top input::-webkit-input-placeholder{ color: #CFCFCF;font-size: .38rem;font-weight: normal; }

 .je-box-bottom{width:100%;height: 40%;}
 .btn{width:6.7rem;height:0.88rem;background:rgba(246,59,117,1);border-radius:44px; text-align: center;line-height:0.88rem ; color: #FFF;font-size: 0.34rem;margin-top:1.54rem}

 .title-bottom{font-size:0.24rem;font-family:PingFang-SC-Medium;font-weight:500;color:rgba(153,153,153,1);justify-content: center;margin-top: 0.2rem}
 .overlay{ position: fixed; top: 0;left: 0;width: 100%; height: 100%; background-color: rgba(0,0,0,.7);z-index: 1;justify-content: center; }
 .flex-column-center{display: flex;flex-direction: column;align-items: center;}
 .gift-box{ width:6rem;height:3.76rem;border-radius:0.2rem;background: #FFF;position: relative;}
 .box-content-text{ width:100%;justify-content: center;}
 .box-content-text p{ width:90%; font-size:0.26rem;}
 .box-content-text span{ color:#F63B75}
 .gift-box-span{ font-size:0.34rem;margin:  0.34rem 0;font-weight:500;}
 .box-btn-view{width:6rem;justify-content: center;text-align: center;line-height:0.7rem;position: absolute; bottom:0.4rem}
 .box-btn-view :last-child{border:1px solid #F63B75; background: #F63B75;color: #FFF;}
 .box-btn-child{ width:2.40rem;border:1px solid rgba(207,207,207,1);border-radius:35px;margin: 0rem 0.16rem;}


.passwordAlert {position: absolute; left: 0; bottom: -100%; width: 100%; background: #fff;overflow: hidden;}
.passwordAlertHidden {position: absolute; left: 0; bottom: -100%; width: 100%; background: #fff;}
.content {position: absolute; left: 0; bottom: -100%; background: #fff; width: 100%; padding-top: .5rem;}
.content>p {font-size: .34rem; color: #2B2B2B; padding-bottom: .34rem; margin-bottom: .7rem; border-bottom: .01rem solid #CFCFCF; position: relative;}
.content>p span {display: block; position: absolute; width: .23rem; height: .22rem; background: url('../../assets/img/integralpaid/close.png') no-repeat center; background-size: contain; right: .3rem; top: 0.1rem;}
.content .passwordBtn {display: flex; margin-top: .4rem; border-top: .01rem solid #E6E7E8;}
.content .passwordBtn a {flex: 1; height: .87rem; text-align: center; line-height: .87rem; font-size: .34rem;}
.content .passwordBtn a:nth-child(1) {border-right: .01rem solid #E6E7E8;}
.content .passwordBtn a:nth-child(2) {color: #F63B75;}
.pswInput {padding-bottom: .6rem;}

.van-number-keyboard {position: relative;}
</style>
