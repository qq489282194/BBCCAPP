<template>
    <!-- 我的商家 -->
    <div class="business" ref="business" @touchstart="touchstart" @touchmove="touchmove">
      <div class="bustit">已邀请商家列表</div>
      <div class="shade"></div>
      <div class="jiantou-shang" @click="changeBusCon"></div>
      <div class="bus_con" ref="bus_con">
        <div class="bustit">已邀请商家列表</div>
        <dl v-if="isShow" ref="buslist">
          <dd v-for="item in businessList" :key="item.phone">
            <ul>
              <li>
                <img :src="item.icon ? 'https://oss.meibbc.com/'+item.icon : require('../../assets/img/upgrade/user.png')" alt=""/>
                <p>{{ item.username ? item.username : '1' }}</p>
                <span>{{ item.createDate ? item.createDate : '1' }}</span>
              </li>
              <!-- <li>{{ item.phone ? item.phone : '1' }}</li> -->
              <li>{{ item.phone }}</li>
            </ul>
          </dd>
          <div class="loadmore" v-if="isShow">
            <van-button type="primary" size="small" @click="loadMore" :loading="isLoading" v-show="isShowLoadMore">点击展开更多</van-button>
          </div>
        </dl>
        <p v-else class="noBusiness">暂无商家，请点击“我要参与”获取商家列表</p>
        <div class="jiantou-xia" v-show="false" @click="changeBusCon"></div>
      </div>
    </div>
