<template>
  <!-- <div>
    <img src="http://testh5shop.meibbc.com/static/img/rulebg.b32fc76.jpg"/>
  </div> -->
  <div class="inviteFriends">
    <!-- <div class="title">
      <span @click="backRouter()"></span>邀请好友
    </div> -->
    <topcomom :invite="true">邀请好友</topcomom>
    <div class="content" style="position: relative; height: 9.72rem; width: 100%;top:1.6rem;">
      <div>
        <div class="photo-back photo-box" ref="photoBack">
          <img :src="require('../../assets/img/invitation/back2.png')" alt="" crossorigin="anonymous">
          <div class="photoimg"><img :src="erweima" alt="" crossorigin="anonymous"><p>邀请码：{{ postUserByUserid.inviteCode }}</p></div>
          <div class="personal">
            <img v-if="postUserByUserid.icon" :src="'http://testuser.meibbc.com/oss'+postUserByUserid.icon" alt="">
            <img v-if="!postUserByUserid.icon && postUserByUserid.sex == 2" :src="require('../../assets/img/newIndex/header_nv.png')" alt="" crossOrigin="anonymous">
            <img v-if="!postUserByUserid.icon && postUserByUserid.sex == 1" :src="require('../../assets/img/newIndex/header_nan.png')" alt="" crossOrigin="anonymous">
            <img v-if="!postUserByUserid.icon && postUserByUserid.sex == null" :src="require('../../assets/img/newIndex/header_nan.png')" alt="" crossOrigin="anonymous">
            <p>{{ postUserByUserid.niceName }}</p> 
          </div>

          <div class="Guang">
            <!-- <p v-if="message" v-html="message">我在美胸汇，来和我一起畅享福利！快来加入我们吧！</p>
            <p v-else>我在美胸汇，来和我一起畅享福利！快来加入我们吧！</p> -->
            <p v-if="message">{{ message }}</p>
            <p v-else-if="postUserByUserid.advertiseInfo && !message">{{ postUserByUserid.advertiseInfo }}</p>
            <p v-else>我在美胸汇，来和我一起畅享福利！快来加入我们吧！</p>
          </div>
        </div>
      </div>
      
      

      <div class="photo-back1" ref="photoback1">
        <img :src="shareImgUrl" alt="" ref="ImgCon" id="imgCon" style="width: 100%; height: 100%;">
      </div>
    </div>
    <div class="footer">
      <a href="javascript:;" @click="isShare = true"><i class="icon-fenxiang"></i>分享好友</a>
      <a href="javascript:;" @click="GeneratePoster"><i class="icon-xiazai"></i>生成海报</a>
    <!-- <a href="http://testh5shop.meibbc.com/static/img/rulebg.b32fc76.jpg" download="w3logo">132131313</a> -->
    </div>
    <div class="myAlert" ref="myAlert" v-show="isAlertShow">
      <div class="duigou"></div>
      <div>已保存到相册</div>
    </div>
    <div class="common-shadow-modules" @click="isShare = false"  v-show="isShare">
    </div>
    <div class="footer-share-modules" v-show="isShare">
      <div class="footer-title-modules">
        <p>分享到</p>
        <i class="icon-guanbi" @click="isShare = false"></i>
      </div>
      <ul class="clear-both">
        <li @click="shareFun('weChat', 1)">
          <img src="../../assets/img/invitation/weixin.png"/>
          <p>微信</p>
        </li>
        <li @click="shareFun('friendCircle', 1)">
          <img src="../../assets/img/invitation/pengyouquan.png"/>
          <p>朋友圈</p>
        </li>
        <li @click="shareFun('qq', 1)">
          <img src="../../assets/img/invitation/qq@2x.png"/>
          <p>QQ</p>
        </li>
        <li @click="shareFun('sina', 1)">
          <img src="../../assets/img/invitation/weibo.png"/>
          <p>微博分享</p>
        </li>
        <!-- <li @click="shareFun('qqSpace', 1)">
          <img src="../../assets/img/invitation/kongjian@2x.png"/>
          <p>QQ空间</p>
        </li> -->
      </ul>
      <!-- <a href="javascript:;" class="closeBtn" @click="isShare = false"></a> -->
    </div>
  </div>
