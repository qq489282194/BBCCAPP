<template>
  <div>
    <!-- 分享者内容 -->
    <div class="sharer">
      this is sharer content
    </div>
    <!-- 我要参与 -->
    <div class="join">
      <van-button type="primary" size="small" @click="shareFun('weChat',1)">我要参与</van-button>
    </div>
    <!-- 我的商家 -->
    <div class="business">
      <div class="bustit">我的商家</div>
      <div class="bus_con">
        <dl>
          <dd v-for="item in businessList" :key="item.phone">
            <ul>
              <li><img :src="item.icon" alt=""/><p>{{ item.username }}</p><span>{{ item.createDate }}</span></li>
              <li>{{ item.phone }}</li>
            </ul>
          </dd>
        </dl>
      </div>
      <div class="loadmore">
        <van-button type="primary" size="small" @click="loadMore" :loading="isLoading" :disabled="isDisabled">点击展开更多</van-button>
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
export default {
  data() {
    return {
      businessList: [],
      isLoading: false,
      isDisabled: false,
      isShare: false,
      shareUrl: '',
      saleOrglistParams: {
        name: "",
        pageNum: 1,
        pageSize: 3,
        role: "",
        userId: ""
      }
    }
  },
  mounted() {
    this.getJoinUrl()
    this.getBusinessData()
  },
  methods: {
    // 得到分享地址
    getJoinUrl() {
      let params = store.state.userId
      ACT_API.getJoinUrl(params).then(response => {
        console.log(response)
        this.shareUrl = response.data
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
        console.log(response)
        response.data.map((item) => {
          this.businessList.push(item)
          this.isLoading = false
        })
        if (response.data.length < 3) {
          this.isDisabled = true
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
      let hostUrl = window.location.href.replace('asharer', 'abysharer') + '?oldUrl=' + this.shareUrl
      // let hostUrl = this.article.shareUrl
      let activityId = "";
      this._system_shareTo(title,description,imgSrc,hostUrl,"",activityId,type);
    },
    wejoin() {
      console.log(1)
    }
  }
}
</script>
<style lang="css" scoped>
.sharer {width: 100%; height: 8rem; background: pink; text-align: center; line-height: 8rem; margin-bottom: .8rem;}
.join {text-align: center; margin-bottom: .8rem;}
.business {width: 100%; border-top: .02rem solid #bbb; padding-top: .2rem; margin-bottom: .36rem; color: #101010;}
.bustit {margin: auto; font-size: .36rem; text-align: center; margin-bottom: .6rem;}
.bus_con dd {margin-bottom: .2rem; position: relative;}
.bus_con dd li {font-size: .28rem;}
.bus_con dd li span {font-size: .2rem;}
.bus_con dd li:nth-child(1) {float: left; margin-left: 1rem;}
.bus_con dd li:nth-child(2) {float: right; margin-right: .2rem;}
.bus_con dd img {position: absolute; left: .2rem; width: .6rem; height: .6rem; float: left;}
.bus_con dd::after {content: ""; display: block; clear: both; overflow: hidden; visibility: hidden; height: 0;}
.loadmore {text-align: center;}
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

