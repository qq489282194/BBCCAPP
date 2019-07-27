<template>
  <div>
    <!-- 分享者内容 -->
    <div class="sharer">
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
            <div class="ruzhu"></div>
            <div class="biaoyu">
              <div class="jianxie">成功 = 审时</div>
              <div class="neirong">一个专注于女性健康美的生态服务平台</div>
            </div>
            <div class="join">
              <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
              <a href="javascript:;" class="joinBtn" @click="show = true">我要参与</a>
              <a href="javascript:;" class="joinBtn">我要分享</a>
            </div>
            <Arules></Arules>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide2">
            <Amusic></Amusic>
            <div class="biaoti"></div>
            <div class="wenzi">
              为女性网友提供一站式的曲线美产品及服务的专业垂直平台，以标准化的服务体系，口碑的消费参考为支撑。好玩、有趣、实用的女性平台。
            </div>
            <div class="piaofu">
              <div></div>
            </div>
            <div class="biaoyu">
              <div class="jianxie">成功 = 度势</div>
              <div class="neirong">一个专注于女性健康美的生态服务平台</div>
            </div>
            <div class="join">
              <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
              <a href="javascript:;" class="joinBtn" @click="show = true">我要参与</a>
              <a href="javascript:;" class="joinBtn">我要分享</a>
            </div>
            <Arules></Arules>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide3">
            <Amusic></Amusic>
            <div class="biaoti"></div>
            <div class="wenzi">
              <dl>
                <dd>专&nbsp;&nbsp;&nbsp;注</dd>
                <dd>女性健康美领域</dd>
              </dl>
              <dl>
                <dd>专&nbsp;&nbsp;&nbsp;业</dd>
                <dd>专业运营、供应链、技术研发、支撑团队</dd>
              </dl>
              <dl>
                <dd>千万级</dd>
                <dd>垂直用户</dd>
              </dl>
              <dl>
                <dd>传&nbsp;&nbsp;&nbsp;递</dd>
                <dd>健康、价值</dd>
              </dl>
              <dl>
                <dd>大数据</dd>
                <dd>精准营销</dd>
              </dl>
              <dl>
                <dd>海&nbsp;&nbsp;&nbsp;量</dd>
                <dd>资讯内容、产品服务</dd>
              </dl>
            </div>
            <div class="biaoyu">
              <div class="jianxie">成功 = 聚力</div>
              <div class="neirong">一个专注于女性健康美的生态服务平台</div>
            </div>
            <div class="join">
              <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
              <a href="javascript:;" class="joinBtn" @click="show = true">我要参与</a>
              <a href="javascript:;" class="joinBtn">我要分享</a>
            </div>
            <Arules></Arules>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide4">
            <Amusic></Amusic>
            <div class="biaoti"></div>
            <div class="zhaomu"><span>招募</span>“五美”商家</div>
            <div class="jieshao">
              <p>以美胸、美体、美妆、美容、医美为代表的女性健康美全领域商家</p>
            </div>
            <div class="wenzi">
              <div class="tit">加入我们，你将获得</div>
              <div class="tit2">前100家入驻政策扶持</div>
              <ul class="con1">
                <li>1、免入驻费用</li>
                <li>2、提供品牌页免费设计服务</li>
                <li>3、提供商品及服务快速审核通道</li>
                <li>4、首页免费推荐广告位</li>
                <li>5、提供三名体验师免费体验评测发文，美胸汇资源全网推广（限3款产品/个）</li>
              </ul>
            </div>
            <div class="biaoyu">
              <div class="jianxie">成功 = 分享</div>
              <div class="neirong">一个专注于女性健康美的生态服务平台</div>
            </div>
            <div class="join">
              <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
              <a href="javascript:;" class="joinBtn" @click="show = true">我要参与</a>
              <a href="javascript:;" class="joinBtn">我要分享</a>
            </div>
            <Arules></Arules>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide5">
            <Amusic></Amusic>
            <div class="biaoti"></div>
            <div class="wenzi">
              <ul>
                <li>快捷上架发布商品及服务；</li>
                <li>客户面对面，在线与客户沟通；</li>
                <li>精准导流，线上导流到店；</li>
                <li>实现快捷线上交易；</li>
                <li>轻松管理客户；</li>
                <li>有效管理订单；</li>
                <li>发布商品及服务活动；</li>
                <li>商家便捷提现；</li>
                <li>商家等级权益奖励；</li>
                <li>商家广告位、流量推荐奖励；</li>
                <li>商家推广培训等平台导流政策扶持。</li>
              </ul>
              <div class="kaituo"></div>
            </div>
            <div class="biaoyu">
              <div class="neirong">一个专注于女性健康美的生态服务平台</div>
            </div>
            <div class="join">
              <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
              <a href="javascript:;" class="joinBtn" @click="show = true">我要参与</a>
              <a href="javascript:;" class="joinBtn">我要分享</a>
            </div>
            <Arules></Arules>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
      <AquickMark></AquickMark>
    </div>
    <!-- 电话弹窗 -->
    <div class="shade" v-show="show" @click="show = false">
      <div class="popup">
        <p class="pop_tit">输入手机号码，完成身份认领即可开启商家拓展，后续我们也会为您提供更好的服务。</p>
        <div class="phoneNum"><input type="text" placeholder="请输入手机号"></div>
        <div class="phoneSms"><input type="text" placeholder="输入验证码"><span class="sendSms" @click="toClick && sendSms()" ref="sendSms">获取验证码</span></div>
        <a href="javascript:;" class="confirm">确定</a>
      </div>
    </div>
  </div>
