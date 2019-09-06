<template>
  <div class="container">
    <!-- 分享者内容 -->
    <div class="sharer">
      <Amusic></Amusic>
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide>
          <div class="slide slide1">
            <div class="nvxing"></div>
            <div class="jiyu"></div>
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
              <div class="neirong">让女性胸部更美的平台</div>
            </div>
            <div class="join">
              <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
              <a href="javascript:;" class="joinBtn" @click="show = true" v-show="isShowJoin">我要进驻</a>
              <a href="javascript:;" class="joinBtn" v-show="!isShowJoin" @click="quickControl">入驻管理</a>
              <a href="javascript:;" class="joinBtn" @click="clickSharer">我要分享</a>
            </div>
            <Arules :rulesPage="rulesPage"></Arules>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide2">
            
            <div class="biaoti"></div>
            <div class="wenzi">
              这是一个聚焦女性胸部健康美的服务平台，也是一个充满梦想的平台，在这里你将获得海量用户、精准流量；<br>
              在女性胸部健康服务领域，难逢敌手！你要错过吗？<br>
            </div>
            <div class="piaofu">
              <swiper :options="swiperOption1" ref="mySwiper1">
                <swiper-slide><div class="p1"></div></swiper-slide>
                <swiper-slide><div class="p2"></div></swiper-slide>
                <swiper-slide><div class="p3"></div></swiper-slide>
                <swiper-slide><div class="p4"></div></swiper-slide>
                <swiper-slide><div class="p5"></div></swiper-slide>
              </swiper>
            </div>
            <div class="wenzi2">
              美胸汇现开放全国美胸美体线下服务商家入驻、为你打造服务爆品、真实用户口碑、突破事业瓶颈、收获成功的事业！
            </div>
            <div class="biaoyu">
              <div class="jianxie">成功 = 度势</div>
              <div class="neirong">让女性胸部更美的平台</div>
            </div>
            <div class="join">
              <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
              <a href="javascript:;" class="joinBtn" @click="show = true" v-show="isShowJoin">我要进驻</a>
              <a href="javascript:;" class="joinBtn" v-show="!isShowJoin" @click="quickControl">入驻管理</a>
              <a href="javascript:;" class="joinBtn" @click="clickSharer">我要分享</a>
            </div>
            <Arules :rulesPage="rulesPage"></Arules>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide3">
            
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
              <div class="neirong">让女性胸部更美的平台</div>
            </div>
            <div class="join">
              <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
              <a href="javascript:;" class="joinBtn" @click="show = true" v-show="isShowJoin">我要进驻</a>
              <a href="javascript:;" class="joinBtn" v-show="!isShowJoin" @click="quickControl">入驻管理</a>
              <a href="javascript:;" class="joinBtn" @click="clickSharer">我要分享</a>
            </div>
            <Arules :rulesPage="rulesPage"></Arules>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide4">
            
            <div class="biaoti"></div>
            <div class="zhaomu"><span>招募</span>商家类型</div>
            <div class="jieshao">
              <p>服务于女性胸部健康美全领域商家</p>
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
              <div class="neirong">让女性胸部更美的平台</div>
            </div>
            <div class="join">
              <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
              <a href="javascript:;" class="joinBtn" @click="show = true" v-show="isShowJoin">我要进驻</a>
              <a href="javascript:;" class="joinBtn" v-show="!isShowJoin" @click="quickControl">入驻管理</a>
              <a href="javascript:;" class="joinBtn" @click="clickSharer">我要分享</a>
            </div>
            <Arules :rulesPage="rulesPage"></Arules>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide slide5">
            
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
                <li>商家权益权益奖励；</li>
                <li>商家广告位、流量推荐奖励；</li>
                <li>商家推广培训等平台导流政策扶持。</li>
              </ul>
              <div class="kaituo"></div>
            </div>
            <div class="biaoyu">
              <div class="neirong">让女性胸部更美的平台</div>
            </div>
            <div class="join">
              <!-- <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button> -->
              <a href="javascript:;" class="joinBtn" @click="show = true" v-show="isShowJoin">我要进驻</a>
              <a href="javascript:;" class="joinBtn" v-show="!isShowJoin" @click="quickControl">入驻管理</a>
              <a href="javascript:;" class="joinBtn" @click="clickSharer">我要分享</a>
            </div>
            <Arules :rulesPage="rulesPage"></Arules>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
    <AquickMark :__this="this"></AquickMark>
    <!-- 电话弹窗 -->
    <div class="popup" v-show="show">
      <div class="closebtn" @click="show = false"></div>
      <p class="pop_tit">完成手机注册，点击下方【商家入驻及管理】或加商家客服微信BBCCZS，享贴心服务</p>
      <div class="phoneNum"><input type="number" placeholder="请输入手机号" oninput="if(value.length>11)value=value.slice(0,11)" v-model="phone" ref="phoneNum"></div>
      <div class="phoneSms"><input type="number" placeholder="输入验证码" oninput="if(value.length>4)value=value.slice(0,4)" v-model="sms"><span class="sendSms" @click="toClick && sendSms()" ref="sendSms">获取验证码</span></div>
      <a href="javascript:;" class="confirm" @click="confirmMsg">确定</a>
    </div>
    <!-- 复制链接 -->
    <div class="copyUrl" v-show="urlShow">
      <div class="closebtn" @click="urlShow = false"></div>
      <div class="urltit">复制以下链接进行分享:</div>
      <br>
      <textarea class="urlcon" ref="urlcon">{{ toShareUrl }}</textarea>
      <br>
      <div class="urlbtn" @click="copyUrlContent">点击复制</div>
    </div>
    <!-- 提示框 -->
    <div class="myalert" ref="myAlert" v-show="alertShow">您已经是***的下线</div>
    <!-- 点击右上角的弹窗 -->
    <div class="rightTopAlert" v-show="showRightTopAlert">
      <p class="jiantou"></p>
      <div>点击右上方进行分享</div>
      <a href="javascript:;" @click="showRightTopAlert = false">我知道了</a>
    </div>
  </div>
