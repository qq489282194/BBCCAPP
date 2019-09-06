<template>
  <div class="index">
    <header>
      <div class="header-div">
        <a @click="closeHtml()" class="icon-left-a">
          <i class="icon-left"></i>
        </a>
        <span class="header-title">C米中心</span>
        <!-- <a @click="isHaiBaoShow = true" class="icon-right-a">
          <i class="icon-share"></i>
        </a> -->
      </div>
    </header>

    <div class="bbc-index">
      <div class="qiandao">
        <div class="timeTit">
          {{timeTit}}
          <p>听说爱笑的人，运气都不会太差呢 ~</p>
        </div>

        <div class="xxk">
          <ul ref="tit">
            <li v-for="(item, index) in dateList" :key="item.day" :class="item.active"><span>{{item.active == 'active ago' ? '' : item.date}}</span><p>{{item.cmi}}<i></i></p></li>
            <!-- <li><span>2 Day</span><p>15</p></li>
            <li><span>3 Day</span><p>20</p></li>
            <li><span>4 Day</span><p>25</p></li>
            <li><span>5 Day</span><p>30</p></li>
            <li><span>6 Day</span><p>35</p></li>
            <li><span>7 Day</span><p>40</p></li> -->
          </ul>
          <div class="xxk_con" ref="con">
            <div class="indexBox">
              <span class="xxk_num">{{userList.integral}}</span><i class="cmi_icon"></i>
              <p class="xxk_nowDay">当前C米<span class="xxk_shu"></span> 累计签到 <u>{{isSignNumber}}</u> 天</p>
              <a href="javascript:;" class="qiandaoBtn" @click="addSignFun" v-show="!isSign">签到领C米</a>
              <a href="javascript:;" class="yiqiandaoBtn" v-show="isSign">已签到</a>
            </div>
          </div>
        </div>
        <div class="huiyuan" @click="toNewMember">
          <span class="huiyuan_huangguan"></span>
          <span class="huiyuan_zhongxin">会员中心</span>
          <span class="huiyuan_zunxiang">尊享特权 <i></i></span>
        </div>
      </div>


      <div class="cmi-common-modules cmi-common1">
        <!-- <div class="cmi-common-title">赚C米</div> -->
        <ul class="clear-both">
          <li v-show="isShow" @click="MixinToUrl('cmi-invite')"><img src="../../assets/img/cmi/5.png"><p>邀请好友</p></li>
          <li v-show="isShow" @click="MixinToUrl('cmi-mission')"><img src="../../assets/img/cmi/6.png"><p>每日赚C米</p></li>
          <li v-show="isShow" @click="MIXINToDetail('','23')"><img src="../../assets/img/cmi/4.png"><p>购物送C米</p></li>
        </ul>
      </div>

      <div class="cmi-common-modules cmi-common2">
        <!-- <div class="cmi-common-title red">花C米</div> -->
        <ul class="clear-both">
          <!--<li><img src="../../assets/img/cmi/3.png"><p>换好礼</p></li>-->
          <!-- <li v-show="isShow" @click="toCmiAward()"><img src="../../assets/img/cmi/2.png"><p>抽大奖</p></li> -->
          <li v-show="isShow" @click="MIXINToDetail('','18')"><img src="../../assets/img/cmi/1.png"><p>C米当钱用</p></li>
          <li v-show="isShow" @click="MixinToUrl('cmi-ticket')"><img src="../../assets/img/cmi/12.png"><p>C米换票</p></li>
          <li v-show="isShow" @click="toGive()"><img src="../../assets/img/cmi/13.png"><p>C米转赠</p></li>
          <li v-show="isShow" @click="MIXINToDetail('','25')"><img src="../../assets/img/cmi/16.png"><p>C米打赏</p></li>
        </ul>
      </div>
    </div>

    <!-- 签到成功 -->
    <div class="shadow" v-show="qdShow">
      <div class="qdchenggong">
        恭喜您获得<u class="num">{{integral}}</u><i class="cmi_icon"></i>奖励
        <div class="qd_img"></div>
        <div class="qd_close_btn" @click="closeQdShow"></div>
      </div>
    </div>

    <!-- 海报分享 -->
    <div class="haibao" v-if="isHaiBaoShow">
      <div style="position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%);">
        <div style="position: relative; width: 6.4rem; height: 10.4rem; margin: auto;">
          <!-- <div class="haibao_haibaoImg" v-show="!showHaiBaoLoading">
            <img :src="trueImgUrl" alt="" style="height: 100%;" crossOrigin="anonymous">
          </div>
          <div class="haibao_loading" v-show="showHaiBaoLoading">
            <p>
              <van-loading size="100"></van-loading>
              <span ref="haibaoTip">正在加载海报...</span>
            </p>
          </div> -->
          <!-- <div class="haibao_haibaoImg photo-box">
            <div class="bgImg">
              <img src="http://oss.meibbc.com//BeautifyBreast/file/images/sign/02@2x.png" alt="" class="haibao_ImgUrl" crossOrigin="anonymous">
              <div class="bgCon">
                <div class="headerImg">
                  <img :src="require('../../assets/img/defaultheader.png')" alt="" crossOrigin="anonymous">
                </div>
                <div class="bgtime">{{new Date() | returnDate}}</div>
                <div class="bgweather">广州 22°C阴</div>
                <div class="bgday">
                  <p>{{new Date().getDate()}}</p>
                  {{new Date().getMonth() | changeMonthToEnglish}} {{new Date().getFullYear()}}
                </div>
                <div class="bgwisdom">真理惟一可靠的标准就是永远自相符合。<br>—— 欧文</div>
                <div class="bgnumber">
                  <p><span>1075</span>累计签到(天)</p>
                  <p><span>9357</span>参与用户</p>
                  <p><span>75%</span>超越用户</p>
                </div>
              </div>
            </div>
            <div class="bgfooter">
              <div class="bgtip">
                <p>美胸汇，让你更美</p>
                <span>温暖的女性社区，最优惠的购物平台，来发现更多。</span>
              </div>
              <div class="bgewm">
                <p><img src="../../assets/img/app_erweima1.png" alt=""></p>
                <span>美胸汇App</span>
              </div>
            </div>
          </div> -->
          <div class="haibao_haibaoImg photo-box">
            <div class="bgImg">
              <img :src="wisdom.picUrl" alt="" class="haibao_ImgUrl" crossOrigin="anonymous">
              <p class="haibao_bgDate">{{new Date().getDate()}}</p>
              <p class="haibao_bgTime">{{new Date().getMonth() | changeMonthToEnglish}} {{new Date().getFullYear()}}</p>
              <p class="haibao_bgWeather" v-show="city">{{city}}<br>{{`${weather.low}°C ~ ${weather.high}°C`}}<br>{{weather.text_day}}</p>
              <p class="haibao_bgWisdom">{{wisdom.mottoContent}}<br>—— {{wisdom.writer}}</p>
            </div>
            <div class="haibaoCon">
              <div class="haibaoCon_headerImg" ref="haibaoCon_headerImg">
                <img crossOrigin="anonymous" :src="userList.icon ? 'http://testuser.meibbc.com/oss' + userList.icon : require('../../assets/img/defaultheader.png')" alt="" >
              </div>
              <div class="haibaoCon_userName">{{userList.niceName}}</div>
              <div class="haibaoCon_userTip">累计签到<u>{{isSignNumber}}</u>天。</div>
              <div class="haibaoCon_userEWM">
                <img :src="require('../../assets/img/app_erweima1.png')" alt="">
                <span>美胸汇App</span>
              </div>
            </div>
          </div>
          <div class="haibao_close" @click="isHaiBaoShow = false"></div>
          <div class="bgloading" v-show="showHaiBaoLoading">
            <span ref="loadingtip">海报生成中，请稍后...</span>
          </div>
        </div>
        <div class="haibao_btn">
          <p class="tip"><span>给朋友炫耀一下吧！</span></p>
          <a href="javascript:;" @click="isShare = true"><i class="share_icon"></i>分享给朋友</a>
          <a href="javascript:;" @click="saveToPhotoAlbum"><i class="save_icon"></i>保存到相册</a>
        </div>
      </div>
    </div>

    <!-- 分享 -->
    <div class="common-shadow-modules" @click="isShare = false"  v-show="isShare">
    </div>
    <div class="footer-share-modules" v-show="isShare">
      <div class="footer-title-modules">
        <p>分享</p>
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
      <a href="javascript:;" class="closeBtn" @click="isShare = false"></a>
    </div>
  </div>
