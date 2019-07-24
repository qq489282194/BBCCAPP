<template>
  <div class="container">
    <!-- 分享者内容 -->
    <div class="sharer" ref="sharer">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <div class="slide slide1">
            <div class="nvxing"></div>
            <div class="joinus">加入我们</div>
            <div class="loading"></div>
            <div class="zuobian"></div>
            <div class="youbian"></div>
            <div class="renmai"></div>
            <div class="pingtai"></div>
            <div class="logo"></div>
            <div class="jiazhi"></div>
            <div class="biaoyu">
              <div class="jianxie">成功 = 审时</div>
              <div class="neirong">一个专注于女性健康美的生态服务平台</div>
            </div>
            <div class="join">
              <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
              <a href="javascript:;" class="joinBtn">我要参与</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide2">
            <div class="biaoti"></div>
            <div class="wenzi">
              <span class="wenzi-con">城市经理项目是美胸汇打造女性健康美生态平台O2O服务的重要环节</span>
              <p class="wenzi-tit">城市经理</p>
              <span class="wenzi-con">以城市（或区域）为中心，服务于美胸汇平台，为用户拓展更多优质的商家及服务，享区域独家权益，正常商家入驻收益提成商</span>
              <p class="wenzi-tit">商务总监</p>
              <span class="wenzi-con">美胸汇铂金及以上会员，享全国个人招商入驻收益提成</span>
            </div>
            <div class="piaofu" ref="piaofu">
              <div></div>
              <!-- <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div> -->
            </div>
            <div class="biaoyu">
              <div class="jianxie">成功 = 度势</div>
              <div class="neirong">一个专注于女性健康美的生态服务平台</div>
            </div>
            <div class="join">
              <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
              <a href="javascript:;" class="joinBtn">我要参与</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide3">
            <div class="biaoti"></div>
            <div class="zhaomu">招募对象</div>
            <div class="zhiwei">
              <div>产品经理</div>
              <div>商务总监</div>
            </div>
            <div class="join">
              <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
              <a href="javascript:;" class="joinBtn">我要参与</a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide4">
            <div class="join">
              <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
              <a href="javascript:;" class="joinBtn">我要参与</a>
            </div>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <!-- 我要参与 -->
    <div class="join">
      <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
      <!-- <a href="javascript:;" class="joinBtn">我要参与</a> -->
    </div>
    <!-- 我的商家 -->
    <div class="business">
      <div class="bustit">我的商家</div>
      <div class="bus_con">
        <dl v-if="isShow">
          <dd v-for="item in businessList" :key="item.phone">
            <ul>
              <li><img :src="item.icon" alt=""/><p>{{ item.username ? item.username : '1' }}</p><span>{{ item.createDate ? item.createDate : '1' }}</span></li>
              <li>{{ item.phone ? item.phone : '1' }}</li>
            </ul>
          </dd>
        </dl>
        <p v-else class="noBusiness">暂无商家，请点击“我要参与”获取商家列表</p>
      </div>
      <div class="loadmore">
        <van-button type="primary" size="small" @click="loadMore" :loading="isLoading" :disabled="isDisabled" v-if="isShow">点击展开更多</van-button>
      </div>
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
    <!-- 分享 -->
    <!-- <div class="common-shadow-modules" @click="isShare = false"  v-show="isShare">
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
    </div> -->
  </div>
</template>

