<template>
  <div style="position:relative">
      <div class="head-background">
          <div class="head-nav">
            <i @click="backRouter()" class="icon-back"></i>
            <p>会员权益</p>
            <i @click="isShare = true" class="icon-share"></i>
        </div>
      </div>

    <van-swipe @change="onChange" :width='swipeWidth' style="overflow:hidden;margin-top:-2.2rem;" :loop="false">
        <van-swipe-item v-for="item in img_urls" :key="item.index" style="display:inline-block;">
            <img :src="item" style="background-size: 100% 100%;" />
        </van-swipe-item>
    </van-swipe>

    <div class="label" v-if="current == 1">
        <ul>
            <li>
                <i class="icon-customer"></i>
                <p>超值大礼包</p>
            </li>
            <li>
                <i class="icon-serve"></i>
                <p>享受线下服务</p>
            </li>
            <li>
                <i class="icon-withdraw"></i>
                <p>双重奖励提现</p>
            </li>
            <li>
                <i class="icon-money"></i>
                <p>自购轻松省钱</p>
            </li>
            <li>
                <i class="icon-earnings"></i>
                <p>商品分享收益</p>
            </li>
            <li>
                <i class="icon-invite"></i>
                <p>好友邀请奖励</p>
            </li>
            <li>
                <i class="icon-shopping"></i>
                <p>专属购物节日</p>
            </li>
            <li>
                <i class="icon-customer"></i>
                <p>专属金牌客服</p>
            </li>
        </ul>
    </div>

    <div class="label-guest" v-if="current == 0">
        <ul>
            <li>
                <i class="icon-withdrawy"></i>
                <p>双重奖励提现</p>
            </li>
            <li>
                <i class="icon-moneyy"></i>
                <p>自购轻松省钱</p>
            </li>
            <li>
                <i class="icon-earningsy"></i>
                <p>商品分享收益</p>
            </li>
            <li>
                <i class="icon-invitey"></i>
                <p>好友邀请奖励</p>
            </li>
            <li>
                <i class="icon-shoppingy"></i>
                <p>专属购物节日</p>
            </li>
            <li>
                <i class="icon-customery"></i>
                <p>专属金牌客服</p>
            </li>
        </ul>
    </div>

    <div class="bot-but" v-if="current == 1" @click="MIXINToDetail('','49')">
        <p>立即开通铂金会员</p>
    </div>

    <div class="bot-but-guest" v-if="current == 0" @click="MIXINToDetail('','50')">
        <p>立即开通贵宾会员</p>
    </div>
      
    <!-- 分享模块 -->
    <div class="common-shadow-modules" @click="isShare = false"  v-show="isShare">
    </div>
    <div class="footer-share-modules" v-show="isShare">
      <div class="footer-title-modules">
        <p>分享</p>
      </div>
      <ul class="clear-both">
        <li @click="shareFun('weChat',1)">
          <img src="../../assets/img/WeChat@2x.png"/>
          <p>微信分享</p>
        </li>
        <li @click="shareFun('friendCircle',2)">
          <img src="../../assets/img/CircleofFriends@2x.png"/>
          <p>朋友圈分享</p>
        </li>
        <li @click="shareFun('qq',3)">
          <img src="../../assets/img/QQ@2x.png"/>
          <p>QQ分享</p>
        </li>
        <li @click="shareFun('sina',4)">
          <img src="../../assets/img/weibo@2x.png"/>
          <p>微博分享</p>
        </li>
      </ul>
      <button @click="isShare = false" class="share-footer-button">取消</button>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from "vant"
import platina from "../../assets/img/mymember/swiper-one.png"
import guest  from "../../assets/img/mymember/swiper-two.png"

export default {
    data(){
        return{
            current:0,
            img_urls:[
                guest,
                platina,
            ],
            isShare:false,
        }
    },
    mounted(){
    },
    computed: {
        swipeWidth() {
            return window.screen.width * 0.9
        }
    },
    methods:{
        // 轮播图下标
        onChange(index) {
            this.current = index;
        },
          // 分享模块
        shareFun(typeNumber,type){
            let title = this.article.title
            let description = "";
            let imgSrc = "";
            let hostUrl = this.article.shareUrl
            let activityId = "";
            this._system_shareTo(title,description,imgSrc,typeNumber,"",activityId,type);
        },
    }
}
</script>

