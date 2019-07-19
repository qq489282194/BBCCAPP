<template>
  <div>
    <!-- <nut-swiper
        :paginationVisible="true"
        direction="horizontal"
        ref="demo1"
        initPage='1'

    >
        <div class="nut-swiper-slide" v-for="banner in shopDetail.banner" :key="banner.index">
            <img :src="banner" style="max-width:100%; max-height:100%" class="nut-img-lazyload"/>
        </div>
    </nut-swiper> -->

    <van-swipe 
    @change="onChange" 
    :width='375' 
    :autoplay="2000" 
    style="overflow:hidden;height:5rem;" 
    :loop="true" 
    v-if="shopDetail.shop_banner"
    >
        <van-swipe-item v-for="item in img_urls" :key="item.index" style="display:inline-block;">
            <img :src="item" alt="" style="height:5rem;">
        </van-swipe-item>
        <div class="imgNum" slot="indicator" v-if="img_urls">
            {{ current + 1 }}/{{img_urls.length}}
        </div>
    </van-swipe>

    <van-swipe 
    @change="onChange" 
    :width='375' 
    style="overflow:hidden;height:5rem;" 
    :loop="false" 
    v-else
    >
        <van-swipe-item style="display:inline-block;">
            <img src="../../assets/img/perch.png" alt="" style="height:5rem;">
        </van-swipe-item>
        <div class="imgNum" slot="indicator">
            {{ current + 1 }}/{{1}}
        </div>
    </van-swipe>
    
    <!-- <p class="backroute">&lt;</p> -->
    <i class="icon-back backroute" @click="backRouter()"></i>

    <div class="shop">
        <div class="shop-title">
            <div class="head">
                <img v-if="shopDetail.shop_logo" :src="shopDetail.shop_logo" alt="">
                <i v-else class="icon icon-user"></i>
            </div>
            <div>
                <p class="title" v-if="shopDetail.shop_name" v-html="shopDetail.shop_name">奈瑞儿美颜顶级豪华塑身旗舰店（东圃店）</p>
                <!-- <ul>
                    <li style="margin-bottom:.3rem;">{{shopDetail.fans}}万粉丝</li>
                    <li>共{{shopDetail.recomment_count}}位网友推荐</li>
                </ul> -->
            </div>
            <!-- <p class="attention" v-if="shopDetail.is_attention == 0" @click="getFocusSave()">+关注</p>
            <p class="oldattention" v-else>已关注</p> -->
            <p style="clear:both"></p>
        </div>
        <!-- <div class="rate ml26">
          <i class="icon icon-ystar" v-for="item in shopDetail.allRate" :key="item.index"></i>
          <i class="icon icon-star" v-if="greyRate"></i>
          <i class="icon icon-bstar" v-for="item in shopDetail.minusRate" :key="item.index"></i>
          <span class="grade">{{shopDetail.shop_score}}</span>
          <div class="evaluate mr26">
              <a href="#evaluate">
                  <span>{{shopDetail.comment_count}}条评价 <i class="icon icon-right"></i></span>
              </a>
              <i></i>
          </div>
        </div> -->
        <div class="alltap ml26">
            <!-- <span class="tap" v-for="item in shopDetail.service_labels" :key="item.index" v-html="item">高大上 18</span> -->
        </div>
        <p class="wire"></p>
    </div>

    <div class="all">
        <div class="time ml26 mr26">
            <span class="title" v-if="shopDetail.shop_type == 0">营业时间</span>
            <span class="title" v-if="shopDetail.shop_type == 1">门店地址</span>
            <!-- <span class="hour">1周一至周日1:00-21:00</span> -->
            <span class="hour" v-if="shopDetail.shop_type == 0">{{shopDetail.business_begtime}}-{{shopDetail.business_endtime}}</span>
        </div>
        <div class="message ml26 mr26">
            <div>
                <!-- <p class="shop" v-html="shopDetail.shop_name">肤俊堂皮肤修复中心</p> -->
                <p class="site" v-if="shopDetail.address" v-html="shopDetail.address">中山大道西1138号合生骏景广场A座1527室</p>
                <p class="rice" v-if="shopDetail.distance">
                    <!-- <img src="../../assets/img/offline/site.png" alt=""> -->
                    <i class="icon icon-site"></i>
                    <span v-if="shopDetail.distance < 1000">距离 {{shopDetail.distance}}m</span>
                    <span v-else>距离 {{shopDetail.distances}}km</span>
                </p>
            </div>
            <div class="phone" @click="MIXINSendCallPhone(phone)">
                <!-- <img src="../../assets/img/offline/phone.png" alt=""> -->
                <i class="icon icon-phone"></i>
            </div>
        </div>
        <!-- <p class="wire"></p>
        <div class="appointmentmodule">
            <div class="time">
                <i class="icon icon-subscription"></i>
                <span class="title" style="margin-left:.56rem;">立即预约</span>
                <span class="hour" @click="MIXINGoToShopAppointment(shop_id)">{{shopDetail.subscribe_count}}人预订过 <i class="icon icon-redright"></i></span>
            </div>
            <p class="serve">提供的商品服务</p>
            <div class="content" v-for="item in shopDetail.service_item_volist" :key="item.index">
                <img :src="item.img_url" alt>
                <div class="message mr26">
                    <p v-html="item.service_name">三维灵动美鼻 假体隆鼻+耳软骨鼻尖+鼻小柱延长</p>
                    <div>
                        <p></p>
                        <p class="price">￥{{item.price}}</p>
                        <div class="sales">
                            <span>门市价：{{item.old_price}}元</span>
                            <span class="appointment">已下单{{item.paid_num}} <i class="icon icon-right1"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <p class="wire" v-if="shopDetail.shop_type == 0"></p>
    </div>

    <div class="botm" v-if="shopDetail.shop_type == 0">
        <div class="shop">
            <p class="title">门店介绍</p>
            <div class="introduce">
                <p v-html="shopDetail.shop_desc">广州市奈瑞儿塑身美颜连锁股份有限公司，成立于2001年，是广东省知名的专业提供女性美容、美体服务的大型连锁机构，旗下美容院遍布广东珠三角地区，总部设在广州</p>
                <img v-for="img in shopDetail.imgs" :key="img.index" :src="img" alt="">
                <!-- <p>企业标志</p>
                <p>"奈瑞儿"企业标志是"蝴蝶",寓意为: 蝴蝶的美丽来自蜕变. 奈瑞儿的顾客在这里,蜕变出自己的美丽形体；奈瑞儿的员工在这里,蜕变出自己的完美人生</p>
                <p>企业规模</p>
                <p>广州奈瑞儿拥有100多名国内外知名美容顾问、200多名具有国家颁发专业证书的营养师，近2000名专业美容技师。“奈瑞儿”塑身美颜连锁机构遍布广东省各中心城市，拥有上百家直营连锁店，全省营业面积超过40000平方米，每天服务顾客超3000人次，已成为广东省最具规模、最为专业的塑身美胸连锁机构。“奈瑞儿”就像标志中的蝴蝶一样，把美丽、幸福带给了所有爱美女性。</p>
                <img :src="bigimg" alt=""> -->
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import * as USER_API from '@/api/user'
import img from "../../assets/img/offline/img.png"
import bigimg from "../../assets/img/offline/bigimg.png"
import { Swipe, SwipeItem } from "vant"

