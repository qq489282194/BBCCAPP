<template>
  <div>
    <div class="bbc-idx">
      <div class="header-modules">
        <div class="header">
          <div>
            <a @click="MIXINToDetail('','3')">
              <i class="icon icon-message"></i>
            </a>
            <a @click="MIXINToDetail('','7')">
              <i class="icon icon-set"></i>
              <p :class="message == 1 ? 'news' : ''"></p>
            </a>
          </div>
        </div>
        <div class="header-top clear-both member">
          <img @click="MIXINToDetail('','20')" v-if="userList.icon != null && userList.icon != 'null' && userList.icon != ''" class="header-photo" :src="'https://oss.meibbc.com/'+userList.icon"/>
          <img @click="MIXINToDetail('','20')" v-else class="header-photo" src="../../assets/img/user.png"/>
          <div class="header-message">
            <p @click="MIXINToDetail('','20')" v-if="userList.niceName" v-html="userList.niceName">Why.123</p>
            <p v-else @click="MIXINToDetail('','20')">未登录</p>
            <!-- <p v-show="userId == '' || userId == '(null)'  " v-html="postUserByUserid.name">Darren</p> -->
            <i class="icon icon-role1" v-if="userList.role == 1"></i>
            <i class="icon icon-role2" v-if="userList.role == 2"></i>
            <i class="icon icon-role3" v-if="userList.role == 3 || userList.role == 4"></i>
            <i class="icon icon-role4" v-if="userList.role == 5 || userList.role == 6"></i>
            <span v-if="userList.role" @click="MIXINToDetails(`http://testuser.meibbc.com/bbc-personal/newmember?userId=${userId}`,'24','1')">{{ userList.role == 1 ? '普通会员':(userList.role == 2 ? '贵宾会员':(userList.role == 3 || userList.role == 4 ? '铂金会员':(userList.role == 5 || userList.role == 6 ? '钻石会员':'')))}}</span>

            <!-- <span v-if="userList.role == 1">普通用户</span>
            <span v-if="userList.role == 2">贵宾</span>
            <span v-if="userList.role == 3">铂金</span>
            <span v-if="userList.role == 4">店长</span> -->
            <!-- <div class="progress">
              <span>权益 v3</span>
              <nut-progress 
                size="small"
                strokeColor='#fff'
                percentage='100'
                textInside='true'
                showText='false'
              >
              </nut-progress>
            </div> -->
            
          </div>
          <!-- <div class="sign" @click="MIXINToDetails('http://testuser.meibbc.com/bbc-personal/cmi/index','24','1')">
            <p><i class="icon icon-gift"></i></p>
            <p>签到有礼</p>
          </div> -->
          <!-- <div class="sign" @click="MIXINToDetails('http://testuser.meibbc.com/bbc-personal/newindex1','24','1')">
            <p><i class="icon icon-gift"></i></p>
            <p>签到有礼</p>
          </div> -->
          <div class="sign" @click="MIXINToDetails('http://testuser.meibbc.com/bbc-personal/cmi/newindex1','24','1')">
            <p><i class="icon icon-gift"></i></p>
            <p>签到有礼</p>
          </div>
          <!-- <img @click="MIXINToDetail('','10')" class="header-code" src="../../assets/img/cmi/ma.png"/> -->
        </div>
        <ul class="header-bottom clear-both">
          <li @click="MIXINToDetail('','35')" >
            <p v-if="personalPage.diaryNum != 0" v-html="personalPage.diaryNum">0</p>
            <p v-if="personalPage.diaryNum == 0">0</p>
            <p>帖子</p></li>
          <li @click="MIXINToDetail('','36')">
            <p v-if="personalPage.fansNum != 0" v-html="personalPage.fansNum">0</p>
            <p v-if="personalPage.fansNum == 0">0</p>
            <p>粉丝</p></li>
          <li @click="MIXINToDetail('','5')">
            <p v-if="countCare != 0" v-html="countCare">9814</p>
            <p v-if="countCare == 0">0</p>
            <p>关注</p></li>
          <li @click="MIXINToDetails(`http://testuser.meibbc.com/bbc-personal/shareFriend?userId=${userId}`,'24','1')">
            <p v-if="selectCount.count != 0"  v-html="selectCount.count">1</p>
            <p v-if="selectCount.count == 0">0</p>
            <p>好友</p></li>
          <!-- <li @click="MIXINToDetail('','12')">
            <p v-if="selectCount.count != 0"  v-html="selectCount.count">1</p>
            <p v-if="selectCount.count == 0">0</p>
            <p>好友</p></li> -->
        </ul>
      </div>

      <div class="menu-modules clear-both frame">
        <ul class="">
          <li @click="MIXINToDetail('','1')">
            <i class="icon icon-order"></i>
            <!--<i src="../../assets/img/home/order.png"/>-->
            <p>订单</p></li>
          <li @click="MIXINToDetail('','8')">
            <i class="icon icon-after-sales"></i>
            <!--<img src="../../assets/img/home/after-sales.png"/>-->
            <p>预约</p></li>
          <!-- <li @click="MIXINToDetails('http://testuser.meibbc.com/bbc-personal/cmi/wallet','24','1')">
            <i class="icon icon-money"></i>
            <p>钱包</p></li> -->
          <li @click="MIXINToDetails(`http://testuser.meibbc.com/bbc-personal/cmi/newwallet?userId=${userId}`,'24','1')">
            <i class="icon icon-money"></i>
            <p>积分&C米</p></li>
          <!-- <li @click="MIXINToDetails(`http://testuser.meibbc.com/bbc-personal/newwallet?userId=${userId}`,'24','1')">
            <i class="icon icon-money"></i>
            <p>积分&C米</p></li> -->
          <li @click="MIXINToDetail('','11')">
            <i class="icon icon-information"></i>
            <!--<img src="../../assets/img/home/question.png"/>-->
            <p>收藏</p></li>
          <li @click="MIXINToDetail('','37')">
            <i class="icon icon-praise"></i>
            <!--<img src="../../assets/img/home/information.png"/>-->
            <p>赞过</p></li>
          <!-- <li @click="MIXINToDetail('','4')">
            <i class="icon icon-answers"></i>
            <p style="margin-bottom:0;">问答</p></li> -->
          <li @click="MIXINToDetail('','38')">
            <i class="icon icon-footprint"></i>
            <p style="margin-bottom:0;">足迹</p></li>
          <li @click="MIXINToDetails(`http://testuser.meibbc.com/bbc-personal/newinvitation?userId=${userId}`, '24','1')">
            <i class="icon icon-shangjiayaoyue"></i>
            <p style="margin-bottom:0;">商家邀约</p></li>

        </ul>

      </div>
      
      <div class="banner-modules">
        <a @click="MIXINToDetail(page_jump_url,'24')"><img :src="photo_url" alt=""></a>
        <!-- <a :href="page_jump_url" @click="MIXINToDetail(page_jump_url,'24')"><img :src="photo_url" alt=""></a> -->
      </div>

      <!-- <div class="integral-modules frame activeIcon" id="2"> -->
        <!-- <p>我的积分</p> -->
        <!-- <ul class="numdata">
          <li>
            <p>可用积分</p>
            <p v-if="postUserByUserid.actAalance != 0" v-html="postUserByUserid.actAalance">0.00</p>
            <p v-if="postUserByUserid.actAalance == 0">0.00</p>
          </li>
          <li>
            <p>总积分</p>
            <p v-if="postUserByUserid.actAalance != 0" v-html="postUserByUserid.actAalance + postUserByUserid.frozonaalance">0.00</p>
            <p v-if="postUserByUserid.actAalance == 0">0.00</p>
          </li>
        </ul> -->
        <!-- <ul class="invite" id="17">
          <li @click="MIXINToDetails('http://testuser.meibbc.com/bbc-personal/cmi/wallet?switchover=1', '24','1')" class="activeCon">
            <i class="icon icon-integral"></i>
            <p>积分</p>
          </li>
          <li @click="MIXINToDetail('http://testuser.meibbc.com/bbc-personal/actindex/asharer','24')" id="25">
            <i class="icon icon-integral"></i>
            <p>我的邀请</p>
          </li>
          <li @click="MIXINToDetails(`http://testuser.meibbc.com/bbc-personal/invitation?userId=${userId}`, '24','1')" class="activeCon">
            <i class="icon icon-shouyi"></i>
            <p>收益中心</p>
          </li>
          <li @click="MIXINToDetails(`http://testuser.meibbc.com/bbc-personal/actindex/asharer?userId=${userId}`, '24','1')" class="activeCon">
            <i class="icon icon-shangjia"></i>
            <p>邀请商家</p>
          </li>
          <li @click="MIXINToDetails(`http://testuser.meibbc.com/bbc-personal/invitefriends?userId=${userId}`, '24','1')" class="activeCon">
            <i class="icon icon-invite"></i>
            <p>邀请好友</p>
          </li>

         
          <li @click="MIXINToDetails(`http://testuser.meibbc.com/bbc-personal/newinvitation?userId=${userId}`, '24','1')">
            <i class="icon icon-invite"></i>
            <p>商家邀约</p>
          </li>
        </ul> -->
        <!-- <p class="clear"></p>
      </div> -->

      <div class="integral-modules frame activeIcon" id="4">
        <p>会员权益</p>
        <ul class="member nav">
          <!-- <li @click="MIXINToDetails(`http://testuser.meibbc.com/bbc-personal/mymember?userId=${userId}`,'24','1')" class="activeCon" id="33">
            <i class="icon icon-member"></i>
            <p>我的会员</p>
          </li> -->
          <li @click="MIXINToDetails(`http://testuser.meibbc.com/bbc-personal/newmember?userId=${userId}`,'24','1')" class="activeCon" id="33">
            <i class="icon icon-member"></i>
            <p>我的会员</p>
          </li>
          <li @click="MIXINToDetail('','18')" class="activeCon">
            <i class="icon icon-cmishop"></i>
            <p>C米商城</p>
          </li>
          <li @click="MIXINToDetail('','19')" class="activeCon">
            <i class="icon icon-month"></i>
            <p>我的月卡</p>
          </li>
          <!-- <li @click="MIXINToDetails(`http://testuser.meibbc.com/bbc-personal/upgrade?userId=${userId}`,'24','1')" class="activeCon">
            <i class="icon icon-upgrade"></i>
            <p>会员升级</p>
          </li> -->
          <!-- <li @click="MIXINToDetails(`http://testuser.meibbc.com/bbc-personal/newupgrade?userId=${userId}`,'24','1')" class="activeCon">
            <i class="icon icon-upgrade"></i>
            <p>会员升级</p>
          </li> -->
        </ul>
        <p class="clear"></p>
      </div>

      <div class="frame activeIcon" id="6">
        <p class="home-title">胸密福利</p>

        <ul class="serve-modules clear-both">
          <!--<li @click="MixinToUrl('cmi-index')">-->
          <!--<li @click="MIXINToDetail('http://129.204.30.206:8011/bbc-personal/cmi/index','24')">-->
          <!-- <li @click="MIXINToDetail('','43')">
            <i class="icon icon-discounts"></i>
            <p>优惠券</p>
          </li> -->
          <!-- <li>
            <a href="http://192.168.0.55:8080/findshopdetail?serverId=142">
              <i class="icon icon-discounts"></i>
              <p>测试跳线下服务</p>
            </a>
          </li> -->
          <!--<li @click="MIXINToDetail('http://129.204.30.206:8011/bbc-personal/cmi/index','24')"><img style="width: .44rem" src="../../assets/img/home/check.png"/><p>签到领好礼</p></li>-->
          <li @click="MIXINToDetails('http://activity.meibbc.com/team-packer/activityCenter.html#/index','24','1')" class="activeCon" id="41">
            <i class="icon icon-activity"></i>
            <!--<img style="width: .42rem" src="../../assets/img/home/gift.png"/>-->
            <p>精彩活动</p></li>
        </ul>
      </div>

      <div class="frame home-bottom activeIcon" id="8">
        <p class="home-title">常用工具</p>

        <ul class="serve-modules clear-both">
          <li @click="MIXINToDetail('','10')" class="activeCon" id="49">
            <i class="icon icon-code"></i>
            <p>二维码</p>
          </li>
          <li @click="MIXINToDetail('','44')" class="activeCon">
            <i class="icon icon-control"></i>
            <p>胸膜控制器</p></li>
          <li @click="MIXINToDetail('','9')" class="activeCon">
            <i class="icon icon-service"></i>
            <p>客服</p></li>
          <li @click="MIXINToDetail('','6')" class="activeCon">
            <i class="icon icon-after"></i>
            <p>售后</p></li>
        </ul>
      </div>


    </div>
  </div>
