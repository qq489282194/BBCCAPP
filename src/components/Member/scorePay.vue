<template>
  <div>
        <div class="ycontainer">
            <div class="header"><img @click="backRouter()" src="../../assets/img/mymember/back@2x.png" class="icon-back">积分兑换</div>
            <div class="bg">
              <img src="../../assets/img/invitation/duihuanbg.png" alt=""> 
              
            </div>
            <div @click="toCard" class="tiyanka">我的体验卡</div>
            <div class="content">
                  <div class="list">
                        <div v-for="(item,index) in listdata" @click="choose(item)" :key="index" :class="['li',{'active': (item.id == choosed.id)}]">
                              {{item.label}}元
                        </div>
                        
                  </div>
                  <div @click="toGet" class="btn">立即兑换</div>
                  <div class="desc">注：不同门店享受的服务可能有所差异，详情请咨询提供服 务的具体门店或咨询客服。</div>
            </div>
        </div>
        <div v-if="ttt" class="ttt">
          <div class="taa">请选择金额</div>
        </div>
        <confirm ref="myConfirm" @userBehavior="userBehavior"></confirm>

        <!-- 确认密码弹窗 -->
        <div class="passwordAlert" v-show="showPasswordAlert">
          <div class="content">
            <p>请输入支付密码：</p>
            <van-password-input
              :value="value"
              info="密码为 6 位数字"
              @focus="toFocus"
            />
            <div class="passwordBtn">
              <a href="javascript:;" @click="cancelPassword">取消</a>
              <a href="javascript:;" @click="confirmPassword">确定</a>
            </div>
          </div>
          <van-number-keyboard
            :show="showKeyboard"
            @input="onInput"
            @delete="onDelete"
            @blur="showKeyboard = false"
          />
        </div>

  </div>
