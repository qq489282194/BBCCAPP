<template>
    <div>
        <topcomom>设置海报文案</topcomom>    
        <div class="peostr">
                <van-field
                    v-model="message"
                    type="textarea"
                    placeholder="我在美胸汇，来和我一起畅享福利！快来加入我们吧！"
                    rows="1"
                    maxlength="30"
                    size="large"
                    clearable
                    autosize
                    @input="onInput"
                />
                <!-- <input type="textarea" v-model="message" placeholder="请输入留言" maxlength="30"/> -->
                <!-- <nut-textinput
                    placeholder="我在美胸汇，来和我一起畅享福利！快来加入我们吧！"
                    @focus="onFocus"
                    @blur="onBlur"
                    v-model="message"
                /> -->
        </div>
        <p class="pnum">{{ mlength }}/30</p>
        <div class="btn_p" @click="btn_p">
            <p>保存</p>
        </div>
    </div>
</template>
<script>
import topcomom from '@/components/common/Topcomomnew'
import store from '@/store'
import * as USER_API from '@/api/user'
import {isIPhoneX,phoneSign} from '@/assets/js/share.js'
export default {
    data () {
        return {
            phoneSignX:false,
            sign:false,
            message:'',
            userId:store.state.userId,
            mlength:0,
        }
    },
    components: {
        topcomom
    },
    mounted () {
        var phoneSignb = phoneSign()
        console.log(phoneSignb, '手机机型')
        if (phoneSignb == 'iOS') {
        this.sign = true
        this.phoneSignX = true
        console.log(phoneSignb, 'sign--ios标志')
        }
        var phoneSignX = isIPhoneX()
        if(phoneSignX){
        this.phoneSignX = true
        this.sign = true
        }
    },
    methods:{
        btn_p(){
            // this.$bus.$emit('mybus',this.message)
            // this.MixinToUrl('invitefriends')
            // this.$router.push({"name":"invitefriends",query:'555'});
            // this.$router.replace({"path":"invitefriends"})
            if(!this.message){
                this.message = '我在美胸汇，来和我一起畅享福利！快来加入我们吧！'
            }
            let params = {
                userId : this.userId,
                advertiseInfo:this.message
            }
            USER_API.updateUserV1(params).then(data => {
                console.log(data)
            })
            this.$router.replace({"path":`invitefriends?poster=${this.message}`})
        },
        onInput(){
            this.mlength = this.message.length
        }
    }
}

</script>
<style lang="scss" scoped>
.peostr{margin-top: 1.8rem;padding: 0 .06rem .22rem;border: 1px solid #cfcfcf;margin: 1.8rem .3rem 0;border-radius: .1rem;font-size: .3rem;}
.pnum{position: absolute;margin-top: -.56rem;right: .6rem;font-size: .24rem;color: #999999;}
.btn_p{width:6.7rem;height:.88rem;background:rgba(246,59,117,1);border-radius:.44rem;text-align: center;line-height: .88rem;
color: white;font-size: .34rem;margin: .8rem auto;}
</style>