</template>
<script>
import * as ACT_API from '@/api/activity'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import { systemt_wxFun } from '@/assets/js/wxShare'
import Amusic from '@/components/Activity/Amusic'
import Arules from '@/components/Activity/Arules'
import AquickMark from '@/components/Activity/AquickMark'
export default {
  data() {
    let $ = this.$
    return {
      showRightTopAlert: false,
      show: false,
      alertShow: false,
      urlShow: false,
      rulesPage: 'abysharer',
      phone: '',
      errorMsg: '',
      errorSms: '',
      sms: '',
      toClick: true,
      oldUserId: '',
      data_oldUserId: '',
      data_newUserId: '',
      toShareUrl: '',
      isShowJoin: '',
      swiperOption1: {
        autoplay: true,
        delay: 500,
        disableOnInteraction: false,
        loop: true,
      },
      swiperOption: {
        effect: 'fade',
        // loop: true,
        direction: 'vertical',
        preventInteractionOnTransition : true,
        speed: 500,
        pagination: {  
          el: '.swiper-pagination',
          bulletClass : 'my-bullet',
          bulletActiveClass: 'my-bullet-active'
        },
        on: {
          // 轮播内容设置
          slideChangeTransitionStart() {
            if (this.activeIndex == 4) {
              this.allowSlideNext = false
            } else {
              this.allowSlideNext = true
            }
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
              .animate({width: '7.12rem', height: '.62rem', left: '.2rem', top: '.92rem'})
              $('.jiyu').stop()
              .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
              .animate({width: '2.15rem', height: '0.31rem', left: '2.67rem', top: '1.74rem'})
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
              .animate({width: '1.8rem', height: '1.2rem', left: '1.41rem', top: '3.32rem'})
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
              .animate({width: '5.35rem', height: '1.06rem', left: '1.07rem', top: '.90rem'}, () => {
                $('.wenzi').fadeIn(() => {
                  $('.piaofu').css({display: 'block'})
                })
                $('.wenzi2').fadeIn()
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
    // console.log('1111',window.location.href)
    if (!localStorage.getItem('openid') && !localStorage.getItem('unionId')) {
      let oldUrl = window.location.search.slice(1)
      this.oldUserId = oldUrl.split('=')[1]
      this.$getShopAuthorize('Login', (res)=>{
        console.log(res,'-----微信授权Login------')	
      }, this.oldUserId)
    } else {
      // let urlStr = window.location.href
      // this.toShareUrl = 'http://testuser.meibbc.com/bbc-personal/abysharer?oldUserId=' + localStorage.getItem('oldUserId')
      
      this.initPageZero()
      this.isBindingPhone()
      systemt_wxFun(
        '恭喜您获得美胸汇平台入驻邀请',
        '黄金时机入驻，轻松引流拓客，点击查看',
        'https://oss.meibbc.com/BeautifyBreast/logo/logo.png',
        `?oldUserId=${localStorage.getItem('oldUserId')}`
      )
      // this.bindUserRelation()
    }
  },
  methods: {
    // 点击入驻管理按钮进行操作
    quickControl() {
      this.$bus.$emit('quickmark', 222)
    },
    // 判断是否绑定手机号
    isBindingPhone() {
      let userId = localStorage.getItem('wxUserId')
      ACT_API.isBindingPhone(userId).then(res => {
        console.log(res)
        this.isShowJoin = !res.data
      })
    },
    // 绑定用户上下级关系
    bindUserRelation() {
      let leaderId = localStorage.getItem('oldUserId')
      leaderId = leaderId.split('%')[0]
      let data = {
        leaderId,
        subordinateId: localStorage.getItem('wxUserId')
      }
      // this.data_oldUserId = localStorage.getItem('oldUserId')
      // this.data_newUserId = localStorage.getItem('wxUserId')
      let that = this
      ACT_API.bindUserRelation(data).then(response => {
        console.log(data)
        console.log(response)
        // that.showAlert(response.msg)
        if (response.status == 1) {}
      })
    },
    // 发送信息
    sendSms() {
      let data = {
        phone: this.phone
      }
      let _this = this
      if (_this.phone) {
        _this.$refs.phoneNum.style.borderColor = '#cfcfcf'
        let count = 60
        let countDownTimer = setInterval(() => {
          _this.toClick = false
          count -= 1
          _this.$refs.sendSms.style.color = '#999999'
          _this.$refs.sendSms.innerHTML = `${count}s后重新获取`
          if (count <= 0) {
            clearInterval(countDownTimer)
            _this.toClick = true
            _this.$refs.sendSms.style.color = '#F63B75'
            _this.$refs.sendSms.innerHTML = `获取验证码`
          }
        }, 1000)
        let params = {
          phone: _this.phone
        }
        ACT_API.sendSms(params).then(response => {
          console.log('发送信息', response)
          _this.showAlert(response.msg)
        })
      } else {
        _this.$refs.phoneNum.style.borderColor = '#f00'
      }
      // ACT_API.isRegisterPhone(data).then(res => {
      //   console.log(res)
      //   if (res.status == -1) {
          
      //   } else {
      //     _this.showAlert('该手机号已经被注册，请更换手机号~')
      //   }
      // })
    },
    // 确认信息
    confirmMsg() {
      let _this = this
      let params1 = {
        userId: localStorage.getItem('wxUserId'),
        phone: this.phone,
        code: this.sms
      }
      ACT_API.newBindPhone(params1).then(res => {
        console.log(res)
        _this.showAlert(res.msg)
        _this.show = false
        if (res.status == 1) {
          _this.isShowJoin = false
          _this.showAlert(res.msg)
          _this.bindUserRelation() // 绑定上下级关系
        }
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
    },
    // 点击我要分享
    clickSharer() {
      // this.$dialog({
      //   noOkBtn: true,
      //   cancelBtnTxt: '我知道了',
      //   content: "请点击右上角进行分享"
      // });
      this.showRightTopAlert = true
    },
    // 复制链接内容 
    copyUrlContent() {
      let urlcon = this.$refs.urlcon
      urlcon.select()
      document.execCommand("Copy"); // 执行浏览器复制命令
      this.urlShow = false
    },
    // 提示框操作
    showAlert(text) {
      this.$refs.myAlert.innerHTML = text
      this.alertShow = true
      let alertTimer = setTimeout(() => {
        this.alertShow = false
        clearTimeout(alertTimer)
      }, 3000)
    },
    initPageZero() {
      let $ = this.$
      $('.slide').eq(this.activeIndex).children().css('display', 'none')
      $('.nvxing').stop()
        .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
        .animate({width: '7.12rem', height: '.62rem', left: '.2rem', top: '.92rem'})
      $('.jiyu').stop()
      .css({width: 0, height: 0, left: '50%', top: '50%', display: 'block'})
      .animate({width: '2.15rem', height: '0.31rem', left: '2.67rem', top: '1.74rem'})
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
      .animate({width: '1.8rem', height: '1.2rem', left: '1.41rem', top: '3.32rem'})
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
/* .slide1 .nvxing {position: absolute; background: url('../../assets/img/activity/banner1/zu12.png') no-repeat center; background-size: cover; width: 6.45rem; height: 1.12rem; left: .53rem; top: .94rem;} */
.slide1 .nvxing {position: absolute; background: url('../../assets/img/activity/banner1/bbc_city.png') no-repeat center; background-size: contain; width: 7.12rem; height: .62rem; left: .2rem; top: .92rem;}
.slide1 .jiyu {position: absolute; background: url('../../assets/img/activity/banner1/jiyu.png') no-repeat center; background-size: contain; width: 2.15rem; height: .31rem; left: 2.67rem; top: 1.74rem;}
.slide1 .joinus {position: absolute; width: 1.9rem; height: .76rem; background: url('../../assets/img/activity/banner1/juxing.png') no-repeat center; background-size: cover; text-align: center; line-height: .76rem; left: 2.78rem; top: 2.92rem; font-size: .23rem; color: #fff;}
.slide1 .zuobian {position: absolute; width: 3rem; height: 2.52rem; background: url('../../assets/img/activity/banner1/zuobian.png') no-repeat center; background-size: cover; left: .26rem; top: 4.54rem;}
.slide1 .youbian {position: absolute; width: 3.26rem; height: 2.29rem; background: url('../../assets/img/activity/banner1/youbian.png') no-repeat center; background-size: cover; left: 4.24rem; top: 3.58rem;}
.slide1 .renmai {position: absolute; width: 1.80rem; height: 1.2rem; background: url('../../assets/img/activity/banner1/fuwu.png') no-repeat center; background-size: cover; left: 1.41rem; top: 3.32rem;}
/* .slide1 .renmai {position: absolute; width: 1.78rem; height: 1.16rem; background: url('../../assets/img/activity/banner1/renmai.png') no-repeat center; background-size: cover; left: 1.46rem; top: 3.3rem;} */
.slide1 .pingtai {position: absolute; width: 1.71rem; height: 1.17rem; background: url('../../assets/img/activity/banner1/pingtai.png') no-repeat center; background-size: cover; left: 4.16rem; top: 4.84rem;}
.slide1 .loading {position: absolute; width: 4.75rem; height: 4.92rem; background: url('../../assets/img/activity/banner1/loading.png') no-repeat center; background-size: cover; left: 1.34rem; top: 2.18rem; animation: xuanzhuan 3s linear infinite;}
.slide1 .logo {position: absolute; width: .75rem; height: .75rem; background: url('../../assets/img/activity/banner1/512.png') no-repeat center; background-size: cover; left: 3.38rem; top: 4.21rem;}
.slide1 .ruzhu {position: absolute; width: 4.97rem; height: .36rem; background: url('../../assets/img/activity/banner1/ruzhu.png') no-repeat center; background-size: cover; left: 1.27rem; top: 7.53rem;}
.biaoyu {position: absolute; top: 8.31rem; color: #50C7FF; text-align: center; width: 100%;}
.jianxie {font-size: .18rem; margin-bottom: .15rem; position: relative; opacity: .55;}
.jianxie::after {content: ""; display: block; background: url('../../assets/img/activity/bottom.png') no-repeat center; background-size: contain; width: 4.2rem; height: .1rem; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);}
.neirong {font-size: .2rem; opacity: .55;}
/* slide2 */
.slide2 .biaoti {position: absolute; width: 5.35rem; height: 1.06rem; background: url('../../assets/img/activity/banner2/biaoti1.png') no-repeat center; background-size: contain; left: 1.07rem; top: .90rem;}
.slide2 .wenzi {position: absolute; width: 6.51rem; height: 3rem; background: url('../../assets/img/activity/banner2/wenzi2.png') no-repeat center; background-size: contain; left: .55rem; top: 2.48rem; text-align: left; padding: .5rem .25rem; line-height: .52rem; color: #84D8FF;}
.slide2 .piaofu {position: absolute; width: 100%; top: 5.3rem; left: 0;}
.slide2 .piaofu .p1 {background: url('../../assets/img/activity/banner2/p_1.png') no-repeat center; width: 100%; height: .71rem; background-size: contain;}
.slide2 .piaofu .p2 {background: url('../../assets/img/activity/banner2/p_2.png') no-repeat center; width: 100%; height: .71rem; background-size: contain;}
.slide2 .piaofu .p3 {background: url('../../assets/img/activity/banner2/p_3.png') no-repeat center; width: 100%; height: .71rem; background-size: contain;}
.slide2 .piaofu .p4 {background: url('../../assets/img/activity/banner2/p_4.png') no-repeat center; width: 100%; height: .71rem; background-size: contain;}
.slide2 .piaofu .p5 {background: url('../../assets/img/activity/banner2/p_5.png') no-repeat center; width: 100%; height: .71rem; background-size: contain;}
.slide2 .wenzi2 {position: absolute; width: 6rem; height: 2.4rem; background: url('../../assets/img/activity/banner2/wenzi2.png') no-repeat center; background-size: contain; left: .8rem; top: 6.0rem; text-align: left; padding: .5rem .25rem; line-height: .52rem; color: #84D8FF;}
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
.slide4 .jieshao {position: absolute; font-size: .4rem; color: #50C7FF; top: 3.2rem; width: 100%; text-align: center; left: 3rem;}
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
.join {position: absolute; top: 9.41rem; z-index: 2; display: flex; justify-content: space-around; width: 100%; padding: 0 .7rem;}
.joinBtn {display: block; width: 2.08rem; height: 0.76rem; background: linear-gradient(0deg, rgba(89,67,197,1), rgba(81,234,236,1)); border-radius: .08rem; text-align: center; line-height: 0.76rem; font-size: .3rem; font-family: 'PingFang-SC-Medium'; color: #fff;}

/* 电话弹窗 */
.popup {width: 5.8rem; height: 5.76rem; border-radius: .2rem; background: #fff; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); z-index: 999;}
.popup .closebtn {position: absolute; width: .4rem; height: .4rem; left: 5.1rem; top: 0.4rem; background: url('../../assets/img/activity/close.png') no-repeat center; background-size: contain;}
.pop_tit {font-size: .26rem; color: #333; font-family: 'PingFang-SC-Medium'; width: 5rem; margin: 0 auto; margin-top: 0.8rem; margin-bottom: 0.43rem; line-height: .42rem;}
.popup .phoneNum {width: 5.02rem; height: .7rem; margin: auto; margin-bottom: .3rem; position: relative;}
.popup .phoneSms {width: 5.02rem; height: .7rem; margin: auto; margin-bottom: .3rem; position: relative;}
.popup input {border: none; width: 100%; height: 100%; float: left; padding-left: .21rem; border: .01rem solid #cfcfcf; border-radius: .1rem;}
.sendSms {position: absolute; font-size: .22rem; color: #F63B75; right: .21rem; top: .18rem;}
.confirm {display: block; position: absolute; width: 2.3rem; height: .7rem; background:linear-gradient(0deg,rgba(89,67,197,1), rgba(81,234,236,1)); border-radius: .04rem; font-size: .32rem; color: #fff; text-align: center; line-height: .7rem; left: 1.75rem; bottom: 0.5rem;}

/* 复制链接 */
.copyUrl {width: 5.8rem; border-radius: .2rem; background: #fff; position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%); z-index: 1; padding: .1rem;}
.copyUrl .closebtn {position: absolute; width: .4rem; height: .4rem; left: 5.1rem; top: 0.2rem; background: url('../../assets/img/activity/close.png') no-repeat center; background-size: contain;}
.copyUrl .urlcon {width: 100%; border: .01rem solid #cfcfcf; padding: .1rem; border-radius: .2rem;}
.copyUrl .urlbtn {width: 2.08rem; height: 0.36rem; background: linear-gradient(0deg, rgba(89,67,197,1), rgba(81,234,236,1)); border-radius: .08rem; text-align: center; line-height: 0.36rem; font-size: .2rem; font-family: 'PingFang-SC-Medium'; color: #fff; float: right;}

/* 提示框 */
.myalert {padding: .1rem; position: fixed; z-index: 9999; left: 50%; top: 50%; transform: translate(-50%, -50%); border-radius: .1rem; background: rgba(0, 0, 0, .4); color: #fff;}

/* 点击右上角进行分享 */
.rightTopAlert {text-align: center; width: 3.92rem; height: 3.10rem; background: url('../../assets/img/activity/rightTopAlert1.png') no-repeat center; background-size: contain; position: fixed; left: 1.79rem; top: 3.95rem; z-index: 9999; padding: 0 .42rem;}
.rightTopAlert div {padding-bottom: .47rem; padding-top: 1rem; border-bottom: .01rem solid #999999; font-size: .30rem; color: #333; margin-bottom: .35rem;}
.rightTopAlert a {color: #F63B75; font-size: .30rem;}
.rightTopAlert .jiantou {width: 1.5rem; height: 1.8rem; background: url('../../assets/img/activity/rightTipJiantou.png') no-repeat center; background-size: contain; position: absolute; top: -2.32rem; left: 3.8rem;}
</style>