export default {
    data(){
        return{
            dataItem:[{
                name:'../../assets/img/offline/swipe.png'
            }],
            dataImgItem:[],
            img,
            bigimg,
            // 店铺详情
            shopDetail:{},
            shop_id:'',
            // 店铺评分半星
            greyRate:false,
            current:0,
            img_urls:[],
            phone:'',
            site:{},
        }
    },
    mounted(){
        window.setLocation = this.setLocation
        this.MIXINGetLocation()
        // 获取店铺ID
        this.getQueryVariable("shop_id")
        // 店铺详情
        // this.getShopDetail()
    },
    methods:{
        // 获取店铺详情
        getShopDetail(){
            let params = {"shop_id":this.shop_id, "longitude":this.site.lon, "latitude":this.site.lat,};
            USER_API.getShopDetail(params).then(data => {
                // debugger
                if(data){
                    // if(data.shop_score){
                    //     data.allRate = parseInt(data.shop_score)
                    //     data.minusRate = parseInt(5 - data.shop_score)
                    //     data.halfRate = data.shop_score - parseInt(data.shop_score)
                    //     if(data.halfRate > 0){
                    //         this.greyRate = true
                    //     }
                    // }else{
                    //     data.shop_score = 0
                    //     data.allRate = parseInt(data.shop_score)
                    //     data.minusRate = parseInt(5 - data.shop_score)
                    //     data.halfRate = data.shop_score - parseInt(data.shop_score)
                    //     if(data.halfRate > 0){
                    //         this.greyRate = true
                    //     }
                    // }
                    if(data.shop_desc_img){
                        data.imgs = data.shop_desc_img.split(',')
                    }
                    if(data.shop_banner){
                        data.banner = data.shop_banner.split(',')
                    }
                    if(data.distance){
                        if(data.distance > 999){
                            data.distances = (data.distance / 1000).toFixed(1)
                        }
                    }
                    this.shopDetail = data
                    this.img_urls = data.banner
                    this.phone = this.shopDetail.mobile
                    // debugger
                    // console.log(this.phone)
                }
            });
        },
        // 关注店铺
        getFocusSave(){
            let params = {"shop_id":this.shop_id,};
            USER_API.getFocusSave(params).then(data => {
                if(data.code == 0){
                    this.$message.success(data.message)
                }else{
                    this.$message.error(data.message)
                }
            });
        },
        // 获取url参数
        getQueryVariable(variable){
            let query = window.location.search.substring(1);
            let vars = query.split("&");
            for (let i=0;i<vars.length;i++) {
                let part = vars[i].split("=");
                if(part[0] == variable){
                    this.shop_id = part[1]
                }
            }
            this.getShopDetail()
        },
        // 获取经纬度坐标
        setLocation(location) {
            // console.log('iso---location')
            // console.log(location)
            // console.log(typeof location)
            this.site = JSON.parse(location)
            this.getShopDetail()
        },
        onChange(index) {
            this.current = index;
        }
    }
}
</script>

