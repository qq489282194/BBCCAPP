<template>
    <div>
      <div class="ycontainer">
        <div v-if="isApp" class="header"><img @click="backRouter()" src="../../assets/img/mymember/back@2x.png" class="icon-back">权益介绍 </div>
          <!-- <img @click="isShare = true" class="share" src="../../assets/img/intIntro/share.png" alt=""> -->
        <div class="ycontent">
          <div @click="toxize" class="xize">
            <img src="../../assets/img/intIntro/999.png" alt="">
            权益细则
          </div>
          <div>
            <swiper :options="swiperOption" ref="mySwiper" @slideChange="onChange" >
                <!-- slides -->
                <swiper-slide v-for="(item,index) in pagedata" :key="index" class="sli">
                    <div class="bgimg">
                      <img :src="item.imgUrl" class="img1" alt="">
                      <div>
                        <p class="weight">{{item.title}}</p>
                        <div class="msg">{{item.content}}</div>
                      </div>
                      
                    </div>
                </swiper-slide>
                <!-- Optional controls -->
                <!-- <div class="swiper-pagination"  slot="pagination"></div>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
            </swiper>
            <div class="nav">
            <div ref="navcontainer" class="navcontainer">
              <div v-for="(item,index) in pagedata2" :key="index" class="nav-item">
                <img v-if="index!=0&&index!=11" class="nav-img" :src="`${item[activeIndex==(index-1)?'icon2':'icon1']}`" alt="">
                <p>{{item.title}}</p>
              </div>
            </div>
          </div>
          </div>
          
          
        </div>
        <div class="footer-share-modules" v-show="isShare">
          <div class="footer-title-modules">
            <p>分享</p>
          </div>
          <ul class="clear-both">
            <li @click="shareFun(`http://testuser.meibbc.com/bbc-personal/abbccdetail?serveId=${serveId}`,'weChat')">
              <img src="../../assets/img/WeChat@2x.png"/>
              <p>微信分享</p>
            </li>
            <li @click="shareFun(`http://testuser.meibbc.com/bbc-personal/abbccdetail?serveId=${serveId}`,'friendCircle')">
              <img src="../../assets/img/CircleofFriends@2x.png"/>
              <p>朋友圈分享</p>
            </li>
            <li @click="shareFun(`http://testuser.meibbc.com/bbc-personal/abbccdetail?serveId=${serveId}`,'qq')">
              <img src="../../assets/img/QQ@2x.png"/>
              <p>QQ分享</p>
            </li>
            <li @click="shareFun(`http://testuser.meibbc.com/bbc-personal/abbccdetail?serveId=${serveId}`,'sina')">
              <img src="../../assets/img/weibo@2x.png"/>
              <p>微博分享</p>
            </li>
          </ul>
          <button @click="isShare = false" class="share-footer-button">取消</button>
        </div>

        <div class="ybottom">
          <div class="ybtn" @click="onGrade">
            {{ grade == 1 ? '升级为贵宾会员享受更多权益':(grade == 2 ? '升级为铂金会员享受更多权益':(grade == 3 || grade == 4 ? '升级为钻石会员享受更多权益':(grade == 5 || grade ==6 ? '升级为钻石会员享受更多权益':'会员升级享受更多权益'))) }}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import * as USER_API from '@/api/user'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import store from "@/store/index"
    export default {
        name: "int-intro",
        data(){
          let self = this;
          return {
            activeIndex: 0,
            isShare: false,
            pagedata:[
              {
                imgUrl: require('../../assets/img/intIntro/shengqian.png'),
                title: '自购省钱',
                content: '购买商城任意产品，都能获得会员价优惠，为你省下每一笔钱。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/zhuanqian.png'),
                title: '分享得收益',
                // content: '分享任意商品给你的小伙伴，小伙伴购买后，你也能获得相应的奖励。'
                content: '分享任意商品给好友，好友购买后，你就可以获得商城消费积分奖励。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/yaoqing.png'),
                title: '邀请奖励',
                content: '邀请好友购物或者升级成为会员，你也能获得对应的奖励和权益提升。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/jiangli.png'),
                title: '奖励C米',
                content: '购物就能获得C米，C米不仅可以用来参与活动，还能当钱花!'
              },
              
              // {
              //   imgUrl: require('../../assets/img/intIntro/jieri.png'),
              //   title: '专属购物节日',
              //   content: '为您打造的购物节，大量优惠商品等你挑选。'
              // },
              // {
              //   imgUrl: require('../../assets/img/intIntro/libao.png'),
              //   title: '专属推广礼包',
              //   content: '精心定制的推广礼包，让你推广无忧，轻松享受收益。'
              // },
              // {
              //   imgUrl: require('../../assets/img/intIntro/kefu.png'),
              //   title: '专属金牌客服',
              //   content: '一对一的金牌客服，特别享受7*12小时贴心服务。'
              // },
              // {
              //   imgUrl: require('../../assets/img/intIntro/dingzhi.png'),
              //   title: '定制沙龙体验',
              //   content: '遇见更美的自己，私人定制全方位体验。'
              // },
              // {
              //   imgUrl: require('../../assets/img/intIntro/zhaoshang.png'),
              //   title: '招商补贴',
              //   content: '专享补贴计划，招商无忧。'
              // },
              
              // {
              //   imgUrl: require('../../assets/img/intIntro/quyu.png'),
              //   title: '区域补贴',
              //   content: '畅享全区域收益，多方位补贴。'
              // },
            ],
            pagedata2: [
              {

              },
              {
                icon1: require('../../assets/img/intIntro/home_home_icon@2x.png'),
                icon2: require('../../assets/img/intIntro/home_home_icon_pre@2x.png'),
                title: '自购省钱'
              },
              {
                icon1: require('../../assets/img/intIntro/fenxiangzhuanqian_icon@2x.png'),
                icon2: require('../../assets/img/intIntro/fenxiangzhuanqian_icon_pre@2x.png'),
                title: '分享得收益'
              },
              {
                icon1: require('../../assets/img/intIntro/yangqingjiangli_icon@2x.png'),
                icon2: require('../../assets/img/intIntro/yangqingjiangli_icon_pre@2x.png'),
                title: '邀请奖励'
              },
              {
                icon1: require('../../assets/img/intIntro/jiangliCmi_icon@2x.png'),
                icon2: require('../../assets/img/intIntro/jiangliCmi_icon_pre@2x.png'),
                title: '奖励C米'
              },
              
              // {
              //   icon1: require('../../assets/img/intIntro/zhuanshugouwu_icon@2x.png'),
              //   icon2: require('../../assets/img/intIntro/zhuanshugouwu_icon_pre@2x.png'),
              //   title: '专属购物节日'
              // },
              // {
              //   icon1: require('../../assets/img/intIntro/zhuanshuruiguang_icon@2x.png'),
              //   icon2: require('../../assets/img/intIntro/zhuanshuruiguang_icon_pre@2x.png'),
              //   title: '专属推广礼包'
              // },
              // {
              //   icon1: require('../../assets/img/intIntro/jinpaikefu_icon@2x.png'),
              //   icon2: require('../../assets/img/intIntro/jinpaikefu_icon_pre@2x.png'),
              //   title: '专属金牌客服'
              // },
              // {
              //   icon1: require('../../assets/img/intIntro/shalongtiyan_icon@2x.png'),
              //   icon2: require('../../assets/img/intIntro/shalongtiyan_icon_pre@2x.png'),
              //   title: '定制沙龙体验'
              // },
              // {
              //   icon1: require('../../assets/img/intIntro/zhaoshangtiyan_icon@2x.png'),
              //   icon2: require('../../assets/img/intIntro/zhaoshangtiyan_icon_pre@2x.png'),
              //   title: '招商补贴'
              // },
              
              // {
              //   icon1: require('../../assets/img/intIntro/quyubutie_icon@2x.png'),
              //   icon2: require('../../assets/img/intIntro/quyubutie_icon_pre@2x.png'),
              //   title: '区域补贴'
              // },
              {

              },
            ],
            width: 0,
            isApp: false,
            swiperOption: {
                loop: false,
                centeredSlides: true,
                // spaceBetween: 20,
                direction: 'horizontal',
                slidesPerView: 1.4,
                on: {
                  slideChange: function () {
                    self.activeIndex = this.activeIndex;
                    console.log(this.activeIndex)
                        // 切换结束时，告诉我现在是第几个slide
                  }
                }
            },
            grade:''
          }
        },
        props: {
          intIntroData: {
            type: Array,
            default: () => {
              return []
            }
          }
        },
        watch:{
          activeIndex(val){
            console.log('--------',val);
            console.log(100*val);
            // if(val>=1){
              this.$refs.navcontainer.style.left =  '-'+this.width*(val)+'px'
            // }
            
            // this.$refs.navcontainer.style.left =  `-${10*(this.index-1)}%`
          }
        },
        mounted(){
          // this.gainGrade()
          this.width = (document.documentElement.clientWidth || document.body.clientWidth)/3;
          console.log('this.width',this.width);
          this.loadUser();
          window.setUserId = this.setUserId;
          this.isApps()
        },
        methods:{
          isApps(){
            var userId = "";
            var u = navigator.userAgent, app = navigator.appVersion;
            var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
            var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
            if(isAndroid){
              let userId = window.JsToJava.getUserId()
              this.isApp = true;
            }else{
              window.webkit.messageHandlers.getUserId.postMessage({});
            }
          },
          setUserId(){
            this.isApp = true
          },
          shareFun(typeNumber,type){
            let title = '权益介绍'
            let description = "一起分享吧！";
            let imgSrc = 'https://oss.meibbc.com/BeautifyBreast/logo/logo.png';
            let hostUrl = "http://testuser.meibbc.com/bbc-personal/intIntro";
            let activityId = "";
            this._system_shareTo(title,description,imgSrc,hostUrl,"",'',type);
          },
          toxize(){
            this.$router.push({path: '/newsys',query:{type: 1}})
          },
          onChange(index) {
            
          },
          onChange2(){

          },
          onGrade(){
            if(this.grade == 1){
              this.MIXINToDetail('','50')
              // this.MixinToUrl('newupgrade','贵宾')
            }else if(this.grade == 2){
              this.MIXINToDetail('','49')
              // this.MixinToUrl('newupgrade','铂金')
            }else if(this.grade == 3 || this.grade == 4){
              this.MixinToUrl('invitefriends')
            }
            
          },
          loadUser(){
            if(store.state.userId){
                var userId = store.state.userId;
            }else{
                var userId = this.id
            }
            
            USER_API.findUserByUserid(userId).then(data => {
                this.userList = data;
                this.grade = data.role
                
                // if(data.director == 1){
                //     this.grade = 6
                // }
                // if(data.managerRole == 1){
                //     this.grade = 7   
                // }
                // this.productList()
            });
            
        },
        },
        components: {
          swiper,
          swiperSlide
        },
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
.share{
  position: absolute;
  width: .44rem;
  height: .44rem;
  right: 0.3rem;
  bottom: .2rem;
}
.ycontainer{
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.header{
  text-align: center;
  line-height: 0.8rem /* 50/100 */;
  padding-top: .6rem;
  // background: #000;
  border-bottom: 1px solid #f1f1f1;
  position: relative;
  color: #333;
  flex: 0 0 .4rem; /* 40/100 */
  font-size: .36rem /* 36/100 */;
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
}
.ycontent{
  flex: 1;
  // background: rgba(241, 223, 198, 1);
  background: url('../../assets/img/invitation/qyxq_bg.png') no-repeat;
  padding: 1.1rem 0 0; /* 60/100 */
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  // justify-content: space-between;
  .swiper{position: absolute;top: 1rem;}
  .swiper-container{
    overflow: initial;
  }
  overflow: hidden;
}
.xize{
  position: absolute;
  right: .3rem;
  top: .3rem;
  font-size: .24rem;
  color: #A5550D;
  img{
    width: .28rem;
    height: .28rem;
    display: inline-block;
    vertical-align: middle;
  }
}
.ybottom{
  flex: 0 0 1.08rem;/* 120/100 */
}
.sli{
  // background: red;
  /* 20/100 */
  padding: .07rem /* 5/100 */;
  .yitem{
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin:  2px 15px;
    padding: 10px 50px;
    box-sizing: border-box;
    justify-content: space-around;
    // border: 1px solid #ddd;
    border-radius: .2rem; /* 20/100 */
    box-shadow: 0px 0px 10px #FFAABB ;
    .weight{
      font-size: .32rem;
      color: #F63B75;
      margin-bottom: 0rem /* 50/100 */;
      font-weight: bold
    }
    .msg{
      font-size: .28rem;
      color: #333333;
    }
    .img1{
      background: #ddd;
      width: 2.2rem /* 130/100 */;
      height: 2.2rem /* 130/100 */;
      margin: 0 auto  /* 50/100 */;
    }
  }
}
.swiper-slide-active .yitem{
  // width: 110%;
  height: 120%;
  top: -10%;
  padding: .6rem  20px;/* 60/100 */
  position: relative;
  z-index: 10000;
}
.ybottom{
  // padding: 0 60px;
  background: linear-gradient(to right,#232323,#201203);
  .ybtn{
    background: linear-gradient(to right, #393738 , #221506);
    border-radius: .4rem /* 40/100 */;
    line-height: 0.8rem /* 60/100 */;
    text-align: center;
    font-size: .32rem /* 32/100 */;
    color: #F4C697;
    line-height: 1.08rem;
  }
}
.nav{
  padding: 0.4rem 0;
  width: 100%;
  position: relative;
  height: 2.6rem;
  .navcontainer{
    position: absolute;
    // width: 400%;
    width: 200%;
    left: 0;
    top: 0.4rem;
    overflow-x: scroll;
    display: flex;
    transition: all .2s linear; 
    .nav-item{
      flex: 1;
      text-align: center;
      font-size: .26rem;
      color: #999;
      line-height: 0.7rem;
      .nav-img{
        width: 1.2rem;
        height: 1.2rem;
        margin: 0 auto;
      }
    }
  }
}
.bgimg{position: relative;}
.bgimg>div{position: absolute;bottom: .48rem;text-align: center;width: 100%;}
.bgimg p{font-size: .34rem;color:#533418;}
.bgimg>div div{margin-top: .16rem;width: 3.8rem;font-size: .28rem;margin-left: .72rem;color: #B1641E;height: 1rem;}

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
</style>