</template>
<script>
import * as USER_API from '@/api/user'
import * as ACT_API from '@/api/activity'
import store from '@/store'
import html2canvas from "html2canvas";
import { ImagePreview } from 'vant';
import topcomom from '@/components/common/Topcomomnew'
import {isIPhoneX,phoneSign} from '@/assets/js/share.js'
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      isShare: false,
      isAlertShow: false,
      datarows: {},
      codeimg: "",
      curIndex: 0,
      shareImgUrl: "",
      imgUrl: "",
      niceName: "",
      imgB: "1",
      erweima: '',
      clickCount: 0,
      userId:store.state.userId,
      phoneSignX:false,
      sign:false,
      postUserByUserid:[],
      message:'',
    }
  },
  components: {
    topcomom
  },
  created() {
    // _this = this
    // this.$bus.$on('mybus',(poster)=>{
    //   _this.message = poster
    //   console.log(poster)
    // })
  },
  mounted() {
    this.message = this.$route.query.poster
    console.log(this.$route.query.poster)
    if(store.state.userId){
      this.userId = store.state.userId;
    }else{
      this.userId = this.$route.query.userId
    }
    this.loadPostUserByUserid()
    this.getErWeiMa()
    var phoneSignb = phoneSign()
    console.log(phoneSignb, '手机机型')
    if (phoneSignb == 'iOS') {
      this.sign = true
      this.phoneSignX = true
      console.log(phoneSignb, 'sign--ios标志')
    }
    var phoneSignX = isIPhoneX()
    if(phoneSignX){
      this.phoneSignX = true
      this.sign = true
    }
  },
  methods: {
    loadPostUserByUserid(){
      let params = { "userid":this.userId, };
      // this.loadFindIntegralList()
      USER_API.postUserByUserid(params).then(data => {
        if(data){
          this.postUserByUserid = data
        }
      });
    },
    createPhoto() {
      let that = this;
      console.log("执行生成图片");
      if (this.imgB) {
        let photoBox = document.querySelector(".photo-box");
        let newImgWidth = photoBox.offsetWidth;
        console.log(newImgWidth,'--newImgWidth--')
        let newImgHeight = photoBox.offsetHeight;
        let scale = window.devicePixelRatio;
        // let scale = 1;
        let that = this;
        html2canvas(photoBox, {
          width: newImgWidth,
          height: newImgHeight,
          scale: scale,
          useCORS: true,
          allowTaint:false,
          proxy: 'http://oss.meibbc.com'
        }).then(function(canvas) {
          var dataUrl = canvas.toDataURL("image/png");
          console.log(dataUrl,'图片地址')
          that.shareImgUrl = dataUrl;
          localStorage.imgData = dataUrl;
          // that.saveFile('http://testmallh5.meibbc.com/static/img/good.e7b8d8f.png','good.png')
          let Img = that.$refs.ImgCon
          let imgId = that.$refs.ImgCon.id
          // window.location.href = 'http://testh5shop.meibbc.com/static/img/rulebg.b32fc76.jpg';
          // that.downloadImage(Img, '海报')
          // that.saveFile(dataUrl, 'xxxx')
          // console.log(dataUrl)
          that.$savePhoto({"data": dataUrl})
          // that.exportCanvasAsPNG('canvasImg', 'xxx')
          // ImagePreview({
          //   images: [
          //     'http://testh5shop.meibbc.com/static/img/rulebg.b32fc76.jpg'
          //   ],
          //   startPosition: 0,
          //   onClose() {
          //     // do something
          //   }
          // });
        });
      }
    },
    getErWeiMa() {
      // let userId = store.state.userId
      console.log(this.userId)
      ACT_API.getErWeiMa(this.userId).then(res => {
        this.erweima = res.data
      })
    },
    GeneratePoster() {
      if (this.erweima) {
        this.createPhoto()
      }
      // this.$dialog({
      //   noOkBtn: true,
      //   cancelBtnTxt: '我知道了',
      //   content: '请长按图片进行保存',
      // });
      // this.alertShowTime()
    },
    alertShowTime() {
      this.$refs.myAlert.style.display = 'block'
      let _this = this
      let timer = setTimeout(() => {
        _this.isAlertshow = false
        _this.$refs.myAlert.style.display = 'none'
        console.log(_this.isAlertshow)
        clearTimeout(timer)
      }, 2000)
    },
    // 下载图片方法1
    downloadImage(selector, name, callback) {
      var image = new Image()
      // 解决跨域 Canvas 污染问题
      image.setAttribute('crossOrigin', 'anonymous')
      image.onload = function () {
        var canvas = document.createElement('canvas')
        canvas.width = image.width
        canvas.height = image.height

        var context = canvas.getContext('2d')
        context.drawImage(image, 0, 0, image.width, image.height)
        var url = canvas.toDataURL('image/png')

        // 生成一个a元素
        var a = document.createElement('a')
        // 创建一个单击事件
        var event = new MouseEvent('click')

        // 将a的download属性设置为我们想要下载的图片名称，若name不存在则使用‘下载图片名称’作为默认名称
        a.download = name || '下载图片名称'
        // 将生成的URL设置为a.href属性
        a.href = url

        // 触发a的单击事件
        a.dispatchEvent(event)
      }
      image.src = selector.src
    },
    // 下载图片方法2
    saveFile(imgsrc, name) {
      // let imgsrc = 'http://testh5shop.meibbc.com/static/img/rulebg.b32fc76.jpg';
      console.log(22)
      console.log(imgsrc)
      var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
      save_link.href = imgsrc;
      save_link.download = '111';

      var event = document.createEvent('MouseEvents');
      event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      save_link.dispatchEvent(event);

    },
    // 下载图片方法3
    exportCanvasAsPNG(id, fileName) {
      var canvasElement = document.getElementById(id);
      var MIME_TYPE = "image/png";
      var imgURL = canvasElement.toDataURL(MIME_TYPE);
      var dlLink = document.createElement('a');
      dlLink.download = fileName;
      dlLink.href = this.shareImgUrl;
      dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
      document.body.appendChild(dlLink);
      dlLink.click();
      document.body.removeChild(dlLink);
    },
    posterCopy(){

    },
    // 分享模块
    shareFun(type){
      // let userId = store.state.userId
      console.log(this.userId)
      ACT_API.getInviteCode(this.userId).then(res => {
        if (res.status == 1) {
          console.log(res)
          let title = '注册成为美胸汇会员'
          let description = "互联网+胸部大健康平台 有爱分享 无癌世界 会员享受全球俱乐部免费服务";
          let imgSrc = 'https://oss.meibbc.com/BeautifyBreast/logo/logo.png';
          let hostUrl = res.data.returl;
          let activityId = "";
          this._system_shareTo(title,description,imgSrc,hostUrl,"",activityId,type);
        }
      })
    },
  }
}
</script>
<style lang="css" scoped>
.inciteFriends {position: relative;}
.title {width: 100%; height: 1.26rem; background: #FF9CBB; text-align: center; font-size: .36rem; color: #fff; line-height: 1.5rem; position: relative;}
.title span {width: .19rem; height: .34rem; background: url('../../assets/img/back.png') no-repeat center; background-size: cover; display: block; position: absolute; left: .4rem; top: .6rem;}
/* .content .downloadImg {width: 5rem; height: 5rem; margin: 2rem auto;} */
/* .photo-back {background: url('../../assets/img/invitation/back2.jpg') no-repeat center; background-size: cover; width: 6.46rem; height: 9.72rem; margin: .4rem auto; position: relative;} */
.photo-back {width: 6.7rem; height: 10.06rem; margin: .6rem auto; position: relative;}
.photo-back>img {width: 100%;}
.photo-back1 {width: 100%; height: 100%; position: absolute; top: 0; left: 0; opacity: 0; z-index: 2; display: none;}
.photoimg {position: absolute; bottom: .23rem; right: .32rem;text-align: center;}
.photoimg img{width: 1rem; height: 1rem;display: inline-block;}
.photoimg p{transform: scale(.75)}
.footer {width: 100%; height: 1.95rem; background: #fff;margin-top: 1.76rem; display: flex; justify-content: space-around; align-items: center; padding: 0 .5rem;}
/* .footer {width: 100%; height: 1.95rem; background: #fff; position: absolute; bottom: .2rem; left: 0; display: flex; justify-content: space-around; align-items: center; padding: 0 .5rem;} */
.footer a {display: block; width: 2.9rem; height: .8rem; font-size: .26rem; color: #fff; text-align: center; line-height: .78rem; border-radius: .39rem;
background: #333333;display: flex;align-items: center;justify-content: center;}
/* .footer a:nth-child(1) {background: url('../../assets/img/invitation/juxing1.png') no-repeat center; background-size: cover;}
.footer a:nth-child(2) {background: url('../../assets/img/invitation/juxing2.png') no-repeat center; background-size: cover;} */
.myAlert {width: 2.13rem; height: 1.98rem; position: fixed; background: rgba(0, 0, 0, .4); left: 50%; top: 50%; transform: translate(-50%, -50%); border-radius: .2rem;}
.myAlert .duigou {width: 0.71rem; height: .71rem; background: url('../../assets/img/invitation/对勾@2x.png') no-repeat center; background-size: contain; margin: 0.35rem auto;}

.myAlert div {text-align: center; font-size: .3rem; color: #fff;}

.personal{position: absolute;bottom: .87rem;left: .48rem;}
.personal img{width: .94rem;height: .94rem;border-radius: 50%;display: inline-block;margin-bottom: .1rem;}
.personal p{font-size: .24rem;font-weight: bold;text-align: center;}

.Guang{position: absolute;bottom:.22rem;left: .3rem;}
.Guang p{font-size: .22rem;width: 3.4rem;transform: scale(.9);height: .6rem;}

/*分享模块*/
.footer-share-modules{position: fixed;bottom: 0;width: 100%;background-color: #F6F6F6;z-index: 999}
.footer-title-modules{height: .82rem;position: relative;border-bottom: 1px solid #E6E7E8;padding-bottom: .8rem;}
/* .footer-title-modules:after{content: "";height: 1px;background-color: #909090;width: 3.63rem;position: absolute;left: 0;right: 0;;margin: auto;
z-index: 9;top: 0;bottom: 0} */
.footer-title-modules p{position: absolute;left: 0;right: 0;margin: auto;width: 2.5rem;z-index: 99;line-height: .8rem;
background-color: #F6F6F6;text-align: center;color: #333333;font-size: .32rem}
.footer-share-modules li{float: left;width: calc(100% / 4);text-align: center;position: relative;}
.footer-share-modules li img {width: 1rem; display: inline-block;}
.footer-share-modules li p{width: 100%;text-align: center;margin-top: .12rem;color: #666666;}
/* .footer-share-modules li:nth-child(1) img{width: .64rem;display: inline-block}
.footer-share-modules li:nth-child(2) img{width: .58rem;display: inline-block}
.footer-share-modules li:nth-child(3) img{width: .52rem;display: inline-block}
.footer-share-modules li:nth-child(4) img{width: .59rem;display: inline-block}
.footer-share-modules li:nth-child(5) img{width: .59rem;display: inline-block} */
/* .footer-share-modules ul{margin-top: .87rem} */
.footer-share-modules ul{border-bottom: .01rem solid #ccc; padding-bottom: .6rem;margin-top: .6rem;}

.share-footer-button{position: absolute;bottom: 0;width: 100%;line-height: .85rem;text-align: center;color: #FC858F;font-size: .3rem;background-color: white;font-weight: bold}
.closeBtn {display: block; width: .36rem; height: .36rem; background: url('../../assets/img/invitation/closebtn.png') no-repeat center; background-size: cover; position: absolute; left: 3.55rem; bottom: 0.4rem;}
.icon-xiazai {width: .32rem; height: .32rem; background: url('../../assets/img/invitation/xiazai_cmzx_icon@2x.png');display: inline-block; background-size: 100% 100%;margin-right: .09rem; }
.icon-fenxiang {width: .32rem; height: .32rem; background: url('../../assets/img/invitation/fenxiang_cmzx_icon@2x.png');display: inline-block; background-size: 100% 100%;margin-right: .09rem; }
.icon-guanbi {width: .2rem; height: .2rem; background: url('../../assets/img/invitation/close2_icon@2x.png');display: inline-block; background-size: 100% 100%;float: right;margin-right: .3rem;margin-top: .3rem; }

</style>