</template>
<script>
import * as USER_API from '@/api/user'
import * as USER_API1 from '@/api/user1'
import store from "@/store/index"
import html2canvas from 'html2canvas'
import qs from 'qs'
import { Loading, Dialog } from 'vant';
export default {
  data() {
    return {
      isShare: false, // 分享
      isShow: true, // C米icon
      isHaiBaoShow: true, // 海报
      qdShow: true, // 签到成功界面
      isSign: '',
      isSignNumber: '',
      showHaiBaoLoading: false,
      city: '', // 城市
      wisdom: {}, // 名言金句
      weather: {},
      shareImgUrl: '',
      trueImgUrl: '',
      imgB: 1,
      userList: [],
      isCheck: true,
      integral: '',
      isTipCmi: '',
      activeIndex: 0,
      activeCmi: null,
      dateList:[],
      isOkToClickSave: false,
      isOkToSharer: false,
    }
  },
  computed: {
    userId() {
      return store.state.userId;
    },
    timeTit() {
      var year = new Date().getFullYear()
      var month = new Date().getMonth() + 1
      var day = new Date().getDate()
      var week = new Date().getDay()
      switch (week) {
        case 0: week = '星期日'; break;
        case 1: week = '星期一'; break;
        case 2: week = '星期二'; break;
        case 3: week = '星期三'; break;
        case 4: week = '星期四'; break;
        case 5: week = '星期五'; break;
        case 6: week = '星期六'; break;
      }
      return `${year}.${month}.${day} ${week}`
    }
  },
  filters: {
    changeMonthToEnglish(Month) {
      switch(Month) {
        case 0: return 'January';
        case 1: return 'February';
        case 2: return 'March';
        case 3: return 'April';
        case 4: return 'May';
        case 5: return 'June';
        case 6: return 'July';
        case 7: return 'August';
        case 8: return 'September';
        case 9: return 'October';
        case 10: return 'November';
        case 11: return 'December';
      }
    },
    returnDate(time) {
      var hours = time.getHours();
      var minutes = time.getMinutes();
      function toDB(num) {
        if (num < 10) {
          return '0' + num;
        } else {
          return num;
        }
      }
      // console.log(hours, minutes)
      if (hours > 0 && hours < 5) {
        return `凌晨好！${toDB(hours)}:${toDB(minutes)}`
      } else if (hours >= 5 && hours < 9) {
        return `早上好！${toDB(hours)}:${toDB(minutes)}`
      } else if (hours >= 9 && hours < 11) {
        return `上午好！${toDB(hours)}:${toDB(minutes)}`
      } else if (hours >= 11 && hours < 13) {
        return `中午好！${toDB(hours)}:${toDB(minutes)}`
      } else if (hours >= 13 && hours < 18) {
        return `下午好！${toDB(hours)}:${toDB(minutes)}`
      } else if (hours <= 18 && hours < 24) {
        return `晚上好！${toDB(hours)}:${toDB(minutes)}`
      }
    }
  },
  watch: {
    userId (val) {
      this.loadIsSigned();
      this.loadUser();
    },
  },
  mounted() {
    if(this.userId != ""){
      this.loadIsSigned();
      this.loadUser();
    }

    // this.getSharerImg();
    this.getHaiBaoBackground();

    window['setLocation'] = this.setLocation
    this.MIXINGetLocation();
    // this.getSharerImg();
    // this.initXXK();
  },
  methods: {
    getSharerImg() {
      let params = {
        city_name: this.city
      }
      this.showHaiBaoLoading = true;
      this.$http.defaults.headers.common['Authorization'] = store.state.token
      this.$http({
        method: 'get',
        url: `${this.GLOBAL.shareImgURL}/members/share/pic`,
        params,
      }).then(res => {
        console.log(res)
        if (res.data.message) {
          this.trueImgUrl = res.data.message;
          this.isOkToSharer = true;
          this.isOkToClickSave = true;
          this.showHaiBaoLoading = false;
        } else {
          this.$refs.haibaoTip.innerHTML = '海报生成失败...'
        }
      }).catch(err => {
        this.$refs.haibaoTip.innerHTML = '海报生成失败...'
      }) 
    },
    initXXK() { // 初始化选项卡
      // let day = new Date().getDay();
      // if (day == 0) {
      //   this.activeIndex = 6
      // } else {
      //   this.activeIndex = day - 1
      // };
      // this.activeIndex = (this.isSignNumber+1) % 7
      // console.log(this.isSignNumber)
      // console.log(this.activeIndex)
      // for (let i = 0; i < this.$refs.con.children.length; i++) {
      //   (this.$refs.con.children[i]).className = '';
      // }
      // (this.$refs.con.children[this.activeIndex]).className = 'indexBox';
    },
    addSignFun(){ 
      // 签到
      if(this.isCheck){
        this.isCheck = false;
        let params = {"userid": this.userId};
        const self = this
        USER_API.addsignlog(params).then(data=>{
          console.log('签到：',data)
          this.isCheck = true;
          if(data){
            this.integral = data.integral;
            this.isTipCmi = true;
            setTimeout(function () {
              self.isTipCmi = false;
            },1500)
            this.loadIsSigned();
            this.loadUser();
            // this.getSharerImg();
            this.getHaiBaoBackground();
            // this.activeCmi = this.dateList[this.activeIndex]['cmi']
            // console.log(this.activeCmi)
            this.qdShow = true;
            this.isHaiBaoShow = true;
          }else{
            this.systemTip("用户已签到");
          }
        })
      }
    },
    loadIsSigned(){ 
      // 得到是否签到
      let time = this.MIXINYearMonthDate();
      console.log('时间参数', time)
      let params={"userId":this.userId, "time":time}
      USER_API1.isSigned(params).then(data => {
        console.log('loadIsSigned', data)
        this.dateList = []
        if(data.status == 1){
          this.isSign = true;
          this.isSignNumber = data.data;
        }else{
          this.isSign = false;
          this.isSignNumber = data.data;
        }
        this.activeIndex = this.isSignNumber % 7
        console.log(111,this.activeIndex)
        this.loadDate(this.isSignNumber, this.isSign);
      })
    },
    loadUser(){ 
      // 得到用户信息
      let userId = this.userId;
      USER_API.findUserByUserid(userId).then(data => {
        console.log('loadUser', data)
        this.userList = data;
        // var imgUrl = 'http://oss.meibbc.com' + this.userList.icon
        // this.getImgToBase64(imgUrl, baseVal => {
        //   this.userList.icon = baseVal
        // })
        // this.$refs.img.src = data.icon
        // document.getElementById('img').src =  URL.createObjectURL(data.icon);
      });
    },
    loadDate(isSignNumber,status){
      // let isSignNumber = this.isSignNumber % 7;
      // let dateList = this.dateList;
      // let searchDateList = this.searchDateList;
      // let number = 0 - Number(isSignNumber) ;
      // let cmi = 1;
      // let cmiList = (this.isSignNumber) - 1;
      // if(cmiList < 1){
      //   cmiList = 1;
      //   number = -1;
      // }
      // let cmiData = cmiList % 7;
      // for(let i =0;i<7;i++){
      //   number = number + 1;
      //   let cmiData = cmiList % 7;
      //   let date = this.MIXINMonthDate(number);
      //   let date1 = this.MIXINYearMonthDate(number);
      //   let active = "";
      //   if(i < isSignNumber){
      //     active = "active";
      //   }
      //   cmi = this.returnCmi(cmiData,(this.isSignNumber) - 1);
      //   date = this.returnDate(date,isSignNumber,i);
      //   cmiList = Number(cmiList) + 1;
      //   let params = {"date":date,"active":active,"cmi":cmi};
      //   dateList.push(params);
      //   searchDateList.push(date1);
      // }

      // isSignNumber = isSignNumber % 7;
      // let max = Number(isSignNumber) + 0;
      // let maxNumber = -max;
      // let min = 7 - Number(isSignNumber);
      // let minNumber = 0;
      // let dateList = [];
      // let cmiNumber = 0;
      // let active = "";
      // let time = "";
      if(status){
        isSignNumber = isSignNumber % 7;
        let max = Number(isSignNumber) + 0;
        let maxNumber = -max;
        let min = 7 - Number(isSignNumber);
        let minNumber = 0;
        let dateList = [];
        let cmiNumber = 0;
        let active = "";
        let time = "";
        this.dateList = this.isTodayTrue(max,maxNumber,min,minNumber,cmiNumber,active,time,status);
        // this.activeCmi = this.dateList[this.activeIndex]['cmi']
        // console.log('222',this.activeCmi)
      }else{
        isSignNumber = isSignNumber % 7 + 1;
        let max = Number(isSignNumber) + 0;
        let maxNumber = -max;
        let min = 7 - Number(isSignNumber);
        let minNumber = 0;
        let dateList = [];
        let cmiNumber = 0;
        let active = "";
        let time = "";
        this.dateList = this.isTodayCmi(max,maxNumber,min,minNumber,cmiNumber,active,time,status);
        // this.activeCmi = this.dateList[this.activeIndex]['cmi']
        // console.log(333, this.activeCmi)
      }
    },
    isTodayTrue(max,maxNumber,min,minNumber,cmiNumber,active,time){
      let dateList = [];
      let dataTime = ['1 Day','2 Day','3 Day','4 Day','5 Day','6 Day','7 Day'];
      let dataNumber = 0;
      for(let i=0;i<max;i++){
        cmiNumber++;
        if(max == 1){
          active = 'active ago';
          // time = "今天"
          time = this.MIXINMonthDate(maxNumber)
        }else if(max>1){
          if(i == (max -1)){
            active = 'active ago';
            // time = "今天"
            time = this.MIXINMonthDate(maxNumber)
          }else if(i == (max -2)){
            active = 'active ago';
            // time = "昨天"
            time = this.MIXINMonthDate(maxNumber)
          }else{
            active = 'active ago';
            time = this.MIXINMonthDate(maxNumber)
          }
        }
        let params = {"date":dataTime[dataNumber],"active":active,"cmi":this.returnCmi(cmiNumber)};
        maxNumber++;
        dataNumber++;
        dateList.push(params);
      }
      for(let i=0;i<min;i++){
        if(max > 0){
          if(i == 0){
            // time = "明天"
            time = this.MIXINMonthDate(maxNumber)
          }else{
            time = this.MIXINMonthDate(minNumber)
          }
        }
        cmiNumber++;
        if(i == 0){
          if(status){
            active = 'active'
          }else{
            active = ''
          }
        }else{
          active = "";
        }
        let params = {"date":dataTime[dataNumber],"active":active,"cmi":this.returnCmi(cmiNumber)};
        minNumber++;
        dataNumber++;
        dateList.push(params);
      }
      return dateList;
    },
    isTodayCmi(max,maxNumber,min,minNumber,cmiNumber,active,time){
      let dateList = [];
      let dataTime = ['1 Day','2 Day','3 Day','4 Day','5 Day','6 Day','7 Day'];
      let dataNumber = 0;
      for(let i=0;i<max;i++){
        active = 'active';
        // active = 'active ago';
        cmiNumber++;
        if(max == 1){
          // time = "昨天"
          active = 'active';
          time = this.MIXINMonthDate(minNumber)
        }else if(max > 1){
          console.log('max', max)
          if (i == (max -1)){
            // time = "昨天"
            active = 'active';
            time = this.MIXINMonthDate(minNumber)
          } else {
            active = 'active ago';
            time = this.MIXINMonthDate(maxNumber)
          }
        }
        let params = {"date":dataTime[dataNumber],"active":active,"cmi":this.returnCmi(cmiNumber)};
        dataNumber++;
        maxNumber++;
        dateList.push(params);
      }
      for(let i=0;i<min;i++){
        if(max == 0 || max == 1){
          if(i == 0){
            // time = "今天"
            time = this.MIXINMonthDate(minNumber)
          }else if(i == 1){
            // time = "明天"
            time = this.MIXINMonthDate(minNumber)
          }else{
            time = this.MIXINMonthDate(minNumber)
          }
        }else if(max > 1){
          if(i == 0){
            // time = "今天"
            time = this.MIXINMonthDate(minNumber)
          }else if(i == 1){
            // time = "明天"
            time = this.MIXINMonthDate(minNumber)
          }else{
            time = this.MIXINMonthDate(minNumber)
          }
        }
        cmiNumber++;
        if(i == 0){
          if(status){
            active = 'active'
          }else{
            active = ''
          }
        }else{
          active = "";
        }
        let params = {"date":dataTime[dataNumber],"active":active,"cmi":this.returnCmi(cmiNumber)};
        dataNumber++;
        minNumber++;
        dateList.push(params);
      }
      return dateList;
    },
    returnCmi(cmiData){
      let cmi = 10;
      if (cmiData > 0&& cmiData <= 1) {
        cmi = 10;
      } else if (cmiData > 1 && cmiData <=2) {
        cmi = 15
      } else if (cmiData > 2 && cmiData <=3) {
        cmi = 20
      } else if (cmiData > 3 && cmiData <=4) {
        cmi = 25
      } else if (cmiData > 4 && cmiData <=5) {
        cmi = 30
      } else if (cmiData > 5 && cmiData <=6) {
        cmi = 40
      } else if (cmiData > 6 && cmiData <=7) {
        cmi = 50
      } 
      return cmi
    },
    shareFun(type){ 
      // 分享
      let title = `这是我在美胸汇签到的第${this.isSignNumber}天，每天参与都有奖励哦！`
      let description = "我已经超越了95%的用户了，你也来一起努力吧~";
      let imgSrc = 'https://oss.meibbc.com/BeautifyBreast/logo/logo.png';
      let hostUrl = 'http://testuser.meibbc.com/bbc-personal/sharerImg?url=' + this.trueImgUrl;
      let activityId = "";
      if (this.isOkToSharer) {
        this._system_shareTo(title,description,imgSrc,hostUrl,"",activityId,type);
      }
    },
    getHaiBaoBackground() {
      USER_API1.getMotto().then(res => {
        // 名言金句背景图片
        console.log(res)
        this.wisdom = res.data
      })
    },
    setLocation(location) {
      console.log('ios',location)
      // 定位
      this.city = (JSON.parse(location)).city
      // console.log(this.city)

      USER_API1.getWeather({cityName: this.city}).then(res => {
        // 天气
        // console.log(11111,res)
        if (res.data) {
          this.weather = res.data
        }
      })
    },
    createPhoto() {
      // 生成图片
      let that = this;
      this.showHaiBaoLoading = true;
      console.log("执行生成图片");
      if (this.imgB) {
        let photoBox = document.querySelector(".photo-box");
        let newImgWidth = photoBox.offsetWidth;
        // console.log(newImgWidth,'--newImgWidth--')
        let newImgHeight = photoBox.offsetHeight;
        let scale = window.devicePixelRatio;
        let that = this;
        let isPx = this.isIphoneX()
        let opts = {
          width: newImgWidth,
          height: newImgHeight,
          scale: scale,
          useCORS: true,
          allowTaint:false,
          proxy: 'http://oss.meibbc.com'
        }
        if(isPx) {
          opts = {...opts, y: 104}
        }
        html2canvas(photoBox, opts).then(function(canvas) {
          var dataUrl = canvas.toDataURL("image/png");
          // console.log()
          that.shareImgUrl = dataUrl;
          // that.wisdom.picUrl = dataUrl;
          var fileObj = that.dataURLtoFile(dataUrl, '123.png')
          // console.log(111,fileObj)
          // console.log(222,dataUrl)
          if (fileObj) {
            let data = new FormData()
            data.append('file',fileObj)
            data.append('scene',"goods")
            that.$http({
              url: `${that.GLOBAL.upLoadURL}/uploaders`,
              method: 'post',
              headers: {ContentType: 'multipart/form-data'},
              data
            }).then(res => {
              that.trueImgUrl = res.data.url
              console.log(that.trueImgUrl)
              if (that.trueImgUrl) {
                that.isOkToSharer = true
                that.showHaiBaoLoading = false;
              }
            })
          }
          // 图片压缩
          // that.compress(that.shareImgUrl, 800, 0.5).then(val => {
          //   // console.log(val)
          //   that.$http({
          //     url: `${that.GLOBAL.upLoadURL}/uploaders/pic`,
          //     method: 'post',
          //     headers: {ContentType: 'application/x-www-form-urlencoded'},
          //     data: qs.stringify({
          //       base64_file: val,
          //       scene: 'goods'
          //     })
          //   }).then(res=> {
          //     // console.log('分享图片',res)
          //     that.trueImgUrl = res.data.url
          //     if (that.trueImgUrl) {
          //       that.isOkToSharer = true;
          //     }
          //   })
          // })
          if (that.shareImgUrl) {
            // console.log(that.shareImgUrl)
            that.isOkToClickSave = true;
          }
          // console.log(111,dataUrl)
          // console.log(that.shareImgUrl)
          // localStorage.imgData = dataUrl;
          // console.log(that.shareImgUrl)
          // that.$savePhoto({"data": dataUrl})
        });
      }
    },
    saveToPhotoAlbum() { 
      // 保存到本地
      // let _this = this
      // this.compress(this.shareImgUrl, 800, 0.5).then(val=> {
      //   this.$http({
      //     url: `${this.GLOBAL.upLoadURL}/uploaders/pic`,
      //     method: 'post',
      //     headers: {ContentType: 'application/x-www-form-urlencoded'},
      //     data: qs.stringify({
      //       base64_file: val,
      //       scene: 'goods'
      //     })
      //   }).then(res=> {
      //     console.log('保存图片',res)
      //   })
      // })
      if (this.isOkToClickSave) {
        // console.log(this.shareImgUrl)
        this.$savePhoto({"data": this.shareImgUrl})
      }
      // this.getImgToBase64(this.trueImgUrl, baseVal => {
      //   if (baseVal && this.isOkToClickSave) {
      //     console.log(baseVal)
      //     this.$savePhoto({'data': baseVal})
      //   }
      // })
    },
    toNewMember() {
      this.$router.push({name: 'newmember'})
    },
    closeQdShow() {
      this.qdShow = false
      this.createPhoto()
      
    },
    compress(base64String, w, quality) {
        var getMimeType = function (urlData) {
          var arr = urlData.split(',');
          var mime = arr[0].match(/:(.*?);/)[1];
          // return mime.replace("image/", "");
          return mime;
        };
        var newImage = new Image();
        var imgWidth, imgHeight;
 
        var promise = new Promise(resolve => newImage.onload = resolve);
        newImage.src = base64String;
        return promise.then(() => {
          imgWidth = newImage.width;
          imgHeight = newImage.height;
          var canvas = document.createElement("canvas");
          var ctx = canvas.getContext("2d");
          if (Math.max(imgWidth, imgHeight) > w) {
            if (imgWidth > imgHeight) {
              canvas.width = w;
              canvas.height = w * imgHeight / imgWidth;
            } else {
              canvas.height = w;
              canvas.width = w * imgWidth / imgHeight;
            }
          } else {
            canvas.width = imgWidth;
            canvas.height = imgHeight;
          }
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(newImage, 0, 0, canvas.width, canvas.height);
          var base64 = canvas.toDataURL(getMimeType(base64String), quality);
          // console.log(base64);
          return base64;
        });
    },
    toGive(){
      let params = {cmNum:"",phone:"",sendPeopleId:this.userId};
      store.commit('changeGiveForm',params);
      this.MixinToUrl('cmi-give');
    },
    dataURLtoFile(dataurl, filename) {
      //将base64转换为文件
      var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
      while(n--){
          u8arr[n] = bstr.charCodeAt(n);
      }
      return new File([u8arr], filename, {type:mime});
    },
    getImgToBase64(url, callback) {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      var img = new Image();

      img.crossOrigin = 'Anonymous';
      img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL('image/png');
        callback(dataURL);
        canvas = null;
      }
      img.src = url;
    },
    isIphoneX(isIPhoneXsign) {
      var u = navigator.userAgent;
      var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
      if (isIOS) {
        if (screen.height == 812 && screen.width == 375) {
          //是iphoneX
          return true
        } else {
          //不是iphoneX
          return false
        }
      }	
    }
  }
}
</script>
<style scoped>
@import "../../assets/css/cmi/index.css";

