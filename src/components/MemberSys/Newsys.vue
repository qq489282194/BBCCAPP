<template>
  <div class="all">
    <!-- <div class="head">
      <i class="icon-back back" @click="backRouter()"></i>
      <p>权益细则</p>
    </div> -->
      <topcomom>权益细则</topcomom>    
      <!-- 普通会员权益明细 -->
      <div class="main" v-if="grade == 1">
        <i class="icon-juxing"></i>
        <p>普通会员权益明细</p>
        <i class="icon-juxing"></i>
        <ul>
          <li>
            <i class="icon-one"></i>
            <span>自购省钱</span>
            <p>新注册会员，可享受商城新会员专享折扣区超值折扣；</p>
          </li>
          <li>
            <i class="icon-two"></i>
            <span>分享得收益</span>
            <p>分享任意商品给好友，好友购买后，即可获得商城消费积分奖励。</p>
          </li>
          <li>
            <i class="icon-three"></i>
            <span>邀请奖励</span>
            <p>邀请好友购物或者升级成为会员，你也能获得对应的奖励和权益提升。</p>
          </li>
          <li>
            <i class="icon-four"></i>
            <span>C米奖励</span>
            <p>C米为平台会员积分，1个C米抵1块钱在C米商城购物、同时还可参与平台活动。C米具体获取途径和使用说明，详见<a @click="MixinToUrl('cmi-user-manual')">《美胸汇C米使用手册》</a></p>
          </li>
        </ul>
        <!-- <i class="icon-juxing"></i>
        <p>用户升级特别奖励</p>
        <i class="icon-juxing"></i>
        <div class="box1">
          <i class="icon-yuanjiao1">升级攻略一</i>
          <p>邀请用户商城消费满20,000元。</p>
          <p>邀请5个贵宾用户。</p>
          <div class="icon-yuanjiao2">
            <i class="icon-jiangli"></i>
            <span>升级奖励</span>
          </div>
          <p>升级为贵宾用户。</p>
        </div>
        <div class="box1">
          <i class="icon-yuanjiao1">升级攻略二</i>
          <p>邀请5个铂金用户。</p>
          <div class="icon-yuanjiao2">
            <i class="icon-jiangli"></i>
            <span>升级奖励</span>
          </div>
          <p>升级为贵宾用户。</p>
          <p>额外奖励1000元消费抵扣。</p>
        </div>
        <div class="box1">
          <i class="icon-yuanjiao1">升级攻略三</i>
          <p>邀请用户商城消费满200,000元。</p>
          <p>邀请20个铂金用户。</p>
          <div class="icon-yuanjiao2">
            <i class="icon-jiangli"></i>
            <span>升级奖励</span>
          </div>
          <p>升级为钻石用户。</p>
        </div> -->
      </div>

      <!-- 贵宾会员权益明细 -->
      <div class="main" v-if="grade == 2">
        <i class="icon-juxing"></i>
        <p>贵宾会员权益明细</p>
        <i class="icon-juxing"></i>
        <ul>
          <li>
            <i class="icon-one"></i>
            <span>专属购物节日</span>
            <p>尊享商城每月贵宾会员日专属购物节，购物更优惠；</p>
          </li>
          <li>
            <i class="icon-two"></i>
            <span>专属推广礼包</span>
            <p>专享商城推广素材礼包，一键下载、一键分享，更便捷赚取消费积分；</p>
          </li>
          <li>
            <i class="icon-three"></i>
            <span>专属金牌客服</span>
            <p>专享金牌客服快速通道，优先解答您的问题；</p>
          </li>
          <li>
            <i class="icon-four"></i>
            <span>自购省钱</span>
            <p>贵宾会员享受贵宾会员专属折扣，比普通会员更优惠的价格买到心怡的商品；</p>
          </li>
          <li>
            <i class="icon-five"></i>
            <span>分享得收益</span>
            <p>分享任意商品给好友，好友购买后，即可获得商城消费积分奖励。</p>
          </li>
          <li>
            <i class="icon-six"></i>
            <span>邀请奖励</span>
            <p>邀请好友购物或者升级成为会员，你也能获得对应的奖励和权益提升。</p>
          </li>
          <li>
            <i class="icon-seven"></i>
            <span>C米奖励</span>
            <p>C米为平台会员积分，1个C米抵1块钱在C米商城购物、同时还可参与平台活动。C米具体获取途径和使用说明，详见<a @click="MixinToUrl('cmi-user-manual')">《美胸汇C米使用手册》</a></p>
          </li>
        </ul>
        <!-- <i class="icon-juxing"></i>
        <p>用户升级特别奖励</p>
        <i class="icon-juxing"></i>
        <div class="box1">
          <i class="icon-yuanjiao1">升级攻略一</i>
          <p>邀请5个铂金用户。</p>
          <div class="icon-yuanjiao2">
            <i class="icon-jiangli"></i>
            <span>升级奖励</span>
          </div>
          <p>额外奖励1000元消费抵扣。</p>
        </div>
        <div class="box1">
          <i class="icon-yuanjiao1">升级攻略一</i>
          <p>邀请用户商城消费满100,000元。</p>
          <p>邀请10个铂金用户。</p>
          <div class="icon-yuanjiao2">
            <i class="icon-jiangli"></i>
            <span>升级奖励</span>
          </div>
          <p>升级为铂金用户。</p>
        </div>
        <div class="box1">
          <i class="icon-yuanjiao1">升级攻略一</i>
          <p>邀请用户商城消费满200,000元。</p>
          <p>邀请20个铂金用户。</p>
          <div class="icon-yuanjiao2">
            <i class="icon-jiangli"></i>
            <span>升级奖励</span>
          </div>
          <p>升级为钻石用户。</p>
        </div> -->
      </div>

      <!-- 铂金会员权益明细 -->
      <div class="main" v-if="grade == 3 || grade == 4">
        <i class="icon-juxing"></i>
        <p>铂金会员权益明细</p>
        <i class="icon-juxing"></i>
        <ul>
          <li>
            <i class="icon-one"></i>
            <span>自购省钱</span>
            <p>铂金会员享受铂金会员专属折扣，比贵宾会员购物更优惠；</p>
          </li>
          <li>
            <i class="icon-two"></i>
            <span>分享得收益</span>
            <p>分享任意商品给好友，好友购买后，即可获得商城消费积分奖励。</p>
          </li>
          <li>
            <i class="icon-three"></i>
            <span>专属购物节日</span>
            <p>尊享商城每月铂金会员日专属购物节，购物更优惠；</p>
          </li>
          <li>
            <i class="icon-four"></i>
            <span>专属推广礼包</span>
            <p>专享商城推广素材礼包，一键下载、一键分享，更便捷赚取消费积分；</p>
          </li>
          <li>
            <i class="icon-five"></i>
            <span>专属金牌客服</span>
            <p>专享金牌客服快速通道，优先解答您的问题；</p>
          </li>
          <li>
            <i class="icon-six"></i>
            <span>邀请奖励</span>
            <p>邀请好友购物或者升级成为会员，你也能获得对应的奖励和权益提升。</p>
          </li>
          <li>
            <i class="icon-seven"></i>
            <span>沙龙体验</span>
            <p>不定期线上&线下沙龙、大咖分享会，加深商品了解，提升销售技巧；</p>
          </li>
          <li>
            <i class="icon-eight"></i>
            <span>C米奖励</span>
            <p>C米为平台会员积分，1个C米抵1块钱在C米商城购物、同时还可参与平台活动。C米具体获取途径和使用说明，详见<a @click="MixinToUrl('cmi-user-manual')">《美胸汇C米使用手册》</a></p>
          </li>
        </ul>
        <!-- <i class="icon-juxing"></i>
        <p>用户升级特别奖励</p>
        <i class="icon-juxing"></i>
        <div class="box1">
          <i class="icon-yuanjiao1">升级攻略一</i>
          <p>邀请用户商城消费满200,000元。</p>
          <p>邀请20个铂金用户。</p>
          <div class="icon-yuanjiao2">
            <i class="icon-jiangli"></i>
            <span>升级奖励</span>
          </div>
          <p>升级为钻石用户。</p>
        </div> -->
      </div>

      <!-- 钻石会员权益明细 -->
      <div class="main" v-if="grade == 5 || grade == 6">
        <i class="icon-juxing"></i>
        <p>钻石会员权益明细</p>
        <i class="icon-juxing"></i>
        <ul>
          <li>
            <i class="icon-one"></i>
            <span>自购省钱</span>
            <p>钻石会员享受钻石会员专属折扣，比铂金会员购物更优惠；</p>
          </li>
          <li>
            <i class="icon-two"></i>
            <span>分享得收益</span>
            <p>分享任意商品给好友，好友购买后，即可获得商城消费积分奖励。</p>
          </li>
          <li>
            <i class="icon-three"></i>
            <span>专属购物节日</span>
            <p>尊享商城每月钻石会员日专属购物节，购物更优惠；</p>
          </li>
          <li>
            <i class="icon-four"></i>
            <span>邀请奖励</span>
            <p>邀请好友购物或者升级成为会员，你也能获得对应的奖励和权益提升。</p>
          </li>
          <li>
            <i class="icon-five"></i>
            <span>升级商务总监</span>
            <p>钻石会员免费升级为商务总监，不受地理区域限制，帮助平台招商，享受邀约商家平台收益5%分成收益。</p>
          </li>
          <li>
            <i class="icon-six"></i>
            <span>专属推广礼包</span>
            <p>专享商城推广素材礼包，一键下载、一键分享，更便捷赚取消费积分；</p>
          </li>
          <li>
            <i class="icon-seven"></i>
            <span>专属钻石客服</span>
            <p>专享钻石客服快速通道，优先解答您的问题；</p>
          </li>
          <li>
            <i class="icon-eight"></i>
            <span>沙龙体验</span>
            <p>不定期线上&线下沙龙、大咖分享会，加深商品了解，提升销售技巧；</p>
          </li>
          <li>
            <i class="icon-nine"></i>
            <span>C米奖励</span>
            <p>C米为平台会员积分，1个C米抵1块钱在C米商城购物、同时还可参与平台活动。C米具体获取途径和使用说明，详见<a @click="MixinToUrl('cmi-user-manual')">《美胸汇C米使用手册》</a></p>
          </li>
        </ul>
      </div>

      <!-- 商务总监权益明细 -->
      <!-- <div class="main" v-if="userList.director == 1 && userList.managerRole != 1">
        <i class="icon-juxing"></i>
        <p>商务总监权益明细</p>
        <i class="icon-juxing"></i>
        <ul>
          <li>
            <i class="icon-one"></i>
            <span>线下招商</span>
            <p>商务总监会员，可以不受地理区域限制，帮助平台招商，享受邀约商家平台收益5%分成收益。</p>
          </li>
          <li>
            <i class="icon-two"></i>
            <span>自购省钱</span>
            <p>享受钻石会员购物折扣；</p>
          </li>
          <li>
            <i class="icon-three"></i>
            <span>分享得收益</span>
            <p>分享好友购买商城任意商品，可获商品PV值20%-25%消费积分奖励（升级前为铂金则按20%，升级前为钻石，则按25%）；</p>
          </li>
          <li>
            <i class="icon-four"></i>
            <span>专属购物节日</span>
            <p>尊享商城每月钻石会员日专属购物节，购物更优惠；</p>
          </li>
          <li>
            <i class="icon-five"></i>
            <span>邀请奖励</span>
            <p>邀请好友注册为贵宾会员奖励100消费积分；</p>
          </li>
          <li>
            <i class="icon-six"></i>
            <span>专属推广礼包</span>
            <p>专享商城推广素材礼包，一键下载、一键分享，更便捷赚取消费积分；</p>
          </li>
          <li>
            <i class="icon-seven"></i>
            <span>专属钻石客服</span>
            <p>专享钻石客服快速通道，优先解答您的问题；</p>
          </li>
          <li>
            <i class="icon-eight"></i>
            <span>沙龙体验</span>
            <p>不定期线上&线下沙龙、大咖分享会，加深商品了解，提升销售技巧；</p>
          </li>
          <li>
            <i class="icon-nine"></i>
            <span>C米奖励</span>
            <p>C米为平台会员积分，1个C米抵1块钱在C米商城购物、同时还可参与平台活动。C米具体获取途径和使用说明，详见<a>《美胸汇C米使用手册》</a></p>
          </li>
        </ul>
      </div> -->

      <!-- 城市经理权益明细 -->
      <!-- <div class="main" v-if="userList.director != 1 && userList.managerRole == 1">
        <i class="icon-juxing"></i>
        <p>城市经理权益明细</p>
        <i class="icon-juxing"></i>
        <ul>
          <li>
            <i class="icon-one"></i>
            <span>线下招商</span>
            <p>城市经理会员，可以不受地理区域限制，帮助平台招商，享受邀约商家平台收益5%分成收益。</p>
          </li>
          <li>
            <i class="icon-two"></i>
            <span>区域补贴</span>
            <p>1）城市经理所在区域的线下商家，完成的平台线上有偿服务（如咨询、音频、视频等）、线上推广等向平台支付的总费用，城市经理可获取2%的分成补贴。</p>
            <p>2）平台用户在商城购物所消费的订单，收货地址为城市经理所在区域的，城市经理享受消费总额对应平台收益部分的2%分成补贴</p>
          </li>
          <li>
            <i class="icon-three"></i>
            <span>自购省钱</span>
            <p>享受钻石会员购物折扣；</p>
          </li>
          <li>
            <i class="icon-four"></i>
            <span>分享得收益</span>
            <p>分享好友购买商城任意商品，可获商品PV值20%-25%消费积分奖励（升级前为铂金则按20%，升级前为钻石，则按25%）；</p>
          </li>
          <li>
            <i class="icon-five"></i>
            <span>专属购物节日</span>
            <p>尊享商城每月钻石会员日专属购物节，购物更优惠；</p>
          </li>
          <li>
            <i class="icon-six"></i>
            <span>邀请奖励</span>
            <p>邀请好友注册为贵宾会员奖励100消费积分；</p>
          </li>
          <li>
            <i class="icon-seven"></i>
            <span>专属推广礼包</span>
            <p>专享商城推广素材礼包，一键下载、一键分享，更便捷赚取消费积分；</p>
          </li>
          <li>
            <i class="icon-eight"></i>
            <span>专属客服</span>
            <p>专享城市经理客服快速通道，优先解答您的问题；</p>
          </li>
          <li>
            <i class="icon-nine"></i>
            <span>C米奖励</span>
            <p>C米为平台会员积分，1个C米抵1块钱在C米商城购物、同时还可参与平台活动。C米具体获取途径和使用说明，详见<a>《美胸汇C米使用手册》</a></p>
          </li>
        </ul>
      </div> -->

      <!-- 分享 -->
    <div class="common-shadow-modules" @click="isShare = false"  v-show="isShare">
    </div>
    <div class="footer-share-modules" v-show="isShare">
      <div class="footer-title-modules">
        <p>分享</p>
      </div>
      <ul class="clear-both">
        <li @click="shareFun(``,'weChat')">
          <img src="../../assets/img/WeChat@2x.png"/>
          <p>微信分享</p>
        </li>
        <li @click="shareFun(``,'friendCircle')">
          <img src="../../assets/img/CircleofFriends@2x.png"/>
          <p>朋友圈分享</p>
        </li>
        <li @click="shareFun(``,'qq')">
          <img src="../../assets/img/QQ@2x.png"/>
          <p>QQ分享</p>
        </li>
        <li @click="shareFun(``,'sina')">
          <img src="../../assets/img/weibo@2x.png"/>
          <p>微博分享</p>
        </li>
      </ul>
      <button @click="isShare = false" class="share-footer-button">取消</button>
    </div>
      
  </div>
