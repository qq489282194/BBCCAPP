<template>
  <div>
    <div class="head-background">
        <div class="head-nav">
            <p>答案详情</p>
        </div>
    </div>

    <div class="main">
        <h1 class="title"  v-html="newQuestionDetail.questionDesc">想做丰胸手术，请问下，生完宝宝后多久才能做自体脂肪丰胸？</h1>
        <p class="content"  v-html="newQuestionDetail.content">因为当妈了之后更加有追求美的权利，作为同样孩子妈妈，在喂完孩子之后，胸部的上半缘也就开始萎缩，出现了下垂感，或者是为了早点恢复身材，胸部就像一个干瘪的气球，会出现下移下垂，容积量也就会减少，外形也不是那么美观，所以在术前服用“脂美”为身体储备术后所需的莹养，拒绝用单纯的胶原蛋白。</p>
        <div class="people">
            <img :src="newQuestionDetail.userIcon" class="head">
            <div>
                <p class="name" v-html="newQuestionDetail.userName">官鹅儿</p>
                <span class="time">{{newQuestionDetail.modiTime}}提问</span>
            </div>
        </div>
    </div>
    <p class="wire"></p>

    <div class="comment" v-for="(item,index) in qAnswerComment.list" :key="index">
        <div class="people">
            <img :src="item.icon" class="head">
            <!-- <p class="head"></p> -->
            <div>
                <p class="name" v-html="item.userName">火山</p>
                <span class="time" v-html="item.createTime">02-07</span>
            </div>
        </div>
        <div class="reply">
            <p v-html="item.content">求壁纸！！功能区分那个！！</p>
            <div v-if="item.qanswerReplyCommentVOS">
                <div class="secondReply" v-for="reply in item.qanswerReplyCommentVOS" :key="reply.index">
                    <p v-html="reply.replyUserName">喜上眉梢</p>
                    <!-- <span> 回复 </span> -->
                    <!-- <span v-html="reply.userName">黑猪</span> -->
                    <span>：</span>
                    <span v-html="reply.content">好好看！好喜欢</span>
                </div>
            </div>
            
        </div>
    </div>

    <div class="advertisement">
        <img src="../../assets/img/logo.png" alt="">
        <div>
            <p>美胸汇</p>
            <span>美胸汇让你更美</span>
        </div>
        <a href="http://appment.meibbc.com/apk-admin/seoH5/weixin.html">
            <p>打开APP</p>
        </a>
    </div>

    <!-- 分享模块 -->
    <div class="common-shadow-modules" @click="isShare = false"  v-show="isShare">
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
    </div>
  </div>
</template>

<script>
import * as USER_API from '@/api/user'
import store from "@/store/index"

export default {
    data(){
        return{
            isShare:false,
            // 提问详情
            newQuestionDetail:{},
            // 评论详情
            qAnswerComment:{},
            questionId:'',
        }
    },
    mounted(){
        // 获取服务ID
        this.getQueryVariable('questionId')
        // 提问详情
        this.loadnewQuestionDetail()
        // 评论详情
        this.loadqAnswerComment()
    },
    methods:{
        // 分享模块
        shareFun(typeNumber,type){
            let title = "快来开通会员吧！"
            let description = "一起分享吧！";
            let imgSrc = "http://app.meibbc.com/BeautifyBreast/app/share-modules/image/draw/share.png";
            let hostUrl = "http://papp.meibbc.com/bbc-personal/cmi/cmimymember"
            let activityId = "";
            this._system_shareTo(title,description,imgSrc,hostUrl,"",activityId,type);
        },
        // 获取提问详情
        loadnewQuestionDetail(){
            let params = {"questionId":this.questionId,"userId":this.userId}
            USER_API.newQuestionDetail(params).then(data => {
                if(data){
                    this.newQuestionDetail = data.newAskquestionVO
                }
                // debugger
                // console.log(this.newQuestionDetail)
            });
        },
        // 获取评论详情
        loadqAnswerComment(){
            let params = {"questionId":this.questionId,"pageNum":'1',"pageSize":'10',"userId":this.userId}
            USER_API.qAnswerComment(params).then(data => {
                if(data){
                    this.qAnswerComment = data
                }
                // debugger
                // console.log(this.newQuestionDetail)
            });
        },
        // 获取url参数
        getQueryVariable(variable){
            let query = window.location.search.substring(1);
            let vars = query.split("&");
            for (let i=0;i<vars.length;i++) {
                let part = vars[i].split("=");
                if(part[0] == variable){
                    this.questionId = part[1]
                }
            }
        },
    }
}
</script>