.icon-share {width: .46rem; height: .46rem; display: block; background: url('../../assets/img/newIndex/share.png') no-repeat center; background-size: contain;}

header {width: 100%; height: 1.4rem; background: url('../../assets/img/newIndex/back.png') no-repeat left top; background-size: cover;}
header .icon-left{background: url("../../assets/img/left.png");background-size: 100% 100%}
header .header-title{color: white}

.qiandao {width: 100%; height: 8.2rem; background: green; border: .01rem solid transparent; margin-top: -1.4rem; background: url('../../assets/img/newIndex/back.png') no-repeat center; background-size: contain;}

.timeTit {position: absolute; left: .25rem; top: .25rem; font-size: .28rem; color: #fff;}
.timeTit p {font-size: .24rem; margin-top: .17rem;}

.xxk {margin: auto; margin-top: 4.07rem; width: 7.02rem; height: 1.94rem;}
.xxk ul {display: flex; justify-content: space-between; height: .86rem;}
.xxk ul li {width: .96rem; display: flex; flex-direction: column; background:linear-gradient(-45deg,rgba(22,191,145,1) 0%,rgba(29,203,156,1) 100%); border-radius:.1rem .1rem 0px 0px;}
.xxk ul li span {height: .30rem; line-height: .30rem; text-align: center; background: linear-gradient(90deg,rgba(17,160,122,1) 0%,rgba(13,185,138,1) 100%); font-size: .18rem; color: #fff; border-radius:.1rem .1rem 0px 0px;}
.xxk ul li p {height: .56rem; text-align: center; line-height: .56rem; font-size: .26rem; color: #fff;}
.xxk ul li i {display: inline-block; width: .16rem; height: .16rem; background: url('../../assets/img/newIndex/cmi_mini.png') no-repeat center; background-size: contain; margin-left: .05rem;}
.xxk ul .active span {background: linear-gradient(90deg,rgba(255,98,98,1) 0%,rgba(255,136,64,1) 100%); position: relative;}
.xxk ul .active p {background: #fff; color: #FF6262;}
.xxk .ago span::after {content: ""; border-radius: .1rem .1rem 0px 0px; display: block; position: absolute; width: 100%; height: .35rem; top: 0; left: 0; background: #fff url('../../assets/img/newIndex/activeago.png') no-repeat center !important; background-size: cover !important;}
.xxk_con {width:100%; height: 1.94rem; position: relative; background: pink;}
.xxk_con div {width: 100%; height: 100%; position: absolute; top: 0; left: 0; background: #fff; display: none; padding-top: .40rem;}
.xxk_con .indexBox {display: block;}
.xxk_num {font-size: .72rem; color: #FF6262; margin-left: .39rem;}
.xxk .cmi_icon {width: .38rem; height: .38rem; background: url('../../assets/img/newIndex/cmi_small.png') no-repeat center; background-size: contain; margin-left: .21rem; display: inline-block;}
.xxk_nowDay {font-size: .24rem; color: #666; margin-left: .39rem; line-height: .20rem;}
.xxk_nowDay u {font-size: .34rem; color: #FF6262; text-decoration: none;}
.xxk .qiandaoBtn {display: block; position: absolute; left: 4.82rem; top: .7rem; width: 1.80rem; height: .54rem; background: url('../../assets/img/newIndex/qiandaoBtn.png') no-repeat center; background-size: contain; color: #fff; font-size: .28rem; text-align: center; line-height: .54rem;}
.xxk .yiqiandaoBtn {display: block; position: absolute; left: 4.82rem; top: .7rem; width: 1.8rem; height: .54rem; background: url('../../assets/img/newIndex/yiqiandaoBtn.png') no-repeat center; background-size: contain; color: #fff; font-size: .28rem; text-align: center; line-height: .54rem;}
.xxk_shu {width: .02rem; height: .14rem; background: #d2d2d2; display: inline-block; margin: 0 .21rem; transform: translateY(-.02rem);}

.huiyuan {width: 7.02rem; height: 1.28rem; background: #fff; border-radius: .2rem; margin: auto; margin-top: 1rem; position: relative; line-height: 1.28rem;}
.huiyuan::before {content: ""; display: block; width: .14rem; height: .52rem; position: absolute; left: 1.2rem; top: -.3rem; background: url('../../assets/img/newIndex/lianjie.png') no-repeat center; background-size: contain;}
.huiyuan::after {content: ""; display: block; width: .14rem; height: .52rem; position: absolute; left: 5.7rem; top: -.3rem; background: url('../../assets/img/newIndex/lianjie.png') no-repeat center; background-size: contain;}
.huiyuan span {display: inline-block;}
.huiyuan_huangguan {width: .52rem; height: .52rem; background: url('../../assets/img/newIndex/huangguan.png') no-repeat center; background-size: contain; margin-left: .4rem; vertical-align: middle; margin-top: -.2rem;}
.huiyuan_zhongxin {font-size: .32rem; color: #545454; margin-left: .17rem;}
.huiyuan_zunxiang {font-size: .24rem; color: #666666; margin-left: 3.11rem; display: inline-block;}
.huiyuan_zunxiang i {display: inline-block; width: .16rem; height: .16rem; background: url('../../assets/img/newIndex/zunxiang.png') no-repeat center; background-size: contain;}

.shadow {width: 100%; height: 100%; position: fixed; background: rgba(0,0,0,.6); z-index: 99999;}
.qdchenggong {width: 5.5rem; height: 2.68rem; text-align: center; line-height: 2.68rem; font-size: .3rem; color: #333; position: absolute; top:50%; left: 50%; transform: translate(-50%, -50%); background: #fff; border-radius: .2rem;}
.qdchenggong .num {color: #FF6262; text-decoration: none;}
.qdchenggong .cmi_icon {width: .41rem; height: .41rem; display: inline-block; margin-top: -.01rem; vertical-align: middle; background: url('../../assets/img/newIndex/cmi_small.png') no-repeat center; background-size: contain;}
.shadow .qd_close_btn {width: .6rem; height: .6rem; background: url('../../assets/img/newIndex/close_icon.png') no-repeat center; background-size: contain; position: absolute; left: 50%; top: 3.16rem; transform: translateX(-50%);}
.qd_img {width: 5.38rem; height: 5.4rem; background: url('../../assets/img/newIndex/qiandaochenggong.png') no-repeat center; background-size: contain; position: absolute; top: 0; left: 50%; transform: translate(-50%,-59%);}

.haibao {position: absolute; width: 100%; height: 100%; left: 0; top: 0; background: rgba(0,0,0,.6); z-index: 99998;}
.haibao_haibaoImg {width: 6.4rem; height: 10.04rem; border: .01rem solid #000; margin: auto; /*margin-top: 1.28rem;*/ margin-bottom: .4rem; position: relative; background: #fff;}
.haibao_haibaoImg .bgImg {width: 6.2rem; height: 8.5rem; margin: .1rem auto; position: relative;}
.haibao_haibaoImg .bgImg .ImgUrl {width: 100%; height: 100%;}
.haibao_haibaoImg .bgImg p {position: absolute; color: #fff;}

/* .bgCon {width: 5.94rem; height: 2.94rem; background: rgba(0,0,0,.65); position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); padding: .28rem .4rem 0 .4rem;}
.headerImg {width: 1.48rem; height: 1.48rem; border-radius: 50%; position: absolute; left: 50%; top: 0; transform: translate(-50%,-50%);}
.headerImg img {width: 100%; height: 100%; border-radius: 50%; border: .04rem solid rgba(255,255,255,.4); margin: auto;}
.bgtime {font-size: .28rem; color: #fff;}
.bgday {position: absolute; right: 0.5rem; top: 0.1rem; color: #808080; font-size: .22rem;}
.bgday p {font-size: .40rem; color: #FFAE00; text-align: center;}
.bgweather {font-size: .22rem; color: #48CBD7; margin-bottom: .22rem;}
.bgwisdom {font-size: .24rem; color: #FFF4F4;}
.bgnumber {display: flex; position: absolute; bottom: 0; width: 100%; left: 0; padding-bottom: .16rem;}
.bgnumber p {flex: 1; font-size: .2rem; color: #FFF4F4; text-align: center;}
.bgnumber p:nth-child(1) {background: url('../../assets/img/newIndex/bgborder.png') no-repeat right center; background-size: .02rem .84rem;}
.bgnumber p:nth-child(2) {background: url('../../assets/img/newIndex/bgborder.png') no-repeat right center; background-size: .02rem .84rem;}
.bgnumber span {display: block; font-size: .34rem; color: #F63B75;}
.bgfooter {padding: .2rem; position: relative;}
.bgtip {font-size: .2rem; color: #333;}
.bgtip p {font-size: .24rem; color: #F63B75; margin-bottom: .12rem;}
.bgtip span {display: block; transform: scale(.8) translateX(-.75rem);}
.bgewm {position: absolute; width: .93rem; right: .2rem; top: 0;}
.bgewm p {width: .93rem; height: .93rem;}
.bgewm p img {width: 100%; height: 100%;}
.bgewm span {font-size: .16rem; display: block; transform: scale(.6) translate(-.1rem, -.1rem); white-space: nowrap;} */
.bgloading {position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);}

.haibao_loading {position: relative; width: 6.4rem; height: 10.04rem; margin-top: 1.28rem; margin-bottom: .4rem; background: #fff;}
.haibao_loading p {position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); text-align: center;}
.haibao_bgDate {font-size: .7rem; left: .96rem; top: .4rem;}
.haibao_bgTime {font-size: .3rem; left: .41rem; top: 1.2rem;}
.haibao_bgWeather {font-size: .24rem; top: .61rem; right: 0; width: 2rem; text-align: center;}
.haibao_bgWisdom {font-size: .24rem; left: .42rem; top: 2.09rem;}
.haibaoCon {position: relative; padding-left: .42rem; padding-top: .43rem;}
.haibaoCon_headerImg {width: .8rem; height: .8rem; border-radius: 50%; position: absolute; left: .4rem; top: -.42rem; background: #fff;}
.haibaoCon_headerImg img {width: 100%; height: 100%; border-radius: 50%;}
.haibaoCon_userName {font-size: .24rem; color: #333;}
.haibaoCon_userTip {font-size: .22rem; color: #666;}
.haibaoCon_userTip u {color: #F25656; text-decoration: none;}
.haibaoCon_userEWM {width: .94rem; height: .94rem;background: #333; position: absolute; top: .13rem; right: .33rem;} 
.haibaoCon_userEWM span {font-size: .16rem; color: #666666; width: 100%; transform: scale(.6) translate(-.1rem, -.1rem); white-space: nowrap; display: inline-block;}
.haibao_close {width: .6rem; height: .6rem; background: url('../../assets/img/newIndex/tc_close_icon.png') no-repeat center; background-size: contain; position: absolute; right: -.3rem; top: -.3rem;}
.haibao_btn {position: relative;}
.haibao .tip {width: 2.1rem; height: .5rem; font-size: .20rem; background: url('../../assets/img/newIndex/haibao_sharer_bg.png') no-repeat center; background-size: contain; position: absolute; top: -.5rem; left: 1.04rem; text-align: center; line-height: .4rem; color: #fff;}
.haibao .tip span {display: inline-block; transform: scale(.8); width: 100%; white-space: nowrap;}
.haibao_btn a {display: block; float: left; width: 2.9rem; height: .8rem; background: rgba(0,0,0,.6); border: .01rem solid #000; border-radius: .4rem; color: #fff; font-size: .26rem; text-align: center; line-height: .8rem;}
.haibao_btn a:nth-of-type(1) {margin-left: .09rem; margin-right: .42rem;}
.haibao_btn a i {display: inline-block; width: .32rem; height: .32rem; margin-right: .17rem; vertical-align: middle;}
.haibao_btn .share_icon {background: url('../../assets/img/newIndex/share_icon.png') no-repeat center; background-size: contain;}
.haibao_btn .save_icon {background: url('../../assets/img/newIndex/save_icon.png') no-repeat center; background-size: contain;}

.cmi-common1 {border-radius: .1rem .1rem 0 0;}
.cmi-common1::before {content: ""; display: block; width: .48rem; height: .52rem; position: absolute; left: -.08rem; top: .5rem; background: url('../../assets/img/newIndex/zhuan.png') no-repeat center; background-size: contain;}
.cmi-common2 {margin-top: 0; border-radius: 0 0 .1rem .1rem;}
.cmi-common2::before {content: ""; display: block; width: .48rem; height: .52rem; position: absolute; left: -.08rem; top: .5rem; background: url('../../assets/img/newIndex/hua.png') no-repeat center; background-size: contain;}

.tip-cmi-modules{position: fixed;left: 0;right: 0;bottom: 0;top: 0;margin: auto;height: 1rem}
.common-shadow-modules img{width: .82rem;display: block;margin: auto}
.common-shadow-modules span{position: absolute;right: 2rem;color: white;top:.3rem;font-size: .24rem;}
.common-shadow-modules b{font-weight: bold;font-size: .3rem;color: #FBD904;margin-right: .1rem}

/*分享模块*/
.footer-share-modules{position: fixed;bottom: 0;width: 100%;height: 3.36rem;background-color: #F6F6F6;z-index: 99999}
.footer-title-modules{height: .5rem;position: relative;margin-top: .2rem}
.footer-title-modules:after{content: "";height: 1px;background-color: #909090;width: 3.63rem;position: absolute;left: 0;right: 0;margin: auto;
  z-index: 9;top: 0;bottom: 0}
.footer-title-modules p{position: absolute;left: 0;right: 0;margin: auto;width: 2.5rem;z-index: 99;line-height: .5rem;
  background-color: #F6F6F6;text-align: center;color: #909090;font-size: .32rem}
.footer-share-modules li{float: left;width: calc(100% / 4);text-align: center;position: relative}
.footer-share-modules li p{width: 100%;text-align: center;top: .8rem;position: absolute}
.footer-share-modules li:nth-child(1) img{width: .64rem;display: inline-block}
.footer-share-modules li:nth-child(2) img{width: .58rem;display: inline-block}
.footer-share-modules li:nth-child(3) img{width: .52rem;display: inline-block}
.footer-share-modules li:nth-child(4) img{width: .59rem;display: inline-block}
.footer-share-modules ul{margin-top: .87rem}
.footer-share-modules .closeBtn {position: absolute; top: .3rem; right: .3rem; width: .2rem; height: .2rem; background: url('../../assets/img/newINdex/close2_icon.png') no-repeat center; background-size: contain;}
.share-footer-button{position: absolute;bottom: 0;width: 100%;line-height: .85rem;text-align: center;color: #FC858F;font-size: .3rem;background-color: white;font-weight: bold}
</style>