</template>

<script>
import * as UPGRADE_API from '@/api/upgrade'
import * as USER_API from '@/api/user'
import topcomom from '@/components/common/Topcomomnew'
import store from '@/store'
import { error } from 'util';
export default {
    data(){
        return{
          k: '1223135',
          grade:5,
          grade1:this.$route.query.grade1,
          record:4,
          refuse:'',
          userList:'',
          isShare:false,
        }
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
        topcomom
    },
    mounted(){
      // this.gainGrade()
      this.loadGetRoleAdd()
      // if(!this.$route.query.grade1){
      //   this.loadUser()
      // }
      this.grade = this.$route.query.type;
      // debugger
      // console.log(this.$route.query.grade1)
    },
    methods:{
        loadUser(){
          USER_API.findUserByUserid(this.userId).then(data => {
              this.userList = data;
              this.grade = data.role
          });
          
      },
      loadGetRoleAdd(){
        UPGRADE_API.getRoleAdd().then(res => {
          if(res.data.data[0]){
            this.record = res.data.data[0].audit_status
            this.refuse = res.data.data[0].reply_explain
          }else{
            this.record = 4
          }
        })
      },
      // 分享模块
      shareFun(typeNumber,type){
          let title = "美胸汇权益细则！"
          let description = "一起分享吧！";
          let imgSrc = 'https://oss.meibbc.com/BeautifyBreast/logo/logo.png';
          let hostUrl = "http://testuser.meibbc.com/bbc-personal/newsys"
          let activityId = "";
          this._system_shareTo(title,description,imgSrc,hostUrl,"",activityId,type);
      },
    },
}
</script>


