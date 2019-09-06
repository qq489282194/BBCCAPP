<template>
  <div>
   <topcomom>邀请好友</topcomom>
  <div class="contIndex">
    <div class="photo-box">
     <div class="conbox">
        <div class="photo-back" ref="photoBack">
          <img crossorigin="anonymous" class="img" src="http://oss.meibbc.com/bbcshop_oos/file/20190722/goods/64D65DFC8C4B4F01884231218BD8D6B8.jpeg?x-oss-process=style/800x800"/>
         <div class="flex_sprond navbt">
           <div class="flex_start">
              <img crossorigin="anonymous"  class="headimg" src="http://oss.meibbc.com/bbcshop_oos/file/20190722/goods/64D65DFC8C4B4F01884231218BD8D6B8.jpeg?x-oss-process=style/800x800"/>
              <div>
                <div class="name">我是一只鱼</div>
                <div class="dsc">我在美胸汇，来和我一起畅想福利！</div>
              </div>
           </div>
           <img class="codeimg" crossorigin="anonymous" src="http://oss.meibbc.com/bbcshop_oos/file/20190722/goods/64D65DFC8C4B4F01884231218BD8D6B8.jpeg?x-oss-process=style/800x800"/>
         </div>
        </div>
      </div>
    </div>
    <div class="flex_sprond">
     <div class="sharebtn flex_center" @click="share">
       <img src="../../assets/img/sharefriend/share.png"/>
       <div>分享好友</div>
     </div>
     <div class="flex_center downbtn" @click="createPhoto">
       <img src="../../assets/img/sharefriend/down.png"/>
       <div>生成海报</div>
     </div>
   </div>
  </div>
  <Sharebottm ref="sharebottm"></Sharebottm>
  </div>
</template>

<script>
  import html2canvas from "html2canvas";
  import topcomom from '@/components/common/Topcomomnew'
  import Sharebottm from '@/components/ShareFriend/Sharebottm'
  import * as USER_API from '@/api/user'
  export default {
    name: "InviteFriendsimg",
    components: {
			topcomom,Sharebottm
		},
    data(){
      return{
       imgB:'1'
    }
    },
    computed:{
     
    },
    watch: {
     
    },
    created(){
     
    },
    mounted(){
     
    },
    methods:{
      createPhoto() {
      let that = this;
      console.log("执行生成图片");
      if (this.imgB) {
        let photoBox = document.querySelector(".photo-box");
        let newImgWidth = photoBox.offsetWidth;
        console.log(newImgWidth,'--newImgWidth--')
        let newImgHeight = photoBox.offsetHeight;
        let scale = window.devicePixelRatio;
        let that = this;
        html2canvas(photoBox, {
          width: newImgWidth,
          height: newImgHeight,
          scale: scale,
          useCORS: true
        }).then(function(canvas) {
          var dataUrl = canvas.toDataURL("image/png");
          that.shareImgUrl = dataUrl;
          console.log(dataUrl,'hhhhh')
          that.$savePhoto({"data": dataUrl})
        });
      }
    },
    share(){
      this.$refs.sharebottm.showShare()
    }
    },
  }
</script>

<style  scoped  lang="scss">
@import "../../assets/css/shareFriend/com.scss";
body, #app, #login{
    height: auto !important;
}
.contIndex{
  padding: 0.5rem 0.3rem;
  background-color: #f2f2f2;
  .img{
    height: 7.7rem;
  }
  .photo-box{
    padding: 0.1rem 0 0.3rem;
    background-color: #fff;
    border-radius: 10px;
  }
 
  .conbox{
    width: 92%;
    border-radius: 0.2rem;
    margin: 0.2rem auto;
  }
  .headimg,.codeimg{
    width: 0.81rem;
    height: 0.81rem;;
  }
  .headimg{
    border-radius: 100%;
  }
  .navbt{
    margin-top: 0.4rem;
  }
  .name{
    color: #333;
    font-size: 0.28rem;
  }
  .dsc{
    font-size: 0.24rem;
    color: #999;
  }
  .sharebtn img,.downbtn img{
    width: 0.50rem;
    height: 0.50rem;
    margin: 0 0.1rem;
  }
  .sharebtn,.downbtn{
    width: 3.2rem;
    height: 0.76rem;
    background-color: #F63B75;
    font-size: 0.30rem;
    color: #fff;
    margin: 0.4rem 0;
    border-radius: 0.4rem;
  }
  .downbtn{
    color: #F63B75;
    background-color: #f2f2f2;
    border: 0.02rem solid #F63B75;
  }
}
  
</style>

