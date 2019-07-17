<template>
  <div>
    <div class="detail-header">
      <p class="title" v-html="article.title"></p>
    </div>
    <div class="look">
      <i class="icon-browse"></i>
      <span v-html="article.readCount">0</span>
    </div>
    <div class="detail-main" v-html="article.content">
    </div>
  </div>
</template>

<script>
import * as USER_API from '@/api/user'

export default {
    data(){
        return{
            serveId:'',
            article:{
                bigTypeId: "",
                content: "",
                id: "",
                readCount: 0,
                shareUrl: "",
                title: "",
                updateTime: ""
            },
        }
    },
    mounted(){
        // 获取服务ID
        this.getQueryVariable('serveId')
        this.loadPostUserByUserid()
    },
    methods:{
        // 获取文章
      loadPostUserByUserid(){
        let params = { "id":this.serveId, };
        USER_API.getArticle(params).then(data => {
          if(data){
            let str = data.content
            let reg = new RegExp( 'embed' , "g" )
            data.content = str.replace( reg , 'video' )
            this.article = data;
          }
          // debugger
          console.log(data)
        });
      },
      // 获取url参数
      getQueryVariable(variable){
          let query = window.location.search.substring(1);
          let vars = query.split("&");
          for (let i=0;i<vars.length;i++) {
              let part = vars[i].split("=");
              if(part[0] == variable){
                  this.serveId = part[1]
              }
          }
      },
    }
}
</script>

<style type="text/scss" scoped>
/* .detail-header{margin-top: 1.52rem;} */
.detail-header .title{font-size: .36rem;color: #333333;margin-left: .24rem;margin-top: .26rem;}
.look{font-size: .26rem;color: #999999;position: relative; margin: .04rem 0 .04rem .24rem;}
.look img{width: .32rem;height: .32rem;display: inline-block;}
.look span{color: #999999;font-size: .26rem;position: absolute;left: .44rem;top: -.02rem;}
.detail-main{padding: 0 .25rem;margin-bottom: .74rem;text-align: left;color: #333333;font-size: .3rem;line-height: .54rem;}
.detail-main img{width: 7.02rem;height: 100%;margin-top: .34rem;margin-bottom: .26rem;}

.icon-share{ width: .46rem; height: .46rem; background: url("../../assets/img/bbcdetail/share@3x.png");background-size: 100% 100%;display: inline-block; }
.icon-browse{ width: .32rem; height: .32rem; background: url("../../assets/img/bbcdetail/liulan1@3x.png");background-size: 100% 100%;display: inline-block; }
.icon-back{ width: .14rem; height: .24rem; background: url("../../assets/img/bbcdetail/-s-jiantou_qb_icon@3x.png");background-size: 100% 100%;display: inline-block;transform: rotateY(180deg) }

</style>