<script>
import store from '@/store'
import * as ACT_API from '@/api/activity'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  data() {
    return {
      businessList: [],
      isLoading: false,
      isDisabled: false,
      isShare: false,
      isShow: true,
      shareUserId: '',
      saleOrglistParams: {
        name: "",
        pageNum: 1,
        pageSize: 3,
        role: "",
        userId: ""
      },
      swiperOption: {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          bulletClass : 'my-bullet',
          bulletActiveClass: 'my-bullet-active'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  mounted() {
    this.getJoinUrl()
    this.getBusinessData()
  },
  methods: {
    // 得到分享id
    getJoinUrl() {
      let params = store.state.userId
      ACT_API.getJoinUrl(params).then(response => {
        let urlStr = response.data
        let urlArr = urlStr.split('/')
        let newUrlArr = []
        urlArr.map(item => {
          if (item) {
            newUrlArr.push(item)
          }
        })
        this.shareUserId = newUrlArr[newUrlArr.length - 1]
      })
    },
    // 得到商家列表
    getBusinessData() {
      this.isLoading = true
      let params = {
        ...this.saleOrglistParams,
        userId: store.state.userId
      }
      ACT_API.getBusinessData(params).then(response => {
        if (response.msg == '未获取到数据') {
          this.isLoading = false
          this.isShow = false
        } else {
          response.data.map((item) => {
            this.businessList.push(item)
            this.isLoading = false
          })
          if (response.data.length < 3) {
            this.isDisabled = true
          }
        }
      })
    },
    //点击加载更多
    loadMore() {
      this.saleOrglistParams.pageNum += 1
      this.getBusinessData()
    },
    // 分享模块
    shareFun(type,typeNumber) {
      let title = ''
      let description = "";
      let imgSrc = "";
      let hostUrl = window.location.href.replace('asharer', 'abysharer') + '?oldUserId=' + this.shareUserId
      // let hostUrl = this.article.shareUrl
      let activityId = "";
      this._system_shareTo(title,description,imgSrc,hostUrl,"",activityId,type);
    },
    piaofu() {
      var aDivs = this.$refs.piaofu.children
      for (var i = 0; i < aDivs.length; i++) {
        aDivs[i].style.top = (6.3 + Math.random()) + 'rem'
        console.log(aDivs[i].offsetTop)
        aDivs[i].style.left = (Math.random() * window.innerWidth / 100) + 'rem'
        var speed = 5
        var _i = i
        // var piaofuTimer = setInterval(() => {
          // console.log(aDivs[_i].offsetLeft)
          // var asd = (aDivs[_i].offsetLeft - speed) / 100 + 'rem'
          // aDivs[_i].style.left = asd;
          // console.log(asd)
          // console.log(aDivs[_i].style.left)
          // if (aDivs[_i].offsetLeft <= 0) {
          //   console.log(aDivs[_i].offsetTop)
          //   aDivs[_i].style.left = (window.innerWidth / 100) + 'rem'
          //   aDivs[_i].style.top = 6.3 + Math.random() + 'rem'
          // }
        // }, 2000)
      }
    }
  }
}
</script>

<style lang="css" scoped>
.container {position: relative;}
/* 分享 */
.sharer {width: 100%; height: 10.98rem; overflow: hidden; }
.swiper-container {width: 100%; height: 100%;}
.swiper-slide {width: 100%; height: 100%;}
.slide {width: 100%; height: 10.98rem; background: url('../../assets/img/activity/back.png') no-repeat center; background-size: cover; position: relative;}
/* slide1 */ 
.slide1 .nvxing {position: absolute; background: url('../../assets/img/activity/banner1/zu12.png') no-repeat center; background-size: cover; width: 6.45rem; height: 1.12rem; left: .53rem; top: .94rem;}
.slide1 .joinus {position: absolute; width: 1.9rem; height: .76rem; background: url('../../assets/img/activity/banner1/juxing.png') no-repeat center; background-size: cover; text-align: center; line-height: .76rem; left: 2.78rem; top: 2.92rem; font-size: .23rem; color: #fff;}
.slide1 .zuobian {position: absolute; width: 3rem; height: 2.52rem; background: url('../../assets/img/activity/banner1/zuobian.png') no-repeat center; background-size: cover; left: .26rem; top: 4.54rem;}
.slide1 .youbian {position: absolute; width: 3.26rem; height: 2.29rem; background: url('../../assets/img/activity/banner1/youbian.png') no-repeat center; background-size: cover; left: 4.24rem; top: 3.58rem;}
.slide1 .renmai {position: absolute; width: 1.78rem; height: 1.16rem; background: url('../../assets/img/activity/banner1/renmai.png') no-repeat center; background-size: cover; left: 1.46rem; top: 3.3rem;}
.slide1 .pingtai {position: absolute; width: 1.71rem; height: 1.17rem; background: url('../../assets/img/activity/banner1/pingtai.png') no-repeat center; background-size: cover; left: 4.16rem; top: 4.84rem;}
.slide1 .loading {position: absolute; width: 4.75rem; height: 4.92rem; background: url('../../assets/img/activity/banner1/loading.png') no-repeat center; background-size: cover; left: 1.34rem; top: 2.18rem;}
.slide1 .logo {position: absolute; width: .75rem; height: .75rem; background: url('../../assets/img/activity/banner1/logo.png') no-repeat center; background-size: cover; left: 3.38rem; top: 4.21rem;}
.slide1 .jiazhi {position: absolute; width: 3.17rem; height: .36rem; background: url('../../assets/img/activity/banner1/jiazhi.png') no-repeat center; background-size: cover; left: 2.17rem; top: 7.53rem;}
.biaoyu {position: absolute; top: 8.31rem; color: #50C7FF; text-align: center; width: 100%;}
.jianxie {font-size: .18rem; margin-bottom: .15rem; position: relative; opacity: .55;}
.jianxie::after {content: ""; display: block; background: url('../../assets/img/activity/bottom.png') no-repeat center; background-size: contain; width: 4.2rem; height: .1rem; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);}
.neirong {font-size: .2rem; opacity: .55;}
/* slide2 */ 
.slide2 .biaoti {position: absolute; width: 5.09rem; height: 1.35rem; background: url('../../assets/img/activity/banner2/biaoti.png') no-repeat center; background-size: contain; left: 1.09rem; top: .44rem;}
.slide2 .wenzi {position: absolute; width: 6.01rem; height: 3.93rem; background: url('../../assets/img/activity/banner2/wenzi.png') no-repeat center; background-size: cover; left: .75rem; top: 2.16rem; text-align: center; padding: .29rem .36rem; text-align: left;}
.slide2 .wenzi-tit {color: #84D8FF; font-size: .24rem; font-weight: bold; line-height: .36rem; text-align: center; margin-top: .10rem;}
.slide2 .wenzi-con {font-size: .22rem; color: #50C7FF; opacity: .6; line-height: .36rem;}
.slide2 .piaofu div:nth-child(1) {position: absolute; background: url('../../assets/img/activity/banner2/p1.png') no-repeat center; background-size: contain; width: 2.26rem; height: .9rem; top: 6.3rem; left: 0;}
.slide2 .piaofu div:nth-child(2) {position: absolute; background: url('../../assets/img/activity/banner2/p2.png') no-repeat center; background-size: contain; width: 2.8rem; height: .83rem; top: 6.3rem;}
.slide2 .piaofu div:nth-child(3) {position: absolute; background: url('../../assets/img/activity/banner2/p3.png') no-repeat center; background-size: contain; width: 3.28rem; height: .81rem; top: 6.3rem;}
.slide2 .piaofu div:nth-child(4) {position: absolute; background: url('../../assets/img/activity/banner2/p4.png') no-repeat center; background-size: contain; width: 5.38rem; height: .81rem; top: 6.3rem;}
.slide2 .piaofu div:nth-child(5) {position: absolute; background: url('../../assets/img/activity/banner2/p5.png') no-repeat center; background-size: contain; width: 2.17rem; height: .91rem; top: 6.3rem;}
.slide2 .piaofu div:nth-child(6) {position: absolute; background: url('../../assets/img/activity/banner2/p6.png') no-repeat center; background-size: contain; width: 2.38rem; height: .81rem; top: 6.3rem;}
/* slide3 */ 
.slide3 .biaoti {position: absolute; width: 4.81rem; height: 1.24rem; background: url('../../assets/img/activity/banner3/biaoti.png') no-repeat center; background-size: contain; left: 1.18rem; top: .58rem;}
.slide3 .zhaomu {position: absolute; width: 4.2rem; height: .8rem; background: url('../../assets/img/activity/banner3/zhaomu.png') no-repeat center; background-size: contain; left: 1.65rem; top: 2.54rem; color: #9EE4FF; font-size: .4rem; text-align: center; line-height: .8rem;}
.slide3 .zhiwei div {position: absolute; width: 2.76rem; height: .66rem; background: url('../../assets/img/activity/banner3/zhiwei.png') no-repeat center; background-size: contain; top: 3.67rem; color: #00FFFF; font-size: .3rem;}
.slide3 .zhiwei div:nth-child(1) {left: .93rem;}
.slide3 .zhiwei div:nth-child(2) {left: 3.85rem;}
/* slide4 */ .slide4 {}

/* 参与 */
.join {position: absolute; top: 9.41rem; left: 2.72rem; z-index: 2;}
.joinBtn {display: block; width: 2.08rem; height: 0.76rem; background: linear-gradient(0deg, rgba(81,234,236,1), rgba(89,67,197,1)); border-radius: .08rem; text-align: center; line-height: 0.76rem; font-size: .3rem; font-family: 'PingFang-SC-Medium'; color: #fff;}

/* 商家 */
.business {width: 100%; border-top: .02rem solid #bbb; padding-top: .2rem; margin-bottom: .36rem; color: #101010;}
.bustit {margin: auto; font-size: .36rem; text-align: center; margin-bottom: .6rem;}
.bus_con dd {margin-bottom: .2rem; position: relative; border-bottom: 1px solid #E5E5E5; padding-bottom: .2rem;}
.bus_con dd li {font-size: 0.26rem; color: #333;}
.bus_con dd li span {font-size: 0.22rem; color: #999;}
.bus_con dd li:nth-child(1) {float: left; margin-left: 1.2rem;}
.bus_con dd li:nth-child(1) p {font-size: 0.28rem; color: #333;}
.bus_con dd li:nth-child(2) {float: right; margin-right: 0.2rem; line-height: .75rem;}
.bus_con dd img {position: absolute; left: 0.2rem; width: .84rem; height: .84rem; float: left; border-radius: 50%;}
.bus_con dd::after {content: ""; display: block; clear: both; overflow: hidden; visibility: hidden; height: 0;}
.loadmore {text-align: center;}
.noBusiness {text-align: center; font-size: .28rem; color: #999;}

/* 规则 */
.actrules {width: 100%; border-top: .02rem solid #bbb; padding-top: .2rem; color: #101010;}
.rulestit {margin: auto; font-size: .36rem; text-align: center; margin-bottom: .04rem;}
.rulescon li {font-size: .28rem; margin-left: .4rem; margin-bottom: .2rem;}

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

