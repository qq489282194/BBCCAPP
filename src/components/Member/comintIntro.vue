<template>
    <div>
      <div class="ycontainer">
        <!-- <div v-if="isApp" class="header"><img @click="backRouter()" src="../../assets/img/mymember/back@2x.png" class="icon-back">权益介绍 <img @click="isShare = true" class="share" src="../../assets/img/intIntro/share.png" alt=""></div> -->
        <div class="ycontent">
          <!-- <div @click="toxize" class="xize">
            <img src="../../assets/img/intIntro/999.png" alt="">
            权益细则
          </div> -->

          <!-- 普通专享 -->
          <div v-if="tapclass == 0">
            <swiper :options="swiperOption" ref="mySwiper" @slideChange="onChange" >
                <!-- slides -->
                <swiper-slide v-for="(item,index) in pagedata01" :key="index" class="sli">
                    <div class="bgimg">
                      <img :src="item.imgUrl" class="img1" alt="">
                      <div>
                        <div class="msg">{{item.content}}</div>
                      </div>
                      <p v-if="grade == 1" class="weight" @click="onCard('贵宾')">升级为贵宾会员享受更多权益</p>
                      <p v-if="grade == 2" class="weight" @click="onCard('铂金')">升级为铂金会员享受更多权益</p>
                      <p v-if="grade == 3 || grade == 4" class="weight" @click="onCard('钻石')">升级为钻石会员享受更多权益</p>
                      <p v-if="grade == 5 || grade == 6" class="weight">您已经是钻石会员享受超多权益</p>
                    </div>
                </swiper-slide>
            </swiper>
          </div>

          <!-- 贵宾专享 -->
          <div v-if="tapclass == 1">
            <swiper :options="swiperOption" ref="mySwiper" @slideChange="onChange" >
                <!-- slides -->
                <swiper-slide v-for="(item,index) in pagedata02" :key="index" class="sli">
                    <div class="bgimg">
                      <img :src="item.imgUrl" class="img1" alt="">
                      <div>
                        <div class="msg">{{item.content}}</div>
                      </div>
                      <p v-if="grade == 1" class="weight" @click="onCard('贵宾')">升级为贵宾会员享受更多权益</p>
                      <p v-if="grade == 2" class="weight" @click="onCard('铂金')">升级为铂金会员享受更多权益</p>
                      <p v-if="grade == 3 || grade == 4" class="weight" @click="onCard('钻石')">升级为钻石会员享受更多权益</p>
                      <p v-if="grade == 5 || grade == 6" class="weight">您已经是钻石会员享受超多权益</p>
                    </div>
                </swiper-slide>
            </swiper>
          </div>

          <!-- 铂金专享 -->
          <div v-if="tapclass == 2">
            <swiper :options="swiperOption" ref="mySwiper" @slideChange="onChange" >
                <!-- slides -->
                <swiper-slide v-for="(item,index) in pagedata03" :key="index" class="sli">
                    <div class="bgimg">
                      <img :src="item.imgUrl" class="img1" alt="">
                      <div>
                        <div class="msg">{{item.content}}</div>
                      </div>
                      <p v-if="grade == 1" class="weight" @click="onCard('贵宾')">升级为贵宾会员享受更多权益</p>
                      <p v-if="grade == 2" class="weight" @click="onCard('铂金')">升级为铂金会员享受更多权益</p>
                      <p v-if="grade == 3 || grade == 4" class="weight" @click="onCard('钻石')">升级为钻石会员享受更多权益</p>
                      <p v-if="grade == 5 || grade == 6" class="weight">您已经是钻石会员享受超多权益</p>
                    </div>
                </swiper-slide>
            </swiper>
          </div>

          <!-- 钻石专享 -->
          <div v-if="tapclass == 3">
            <swiper :options="swiperOption" ref="mySwiper" @slideChange="onChange" >
                <!-- slides -->
                <swiper-slide v-for="(item,index) in pagedata04" :key="index" class="sli">
                    <div class="bgimg">
                      <img :src="item.imgUrl" class="img1" alt="">
                      <div>
                        <div class="msg">{{item.content}}</div>
                      </div>
                      <p v-if="grade == 1" class="weight" @click="onCard('贵宾')">升级为贵宾会员享受更多权益</p>
                      <p v-if="grade == 2" class="weight" @click="onCard('铂金')">升级为铂金会员享受更多权益</p>
                      <p v-if="grade == 3 || grade == 4" class="weight" @click="onCard('钻石')">升级为钻石会员享受更多权益</p>
                      <p v-if="grade == 5 || grade == 6" class="weight">您已经是钻石会员享受超多权益</p>
                    </div>
                </swiper-slide>
            </swiper>
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

        <!-- <div class="ybottom">
          <div class="ybtn" @click="MixinToUrl('newupgrade')">
            {{ grade == 1 ? '升级为贵宾会员享受更多权益':(grade == 2 ? '升级为铂金会员享受更多权益':(grade == 3 || grade == 4 ? '升级为钻石会员享受更多权益':(grade == 5 || grade ==6 ? '升级为钻石会员享受更多权益':'会员升级享受更多权益'))) }}
          </div>
        </div> -->
      </div>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import * as USER_API from '@/api/user'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import store from "@/store/index"