<style  scoped>
.head-background{width: 100%; height: 3.58rem; background: url("../../assets/img/mymember/background.png");background-size: 100% 100%;display: inline-block;}
.head-nav{margin-top: .71rem;}
.head-nav p{font-size: .36rem;color: white;float: left;}
.swiper{position: absolute;top: 1rem;}
/* .label{margin-top: 2rem} */
.label li{text-align: center;width: calc(100% / 3);margin-bottom: .56rem;float: left;}
.label p{font-size: .26rem;color: #333333;line-height: .36rem;margin-top: .2rem}
.bot-but{width: 3.96rem;height: .88rem;background: #2F4256;border-radius: .44rem;text-align: center;line-height: .88rem;clear: both;color: white;font-size: .28rem;position: fixed;bottom: 1rem;left: 1.77rem;}

/* .label-guest{margin-top: 2rem} */
.label-guest li{text-align: center;width: calc(100% / 3);margin-bottom: .56rem;float: left;}
.label-guest p{font-size: .26rem;color: #333333;line-height: .36rem;margin-top: .2rem}
.bot-but-guest{width: 3.96rem;height: .88rem;background: #3D3731;border-radius: .44rem;text-align: center;line-height: .88rem;clear: both;color: white;font-size: .28rem;position: fixed;bottom: 1rem;left: 1.77rem;}

 /*分享模块*/
  .footer-share-modules{position: fixed;bottom: 0;width: 100%;height: 4.36rem;background-color: #F6F6F6;z-index: 999}
  .footer-title-modules{height: .8rem;position: relative;margin-top: .2rem}
  .footer-title-modules:after{content: "";height: 1px;background-color: #909090;width: 3.63rem;position: absolute;left: 0;right: 0;;margin: auto;
    z-index: 9;top: 0;bottom: 0}
  .footer-title-modules p{position: absolute;left: 0;right: 0;margin: auto;width: 2.5rem;z-index: 99;line-height: .8rem;
    background-color: #F6F6F6;text-align: center;color: #909090;font-size: .32rem}
  .footer-share-modules li{float: left;width: calc(100% / 4);text-align: center;position: relative}
  .footer-share-modules li p{width: 100%;text-align: center;top: .8rem;position: absolute}
  .footer-share-modules li:nth-child(1) img{width: .64rem;display: inline-block}
  .footer-share-modules li:nth-child(2) img{width: .58rem;display: inline-block}
  .footer-share-modules li:nth-child(3) img{width: .52rem;display: inline-block}
  .footer-share-modules li:nth-child(4) img{width: .59rem;display: inline-block}
  .footer-share-modules ul{margin-top: .87rem}
  .share-footer-button{position: absolute;bottom: 0;width: 100%;line-height: .85rem;text-align: center;color: #FC858F;font-size: .3rem;background-color: white;font-weight: bold}



.icon-back{ width: .19rem; height: .34rem; background: url("../../assets/img/mymember/back.png");background-size: 100% 100%;display: inline-block;float: left;margin-left: .31rem;margin-right: 2.58rem; }
.icon-share{ width: .38rem; height: .37rem; background: url("../../assets/img/mymember/share.png");background-size: 100% 100%;display: inline-block;float: right;margin-right: .24rem }
.icon-swiper{ width: 6.62rem; height: 3.97rem; background: url("../../assets/img/mymember/swiper-one.png");background-size: 100% 100%;display: inline-block; }
.icon-swipertwo{ width: 6.62rem; height: 3.97rem; background: url("../../assets/img/mymember/swiper-two.png");background-size: 100% 100%;display: inline-block; }
.icon-customer{ width: .88rem; height: .88rem; background: url("../../assets/img/mymember/customer.png");background-size: 100% 100%;display: inline-block; }
.icon-customery{ width: .88rem; height: .88rem; background: url("../../assets/img/mymember/customery.png");background-size: 100% 100%;display: inline-block; }
.icon-earnings{ width: .88rem; height: .88rem; background: url("../../assets/img/mymember/earnings.png");background-size: 100% 100%;display: inline-block; }
.icon-earningsy{ width: .88rem; height: .88rem; background: url("../../assets/img/mymember/earningsy.png");background-size: 100% 100%;display: inline-block; }
.icon-gift{ width: .88rem; height: .88rem; background: url("../../assets/img/mymember/gift.png");background-size: 100% 100%;display: inline-block; }
.icon-invite{ width: .88rem; height: .88rem; background: url("../../assets/img/mymember/invite.png");background-size: 100% 100%;display: inline-block; }
.icon-invitey{ width: .88rem; height: .88rem; background: url("../../assets/img/mymember/invitey.png");background-size: 100% 100%;display: inline-block; }
.icon-money{ width: .88rem; height: .88rem; background: url("../../assets/img/mymember/money.png");background-size: 100% 100%;display: inline-block; }
.icon-moneyy{ width: .88rem; height: .88rem; background: url("../../assets/img/mymember/moneyy.png");background-size: 100% 100%;display: inline-block; }
.icon-serve{ width: .88rem; height: .88rem; background: url("../../assets/img/mymember/serve.png");background-size: 100% 100%;display: inline-block; }
.icon-shopping{ width: .88rem; height: .88rem; background: url("../../assets/img/mymember/shopping.png");background-size: 100% 100%;display: inline-block; }
.icon-shoppingy{ width: .88rem; height: .88rem; background: url("../../assets/img/mymember/shoppingy.png");background-size: 100% 100%;display: inline-block; }
.icon-withdraw{ width: .88rem; height: .88rem; background: url("../../assets/img/mymember/withdraw.png");background-size: 100% 100%;display: inline-block; }
.icon-withdrawy{ width: .88rem; height: .88rem; background: url("../../assets/img/mymember/withdrawy.png");background-size: 100% 100%;display: inline-block; }

</style>

