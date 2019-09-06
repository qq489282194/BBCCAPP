<template>
    <div>
        <!-- <div class="memhead">
            <i class="icon-back" @click="closeHtml()"></i>
            <p>会员中心</p>
        </div> -->
        <topcomom :icon="icon">会员中心</topcomom>
        <!-- <div class="pel" v-if="userList.role == 1">
            <img :src="'https://oss.meibbc.com/'+userList.icon" alt="" v-if="userList.icon">
            <img src="../../assets/img/mymember/touxiang-icon@2x.png" alt="" v-else>
            <span>{{ userList.niceName }}，你是{{ userList.role == 1 ? '普通会员':(userList.role == 2 ? '贵宾会员':(userList.role == 3 || userList.role == 4 ? '铂金会员':(userList.role == 5 || userList.role == 6 ? '钻石会员':''))) }}</span>
            <p @click="MixinToUrl('intIntro')">查看权益></p>
        </div> -->

        <swiper :options="swiperOption" ref="mySwiper" @slideChange="onChange" style="overflow: hidden;position:relative;margin-top:1.5rem;">
            <!-- slides -->
            <swiper-slide v-for="item in img_urls" :key="item.index">
                <div>
                    <!-- <img :src="item.wantown" v-if="item.zuanshi" />
                    <img :src="item.noown" v-if="item.show && !item.zuanshi" @click="onCard(item.grade)"/>
                    <img :src="item.own" v-if="item.show && item.zuanshi"/> -->
                    <img :src="item.wantown" v-if="item.wantshow" />
                    <img :src="item.noown" v-if="item.noshow" @click="onCard(item.grade)"/>
                    <img :src="item.own" v-if="item.show"/>
                    <p :class="item.Color" v-if="item.showCard">No.{{ cardIds }}</p>
                </div>
            </swiper-slide>
        </swiper>

        <div class="grade">
            <p>{{ curData.grade=='普通' ? '普通会员专享4大权益':(curData.grade=='贵宾' ? '贵宾专享7大权益':(curData.grade=='铂金'? '铂金专享8大权益':(curData.grade=='钻石' ? '钻石专享9大权益':''))) }}</p>
            <!-- <p>{{ userList.role == 1 ? '贵宾专享7大权益':(userList.role == 2 ? '贵宾专享7大权益':(userList.role == 3 || userList.role == 4 && userList.director != 1 && userList.managerRole != 1 ? '铂金专享8大权益':(userList.role == 5 || userList.role == 6 && userList.director != 1 && userList.managerRole != 1 ? '钻石专享9大权益':(userList.director == 1 ? '商务总监专享9大权益':(userList.managerRole == 1 ? '城市经理专享9大权益':''))))) }}</p> -->
            <i class="icon-tanhao" @click="toxize"></i>
            <ul class="label">
                <!-- <li v-if="userList.director == 1 || userList.managerRole == 1">
                    <i class="icon-zhaoshang"></i>
                    <p>线下招商</p>
                </li>
                <li v-if="userList.managerRole == 1">
                    <i class="icon-quyu"></i>
                    <p>区域补贴</p>
                </li> -->
                
                <li @click="toComint(0)">
                    <i class="icon-shengqian"></i>
                    <p>自购省钱</p>
                </li>
                <li @click="toComint(1)">
                    <i class="icon-zhuanqian"></i>
                    <p>分享得收益</p>
                </li>
                <li @click="toComint(2)">
                    <i class="icon-yaoqing"></i>
                    <p>邀请奖励</p>
                </li>
                <li @click="toComint(3)">
                    <i class="icon-cmi"></i>
                    <p>奖励C米</p>
                </li>
                <li v-show="!curData.grade.includes('普通')" @click="toComint(4)">
                    <i class="icon-gouwu"></i>
                    <p>专属购物节日</p>
                </li>
                <li v-show="!curData.grade.includes('普通')" @click="toComint(5)">
                    <i class="icon-libao"></i>
                    <p>专属推广礼包</p>
                </li>
                <li v-show="!curData.grade.includes('普通')" @click="toComint(6)">
                    <i class="icon-kefu"></i>
                    <p>专属金牌客服</p>
                </li>
                <li v-show="curData.grade=='铂金' ||　curData.grade=='钻石'" @click="toComint(7)">
                    <i class="icon-shalong"></i>
                    <p>沙龙体验</p>
                </li>
                <li v-show="curData.grade=='钻石'" @click="toComint(8)">
                    <i class="icon-shangwu"></i>
                    <p>晋升资格</p>
                </li>
                <!-- <li v-if="userList.role == 3 || userList.role == 4 || userList.role == 5 || userList.role == 6 || userList.director == 1">
                    <i class="icon-shalong"></i>
                    <p>沙龙体验</p>
                </li> -->
                
            </ul>
            <div style="clear:both;"></div>
        </div>

        <!-- <div v-if="intIntroShow" class="Shade" @click="intIntroShow = false"></div> -->
        <div v-if="intIntroShow" class="cpm">
            <div>
                <intIntro :intIntroData="intIntroData" :activeSwiperIndex ="activeSwiperIndex"></intIntro>
                <div class="icon-close close" @click="intIntroShow = false"></div>
            </div>
        </div>

        <div class="enjoy" v-if="goodList.length">
            <!-- <i :class="userList.role == 1 ? 'icon-left1':(userList.role == 2 ? 'icon-left2':(userList.role == 3 || userList.role == 4 && userList.director != 1 && userList.managerRole != 1 ? 'icon-left3':(userList.role == 5 || userList.role == 6 && userList.director != 1 && userList.managerRole != 1 ? 'icon-left4':(userList.director == 1 ? 'icon-leftCBD':(userList.managerRole == 1 ? 'icon-leftCM':'')))))"></i>
            <p>{{ userList.role == 1 ? '新会员专享':(userList.role == 2 ? '贵宾会员专享':(userList.role == 3 || userList.role == 4 && userList.director != 1 && userList.managerRole != 1 ? '铂金会员专享':(userList.role == 5 || userList.role == 6 && userList.director != 1 && userList.managerRole != 1 ? '钻石会员专享':(userList.director == 1 ? '商务总监会员专享':(userList.managerRole == 1 ? '城市经理会员专享':''))))) }}</p>
            <i :class="userList.role == 1 ? 'icon-right1':(userList.role == 2 ? 'icon-right2':(userList.role == 3 || userList.role == 4 && userList.director != 1 && userList.managerRole != 1 ? 'icon-right3':(userList.role == 5 || userList.role == 6 && userList.director != 1 && userList.managerRole != 1 ? 'icon-right4':(userList.director == 1 ? 'icon-rightCBD':(userList.managerRole == 1 ? 'icon-rightCM':'')))))"></i> -->
            <!-- <i :class="userList.role == 1 ? 'icon-left1':(userList.role == 2 ? 'icon-left2':(userList.role == 3 || userList.role == 4 ? 'icon-left3':(userList.role == 5 || userList.role == 6 ? 'icon-left4':'')))"></i>
            <p>{{ userList.role == 1 ? '新会员专享':(userList.role == 2 ? '贵宾会员专享':(userList.role == 3 || userList.role == 4 ? '铂金会员专享':(userList.role == 5 || userList.role == 6 ? '钻石会员专享':''))) }}</p>
            <i :class="userList.role == 1 ? 'icon-right1':(userList.role == 2 ? 'icon-right2':(userList.role == 3 || userList.role == 4 ? 'icon-right3':(userList.role == 5 || userList.role == 6 ? 'icon-right4':'')))"></i> -->
            <i :class="curData.grade=='普通' ? 'icon-left1':(curData.grade=='贵宾' ? 'icon-left2':(curData.grade=='铂金' ? 'icon-left3':(curData.grade=='钻石' ? 'icon-left4':'')))"></i>
            <p>{{ curData.grade=='普通' ? '新会员专享':(curData.grade=='贵宾' ? '贵宾会员专享':(curData.grade=='铂金' ? '铂金会员专享':(curData.grade=='钻石' ? '钻石会员专享':''))) }}</p>
            <i :class="curData.grade=='普通' ? 'icon-right1':(curData.grade=='贵宾' ? 'icon-right2':(curData.grade=='铂金' ? 'icon-right3':(curData.grade=='钻石' ? 'icon-right4':'')))"></i>
            <ul>
                <li v-for="item in goodList" @click="MIXINToDetailShops(item.goods_id,'0')">
                    <img :src="item.thumbnail" alt="">
                    <p v-html="item.goods_name">小文胸薄款日系小胸运动少女无钢圈内衣薄款日系</p>
                    <span class="money">￥
                        <span class="price" v-if="curData.grade=='普通'" v-html="item.price">189</span>
                        <span class="price" v-if="curData.grade=='贵宾'" v-html="item.vip_price">189</span>
                        <span class="price" v-if="curData.grade=='铂金'" v-html="item.platinum_price">189</span>
                        <span class="price" v-if="curData.grade=='钻石'" v-html="item.diamond_price">189</span>
                    </span>

                    <del>市场价：{{ item.mktprice }}</del>
                    
                    <!-- <div class="btn" @click="MIXINToDetailShops(item.goods_id,'0')">立即查看</div> -->
                </li>
            </ul>   
            <p style="clear:both;"></p>         
        </div>
        <div style="clear:both;"></div>
    </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import * as USER_API from '@/api/user'