<style scoped>
.head-background{display: inline-block;border-bottom: 1px solid #e5e5e5;width: 100%;padding-bottom: .14rem;}
.head-nav{margin-top: .71rem;text-align: center}
.head-nav p{font-size: .36rem;}

.main{padding: .22rem .22rem .34rem .22rem}
.main .title{font-size: .34rem;line-height: .4rem;width: 6.78rem;margin-bottom: .4rem;}
.main .content{font-size: .28rem;line-height: .46rem;margin-bottom: .3rem;}
.main .people .head{width: .7rem;height: .7rem;border-radius: 50%;margin-right: .2rem;float: left;}
.main .people div{display: inline-block}
.main .people .name{font-size: .3rem;line-height: .4rem;}
.main .people .time{font-size: .22rem;color: #999999;line-height: .4rem;}

.comment{padding: .24rem;}
.comment .people .head{width: .7rem;height: .7rem;border-radius: 50%;display: inline-block;margin-right: .2rem;float: left;}
.comment .people div{display: inline-block}
.comment .people .name{font-size: .3rem;line-height: .4rem;}
.comment .people .time{font-size: .22rem;color: #999999;line-height: .4rem;}
.comment .reply{margin-left: .76rem;}
.comment .reply p{font-size: .3rem;line-height: .6rem;margin-top: .18rem;}
.comment .secondReply{width: 6.28rem;border-radius: .2rem;font-size: .28rem;padding: .24rem .3rem;background: #F2F2F2;margin-top: .1rem;}
.comment .secondReply p{display: inline;color: #999999;}
.comment .secondReply span{}

.advertisement{width: 100%;height: 1rem;background: #333333;position: fixed;bottom: 0;left: 0;right: 0;z-index: 9;}
.advertisement img{height: .7rem;width: .7rem;float: left;margin: .15rem .15rem 0 .23rem}
.advertisement div{float: left;color: white;margin-top: .2rem;}
.advertisement div p{font-size: .22rem;line-height: .31rem;}
.advertisement div span{font-size: .18rem;line-height: .31rem;}
.advertisement>a{color: white;width: 1.4rem;height: .48rem;border-radius: .24rem;background: #EF68A1;text-align: center;line-height: .48rem;font-size: .19rem;float: right;margin-top: .27rem;margin-right: .34rem;}


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

  /* 公共样式 */
  .wire{height: .14rem;width: 100%;background: #F2F2F2}


.icon-back{ width: .19rem; height: .34rem; background: url("../../assets/img/shopDetail/right1.png");background-size: 100% 100%;display: inline-block;float: left;margin-left: .31rem;margin-right: 2.58rem;transform: rotateY(180deg); }
.icon-share{ width: .38rem; height: .37rem; background: url("../../assets/img/shopDetail/share1.png");background-size: 100% 100%;display: inline-block;float: right;margin-right: .24rem }

/* .icon-share { width: .42rem; height: .42rem; background: url("../../assets/img/shopDetail/share1.png");background-size: 100% 100%;display: inline-block;float: left; }
.icon-back { width: .16rem; height: .26rem; background: url("../../assets/img/shopDetail/right.png");background-size: 100% 100%;display: inline-block;float: right; } */

</style>