<style scoped>
.all{width: 100%;/* padding: .24rem; */height: 100%;box-sizing: border-box;}
p{line-height: 24px;}

.main{text-align: center;padding: 0 .24rem;margin-bottom: 1rem;margin-top: .5rem;}
.main>p{display: inline-block;font-size: .32rem;margin-bottom: .5rem;}
.main li{text-align: left;margin-top: .4rem;}
.main li:nth-child(1){margin-top: 0;}
.main li i{float: left;margin-top: .06rem;margin-right: .14rem;}
.main li span{font-size: .3rem;}
.main li p{font-size: .26rem;color: #666666;margin-top: .1rem;}
.main li a{color: #3699FF;}

.title{font-size: .34rem;color: #F63B75;font-weight: bold;margin-bottom: .3rem;}
.head{margin-top: .6rem;border-bottom: .01rem solid #F2F2F2;padding-bottom: .14rem;margin-bottom: .18rem;position: relative;}
.head .back{position: absolute;top: .12rem;left: .24rem;}
.head .share{position: absolute;top: 0;right: .24rem;}
.head p{display: inline-block;margin-left: 50%;transform: translate(-50%);font-size: .36rem;}

.box1{width: 7.02rem;height: 2.68rem;background: #FFFAF3;text-align: left;margin-bottom: .43rem;}
.box1>i{color: #F8DCB8;text-align: center;font-size: .22rem;transform: translateY(-.2rem)}
.box1 p{font-size: .26rem;line-height: .42rem;margin-left: .25rem;}
.box1 div{margin: .25rem 0;}
.box1 div i{margin: .06rem 0 .06rem .04rem;}
.box1 span{font-size: .2rem;transform: scale(.8); display: block; float: right;color: #CD831C;margin-right: .02rem}

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


.icon-back{width: .16rem; height: .26rem; background: url("../../assets/img/mymember/back@2x.png");background-size: 100% 100%;display: inline-block}
.icon-share{width: .42rem; height: .42rem; background: url("../../assets/img/newmember/share.png");background-size: 100% 100%;display: inline-block}
.icon-one{width: .32rem; height: .32rem; background: url("../../assets/img/newmember/1@2x.png");background-size: 100% 100%;display: inline-block}
.icon-two{width: .32rem; height: .32rem; background: url("../../assets/img/newmember/2@2x.png");background-size: 100% 100%;display: inline-block}
.icon-three{width: .32rem; height: .32rem; background: url("../../assets/img/newmember/3@2x.png");background-size: 100% 100%;display: inline-block}
.icon-four{width: .32rem; height: .32rem; background: url("../../assets/img/newmember/4@2x.png");background-size: 100% 100%;display: inline-block}
.icon-five{width: .32rem; height: .32rem; background: url("../../assets/img/newmember/5@2x.png");background-size: 100% 100%;display: inline-block}
.icon-six{width: .32rem; height: .32rem; background: url("../../assets/img/newmember/6@2x.png");background-size: 100% 100%;display: inline-block}
.icon-seven{width: .32rem; height: .32rem; background: url("../../assets/img/newmember/7@2x.png");background-size: 100% 100%;display: inline-block}
.icon-eight{width: .32rem; height: .32rem; background: url("../../assets/img/newmember/8@2x.png");background-size: 100% 100%;display: inline-block}
.icon-nine{width: .32rem; height: .32rem; background: url("../../assets/img/newmember/9@2x.png");background-size: 100% 100%;display: inline-block}
.icon-juxing{width: .2rem; height: .2rem; background: url("../../assets/img/newmember/juxing.png");background-size: 100% 100%;display: inline-block}
.icon-yuanjiao1{width: 1.42rem; height: .38rem; background: url("../../assets/img/newmember/yuanjiao1.png");background-size: 100% 100%;display: inline-block}
.icon-yuanjiao2{width: 1.26rem; height: .38rem; background: url("../../assets/img/newmember/yuanjiao2.png");background-size: 100% 100%;display: inline-block}
.icon-jiangli{width: .24rem; height: .24rem; background: url("../../assets/img/newmember/jiangli.png");background-size: 100% 100%;display: inline-block}
</style>