</template>
<script>
import store from '@/store'
import * as ACT_API from '@/api/activity'
export default {
  data() {
    return {
      isShow: true,
      isLoading: false,
      isDisabled: false,
      isShowLoadMore: true,
      businessList: [],
      directive: 'shang',
      userId: '',
      startX: '',
      startY: '',
      isTouch: true,
      saleOrglistParams: {
        name: "",
        pageNum: 1,
        pageSize: 5,
        role: "",
        userId: ""
      },
    }
  },
  mounted() {
    if(store.state.userId){
      this.userId = store.state.userId
    }else{
      this.userId = this.$route.query.userId
    }
    this.getBusinessData()
  },
  methods: {
    touchstart() {
      // event.preventDefault() //阻止默认事件（长按的时候出现复制）

      this.startX = event.changedTouches[0].pageX
      this.startY = event.changedTouches[0].pageY
      console.log(window.screen.height)
    },
    touchmove() { // 如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
      // event.preventDefault()
      // console.log(this.$refs.buslist.offsetTop)
      var moveEndX = event.changedTouches[0].pageX
      var moveEndY = event.changedTouches[0].pageY
      var X = moveEndX - this.startX
      var Y = moveEndY - this.startY
      if (Math.abs(X) > Math.abs(Y) && X > 0) {
        console.log('left 2 right')
      } else if (Math.abs(X) > Math.abs(Y) && X < 0) {
        console.log('right 2 left')
      } else if (Math.abs(Y) > Math.abs(X) && Y > window.screen.height/3) {
        if (this.isTouch) {
          console.log('top 2 bottom')
          this.$(this.$refs.bus_con).animate({
            top: '100%'
          })
          this.directive = 'shang'
          this.isTouch = false
          let _this = this
          let touchTimer = setTimeout(() => {
            _this.isTouch = true
            clearTimeout(touchTimer)
          }, 500)
        } 
      } else if (Math.abs(Y) > Math.abs(X) && Y < -window.screen.height/3) {
        if (this.isTouch) {
          console.log('bottom 2 top')
          this.$(this.$refs.bus_con).animate({
            top: 0
          })
          this.directive = 'xia'
          this.isTouch = false
          let _this = this
          let touchTimer = setTimeout(() => {
            _this.isTouch = true
            clearTimeout(touchTimer)
          }, 500)
        }
      } else {
        console.log('just touch')
      }
    },
    // 点击箭头显示隐藏buscon
    changeBusCon(e) {
      if (this.directive == 'shang') {
        this.$(this.$refs.bus_con).animate({
          top: '1.1rem'
        })
        // this.$(e.target).removeClass('jiantou-shang').addClass('jiantou-xia')
        this.directive = 'xia'
      } else {
        this.$(this.$refs.bus_con).animate({
          top: '100%'
        })
        // this.$(e.target).removeClass('jiantou-xia').addClass('jiantou-shang')
        this.directive = 'shang'
      }
    },
    // 得到商家列表
    getBusinessData() {
      this.isLoading = true
      let myreg = /^[1][3,4,5,7,8][0-9]{9}$/
      let params = {
        ...this.saleOrglistParams,
        userId: this.userId
      }
      ACT_API.getBusinessData(params).then(response => {
        if (response.data) {
          response.data.map((item) => {
            if (item && item.phone && myreg.test(item.phone)) {
              console.log(item)
              this.businessList.push(item)
              // console.log(this.businessList)
            }
            if (this.businessList.length == 0) {
              this.isShow = false
            }
            this.isLoading = false
          })
          this.businessList.map(item => {
            if (item.username == '匿名用户') {
              // console.log('123', item)
              item.username = '用户'
            }
          })
        } else {
          this.isLoading = false
          this.isShow = false
        }
        console.log(response.data.length)
        if (response.data.length < 5) {
          this.isShowLoadMore = false
        }
      })
    },
    //点击加载更多
    loadMore() {
      this.saleOrglistParams.pageNum += 1
      this.getBusinessData()
    },
  }
}
</script>
<style lang="css" scoped>
/* 商家 */
.business {width: 100%; height: 1.54rem; margin-top: -.3rem; position: relative; z-index: 99; background: url('../../assets/img/activity/白色底@2x.png') no-repeat center; background-size: cover; padding-top: 0.3rem;}
.jiantou-shang {width: .32rem; height: .32rem; position: absolute; left: 3.5rem; background: url('../../assets/img/activity/shang.png') no-repeat center; background-size: cover; animation: shangxia 1.3s infinite linear;}
.jiantou-xia {width: .32rem; height: .32rem; position: absolute; background: url('../../assets/img/activity/xia.png') no-repeat center; background-size: cover; left: 3.5rem; bottom: .25rem; animation: shangxia1 1.3s infinite linear;}
.shade {width: 100%; height: 1.29rem; background: url('../../assets/img/activity/zhezhao.png') no-repeat center; background-size: cover; position: absolute; left: 0; bottom: 0;}
.bustit {margin: auto; font-size: .32rem; text-align: center; color: #333333; position: relative;}
.bustit::before {content: ""; display: block; width: 1.2rem; height: .16rem; background: url('../../assets/img/activity/shangjia_zuo.png') no-repeat center; background-size: cover; position: absolute; left: 1.3rem; top: .15rem;}
.bustit::after {content: ""; display: block; width: 1.2rem; height: .16rem; background: url('../../assets/img/activity/shangjia_you.png') no-repeat center; background-size: cover; position: absolute; left: 5rem; top: .15rem;}
.bus_con {position: fixed; top: 100%; left: 0; height:100%; width: 100%; background: #fff; padding-top: .5rem; overflow: scroll; z-index: 999;}
.bus_con dl {height: 12rem; overflow: scroll; padding-bottom: 2.5rem;}
.bus_con dd {padding-top: .2rem; margin-bottom: .2rem; position: relative; border-bottom: 1px solid #E5E5E5; padding-bottom: .2rem;}
.bus_con dd li {font-size: 0.26rem; color: #333;}
.bus_con dd li span {font-size: 0.22rem; color: #999;}
.bus_con dd li:nth-child(1) {float: left; margin-left: 1.2rem;}
.bus_con dd li:nth-child(1) p {font-size: 0.28rem; color: #333;}
.bus_con dd li:nth-child(2) {float: right; margin-right: 0.2rem; line-height: .75rem;}
.bus_con dd img {position: absolute; left: 0.2rem; width: .84rem; height: .84rem; float: left; border-radius: 50%; top: 0.15rem;}
.bus_con dd::after {content: ""; display: block; clear: both; overflow: hidden; visibility: hidden; height: 0;}
.loadmore {text-align: center;}
.noBusiness {text-align: center; font-size: .28rem; color: #999;}
</style>