</template>
<script>
import * as USER_API3 from '@/api/user3'
import confirm from '../../components/common/myConfirm2'
import { setTimeout } from 'timers';
import * as API_score from '@/api/score.js';
import { Dialog } from 'vant';
export default {
  name: 'goodList',
  props: {
    goodsList: {
      type: Array,
      default: () => {
        return []
      }
    }
  },
  components: {
      confirm
  },
  data(){
        return {
            showNewAlert: false,
            showCancelBtn: true,
            showKeyboard: false,
            showPasswordAlert: false,
            value: '',
            ttt: false,
            user_id: '',
            choosed: {},
            listdata: [
              {
                  label: '100',
                  id: 1
              },
              {
                  label: '300',
                  id: 2
              },
              {
                  label: '500',
                  id: 3
              },
              {
                  label: '1000',
                  id: 4
              }
            ],
            sss: ''
        }
  },
  mounted () {
    // console.log('---===----')
    if(this.$store.state.userId&&this.$store.state.userId!='(null)'){
      this.user_id = this.$store.state.userId
    }else{
      window['setUserId'] = function(userId){
        store.commit('changeUserId',userId)
      };
      window['setToken'] = function(token){
        store.commit('changeToken',token)
      };
      this.MIXINUserId();
    }
  },
  methods: {
      toFocus(){
        this.showKeyboard = true
      },
      setUserId(userId){
        this.user_id = userId;
      },
      toCard(){
        this.$router.push({path: '/cmi/expcard'})
      },
      toGetCard(data){
        let params = {
              userId: this.user_id,
              // userId: 'fff04119e87d40ef8297bb715649bd86',
              money: data.money,
              payPassword: data.payPassword
            }
        this.showPasswordAlert = false;
        API_score.getCard(params).then(res=>{
          this.sss = '';
          this.value = '';
          console.log('------',res);
          // if(res.status == -1){
          if(res.status != 1){
            this.$refs.myConfirm.show('',{
              cancelText: '取消',
              confirmText: '好的，我知道了',
              data: {img: require('../../assets/img/invitation/2.png')},
              titleText: '提示',
              title: true,
              html: `<div style="text-align:center;line-height:0.5rem;">
                    <p>${res.msg}</p>
              </div>`,
                type: 'cancel'
            })
          }else{
            this.$refs.myConfirm.show('',{
              cancelText: '取消',
              confirmText: '好的，我知道了',
              data: {img: require('../../assets/img/invitation/3.png')},
              titleText: '提示',
              title: true,
              html: `<div style="text-align:center;line-height:0.5rem;">
                    <p>你成功购买了${this.choosed.label}元线下体验卡</p>
              </div>`,
                type: 'cancel'
            })
          }
        }).catch(()=>{
          
          
        })
      },
      userBehavior(type,data){
        if(type=='clickConfirm'){
          console.log('data',data)
          if(data.type=='trade'){
            console.log('ppp')
            this.sss = data;
            this.showPasswordAlert = true;
            this.toFocus();
            // setTimeout(()=>{
            //   this.$refs.myConfirm.show('',{
            //     cancelText: '取消',
            //     confirmText: '确认',
            //     data: {img: require('../../assets/img/invitation/3.png'),type: 'trade'},
            //     titleText: '提示',
            //     title: true,
            //     html: `<div style="padding:0 0.5rem;text-align:center;line-height:0.5rem;">
            //           <p>你成功购买了100元线下体验卡</p>
            //     </div>`,
            //       type: 'cancel'
            //   })
            // },3000)
            
          }    
        }
      },
    choose(item){
      this.choosed = item;
    },
    toGoodDetail(goods_id){
      this.$router.push({path: '/Productdetails', query: {goods_id: goods_id}})
    },
    addShopCart(id) {
      this.$emit('addShopCart', id)
    },
    toGet(){
      let self = this;
      if(this.choosed.id){
         this.$refs.myConfirm.show('',{
            cancelText: '取消',
            confirmText: '确认',
            data: {img: require('../../assets/img/invitation/1.png'),type: 'trade',money: self.choosed.label},
            titleText: '提示',
            title: true,
            html: `<div style="padding:0 0rem;text-align:center;line-height:0.5rem;">
                  <p>该笔交易将消耗 <span style="color:rgba(246, 59, 117, 1)">${self.choosed.label}</span> 积分</p>
                  <p>确认进行支付？</p>
            </div>`,
              type: 'confirm'
         })
      }else{
        this.ttt = true;
        setTimeout(()=>{
          this.ttt = false
        },2000)
        
      }
      // else{
      //       this.$refs.myConfirm.show('',{
      //       cancelText: '否',
      //       confirmText: '好的，我知道了',
      //       data: {img: require('../../assets/img/invitation/2.png')},
      //       titleText: '提示',
      //       title: true,
      //       html: `<div style="padding:0 0.5rem;text-align:center;line-height:0.5rem;">
      //             <p>支付失败！</p>
      //             <p>你没有足够的积分</p>
      //       </div>`,
      //         type: 'cancel'
      //       })
      // }
      
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
        this.$http({
					method: 'get',
					url: `${this.GLOBAL.baseURLUser}api/v1/user/checkHasPayPassword/${user_id}`,
					headers: {ContentType: 'application/x-www-form-urlencoded',	}
				}).then(res => {
          console.log(res)
          if (res.data.status ==1) {
            this.showPasswordAlert = true
          } else {
              Dialog.alert({
                message: '请前去设置支付密码'
              }).then(() => {
                // on close
              });
          }
          // this.is_pwd = res.data.status != -1 
				})
      } else {
        // 表示取消弹窗
        this.showNewAlert = false
      }
    },
    changeAlertCon(type, sn, price) {
      // 对弹窗的封装 0.是否支付 1.支付成功 2.支付失败
      if (type == 0) {
        this.showCancelBtn = true
        document.getElementsByClassName('alertFooter')[0].classList.remove('refundAlertFooter')
        this.newAlertCon = {
          img: require('../../assets/img/integralpaid/tip1.png'),
          body: `该笔交易将消耗${price}积分，确认进行支付？`,
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
      } else if (type == 2) {
        this.showCancelBtn = false
        document.getElementsByClassName('alertFooter')[0].classList.add('refundAlertFooter')
        this.newAlertCon = {
          img: require('../../assets/img/integralpaid/tip_failed.png'),
          body: `支付失败！你没有足够的积分！`,
          confirmBtn: '好的，我知道了'
        }
      }
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    cancelPassword() {
      // 取消支付
      if (this.value) {
        this.value = ''
      }
      this.showPasswordAlert = false
      this.showNewAlert = false
    },
    confirmPassword() {
      // 确认支付
      if (this.value && this.value.length == 6) {
        let params = {
          pay_pwd: this.$md5(this.value),
          sn: this.activeSn,
          trade_type: 'order'
        }
        let pp = this.sss;
        
        pp.payPassword = this.$md5(this.value);
        this.toGetCard(pp)
        // USER_API3.confirmPay(params).then(res => {
        //   this.showPasswordAlert = false
        //   this.showNewAlert = false
        //   console.log(res)
        //   Dialog.alert({
        //     message: res.message
        //   }).then(() => {
        //     // on close
        //   });
        // })
      }
    },
  }
}
</script>
<style lang="scss" scoped>
.icon-back{ 
  position: absolute;
  width: .28rem;
  height: .32rem;
  // border: 1px solid #999;
  // border-top-color: transparent;
  // border-right-color: transparent;
  // transform: rotate(45deg);
  left: 0.4rem;
  bottom: .3rem;
}
.ycontainer{
  height: 100vh;
  display: flex;
  flex-direction: column;
  .header{
      text-align: center;
      line-height: 0.8rem /* 50/100 */;
      padding-top: .6rem;
      // background: #000;
      border-bottom: 1px solid #f1f1f1;
      position: relative;
      color: #333;
      flex: 0 0 1rem; /* 40/100 */
      font-size: .36rem /* 36/100 */;
      box-sizing: border-box;
  }
  .bg{
      // background: rgba(241, 223, 198, 1);
      position: absolute;
      top: 1.4rem;
      left: 0;
      width: 100%;
      height: 9.3rem;
      z-index: -1;
      
  }
  .tiyanka{
      position: absolute;
      top: 2.0rem;
      right: 0;
      font-size: .24rem;
      color: #fff;
      padding: 0.14rem 0.1rem .14rem .3rem;
      border-top-left-radius: 0.4rem;
      border-bottom-left-radius: 0.4rem;
      background: linear-gradient(to right,#FC8E5D,#FD6E5D);
      z-index: 100;
    }
  .content{
        flex: 1;
        padding: 5.0rem 0.2rem 0 /* 296/100 */;
        box-sizing: border-box;
      //   height: 100%;
        .list{
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;
              margin-bottom: 1.0rem;
              .li{
                    flex: 0 0 45%;
                    background: #fff;
                    border: 1px solid #FD7059;
                    border-radius: 0.1rem;
                    line-height: 1.38rem;
                    text-align: center;
                    margin-bottom: 0.3rem;
                    font-size: .36rem;
                    color: #FD7059;
                    box-shadow: 0.1rem 0.1rem 0.2rem rgba(76, 148, 229, 0.2);
              }
              .active{
                    color: #fff;
                    // border-color: rgba(246, 59, 117, 1);
                    // background: url('../../assets/img/invitation/choosebg.png') no-repeat;
                    // // background-position: center;
                    // background-size: 100%;

                    background: linear-gradient(to right,#FA915D,#FB6957)
              }
        }
        .btn{
              background: #F63B75;
              color: #fff;
              text-align: center;
              line-height: .88rem;
              border-radius: .44rem;
              font-size: .34rem;
        }
        .desc{
              color: #999999;
              font-size: .26rem;
              padding: 0.4rem 0.3rem 0;
              line-height: 0.4rem;
        }
  }
}
.ttt{
  position: absolute;
  top: 6.0rem;
  z-index: 1000;
  width: 100%;
  .taa{
    width: 2.0rem;
    background: rgba(0, 0, 0, 0.5);
    color:#fff;
    margin: 0 auto;
    text-align: center;
    line-height: 0.6rem;
    border-radius: 0.2rem;
  }
}


.passwordAlert {width: 100%; height: 100%; background: rgba(0,0,0,.4); position: fixed; left: 0; top: 0;}
.passwordAlert .content {position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); background: #fff; width: 6.5rem; padding-bottom: .5rem; padding-top: .5rem; border-radius: .2rem;}
.passwordAlert .content>p {font-size: .3rem; color: #333; margin-left: .2rem; margin-bottom: .2rem;}
.passwordAlert .content .passwordBtn {display: flex; justify-content: space-around; padding-top: .2rem;}
.passwordAlert .content .passwordBtn a {width:2.40rem; border:1px solid rgba(207,207,207,1); border-radius:35px; margin: 0rem 0.16rem; text-align: center; line-height: .6rem;}
</style>
