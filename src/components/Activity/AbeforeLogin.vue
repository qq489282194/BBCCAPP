<template>
	<div>

	</div>
</template>


<script type="text/javascript">
import * as ACT_API from '@/api/activity'
export default {
	name: 'Beforelogin',
	components: {

	},
	data() {
		return {
			path: null,
			openid: '',
			unionId: '',
			oldUserId: '',
			headimgurl: '',
			phone: '',
			code: '',
			state: ''
		}
	},
	created() {

	},  
	mounted() {
		let urlStr = window.location.href.split('?')[1]
		if (urlStr) {
			let str = urlStr
			let firstArr = str.split('&')
			let arr = []
			firstArr.map(item => {
				let obj = {}
				obj[item.split('=')[0]] = item.split('=')[1]
				arr.push(obj)
			})
			console.log(arr)

			arr.forEach(item => {
				if (item.openId) {
					this.openid = item.openId
				} else if (item.unionId) {
					this.unionId = item.unionId
				} else if (item.oldUserId) {
					this.oldUserId = item.oldUserId
				}
			})

			if (!this.openid && !this.unionId) {
				console.log('拿到code', arr)

				localStorage.setItem('openid', this.openid)	
				localStorage.setItem('unionId', this.unionId)

				let params = {
					code: this.code,
					state: this.state
				}

				ACT_API.getUserMsg(params).then(res => {
					console.log(res)
				})
			} else {
				console.log('获取重定向信息', arr)
				localStorage.setItem('openid', this.openid)	
				localStorage.setItem('unionId', this.unionId)
				localStorage.setItem('oldUserId', this.oldUserId)
				this.getWxLoding(this.unionId)

				// _this.$router.replace({
				// 	path: '/abysharer'
				// })
			}
			// if(!localStorage.getItem('token')){
			// 	this.getWxLoding(this.unionId,this.path,this.goods_id)
			// }else{
			// 	console.log(this.path,'--授权-path-')
			// 	if(this.path){
			// 		this.$router.push({
			// 			path: this.path,
			// 			query: {
			// 				goods_id: this.$route.query.goods_id,
			// 				pathb: 'Login',
			// 			}
			// 		})
			// 		}else{
			// 			this.$router.push({
			// 			path: '/Home',
			// 		})
			// 	}
			// }
		}

	},
	methods: {
		getWxLoding(unionId, path) {
			let _this = this
			let data = {
				typeid: 2,
				id: unionId,
				registrationid: ''
			}
			ACT_API.threeLogin(data).then((res) => {
				console.log(res)
				if (res.status == 1) {
					let userid = res.data.userid
					localStorage.setItem('wxUserId', userid)
					// this.getToken(userid, path)
					// _this.$router.replace({
					// 	path: '/abysharer'
					// })
					window.location.href=`http://testuser.meibbc.com/bbc-personal/abysharer`
					// window.location.href=`http://localhost:2001/abysharer`
				} else {
					// this.$toast(res.data.message);
					console.log(res.data.message)
				}
			})
			// this.$http({
			// 	method: 'post',
			// 	// url:`${this.GLOBAL.serverSrc}user/webauth/getMpUserInfo`,
			// 	url: `${this.GLOBAL.baseURLUser}api/v1/user/threeLogin`,
			// 	headers: {
			// 		ContentType: 'application/x-www-form-urlencoded',
			// 	},
			// 	params: data
			// }).then(res => {
			// 	console.log(12344444444)
			// 	if (res.data.status == 1) {
			// 		console.log(res.data, 56565)
			// 		let userid = res.data.data.userid
			// 		localStorage.setItem('wxUserId', userid)
			// 		// this.getToken(userid, path)
			// 	} else {
			// 		this.$toast(res.data.message);
			// 	}
			// })
		},
		// getToken(userid, path) {
			// let that = this
			// let params = {userid}
			// ACT_API.getToken(params).then(res => {
				// console.log(res)
			// })
			// this.$http({
			// 	method: 'post',
			// 	url: `${this.GLOBAL.baseURL}passport/mobileClientThirdLogin`,
			// 	headers: {
			// 		ContentType: 'application/x-www-form-urlencoded',
			// 	},
			// 	params: {
			// 		userid
					
			// 	}
			// }).then(res => {
			// 	console.log(res)
			// 	var uid = res.data.uid
			// 	var access_token = res.data.access_token
			// 	console.log("ddddd__+" + access_token)
			// 	localStorage.setItem("token", access_token)
			// 	sessionStorage.setItem('uid', uid)
			// 	that.isBind(path)
				// that.$toast('登录成功')
				// if(path == 'Login'){
				// 	setTimeout(function(){
				// 		that.$router.push({
				// 			path:'/Home'
				// 		})
				// 	},1000)
				// }else if (this.path == 'Productdetails') {
				// 	that.$router.push({
				// 		path: this.path,
				// 		query: {
				// 			goods_id: this.goods_id
				// 		}
				// 	});
				// } else{
				// 	setTimeout(function(){
				// 		that.$router.push({
				// 			name:this.path,
				// 		});
				// 	},1000)
				// }
			// })
		// },
		// //是否绑定手机号码
		// isBind(path) {
		// 	console.log(123123)
		// 	let unionId = localStorage.getItem('unionId')
		// 	let params = {
		// 		id: unionId,
		// 		typeid: 2,
		// 	}
		// 	this.$http({
		// 		method: 'post',
		// 		url: `${this.GLOBAL.baseURLUser}api/v1/user/checkThreeLoginBoundPhone`,
		// 		headers: {
		// 			ContentType: 'application/x-www-form-urlencoded',
		// 		},
		// 		params
		// 	}).then(res => {
		// 		console.log(res, 123123)
		// 		if (res.data.status == 1) {
		// 			this.$router.push({
		// 				name: 'LoginUpgrade',
		// 				query: {
		// 					oldPath: path,
		// 					goods_id: this.$route.query.goods_id
		// 				}
		// 			});
		// 		}
		// 		else {
		// 			if(this.path){
		// 				this.$router.push({
		// 					path: this.path,
		// 					query: {
		// 						goods_id: this.$route.query.goods_id,
		// 						pathb: 'Login',
		// 					}
		// 				})
		// 			}else{
		// 				this.$router.push({
		// 					path: '/Home',
		// 				})
		// 			}
		// 		}
		// 	})
		// },
	}
}
</script>

<style scoped>

</style>