</template>
<script>
import * as ACT_API from '@/api/activity'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Amusic from '@/components/Activity/Amusic'
import Arules from '@/components/Activity/Arules'
import AquickMark from '@/components/Activity/AquickMark'
export default {
  data() {
    let $ = this.$
    return {
      show: false,
      rulesShow: false,
      phone: '',
      errorMsg: '',
      errorSms: '',
      sms: '',
      toClick: true,
      // 微信授权信息
      oldUserId: '',
      data_oldUserId: '',
      data_newUserId: '',
      toShareUrl: '',
      swiperOption: {
        direction: 'vertical',
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
              $('.ruzhu').stop()
              .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
              .animate({width: '4.97rem', height: '.36rem', left: '1.27rem', top: '7.53rem'})
            } else if (this.activeIndex == 1) {
              $('.biaoti').stop()
              .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
              .animate({width: '5.09rem', height: '1.35rem', left: '1.34rem', top: '.93rem'}, () => {
                $('.wenzi').fadeIn()
              })
            } else if (this.activeIndex == 2) {
              $('.biaoti').stop()
              .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
              .animate({width: '3.38rem', height: '1.22rem', left: '2.26rem', top: '.85rem'}, () => {
                $('.wenzi').stop().css({display: 'block', overflow: 'hidden'})
                $('.wenzi dl').stop().css({marginLeft: '8rem', whiteSpce: 'nowrap', overflow: 'hidden'})
                $('.wenzi dl').eq(0).animate({marginLeft: 0}).delay(300)
                $('.wenzi dl').eq(1).animate({marginLeft: 0}).delay(500)
                $('.wenzi dl').eq(2).animate({marginLeft: 0}).delay(700)
                $('.wenzi dl').eq(3).animate({marginLeft: 0}).delay(900)
                $('.wenzi dl').eq(4).animate({marginLeft: 0}).delay(1100)
                $('.wenzi dl').eq(5).animate({marginLeft: 0}).delay(1300)
              })
            } else if (this.activeIndex == 3) {
              $('.biaoti').stop()
              .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
              .animate({width: '3.51rem', height: '1.23rem', left: '2rem', top: '.58rem'})
              $('.zhaomu').stop()
              .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
              .animate({width: '4.2rem', height: '.8rem', left: '1.65rem', top: '2.28rem'}, () => {
                $('.jieshao').fadeIn(() => {
                  $('.wenzi').css({display: 'block'})
                  $('.con1 li').css({marginLeft: '5.68rem'})
                  $('.con1 li').stop().css({marginLeft: '5.68rem'})
                  $('.con1 li').eq(0).animate({marginLeft: 0}, () => {
                    $('.con1 li').eq(1).animate({marginLeft: 0}, () => {
                      $('.con1 li').eq(2).animate({marginLeft: 0}, () => {
                        $('.con1 li').eq(3).animate({marginLeft: 0}, () => {
                          $('.con1 li').eq(4).animate({marginLeft: 0})
                        })
                      })
                    })
                  })
                })
              })
            } else if (this.activeIndex == 4) {
              $('.biaoti').stop()
              .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
              .animate({width: '2.29rem', height: '0.55rem', left: '2.62rem', top: '.66rem'}, () => {
                $('.wenzi').fadeIn()
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
    Amusic,
    Arules,
    AquickMark
  },
  mounted() {
    // if (!localStorage.getItem('openid') && !localStorage.getItem('unionId')) {
    //   this.toShareUrl = window.location.href
    //   let oldUrl = window.location.search.slice(1)
    //   this.oldUserId = oldUrl.split('=')[1]
    //   this.$getShopAuthorize('Login', (res)=>{
    //     console.log(res,'-----微信授权Login------')	
    //   }, this.oldUserId)
    // } else {
    //   let urlStr = window.location.href
    //   this.toShareUrl = urlStr.replace('/bbc-personal', '') + '?oldUserId=' + localStorage.getItem('oldUserId')
    //   this.bindUserRelation()
    // }
  },
  methods: {
    // 绑定用户上下级关系
    bindUserRelation() {
      this.data_oldUserId = localStorage.getItem('oldUserId')
      this.data_newUserId = localStorage.getItem('userId')
      ACT_API.bindUserRelation(this.data_oldUserId, this.data_newUserId).then(response => {
        console.log('绑定关系是否成功', response.msg)
      })
    },
    // 发送信息
    sendSms() {
      let _this = this
      let count = 60
      let countDownTimer = setInterval(() => {
        this.toClick = false
        count -= 1
        this.$refs.sendSms.innerHTML = `${count}s后重新获取`
        if (count <= 0) {
          clearInterval(countDownTimer)
          this.toClick = true
          this.$refs.sendSms.innerHTML = `获取验证码`
        }
      }, 1000)
      let params = {
        phone: this.phone
      }
      // ACT_API.sendSms(params).then(response => {
      //   console.log('发送信息', response)
      // })
    },
    // 确认信息
    confirmMsg() {
      let params = {
        recive: this.phone,
        code: this.sms
      }
      ACT_API.checkCode(params).then(response => {
        console.log('验证码', response)
      })
    },
    // 分享模块
    shareFun(type,typeNumber) {
      let title = ''
      let description = "";
      let imgSrc = "";
      let hostUrl = this.toShareUrl
      // let hostUrl = this.article.shareUrl
      let activityId = "";
      this._system_shareTo(title,description,imgSrc,hostUrl,"",activityId,type);
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
.renmai_transform {transform: rotate(360deg); transform-origin: 3.2rem 1.3rem; transition: all 2s linear;}
.pingtai_transform {transform: rotate(360deg); transform-origin: -1.2rem -1.3rem; transition: all 2s linear;}
/* slide1 */ 
.slide1 .nvxing {position: absolute; background: url('../../assets/img/activity/banner1/zu12.png') no-repeat center; background-size: cover; width: 6.45rem; height: 1.12rem; left: .53rem; top: .94rem;}
.slide1 .joinus {position: absolute; width: 1.9rem; height: .76rem; background: url('../../assets/img/activity/banner1/juxing.png') no-repeat center; background-size: cover; text-align: center; line-height: .76rem; left: 2.78rem; top: 2.92rem; font-size: .23rem; color: #fff;}
.slide1 .zuobian {position: absolute; width: 3rem; height: 2.52rem; background: url('../../assets/img/activity/banner1/zuobian.png') no-repeat center; background-size: cover; left: .26rem; top: 4.54rem;}
.slide1 .youbian {position: absolute; width: 3.26rem; height: 2.29rem; background: url('../../assets/img/activity/banner1/youbian.png') no-repeat center; background-size: cover; left: 4.24rem; top: 3.58rem;}
.slide1 .renmai {position: absolute; width: 1.78rem; height: 1.16rem; background: url('../../assets/img/activity/banner1/renmai.png') no-repeat center; background-size: cover; left: 1.46rem; top: 3.3rem;}
.slide1 .pingtai {position: absolute; width: 1.71rem; height: 1.17rem; background: url('../../assets/img/activity/banner1/pingtai.png') no-repeat center; background-size: cover; left: 4.16rem; top: 4.84rem;}
.slide1 .loading {position: absolute; width: 4.75rem; height: 4.92rem; background: url('../../assets/img/activity/banner1/loading.png') no-repeat center; background-size: cover; left: 1.34rem; top: 2.18rem; animation: xuanzhuan 3s linear infinite;}
.slide1 .logo {position: absolute; width: .75rem; height: .75rem; background: url('../../assets/img/activity/banner1/logo.png') no-repeat center; background-size: cover; left: 3.38rem; top: 4.21rem;}
.slide1 .ruzhu {position: absolute; width: 4.97rem; height: .36rem; background: url('../../assets/img/activity/banner1/ruzhu.png') no-repeat center; background-size: cover; left: 1.27rem; top: 7.53rem;}
.biaoyu {position: absolute; top: 8.31rem; color: #50C7FF; text-align: center; width: 100%;}
.jianxie {font-size: .18rem; margin-bottom: .15rem; position: relative; opacity: .55;}
.jianxie::after {content: ""; display: block; background: url('../../assets/img/activity/bottom.png') no-repeat center; background-size: contain; width: 4.2rem; height: .1rem; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);}
.neirong {font-size: .2rem; opacity: .55;}
/* slide2 */
.slide2 .biaoti {position: absolute; width: 5.09rem; height: 1.35rem; background: url('../../assets/img/activity/banner2/biaoti.png') no-repeat center; background-size: contain; left: 1.34rem; top: .93rem;}
.slide2 .wenzi {position: absolute; width: 6.01rem; height: 2.17rem; background: url('../../assets/img/activity/banner2/wenzi2.png') no-repeat center; background-size: cover; left: .75rem; top: 2.48rem; text-align: left; padding: .3rem .35rem; line-height: .52rem; color: #84D8FF;}
.slide2 .piaofu div {position: absolute; top: 5.19rem;}
.slide2 .piaofu div:nth-child(1) {background: url('../../assets/img/activity/banner2/p_1.png') no-repeat center; width: 5.34rem; height: .71rem; background-size: cover;}
/* slide3 */
.slide3 .biaoti {position: absolute; background: url('../../assets/img/activity/banner3/biaoti2.png') no-repeat center; background-size: cover; width: 3.38rem; height: 1.22rem; left: 2.26rem; top: 0.85rem;}
.slide3 .wenzi {position: absolute; background: url('../../assets/img/activity/banner3/wenzi2.png') no-repeat center; background-size: cover; width: 6.17rem; height: 5.16rem; left: .67rem; top: 2.48rem; padding-top: .53rem; padding-left: .41rem;}
.slide3 .wenzi dl dd {float: left; margin-bottom: .45rem;}
.slide3 .wenzi dl dd:nth-child(1) {float: left; margin-right: .32rem; font-size: .24rem; color: #57F1FF;}
.slide3 .wenzi dl dd:nth-child(2) {font-size: .24rem; color: #7FCFF6;}
.slide3 .wenzi dl::after {content: ""; display: block; clear: both; visibility: none; height: 0;}
/* slide4 */
.slide4 .biaoti {position: absolute; width: 3.51rem; height: 1.23rem; left: 2rem; top: .58rem; background: url('../../assets/img/activity/banner4/biaoti2.png') no-repeat center; background-size: cover;}
.slide4 .zhaomu {position: absolute; width: 4.2rem; height: .8rem; background: url('../../assets/img/activity/banner4/zhaomu.png') no-repeat center; background-size: cover; left: 1.65rem; top: 2.28rem; color: #00FFFF; font-size: .4rem; text-align: center; line-height: .8rem;}
.slide4 .zhaomu span {color: #9EE4FF;}
.slide4 .jieshao {position: absolute; font-size: .4rem; color: #50C7FF; top: 3.2rem; width: 100%;}
.slide4 .jieshao p {transform: scale(0.5); white-space: nowrap; position: absolute; left: -2.1rem;}
.slide4 .wenzi {position: absolute; width: 5.68rem; height: 4.05rem; left: 0.91rem; top: 3.98rem; background: url('../../assets/img/activity/banner4/wenzi2.png') no-repeat center; background-size: cover; padding-top: .28rem; padding-left: .6rem; padding-right: .45rem;}
.slide4 .wenzi .tit {background:linear-gradient(-30deg,rgba(163,96,255,1) 30%, rgba(74,248,255,1) 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; text-align: center; font-size: .24rem;}
.slide4 .wenzi .tit2 {color: #9EE4FF; font-size: .22rem; margin: .2rem 0; position: relative; padding-left: .3rem;}
.slide4 .wenzi .tit2::before {content: ""; display: block; width: .2rem; height: .2rem; background: url('../../assets/img/activity/banner5/tuoyuan1.png') no-repeat center; background-size: cover; position: absolute; left: 0; top: .07rem;}
.slide4 .wenzi ul li {color: #50C7FF; font-size: .24rem; margin-bottom: .12rem;}
/* slide5 */
.slide5 .biaoti {position: absolute; width: 2.29rem; height: 0.55rem; left: 2.62rem; top: .66rem; background: url('../../assets/img/activity/banner5/biaoti.png') no-repeat center; background-size: cover;}
.slide5 .wenzi {position: absolute; width: 6.68rem; height: 6.38rem; left: .41rem; top: 1.68rem; background: url('../../assets/img/activity/banner5/wenzi.png') no-repeat center; background-size: cover; padding-top: .48rem;}
.slide5 .wenzi ul li {font-size: .24rem; line-height: .38rem; text-align: center; color: #50C7FF;}
.slide5 .wenzi .kaituo {position: absolute; width: 4.3rem; height: .76rem; left: 1.19rem; top: 5.11rem; background: url('../../assets/img/activity/banner5/kaituo.png') no-repeat center; background-size: cover;}

/* 参与 */
.join {position: absolute; top: 9.41rem; left: 1.31rem; z-index: 2;}
.joinBtn {display: block; width: 2.08rem; height: 0.76rem; background: linear-gradient(0deg, rgba(89,67,197,1), rgba(81,234,236,1)); border-radius: .08rem; text-align: center; line-height: 0.76rem; font-size: .3rem; font-family: 'PingFang-SC-Medium'; color: #fff; float: left; margin-right: .7rem;}

/* 电话弹窗 */
.shade {width: 100%; height: 100%; background: rgba(0,0,0,.4); position: fixed; top: 0; left: 0; z-index: 999;}
.popup {width: 5.8rem; height: 5.76rem; border-radius: .2rem; background: #fff; position: fixed; top: 50%; left: 50%; transform: translate(-50%,-50%);}
.pop_tit {font-size: .26rem; color: #333; font-family: 'PingFang-SC-Medium'; width: 5rem; margin: 0 auto; margin-top: 1.16rem; margin-bottom: 0.43rem; line-height: .42rem;}
.popup div {width: 5.02rem; height: .7rem; border: .01rem solid #cfcfcf; margin: auto; margin-bottom: .3rem; border-radius: .1rem; position: relative;}
.popup input {border: none; width: 100%; height: 100%; float: left; padding-left: .21rem;}
.sendSms {position: absolute; font-size: .22rem; color: #F63B75; right: .21rem; top: .18rem;}
.confirm {display: block; position: absolute; width: 2.3rem; height: .7rem; background:linear-gradient(0deg,rgba(81,234,236,1),rgba(89,67,197,1)); border-radius: .04rem; font-size: .32rem; color: #fff; text-align: center; line-height: .7rem; left: 1.75rem; bottom: 0.53rem;}
</style>

