<template>
  <div class="container">
    <!-- 分享者内容 -->
    <div class="sharer" ref="sharer">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <div class="slide slide1">
            <Amusic></Amusic>
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
              <a href="javascript:;" class="joinBtn" @click="shareFun('weChat',1)">我要参与</a>
            </div>
            <Arules :rulesPage="rulesPage"></Arules>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide2">
            <Amusic></Amusic>
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
            </div>
            <div class="biaoyu">
              <div class="jianxie">成功 = 度势</div>
              <div class="neirong">一个专注于女性健康美的生态服务平台</div>
            </div>
            <div class="join">
              <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
              <a href="javascript:;" class="joinBtn" @click="shareFun('weChat',1)">我要参与</a>
            </div>
            <Arules :rulesPage="rulesPage"></Arules>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide3">
            <Amusic></Amusic>
            <div class="biaoti"></div>
            <div class="zhaomu">招募对象</div>
            <div class="zhiwei">
              <div class="jingli">产品经理</div>
              <div class="zongjian">商务总监</div>
            </div>
            <div class="wenzi">
              <div class="huizhang"></div>
              <ul>
                <li>免费领城市经理身份及权益</li>
                <li>免费领商务经理身份及权益</li>
                <li>拓展商家入驻，完成服務交易即可获取提成</li>
              </ul>
            </div>
            <div class="xianzhi">闲置商家资源+碎片化时间=一次拓展，持续收益，上不封顶</div>
            <div class="biaoyu">
              <div class="jianxie">成功 = 聚势</div>
              <div class="neirong">一个专注于女性健康美的生态服务平台</div>
            </div>
            <div class="join">
              <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
              <a href="javascript:;" class="joinBtn" @click="shareFun('weChat',1)">我要参与</a>
            </div>
            <Arules :rulesPage="rulesPage"></Arules>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide4">
            <Amusic></Amusic>
            <div class="wenzi">
              <div class="biaoti">不会做？</div>
              <div class="biaoti">怕做不好？</div>
              <div class="biaoti">再看看？</div>
              <div class="neirong">没关系，专业的培训团队，平台丰富内容支持</div>
              <div class="neirong">没关系，全程引导，模式高收益、零风险</div>
              <div class="neirong">对不起，机会不等人</div>
            </div>
            <div class="shenfen">
              <div class="type1">前10000名铂金会员</div>
              <div class="type2">免费获得商务总监身份</div>
              <div class="type1">前300名俱乐部长</div>
              <div class="type2">免费获得城市经理身份</div>
            </div>
            <div class="chatu"></div>
            <div class="changyi">
              <p>如果你想利用碎片化时间赚钱</p>
              <p>如果你还热忱于女性健康传播事业</p>
              <p>如果你有适合平台商家资源</p>
            </div>
            <div class="jiaru">请加入我们，传递梦想，共同创造价值</div>
            <div class="biaoyu">
              <div class="jianxie">成功 = 传递</div>
              <div class="neirong">一个专注于女性健康美的生态服务平台</div>
            </div>
            <div class="join">
              <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
              <a href="javascript:;" class="joinBtn" @click="shareFun('weChat',1)">我要参与</a>
            </div>
            <Arules :rulesPage="rulesPage"></Arules>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      <Abusiness></Abusiness>
    </div>
  </div>
</template>