</template>

<script>

  import * as USER_API from '@/api/user'
  import * as TAPP_API from '@/api/tapp'
  import * as UPG_API from '@/api/upgrade'
  import store from "@/store/index"
  import { debug } from 'util';

  export default {
    name: "personal",
    data(){
      return{
        userList:{
          integral:0,
        },
        // 好友
        selectCount:{
          count:0,
        },
        // 帖子粉丝未读消息
        personalPage:{
          diaryNum:0,
          fansNum:0
        },
        // 日记
        diaryCount:0,
        // 积分
        postUserByUserid:{
          // 可用积分
          actAalance:0,
          // 冻结积分
          frozonaalance:0
        },
        countCollect:0,
        // 关注
        countCare:0,
        // banner图
        pageJump:[{
          // 图片地址
          photo_url:'',
          // 跳转地址
          page_jump_url:''
        }],
        // 跳转地址
        page_jump_url:'',
        // 图片地址
        photo_url:'',
        // 未读消息显隐
        message:0,
        register:0,
        // 版本号
        version: '',
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
    watch: {
      userId (val) {
        if(val != '' && val != "(null)" ){
          this.loadUser();
          this.loadSelectCount();
          this.register = 1
        }
      },
      token(val){
        if(val != ""){
          this.loadCountCollect();
          this.loadCountCare();
        }
      },
    },
    created(){
      const self = this ;
      window['updateWeb'] = function(){
        if(self.userId != '' && self.userId != "(null)" ){
          self.loadUser();
          self.loadSelectCount();
          // self.loadgetDiaryFans()
        }
        if(self.token != ""){
          self.loadCountCollect();
          self.loadCountCare();
        }
      };
    },
    mounted(){
      // 得到版本号
      // this.getShowList('1.0', 'android')
      if (store.state.version) {
        this.getShowList(store.state.version, 'android')
      } else {
        this.getVersion();
        window['setVersion'] = function(version) {
          store.commit('changeVersion', version);
          this.getShowList(version, 'ios')
        };
      }
      // 获取用户信息
      if(this.userId != '' && this.userId != "(null)" ){
        this.loadUser();
        this.loadSelectCount();// 关注
        this.loadCountCare()
      }
      // 帖子粉丝未读消息
      // this.loadgetDiaryFans(this.userId)
      // banner图
      this.loadPageJump()
      
    },
    methods:{
      // 得到是否显示的列表
      getShowList(version, source_for) {
        console.log(version, source_for)
        let params = {
          version, 
          source_for
        }
        let _this = this
        console.log(document.getElementById('2'))
        UPG_API.getShowList(params).then(res => {
          console.log(res)
          // var activeIcons = document.getElementsByClassName('activeIcon')
          // var activeCons = document.getElementsByClassName('activeCon')
          // for (let i = 0; i < activeIcons.length; i++) {
          //   activeIcons[i].style.display = 'none';
          // }
          // for (let i = 0; i < activeCons.length; i++) {
          //   activeCons[i].style.display = 'none'
          // }
          // for (let i = 0; i < res.data.length; i++) {
          //   document.getElementById(res.data[i].id).style.display = 'block'
          //   if (res.data[i].list) {
          //     for (let j = 0; j < res.data[i].list.length; j++) {
          //       document.getElementById(res.data[i].list[j].id).style.display = 'block'
          //     }
          //   }
          // }
          // console.log(activeIcons[3].firstElementChild)
          // console.log(activeCons)
          // let conArr = []
          // for (let i = 0; i < activeIcons.length; i++) {
          //   activeIcons[i].style.display = 'none'
          //   for (let j = 0; j < res.data.length; j++) {
          //     if (activeIcons[i].firstElementChild.innerHTML == res.data[j].name) {
          //       activeIcons[i].style.display = 'block'
          //     }
          //     if (res.data[j].list) {
          //       for (let a = 0; a < res.data[j].list.length; a++) {
          //         conArr.push(res.data[j].list[a].name)
          //       }
          //     }
          //   }
          // }
          // conArr = [...new Set([...conArr])]
          // console.log(conArr)
          // for (let i = 0; i < activeCons.length; i++) {
          //   activeCons[i].style.display = 'none'
          //   for (let j = 0; j < conArr.length; j++) {
          //     if (activeCons[i].children[1].innerHTML == conArr[j]) {
          //       activeCons[i].style.display = 'block'
          //     }
          //   }
          // }
        })
      },
      loadUser(){
        let userId = this.userId;
        USER_API.findUserByUserid(userId).then(data => {
          if(data){
            if(data == true){
              this.userList = 0;
            }else{
              this.userList = data;
            }
          }
        });
      },
      loadCountCollect(){
        let params = {"token":this.token, "userid":this.userId,};
        USER_API.countCollect(params).then(data => {
          if(data){
            this.countCollect = data;
          }else{
            this.countCollect = 0;
          }

        });
      },
      // 好友
      loadSelectCount(){
        let params = {
          "endDate": "",
          "startDate": "",
          "userId": this.userId
        }
        this.loadgetDiaryFans(this.userId)
        USER_API.selectcount(params).then(data => {
          if(data){
            this.selectCount = data;
          }
        });
      },

      // 获取用户粉丝数量及用户日记数量
      loadgetDiaryFans(val){
        let params = {"userid":val,};
        USER_API.getDiaryFans(params).then(data => {
          if(data){
              this.personalPage = data
              if(data.sysJson.focusNotify > 0){
                this.message = 1
              }
              if(data.sysJson.notification > 0){
                this.message = 1
              }
              if(data.sysJson.clicklikeNotify > 0){
                this.message = 1
              }
              if(data.sysJson.commentNotify > 0){
                this.message = 1
              }
          }
        });
      },
      // 关注
      loadCountCare(){
        // this.loadgetDiaryFans(this.userId)
        let params = {"token":this.token, "userid":this.userId,};
        USER_API.countCare(params).then(data => {
          if(data){
            this.countCare = data;
          }
        });
      },
      // banner图
      loadPageJump(){
        let params = { type:6, page_no:1, page_size:10, };
        USER_API.pageJump(params).then(data => {
          this.pageJump = data
          this.page_jump_url = data[0].page_jump_url
          this.photo_url = data[0].photo_url
        })
      },
      toActivity() {
        this.$router.push('/actindex/asharer')
      },
      //我的邀请
      toInvitation(){
         this.$router.push('/giftPoint/giftPoint')
      }
    },
  }
</script>

<style  scoped>
  @import "../../assets/css/home/personal.css";
</style>