import { setTimeout } from 'timers';
    export default {
        name: "int-intro",
        data(){
          let self = this;
          return {
            activeIndex: 0,
            isShare: false,
            pagedata01:[
              {
                imgUrl: require('../../assets/img/intIntro/shengqian1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '购买商城任意产品，都能获得会员价优惠，为你省下每一笔钱。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/jifen1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '分享任意商品给好友，好友购买后，你就可以获得商城消费积分奖励。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/yaoqing1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '邀请好友购物或者升级成为会员，你也能获得对应的奖励和权益提升。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/cmi1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '购物就能获得C米，C米不仅可以用来参与活动，还能当钱花！'
              },
            ],
            pagedata02:[
              {
                imgUrl: require('../../assets/img/intIntro/shengqian1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '购买商城任意产品，都能获得会员价优惠，为你省下每一笔钱。'
              },
              
              {
                imgUrl: require('../../assets/img/intIntro/jifen1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '分享任意商品给好友，好友购买后，你就可以获得商城消费积分奖励。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/yaoqing1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '邀请好友购物或者升级成为会员，你也能获得对应的奖励和权益提升。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/cmi1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '购物就能获得C米，C米不仅可以用来参与活动，还能当钱花！'
              },
              {
                imgUrl: require('../../assets/img/intIntro/gouwu1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '为您打造的购物节，大量优惠商品等你挑选。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/libao1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '精心定制的推广礼包，让你推广无忧，轻松享受收益。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/kefu1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '一对一的金牌客服，特别享受7*12小时贴心服务。'
              },
            ],
            pagedata03:[
              {
                imgUrl: require('../../assets/img/intIntro/shengqian1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '购买商城任意产品，都能获得会员价优惠，为你省下每一笔钱。'
              },
              
              {
                imgUrl: require('../../assets/img/intIntro/jifen1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '分享任意商品给好友，好友购买后，你就可以获得商城消费积分奖励。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/yaoqing1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '邀请好友购物或者升级成为会员，你也能获得对应的奖励和权益提升。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/cmi1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '购物就能获得C米，C米不仅可以用来参与活动，还能当钱花！'
              },
              {
                imgUrl: require('../../assets/img/intIntro/gouwu1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '为您打造的购物节，大量优惠商品等你挑选。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/libao1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '精心定制的推广礼包，让你推广无忧，轻松享受收益。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/kefu1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '一对一的金牌客服，特别享受7*12小时贴心服务。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/shalong1.png'),
                title: '升级为铂金会员享受更多权益',
                content: '遇见更美的自己，私人定制全方位体验。'
              },
            ],
            pagedata04:[
              {
                imgUrl: require('../../assets/img/intIntro/shengqian1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '购买商城任意产品，都能获得会员价优惠，为你省下每一笔钱。'
              },
              
              {
                imgUrl: require('../../assets/img/intIntro/jifen1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '分享任意商品给好友，好友购买后，你就可以获得商城消费积分奖励。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/yaoqing1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '邀请好友购物或者升级成为会员，你也能获得对应的奖励和权益提升。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/cmi1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '购物就能获得C米，C米不仅可以用来参与活动，还能当钱花！'
              },
              {
                imgUrl: require('../../assets/img/intIntro/gouwu1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '为您打造的购物节，大量优惠商品等你挑选。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/libao1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '精心定制的推广礼包，让你推广无忧，轻松享受收益。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/kefu1.png'),
                title: '升级为贵宾会员享受更多权益',
                content: '一对一的金牌客服，特别享受7*12小时贴心服务。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/shalong1.png'),
                title: '升级为铂金会员享受更多权益',
                content: '遇见更美的自己，私人定制全方位体验。'
              },
              {
                imgUrl: require('../../assets/img/intIntro/jinshengzg@2x.png'),
                title: '升级为铂金会员享受更多权益',
                content: '升级享受更多权益福利。'
              },
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
              
              {
                icon1: require('../../assets/img/intIntro/zhuanshugouwu_icon@2x.png'),
                icon2: require('../../assets/img/intIntro/zhuanshugouwu_icon_pre@2x.png'),
                title: '专属购物节日'
              },
              {
                icon1: require('../../assets/img/intIntro/zhuanshuruiguang_icon@2x.png'),
                icon2: require('../../assets/img/intIntro/zhuanshuruiguang_icon_pre@2x.png'),
                title: '专属推广礼包'
              },
              {
                icon1: require('../../assets/img/intIntro/jinpaikefu_icon@2x.png'),
                icon2: require('../../assets/img/intIntro/jinpaikefu_icon_pre@2x.png'),
                title: '专属金牌客服'
              },
              {
                icon1: require('../../assets/img/intIntro/shalongtiyan_icon@2x.png'),
                icon2: require('../../assets/img/intIntro/shalongtiyan_icon_pre@2x.png'),
                title: '定制沙龙体验'
              },
              {
                icon1: require('../../assets/img/intIntro/zhaoshangtiyan_icon@2x.png'),
                icon2: require('../../assets/img/intIntro/zhaoshangtiyan_icon_pre@2x.png'),
                title: '招商补贴'
              },
              
              {
                icon1: require('../../assets/img/intIntro/quyubutie_icon@2x.png'),
                icon2: require('../../assets/img/intIntro/quyubutie_icon_pre@2x.png'),
                title: '区域补贴'
              },
              {

              },
            ],
            width: 0,
            isApp: false,
            swiperOption: {
                loop: false,
                centeredSlides: true,
                spaceBetween: 30,
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
            grade:'',
            intIntroShow:false,
            current:'2',
            tapclass:'',
          }
        },
        props: {
          intIntroData: {
            type: Object,
            default: () => {
              return {}
            }
          },
          activeSwiperIndex: {
            type: Object,
            default: () => {
              return {index:0}
            }
          }
        },
        watch:{
          // activeIndex(val){
          //   // console.log('--------',val);
          //   // console.log(100*val);
          //   // if(val>=1){
          //     // this.$refs.navcontainer.style.left =  '-'+this.width*(val)+'px'
          //   // }
            
          //   // this.$refs.navcontainer.style.left =  `-${10*(this.index-1)}%`
          // }
        },
        mounted(){
          
          // debugger
          this.$refs.mySwiper.swiper.activeIndex = this.activeSwiperIndex.index
          this.tapclass = this.activeSwiperIndex.tapclass
          console.log(this.$refs.mySwiper.swiper.activeIndex)
          // this.gainGrade()
          this.width = (document.documentElement.clientWidth || document.body.clientWidth)/3;
          console.log('this.width',this.width);
          this.loadUser();
          window.setUserId = this.setUserId;
          this.isApps()
        },
        methods:{
          onChange(index) {
            // debugger
            var that = this.$refs.mySwiper.swiper
            // this.current = index;
            this.current = that.activeIndex
            // debugger
          },
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
            this.$router.push({path: '/newsys'})
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
        onCard(val){
          if(val == '贵宾'){
              this.MIXINToDetail('','50')
                // this.MixinToUrl('newupgrade',val)
            }else if(val == '铂金'){
                this.MIXINToDetail('','49')
                // this.MixinToUrl('newupgrade',val)
          }else if(val == '钻石'){
              this.MixinToUrl('invitefriends')
          }
        }
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
.close{
  position: absolute;
  bottom: 57px;
  left: 50%;
  transform: translate(-50%);
  width: 1rem;
  height: .5rem;
  line-height: .5rem;
  text-align: center;
  background: #201203;
  color: white;
}
.ycontainer{
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, .7);
  padding-bottom: 3.4rem;
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
  // background: url('../../assets/img/invitation/qyxq_bg.png') no-repeat;
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
    width: 400%;
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
.bgimg>div{position: absolute;bottom: 1.26rem;text-align: center;width: 100%;}
.bgimg p{font-size: .3rem;color:#FDDEB4;margin-top: -.86rem;width: 5.2rem;text-align: center;}
.bgimg>div div{padding-top: .12rem;width: 3.8rem;font-size: .26rem;margin-left: .72rem;color: #B1641E;height: 1rem;}

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
