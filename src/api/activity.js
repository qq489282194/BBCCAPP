import request from "../utils/request6"
import qs from "qs"

// 获取商家列表信息
export function getBusinessData(params) {
  return request({
    url:"/personal/saleorg/querySaleOrgList",
    method:"post",
    data: params
  })
}

// 发送短信息
export function sendSms(params) {
  return request({
    url: '/sendSMSCode',
    method: 'post',
    data: qs.stringify(params)
  })
}

// 校验验证码
export function checkCode(params) {
  return request({
    url: '/checkCode',
    method: 'post',
    data: qs.stringify(params)
  })
}

// 得到用户信息
export function getWxLoading(params) {
  return request({
    url: '/api/v1/user/threeLogin',
    method: 'post',
    data: qs.stringify(params)
  })
}

// 得到分享地址
export function getJoinUrl(oldUserId) {
  return request({
    url: `/personal/saleorg/getShareUrl/${oldUserId}`,
    method: 'get',
  })
}

// 绑定用户上下级关系
export function bindUserRelation(leaderId, subordinateId) {
  return request({
    url: `/personal/saleorg/newAddSubordinate/${leaderId}/${subordinateId}`,
    method: 'get'
  })
}