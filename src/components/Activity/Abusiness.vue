<template>
    <!-- 我的商家 -->
    <div class="business">
      <div class="bustit">我的商家列表</div>
      <div class="shade"></div>
      <div class="jiantou-shang" @click="changeBusCon"></div>
      <div class="bus_con" ref="bus_con">
        <div class="bustit">我的商家列表</div>
        <dl v-if="isShow">
          <dd v-for="item in businessList" :key="item.phone">
            <ul>
              <li><img :src="item.icon" alt=""/><p>{{ item.username ? item.username : '1' }}</p><span>{{ item.createDate ? item.createDate : '1' }}</span></li>
              <li>{{ item.phone ? item.phone : '1' }}</li>
            </ul>
          </dd>
        </dl>
        <div class="loadmore" v-if="isShow">
          <van-button type="primary" size="small" @click="loadMore" :loading="isLoading" :disabled="isDisabled">点击展开更多</van-button>
        </div>
        <p v-else class="noBusiness">暂无商家，请点击“我要参与”获取商家列表</p>
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
      businessList: [],
      directive: 'shang',
      saleOrglistParams: {
        name: "",
        pageNum: 1,
        pageSize: 3,
        role: "",
        userId: ""
      },
    }
  },
  mounted() {
    this.getBusinessData()
  },
  methods: {
    // 点击箭头显示隐藏buscon
    changeBusCon(e) {
      if (this.directive == 'shang') {
        this.$(this.$refs.bus_con).animate({
          top: '1.1rem'
        })
        this.$(e.target).removeClass('jiantou-shang').addClass('jiantou-xia')
        this.directive = 'xia'
      } else {
        this.$(this.$refs.bus_con).animate({
          top: '100%'
        })
        this.$(e.target).removeClass('jiantou-xia').addClass('jiantou-shang')
        this.directive = 'shang'
      }
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
        if (response.msg == '未获取到数据') {
          this.isLoading = false
          this.isShow = false
        } else {
          response.data.map((item) => {
            this.businessList.push(item)
            this.isLoading = false
          })
          if (response.data.length < 3) {
            this.isDisabled = true
          }
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
.business {width: 100%; height: 1.54rem; position: fixed; bottom: 0; left: 0; background: url('../../assets/img/activity/白色底@2x.png') no-repeat center; background-size: cover; z-index: 99; padding-top: 0.3rem;}
.jiantou-shang {width: .32rem; height: .32rem; position: fixed; background: url('../../assets/img/activity/shang.png') no-repeat center; background-size: cover; left: 3.5rem; top: 12.62rem; animation: shangxia 1.3s infinite linear; z-index: 99;}
.jiantou-xia {width: .32rem; height: .32rem; position: fixed; background: url('../../assets/img/activity/xia.png') no-repeat center; background-size: cover; left: 3.5rem; top: 12.62rem; animation: shangxia 1.3s infinite linear; z-index: 99;}
.shade {width: 100%; height: 1.29rem; background: url('../../assets/img/activity/zhezhao.png') no-repeat center; background-size: cover; position: absolute; left: 0; bottom: 0;}
.bustit {margin: auto; font-size: .32rem; text-align: center; color: #333333; position: relative; margin-bottom: .55rem;}
.bustit::before {content: ""; display: block; width: 1.2rem; height: .16rem; background: url('../../assets/img/activity/shangjia_zuo.png') no-repeat center; background-size: cover; position: absolute; left: 1.5rem; top: .15rem;}
.bustit::after {content: ""; display: block; width: 1.2rem; height: .16rem; background: url('../../assets/img/activity/shangjia_you.png') no-repeat center; background-size: cover; position: absolute; left: 4.8rem; top: .15rem;}
.bus_con {position: fixed; top: 100%; left: 0; height: 100%; width: 100%; background: #fff;}
.bus_con dd {margin-bottom: .2rem; position: relative; border-bottom: 1px solid #E5E5E5; padding-bottom: .2rem;}
.bus_con dd li {font-size: 0.26rem; color: #333;}
.bus_con dd li span {font-size: 0.22rem; color: #999;}
.bus_con dd li:nth-child(1) {float: left; margin-left: 1.2rem;}
.bus_con dd li:nth-child(1) p {font-size: 0.28rem; color: #333;}
.bus_con dd li:nth-child(2) {float: right; margin-right: 0.2rem; line-height: .75rem;}
.bus_con dd img {position: absolute; left: 0.2rem; width: .84rem; height: .84rem; float: left; border-radius: 50%;}
.bus_con dd::after {content: ""; display: block; clear: both; overflow: hidden; visibility: hidden; height: 0;}
.loadmore {text-align: center;}
.noBusiness {text-align: center; font-size: .28rem; color: #999;}
</style>