import * as UPGRADE_API from '@/api/upgrade'
import store from "@/store/index"
import intIntro from "./comintIntro"
import topcomom from '@/components/common/Topcomomnew'
import { setTimeout } from 'timers';
export default {
    data(){
        return{
            userId:store.state.userId,
            current:0,
            activeSwiperIndex: {
                index:0,
                tapclass:0
            },
            icon:{
                back:0
            },
            img_urls:[
                
                {
                    own:require('../../assets/img/newmember/grade000.png'),
                    noown:require('../../assets/img/newmember/grade000.png'),
                    Color:'swiper_p swiper_p_colorCBD',
                    show:false,
                    noshow: false,
                    wantshow: false,
                    showCard:false,
                    cardShow:true,
                    grade:'普通'
                },
                {
                    own:require('../../assets/img/newmember/owngrade1.png'),
                    noown:require('../../assets/img/newmember/grade1.png'),
                    Color:'swiper_p swiper_p_color1',
                    show:false,
                    noshow: false,
                    wantshow: false,
                    showCard:false,
                    cardShow:true,
                    grade:'贵宾'
                },
                {
                    own:require('../../assets/img/newmember/owngrade2.png'),
                    noown:require('../../assets/img/newmember/grade2.png'),
                    Color:'swiper_p swiper_p_color2',
                    show:false,
                    noshow: false,
                    wantshow: false,
                    showCard:false,
                    cardShow:true,
                    grade:'铂金'
                },
                {
                    own:require('../../assets/img/newmember/owngrade3.png'),
                    noown:require('../../assets/img/newmember/grade3.png'),
                    wantown:require('../../assets/img/newmember/wantgrade3.png'),
                    Color:'swiper_p swiper_p_color3',
                    show:false,
                    noshow: false,
                    wantshow: false,
                    showCard:false,
                    cardShow:true,
                    grade:'钻石'
                },
                // {
                //     own:require('../../assets/img/newmember/owngradeCM.png'),
                //     noown:require('../../assets/img/newmember/gradeCM.png'),
                //     Color:'swiper_p swiper_p_colorCM',
                //     showCM:true,
                //     showCMCard: false,
                //     cardShow:true,
                // },
            ],
            isShare:false,
            swiperOption: {
                loop: false,
                centeredSlides: true,
                spaceBetween:-15,
                direction: 'horizontal',
                slidesPerView: 1.1,
            },
            userList:'',
            goodList:[],
            grade:'',
            cardIds:'',
            page_no : 1,
            page_size : 100,
            isMoreGood: false,
            isLoading: false,
            intIntroData:{
                intIntroShow: true
            },
            intIntroShow:false,
            curData: {
                grade:''
            }
        }
    },
    components: {
        swiper,
        swiperSlide,
        intIntro,
        topcomom
    },
    created(){
        window.addEventListener("scroll", this.loadGoodsList);
    },
    mounted(){
        if(store.state.userId){
            this.userId = store.state.userId;
        }else{
            this.userId = this.$route.query.userId
        }
        this.loadUser()
        // this.productList()
        if(store.state.token){
            this.cardId()
        }else{
            setTimeout(this.cardId,500)
        }
    },
    methods:{
        toComint(index) {
            this.intIntroShow = true
            this.activeSwiperIndex.index = index
            if(this.curData.grade == '普通'){
                this.activeSwiperIndex.tapclass = 0
            }else if(this.curData.grade == '贵宾'){
                this.activeSwiperIndex.tapclass = 1
            }else if(this.curData.grade == '铂金'){
                this.activeSwiperIndex.tapclass = 2
            }else if(this.curData.grade == '钻石'){
                this.activeSwiperIndex.tapclass = 3
            }
        },
        // 轮播图下标
        onChange(index) {
            var that = this.$refs.mySwiper.swiper
            // this.current = index;
            this.current = that.activeIndex
            // debugger
            this.curData = this.img_urls[that.activeIndex]

            this.productList()
        },
        
        loadGoodsList(){
            var wScrollY = window.scrollY; // 当前滚动条位置 
            var wInnerH = window.innerHeight; // 设备窗口的高度（不会变） 
            var bScrollH = document.body.scrollHeight; // 滚动条总高度 
            // console.log(wScrollY,wInnerH,bScrollH)
            if (wScrollY + wInnerH >= bScrollH) {
                this.handlerScroll()
            }
        },
        loadUser(){
            // this.cardId()
            let sw = document.getElementsByClassName('swiper-slide')
            // sw[0].style.display = 'none'
            // console.log(sw)
            USER_API.findUserByUserid(this.userId).then(data => {
                this.userList = data
                this.grade = data.role
                this.productList()
                // console.log(data.role)
                if(data.role == 1){
                    this.curData.grade = '普通'
                    this.img_urls[0].show = true
                    this.img_urls[0].cardShow = true
                    this.img_urls[0].showCard = false

                    this.img_urls[1].noshow = true
                    this.img_urls[2].noshow = true

                    this.img_urls[3].show = false
                    this.img_urls[3].noshow = false
                    this.img_urls[3].wantshow = true
                    this.img_urls[3].cardShow = false
                }else if(data.role == 2){
                    this.img_urls.splice(0,1);

                    this.curData.grade = '贵宾'
                    // sw[0].style.display = 'none'

                    this.img_urls[0].show = true
                    this.img_urls[0].noshow = false
                    this.img_urls[0].wantshow = false
                    this.img_urls[0].cardShow = false
                    this.img_urls[0].showCard = true

                    this.img_urls[1].show = false
                    this.img_urls[1].noshow = true
                    this.img_urls[1].wantshow = false
                    this.img_urls[1].cardShow = false

                    this.img_urls[2].show = false
                    this.img_urls[2].noshow = false
                    this.img_urls[2].wantshow = true
                    this.img_urls[2].cardShow = false

                    this.img_urls[3].show = false
                    this.img_urls[3].noshow = false
                    this.img_urls[3].wantshow = true
                    this.img_urls[3].cardShow = false
                }else if(data.role == 3 || data.role == 4){
                    this.img_urls.splice(0,2);
                    this.curData.grade = '铂金'
                    // sw[0].style.display = 'none'
                    // sw[1].style.display = 'none'
                    
                    
                    this.img_urls[0].show = true
                    this.img_urls[0].noshow = false
                    this.img_urls[0].wantshow = false
                    this.img_urls[0].showCard = true
                    this.img_urls[0].cardShow = false

                    this.img_urls[1].show = false
                    this.img_urls[1].noshow = true
                    this.img_urls[1].wantshow = false
                    this.img_urls[1].cardShow = false

                    // this.img_urls[2].show = true
                    // this.img_urls[2].noshow = false
                    // this.img_urls[2].wantshow = false
                    // this.img_urls[2].cardShow = false

                    // this.img_urls[3].show = false
                    // this.img_urls[3].noshow = false
                    // this.img_urls[3].wantshow = true
                    // this.img_urls[3].cardShow = false
                }else if(data.role == 5 || data.role == 6){
                    this.curData.grade = '钻石'
                    sw[0].style.display = 'none'
                    sw[1].style.display = 'none'
                    sw[2].style.display = 'none'

                    this.img_urls[0].show = true
                    this.img_urls[0].noshow = false
                    this.img_urls[0].wantshow = false
                    this.img_urls[0].showCard = true
                    this.img_urls[0].cardShow = false

                    this.img_urls[1].show = false
                    this.img_urls[1].noshow = false
                    this.img_urls[1].wantshow = false
                    this.img_urls[1].cardShow = false

                    this.img_urls[2].show = false
                    this.img_urls[2].noshow = false
                    this.img_urls[2].wantshow = false
                    this.img_urls[2].cardShow = false

                    this.img_urls[3].show = true
                    this.img_urls[3].noshow = false
                    this.img_urls[3].wantshow = false
                    this.img_urls[3].showCard = true
                    this.img_urls[3].cardShow = false
                }


            });
            
        },
        productList(){
            // this.cardId()
            let type_id = this.grade
            let params = {
                page_no : this.page_no,
                page_size : this.page_size
            }
            let lp = ''
            if(this.grade && !this.curData.grade){
                lp = this.grade
            }else if(this.curData.grade == '普通'){
                lp = 1
                this.goodList = []
            }else if(this.curData.grade == '贵宾'){
                lp = 2
                this.goodList = []
            }else if(this.curData.grade == '铂金'){
                lp = 3
                this.goodList = []
            }else if(this.curData.grade == '钻石'){
                lp = 4
                this.goodList = []
            }
            // debugger
            UPGRADE_API.getGoodsList1(lp,params).then(data => {
                if (data.code == 0) {
                    this.isLoading = false;
                    // data.data.data == null ? 2 : 1
                    // console.log(data.data.data)
                    if (data.data.data && data.data.data.length < this.page_size) {
                        this.isMoreGood = true;
                        this.goodList = [
                            ...this.goodList,
                            ...data.data.data
                        ];
                        // this.goodList = data.data.data
                        
                    }
                    
                    
                }
                // console.log(this.goodList)
                // this.cardId()
            })
        },
        cardId(){
            UPGRADE_API.getFindCardDetail().then(data => {
                if(data.code == 0){
                    this.cardIds = data.data.card_number
                }
            })
        },
        handlerScrollHight(scrollH){
            if (scrollH > 200) {
                this.toppingSign = true
            }else{
                this.toppingSign = false
            }
        },
        handlerScroll() {
            let self = this;
            // this.page_no++;
            if (!self.isLoading && self.page_no != 1 && !self.isMoreGood) {
                this.productList();
            }
        },
        onCard(val){
            if(val == '贵宾'){
                this.MIXINToDetail('','50')
                // this.MixinToUrl('newupgrade',val)
            }else if(val == '铂金'){
                this.MIXINToDetail('','49')
                // this.MixinToUrl('newupgrade',val)
            }else if(val == '钻石'){
                this.MixinToUrl('invitefriends')
            }
        },
        toxize(){
            let lp = ''
            if(this.curData.grade == '普通'){
                lp = 1
            }else if(this.curData.grade == '贵宾'){
                lp = 2
            }else if(this.curData.grade == '铂金'){
                lp = 3
            }else if(this.curData.grade == '钻石'){
                lp = 5
            }
            this.$router.push({path: '/newsys',query:{type: lp}})
        },
    }
}
</script>

