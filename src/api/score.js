import request6 from "../utils/request6"
import request4 from "../utils/request4"
import request from "../utils/request"
import request7 from "../utils/request7"

export function getCard(params) {
      return request6({
            url:"/card/getCard",
            method:"post",
            params
      })
}

export function findEsShopList(params){
      return request4({
            url:"/shops/findEsShopList",
            method:"get",
            params
      })
}

// 查询好友列表
export function friendslist(params){
      return request({
            url:"/personal/saleorg/friendslist",
            method:"post",
            headers: {'ContentType': 'application/json'},
            data:params
      })
}

export function orderAndProfit(params,user_id){ // 查询收益订单总数和订单数
      return request7({
            url:`/distribution/subsidy/income-order-nums/${user_id}`,
            method:"get",
            params
      }) 
}

export function selectcountBylevel(params){
      return request({
            url:"/personal/saleorg/selectcountBylevel",
            method:"post",
            headers: {'ContentType': 'application/json'},
            data:params
      })
}

//总积分

export function findAccountPaySumMoney(params){
      return request({
            url:"/api/v1/accountPlayList/findAccountPaySumMoney",
            method:"get",
            headers: {'ContentType': 'aplication/json'},
            params
      })
}

export function getCounts(user_id,friend_user_id){
      return request7({
            url: `/distribution/subsidy/income-from-friend/${user_id}/${friend_user_id}`,
            method:"get",
            // headers: {'ContentType': 'pplication/json'}
      })
}


export function selectcount2(params){ // 查询好友总数
      return request({
            url:"/personal/saleorg/selectcount",
            method:"post",
            headers: {'ContentType': 'application/json'},
            data:params
      })
}

// 我的邀约服务商列表

export function findServerShopList(params){
      return request4({
            url: `/shops/findServerShopList`,
            method:"get",
            params
            // headers: {'ContentType': 'pplication/json'}
      })
}