<style scoped>
.nut-swiper{height: 5rem;}
/* 店名模块 */
.shop{margin-top: .28rem;}
.shop .shop-title{margin: 0 .26rem;}
.shop .shop-title .head{height: .88rem;width: .88rem;margin-right: .18rem;display: inline-block;border-radius: .44rem;}
.shop .shop-title img{width: .88rem;height: .88rem;border-radius: 50%;}
.shop .shop-title .title{font-size: .3rem;color: #2B2B2B;font-weight: bold;display: inline-block;}
.shop .shop-title div{float: left;}
.shop .shop-title p:nth-child(1){width: 5.8rem;}
.shop .shop-title .attention{height: .46rem;background: #F63B75;border-radius: .24rem;float: right;padding: 0 .2rem;color: white;line-height: .46rem;margin-top: .2rem}
.shop .shop-title .oldattention{height: .46rem;border-radius: .24rem;float: right;padding: 0 .2rem;color: #999999;line-height: .46rem;margin-top: .2rem;border: 1px solid #999999;}
.shop .shop-title ul{margin-top: .03rem;}
.shop .shop-title ul li{float: left;font-size: .24rem;color: #999999;}
.shop .shop-title ul li:nth-child(1){margin-right: .3rem;}
.shop .rate{margin-top: .24rem;margin-bottom: .26rem;}
.shop .rate img{height: .32rem;width: .32rem;float: left;}
.shop .rate .evaluate{float: right;}
.shop .alltap{clear: both;margin-bottom: .28rem;}
.shop .tap{height: .45rem;font-size: .26rem;color: #333333;padding: 0 .25rem;background: rgba(246, 59, 117, 0.1);border-radius: .22rem;line-height: .45rem;display: inline-block;margin-right: .2rem;}
.shop .grade{display: inline-block;font-size: .32rem;color: #FF5858;font-weight: bold;margin-left: .06rem;}


.all .time{height: .76rem;border-bottom: 1px solid #E5E5E5;color: #333333;line-height: .76rem;position: relative;}
.all .time .title{font-size: .3rem;font-weight: bold;display: inline-block;}
.all .time .hour{font-size: .26rem;float: right;}
.all .time>i{position: absolute;top: .2rem;}
.all .message{position: relative;}
.all .message .shop{font-size: .3rem;color: #333333;font-weight: bold;margin-top: .26rem;}
.all .message .site{font-size: .26rem;margin:.18rem 0;width: 5.5rem;}
.all .message .rice{margin-bottom: .32rem;}
.all .message .rice img{height: .26rem;width: .2rem;display: inline-block;}
.all .message .rice span{color: #999999;}
.all .message .phone{height: .7rem;width:.7rem;position: absolute;top:0;right: .2rem;}

.all .appointmentmodule{padding: 0 .26rem;}
.all .appointmentmodule .hour{color: #F63B75;}
.all .appointmentmodule .serve{font-size: .3rem;color: #333333;font-weight: bold;margin-top: .34rem;margin-bottom: .3rem;}
.all .content{margin: .3rem 0}
.all .content img{height: 1.62rem;width: 1.62rem;display: inline-block;}
.all .content .message{float: right;width: 4.9rem;position: relative;}
.all .content .message>div{position: absolute;top: .82rem;}
.all .content .price{font-size: .32rem;color: #F63B75;font-weight: bold;}
.all .content .message p:nth-child(1){font-size: .28rem;color: #333333;margin-bottom: .08rem;line-height: .42rem;}

.all .content .sales{font-size: .24rem;color: #999999;}
.all .content .sales span:nth-child(2){margin-left: 1.9rem;}

.botm{padding: 0 .26rem}
.botm .title{font-size: .32rem;line-height: .38rem;color: #333333;margin: .3rem 0;}
.botm .introduce{font-size: .3rem;color: #333333;line-height: .44rem;}
.botm .introduce img{margin: .3rem 0;}

.app{position: relative;}
.backroute{position: absolute;top: .5rem;left: .24rem;}
.imgNum{background: rgba(0, 0, 0, 0.3);border-radius: .22rem;height: .44rem;padding: 0 .24rem;line-height: .44rem;color: white;font-size: .3rem;position: absolute;top: 4.36rem;right: .24rem;}


/* 公共样式 */
.wire{height: .14rem;background: #F2F2F2;}
.ml26{margin-left: .26rem;}
.mr26{margin-right: .26rem;}
.mb32{margin-bottom: .32rem;}

.icon { display:inline-block}
.icon-phone { width: .36rem; height: .34rem; background: url("../../assets/img/shopDetail/shopphone.png");background-size: 100% 100% }
.icon-subscription { width: .36rem; height: .36rem; background: url("../../assets/img/shopDetail/subscription.png");background-size: 100% 100% }
.icon-star { margin:0 .02rem;width: .32rem; height: .32rem; background: url("../../assets/img/shopDetail/star.png");background-size: 100% 100% }
.icon-ystar { margin:0 .02rem;width: .32rem; height: .32rem; background: url("../../assets/img/shopDetail/ystar.png");background-size: 100% 100% }
.icon-bstar { margin:0 .02rem;width: .32rem; height: .32rem; background: url("../../assets/img/shopDetail/bstar.png");background-size: 100% 100% }
.icon-back { width: .7rem; height: .7rem; background: url("../../assets/img/shopDetail/back.png");background-size: 100% 100% }
.icon-right { width: .12rem; height: .22rem; background: url("../../assets/img/shopDetail/right.png");background-size: 100% 100% }
.icon-right1 { width: .08rem; height: .16rem; background: url("../../assets/img/shopDetail/right1.png");background-size: 100% 100% }
.icon-site { width: .2rem; height: .26rem; background: url("../../assets/img/shopDetail/site.png");background-size: 100% 100% }
.icon-redright { width: .22rem; height: .22rem; background: url("../../assets/img/shopDetail/redright.png");background-size: 100% 100% }
.icon-user { width: .88rem; height: .88rem; background: url("../../assets/img/user.png");background-size: 100% 100% }

</style>