<style scoped>
.memhead{text-align: center;font-size: .36rem;border-bottom: 1px solid #333333;background: #333333;}
.memhead i{float: left;margin-top: .68rem;margin-left: .3rem;}
.memhead p{display: inline-block;color: white;margin-top: .56rem;margin-bottom: .2rem;margin-left: -.3rem;}

.pel{height: .88rem;background: #FFF4EC;margin-bottom: .2rem;}
.pel img{height: .66rem;width: .66rem;border-radius: 50%;margin-left: .32rem;margin-top: .12rem;display: inline-block;float: left;}
.pel span{color: #5C402D;display: inline-block;margin-left: .2rem;margin-top: .28rem;float: left;}
.pel p{float: right;color: #5C402D;margin-top: .3rem;margin-right: .3rem;}

.swiper_p{position:absolute;left:.54rem;font-size: .26rem;bottom: .76rem;}
.swiper_p_color1{color: #BEA08C;}
.swiper_p_color2{color: #8CA7BE;}
.swiper_p_color3{color: #9E8CBE;}
.swiper_p_colorCBD{color: #BE8C8C;}
.swiper_p_colorCM{color: #8CBEB9;}
.swiper_none{display: none;}

.grade{margin-top: .2rem;text-align: center;}
.grade>p{font-size: .32rem;color: #333333;font-weight: bold;display: inline-block;}
.grade ul{margin-top: .4rem;}
.grade ul li{float: left;width: calc(100% / 4);text-align: center;height: 2.3rem;}
.grade ul li p{margin-top: .3rem;margin-bottom: .42rem;padding: 0 .34rem;}

.enjoy{margin-top: .2rem;padding-left:.3rem;margin-bottom: .3rem;text-align: center;}
.enjoy>p{text-align: center;font-size: .32rem;margin-bottom: .3rem;display: inline-block;}
.enjoy li{border: 1px solid #F3F1EE;border-radius: .05rem;width: 3.36rem;float: left;margin-right: .2rem;margin-bottom: .2rem;
text-align: left;padding-bottom: .3rem;}
.enjoy li img{width: 3.32rem;height: 3.6rem;}
.enjoy li p{width: 3rem;font-size: .26rem;color: #2B2B2B;line-height: .36rem;margin: .22rem .24rem .26rem .16rem;height: .7rem;
text-overflow: -o-ellipsis-lastline;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;line-clamp: 2;-webkit-box-orient: vertical;}
.enjoy .money{font-size: .26rem;color: #F63B75;margin-left: .16rem;}
.enjoy .price{font-size: .36rem;}
.enjoy .btn{width: 2rem;height: .54rem;text-align: center;line-height: .54rem;background: #333333;border-radius: .28rem;color: white;font-size: .26rem;margin-top: .3rem;margin-bottom: .22rem;margin-left: 50%;transform: translate(-50%);}
.enjoy li del{color: #999;}

/* .Shade{position: absolute;top: 0;left: 0;right: 0;bottom: 0;background: rgba(0, 0, 0, 0.7);z-index: 2;} */
.cpm{position: fixed;top: 0;z-index: 3;width: 100%;}
/* .cpm>div{margin-top: -1rem;} */
.close{position: absolute;bottom: 2.4rem;left: 50%;transform: translate(-50%);}


.icon-customization{width: .56rem; height: .56rem; background: url("../../assets/img/mymember/customization.png");background-size: 100% 100%;display: inline-block}
.icon-grade1{width: .56rem; height: .56rem; background: url("../../assets/img/newmember/grade1.png");background-size: 100% 100%;display: inline-block}
.icon-grade2{width: .56rem; height: .56rem; background: url("../../assets/img/newmember/grade2.png");background-size: 100% 100%;display: inline-block}
.icon-grade3{width: .56rem; height: .56rem; background: url("../../assets/img/newmember/grade3.png");background-size: 100% 100%;display: inline-block}
.icon-gradeCBD{width: .56rem; height: .56rem; background: url("../../assets/img/newmember/gradeCBD.png");background-size: 100% 100%;display: inline-block}
.icon-gradeCM{width: .56rem; height: .56rem; background: url("../../assets/img/newmember/gradeCM.png");background-size: 100% 100%;display: inline-block}
.icon-owngrade1{width: .56rem; height: .56rem; background: url("../../assets/img/newmember/owngrade1.png");background-size: 100% 100%;display: inline-block}
.icon-owngrade2{width: .56rem; height: .56rem; background: url("../../assets/img/newmember/owngrade2.png");background-size: 100% 100%;display: inline-block}
.icon-owngrade3{width: .56rem; height: .56rem; background: url("../../assets/img/newmember/owngrade3.png");background-size: 100% 100%;display: inline-block}
.icon-owngradeCBD{width: .56rem; height: .56rem; background: url("../../assets/img/newmember/owngradeCBD.png");background-size: 100% 100%;display: inline-block}
.icon-owngradeCM{width: .56rem; height: .56rem; background: url("../../assets/img/newmember/owngradeCM.png");background-size: 100% 100%;display: inline-block}
.icon-gouwu{width: 1rem; height: 1rem; background: url("../../assets/img/newmember/zhuanshugouwu_icon_pre@2x.png");background-size: 100% 100%;display: inline-block}
.icon-libao{width: 1rem; height: 1rem; background: url("../../assets/img/newmember/zhuanshuruiguang_icon_pre@2x.png");background-size: 100% 100%;display: inline-block}
.icon-kefu{width: 1rem; height: 1rem; background: url("../../assets/img/newmember/jinpaikefu_icon_pre@2x.png");background-size: 100% 100%;display: inline-block}
.icon-zhuanqian{width: 1rem; height: 1rem; background: url("../../assets/img/newmember/fenxiangzhuanqian_icon_pre@2x.png");background-size: 100% 100%;display: inline-block}
.icon-yaoqing{width: 1rem; height: 1rem; background: url("../../assets/img/newmember/yangqingjiangli_icon_pre@2x.png");background-size: 100% 100%;display: inline-block}
.icon-cmi{width: 1rem; height: 1rem; background: url("../../assets/img/newmember/jiangliCmi_icon_pre@2x.png");background-size: 100% 100%;display: inline-block}
.icon-quyu{width: 1rem; height: 1rem; background: url("../../assets/img/newmember/quyubutie_icon_pre@2x.png");background-size: 100% 100%;display: inline-block}
.icon-shaoshang{width: 1rem; height: 1rem; background: url("../../assets/img/newmember/zhaoshangtiyan_icon_pre@2x.png");background-size: 100% 100%;display: inline-block}
.icon-shalong{width: 1rem; height: 1rem; background: url("../../assets/img/newmember/shalongtiyan_icon_pre@2x.png");background-size: 100% 100%;display: inline-block}
.icon-shangwu{width: 1rem; height: 1rem; background: url("../../assets/img/newmember/shagnwuzognjian@2x.png");background-size: 100% 100%;display: inline-block}
.icon-zhaoshang{width: 1rem; height: 1rem; background: url("../../assets/img/newmember/zhaoshangtiyan_icon_pre@2x.png");background-size: 100% 100%;display: inline-block}
.icon-shengqian{width: 1rem; height: 1rem; background: url("../../assets/img/newmember/shengqian.png");background-size: 100% 100%;display: inline-block}
.icon-tanhao{width: .28rem; height: .28rem; background: url("../../assets/img/newmember/tanhao.png");background-size: 100% 100%;display: inline-block}
.icon-right1{width: 1.5rem; height: .25rem; background: url("../../assets/img/newmember/right@2x(4).png");background-size: 100% 100%;display: inline-block}
.icon-right2{width: 1.5rem; height: .25rem; background: url("../../assets/img/newmember/right2.png");background-size: 100% 100%;display: inline-block}
.icon-right3{width: 1.5rem; height: .25rem; background: url("../../assets/img/newmember/right@2x.png");background-size: 100% 100%;display: inline-block}
.icon-right4{width: 1.5rem; height: .25rem; background: url("../../assets/img/newmember/right@2x(1).png");background-size: 100% 100%;display: inline-block}
.icon-rightCBD{width: 1.5rem; height: .25rem; background: url("../../assets/img/newmember/right@2x(2).png");background-size: 100% 100%;display: inline-block}
.icon-rightCM{width: 1.5rem; height: .25rem; background: url("../../assets/img/newmember/right@2x(3).png");background-size: 100% 100%;display: inline-block}
.icon-left1{width: 1.5rem; height: .25rem; background: url("../../assets/img/newmember/left@2x(4).png");background-size: 100% 100%;display: inline-block}
.icon-left2{width: 1.5rem; height: .25rem; background: url("../../assets/img/newmember/left2.png");background-size: 100% 100%;display: inline-block}
.icon-left3{width: 1.5rem; height: .25rem; background: url("../../assets/img/newmember/left@2x.png");background-size: 100% 100%;display: inline-block}
.icon-left4{width: 1.5rem; height: .25rem; background: url("../../assets/img/newmember/left@2x(1).png");background-size: 100% 100%;display: inline-block}
.icon-leftCBD{width: 1.5rem; height: .25rem; background: url("../../assets/img/newmember/left@2x(2).png");background-size: 100% 100%;display: inline-block}
.icon-leftCM{width: 1.5rem; height: .25rem; background: url("../../assets/img/newmember/left@2x(3).png");background-size: 100% 100%;display: inline-block}
.icon-back{width: .15rem; height: .25rem; background: url("../../assets/img/newmember/back@2x(1).png");background-size: 100% 100%;display: inline-block}
.icon-close{width: .7rem; height: .7rem; background: url("../../assets/img/intIntro/close_qyxq_bg@2x.png");background-size: 100% 100%;display: inline-block}

</style>

