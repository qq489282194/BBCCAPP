<template>
  <div>
    <div class="nav">
        <ul>
            <li @click="backRouter()">
                <i class="icon-back"></i>
            </li>
            <li>
                <p>答案详情</p>
            </li>
            <li @click="isShare = true">
                <i class="icon-share"></i>
            </li>
        </ul>
    </div>

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
import { debug } from 'util';

export default {
    data(){
        return{
            userId:store.state.userId,
            article:{
                bigTypeId: "",
                content: "",
                id: "",
                readCount: 0,
                shareUrl: "",
                title: "",
                updateTime: ""
            },
            isShare:false,
        }
    },
    mounted(){
        this.loadPostUserByUserid()
    },
    methods:{
      // 获取文章
      loadPostUserByUserid(){
        let params = { "id":this.userId, };
        USER_API.getArticle(params).then(data => {
          
          if(data){
            this.article = data;
          }
        });
      },
      // 分享模块
      shareFun(type,typeNumber){
        let title = this.article.title
        let description = "";
        let imgSrc = 'https://oss.meibbc.com/BeautifyBreast/logo/logo.png';
        let hostUrl = this.article.shareUrl
        let activityId = "";
        this._system_shareTo(title,description,imgSrc,hostUrl,"",activityId,type);
      },
    }
}
</script>


<style type="text/scss" scoped>
.nav{height: 1rem;margin-top: .28rem;border-bottom: .01rem solid #CFCFCF}
.nav ul li{width: calc(98% / 3);display: inline-block;line-height: 1rem;}
.nav ul li:nth-child(1){padding-left: .32rem;}
.nav ul li:nth-child(2){text-align: center;}
.nav ul li:nth-child(3){padding-right: .24rem;text-align: right;}

.icon-share{ width: .46rem; height: .46rem; background: url("../../assets/img/bbcdetail/share@3x.png");background-size: 100% 100%;display: inline-block; }
.icon-browse{ width: .32rem; height: .32rem; background: url("../../assets/img/bbcdetail/liulan1@3x.png");background-size: 100% 100%;display: inline-block; }
.icon-back{ width: .14rem; height: .24rem; background: url("../../assets/img/bbcdetail/-s-jiantou_qb_icon@3x.png");background-size: 100% 100%;display: inline-block;transform: rotateY(180deg) }
 
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