<script>
import store from '@/store'
import * as ACT_API from '@/api/activity'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Abusiness from '@/components/Activity/Abusiness'
import Amusic from '@/components/Activity/Amusic'
import Arules from '@/components/Activity/Arules'
export default {
  data() {
    let _this = this
    let $ = this.$
    return {
      rulesPage: 'asharer',
      isShare: false,
      shareUserId: '',
      swiperOption: {
        effect: 'fade',
        direction: 'vertical',
        preventInteractionOnTransition : true,
        speed: 1000,
        pagination: {
          el: '.swiper-pagination',
          bulletClass : 'my-bullet',
          bulletActiveClass: 'my-bullet-active'
        },
        on: {
          // 轮播内容设置
          slideChangeTransitionStart() {
            $('.slide').eq(this.activeIndex).children().css('display', 'none')
          },
          slideChangeTransitionEnd() {
            $('.amusic').fadeIn()
            $('.amusic .logo').fadeIn()
            $('.biaoyu').fadeIn()
            $('.join').fadeIn()
            $('.arules').fadeIn()
            $('.renmai').removeClass('renmai_transform')
            $('.pingtai').removeClass('pingtai_transform')
            if (this.activeIndex == 0) {
              $('.nvxing').stop()
              .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
              .animate({width: '6.45rem', height: '1.12rem', left: '.53rem', top: '.94rem'})
              $('.joinus').stop()
              .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
              .animate({width: '1.9rem', height: '.76rem', left: '2.78rem', top: '2.92rem'})
              $('.zuobian').stop()
              .css({left: '-3rem', top: '5rem', display: 'block'})
              .animate({left: '.26rem', top: '4.54rem'})
              $('.youbian').stop()
              .css({left: '100%', top: '3.2rem', display: 'block'})
              .animate({left: '4.24rem', top: '3.58rem'})
              $('.renmai').stop()
              .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
              .animate({width: '1.78rem', height: '1.16rem', left: '1.46rem', top: '3.3rem'})
              .addClass('renmai_transform')
              $('.pingtai').stop()
              .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
              .animate({width: '1.71rem', height: '1.17rem', left: '4.16rem', top: '4.84rem'})
              .addClass('pingtai_transform')
              $('.loading').stop()
              .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
              .animate({width: '4.75rem', height: '4.92rem', left: '1.34rem', top: '2.18rem'})
              $('.logo').eq(1).stop()
              .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
              .animate({width: '.75rem', height: '.75rem', left: '3.38rem', top: '4.21rem'})
              $('.jiazhi').stop()
              .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
              .animate({width: '3.17rem', height: '.36rem', left: '2.17rem', top: '7.53rem'})
            } else if (this.activeIndex == 1) {
              $('.biaoti').stop()
              .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
              .animate({width: '5.09rem', height: '1.35rem',left: '1.09rem', top: '.44rem',}, () => {
                $('.wenzi').fadeIn()
                $('.piaofu').css({display: 'block'})
                _this.piaofu()
              })
            } else if (this.activeIndex == 2) {
              $('.biaoti').stop()
              .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
              .animate({width: '4.81rem', height: '1.24rem',left: '1.18rem', top: '.58rem',}, () => {
                $('.zhaomu').stop()
                .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
                .animate({width: '4.2rem', height: '.8rem', left: '1.65rem', top: '2.54rem'}, () => {
                  $('.zhiwei').css({display: 'block'})
                  $('.zhiwei div').eq(0).stop()
                  .css({left: '-2.76rem', display: 'block'})
                  .animate({left: '.93rem'})
                  $('.zhiwei div').eq(1).stop()
                  .css({left: '9.76rem', display: 'block'})
                  .animate({left: '3.85rem'})
                  $('.wenzi').fadeIn().css({overflow: 'hidden'})
                  $('.wenzi ul li')
                  .css({marginLeft: '6rem', whiteSpace: 'nowrap'})
                  .eq(0).stop()
                  .animate({marginLeft: '.29rem'}, () => {
                    $('.wenzi ul li').eq(1).stop()
                    .animate({marginLeft: '.29rem'}, () => {
                      $('.wenzi ul li').eq(2).stop()
                      .animate({marginLeft: '.29rem'}, () => {
                        $('.xianzhi').fadeIn()
                      })
                    })
                  })
                })
              })
            } else if (this.activeIndex == 3) {
              $('.wenzi').css({display: 'block'})
              $('.wenzi div').css({left: '7.5rem', display: 'block'})
              $('.wenzi .biaoti')
              .css({top: '1.04rem'})
              .eq(0).stop()
              .animate({left: '1.3rem'}, () => {
                $('.wenzi .biaoti').eq(1).stop()
                .animate({left: '2.98rem'}, () => {
                  $('.wenzi .biaoti').eq(2).stop()
                  .animate({left: '4.97rem'}, () => {
                    $('.wenzi .neirong').stop()
                    .animate({left: '1.3rem'}, () => {
                      $('.shenfen').fadeIn()
                      $('.chatu').fadeIn()
                      $('.shenfen .type1').stop()
                      .css({marginLeft: '-6.68rem', whiteSpace: 'nowrap'})
                      .animate({marginLeft: '.45rem'})
                      $('.shenfen .type2').stop()
                      .css({marginLeft: '6.68rem', whiteSpace: 'nowrap'})
                      .animate({marginLeft: '2.43rem'}, () => {
                        $('.changyi').fadeIn(() => {
                          $('.jiaru').fadeIn()
                        })
                      })
                    })
                  })
                })
              })
            }
          }
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide,
    Abusiness,
    Amusic,
    Arules
  },
  mounted() {
    this.getJoinUrl()
    this.initPageZero()
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
        aDivs[i].style.top = '6.5rem'
        aDivs[i].style.left = '1.2rem'
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
    },
    initPageZero() {
      let $ = this.$
      $('.slide').eq(this.activeIndex).children().css('display', 'none')
      $('.nvxing').stop()
      .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
      .animate({width: '6.45rem', height: '1.12rem', left: '.53rem', top: '.94rem'})
      $('.joinus').stop()
      .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
      .animate({width: '1.9rem', height: '.76rem', left: '2.78rem', top: '2.92rem'})
      $('.zuobian').stop()
      .css({left: '-3rem', top: '5rem', display: 'block'})
      .animate({left: '.26rem', top: '4.54rem'})
      $('.youbian').stop()
      .css({left: '100%', top: '3.2rem', display: 'block'})
      .animate({left: '4.24rem', top: '3.58rem'})
      $('.renmai').stop()
      .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
      .animate({width: '1.78rem', height: '1.16rem', left: '1.46rem', top: '3.3rem'})
      .addClass('renmai_transform')
      $('.pingtai').stop()
      .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
      .animate({width: '1.71rem', height: '1.17rem', left: '4.16rem', top: '4.84rem'})
      .addClass('pingtai_transform')
      $('.loading').stop()
      .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
      .animate({width: '4.75rem', height: '4.92rem', left: '1.34rem', top: '2.18rem'})
      $('.logo').eq(1).stop()
      .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
      .animate({width: '.75rem', height: '.75rem', left: '3.38rem', top: '4.21rem'})
      $('.jiazhi').stop()
      .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
      .animate({width: '3.17rem', height: '.36rem', left: '2.17rem', top: '7.53rem'})
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
.renmai_transform {transform: rotate(360deg); transform-origin: 3.2rem 1.3rem; transition: all 1s linear;}
.pingtai_transform {transform: rotate(360deg); transform-origin: -1.2rem -1.3rem; transition: all 1s linear;}
/* slide1 */ 
.slide1 .nvxing {position: absolute; background: url('../../assets/img/activity/banner1/zu12.png') no-repeat center; background-size: cover; width: 6.45rem; height: 1.12rem; left: .53rem; top: .94rem;}
.slide1 .joinus {position: absolute; width: 1.9rem; height: .76rem; background: url('../../assets/img/activity/banner1/juxing.png') no-repeat center; background-size: cover; text-align: center; line-height: .76rem; left: 2.78rem; top: 2.92rem; font-size: .23rem; color: #fff;}
.slide1 .zuobian {position: absolute; width: 3rem; height: 2.52rem; background: url('../../assets/img/activity/banner1/zuobian.png') no-repeat center; background-size: cover; left: .26rem; top: 4.54rem;}
.slide1 .youbian {position: absolute; width: 3.26rem; height: 2.29rem; background: url('../../assets/img/activity/banner1/youbian.png') no-repeat center; background-size: cover; left: 4.24rem; top: 3.58rem;}
.slide1 .renmai {position: absolute; width: 1.78rem; height: 1.16rem; background: url('../../assets/img/activity/banner1/renmai.png') no-repeat center; background-size: cover; left: 1.46rem; top: 3.3rem;}
.slide1 .pingtai {position: absolute; width: 1.71rem; height: 1.17rem; background: url('../../assets/img/activity/banner1/pingtai.png') no-repeat center; background-size: cover; left: 4.16rem; top: 4.84rem;}
.slide1 .loading {position: absolute; width: 4.75rem; height: 4.92rem; background: url('../../assets/img/activity/banner1/loading.png') no-repeat center; background-size: cover; left: 1.34rem; top: 2.18rem; animation: xuanzhuan 3s linear infinite;}
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
.slide3 .zhiwei div {position: absolute; width: 2.76rem; height: .66rem; background: url('../../assets/img/activity/banner3/zhiwei.png') no-repeat center; background-size: contain; top: 3.67rem; color: #00FFFF; font-size: .3rem; text-align: center; line-height: .66rem;}
.slide3 .zhiwei div:nth-child(1) {left: .93rem;}
.slide3 .zhiwei div:nth-child(2) {left: 3.85rem;}
.slide3 .wenzi {position: absolute; width: 5.67rem; height: 1.99rem; left: .92rem; top: 4.79rem; background: url('../../assets/img/activity/banner3/wenzi.png') no-repeat center; background-size: cover;}
.slide3 .wenzi .huizhang {position: absolute; width: 1.17rem; height: 1.34rem; left: 3.87rem; top: 0; background: url('../../assets/img/activity/banner3/huizhang.png') no-repeat center; background-size: contain;}
.slide3 .wenzi ul li {font-size: .24rem; color: #50C7FF; margin-top: .2rem; margin-left: .29rem; margin-bottom: .29rem; background: url('../../assets/img/activity/banner3/tuoyuan1.png') no-repeat left center; padding-left: .25rem; background-size: .16rem;}
.slide3 .wenzi ul li:nth-child(3) {background: url('../../assets/img/activity/banner3/tuoyuan2.png') no-repeat left center; font-size: .24rem; color: #9EE4FF; background-size: .18rem;}
.slide3 .xianzhi {position: absolute; left: .79rem; top: 7.4rem; color: #50C7FF; font-size: .22rem;}
/* slide4 */ 
.slide4 .wenzi div {position: absolute;}
.slide4 .wenzi .biaoti {color: #47CFEC; font-size: .3rem; top: 1.04rem;}
.slide4 .wenzi .biaoti:nth-child(1) {left: 1.3rem;}
.slide4 .wenzi .biaoti:nth-child(2) {left: 2.98rem;}
.slide4 .wenzi .biaoti:nth-child(3) {left: 4.97rem;}
.slide4 .wenzi .neirong {color: #50C7FF; font-size: .24rem; left: 1.3rem;}
.slide4 .wenzi .neirong:nth-child(4) {color: #50C7FF; font-size: .24rem; top: 1.63rem;}
.slide4 .wenzi .neirong:nth-child(5) {color: #50C7FF; font-size: .24rem; top: 2.06rem;}
.slide4 .wenzi .neirong:nth-child(6) {color: #50C7FF; font-size: .24rem; top: 2.5rem;}
.slide4 .shenfen {position: absolute; width: 6.68rem; height: 2.36rem; background: url('../../assets/img/activity/banner4/shenfen.png') no-repeat center; background-size: cover; left: .41rem; top: 3.16rem; padding-top: .2rem}
.slide4 .shenfen .type1 {background: linear-gradient(-30deg, rgba(163,96,255,1) 60%, rgba(74,248,255,1) 100%); -webkit-background-clip: text; -webkit-text-fill-color:transparent;  font-size: .3rem; font-weight: bold; margin-left: .45rem; margin-bottom: .18rem;}
.slide4 .shenfen .type2 {font-size: .26rem; color: #50C7FF; margin-left: 2.43rem; margin-bottom: .18rem;}
.slide4 .chatu {position: absolute; width: 1.58rem; height: 2.67rem; background: url('../../assets/img/activity/banner4/chatu.png') no-repeat center; background-size: contain; left: 5.32rem; top: 2.76rem;}
.slide4 .changyi {position: absolute; color: #50C7FF; font-size: .24rem; top: 6.03rem; text-align: center; width: 100%;}
.slide4 .changyi p {margin-bottom: .1rem;}
.slide4 .jiaru {font-size: .3rem; background:linear-gradient(-30deg,rgba(163,96,255,1) 25%, rgba(74,248,255,1) 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; position: absolute; top: 7.45rem; left: 1.14rem; font-weight: bold;}

/* 参与 */
.join {position: absolute; top: 9.41rem; left: 2.72rem; z-index: 2;}
.joinBtn {display: block; width: 2.08rem; height: 0.76rem; background: linear-gradient(0deg, rgba(89,67,197,1), rgba(81,234,236,1)); border-radius: .08rem; text-align: center; line-height: 0.76rem; font-size: .3rem; font-family: 'PingFang-SC-Medium'; color: #fff;}

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

