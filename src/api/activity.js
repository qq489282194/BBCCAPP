import request from "../utils/request6"
import request8 from '../utils/request8'
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
export function bindUserRelation(data) {
  return request({
    url: `/personal/saleorg/newAddSubordinate`,
    method: 'post',
    data: qs.stringify(data)
  })
}

// 第三方登录
export function threeLogin(params) {
  return request({
    url: '/api/v1/user/threeLogin',
    method: 'post',
    data: qs.stringify(params)
  })
}

// 绑定手机
export function newBindPhone(params) {
  return request({
    url: '/api/v1/user/newBindPhone',
    method: 'post',
    data: qs.stringify(params)
  })
}

// 得到二维码
export function getErWeiMa(params) {
  return request({
    url: `/personal/saleorg/getqrcode?userId=${params}`,
    method: 'get',
  })
}

// 得到邀请码
export function getInviteCode(params) {
  return request({
    url: `/personal/saleorg/getinvitecode?userId=${params}`,
    method: 'get'
  })
}

// 得到信息
export function getUserMsg(params) {
  return request({
    url: `/user/webauth/wxAuthorizeRedirect`,
    method: 'get',
    params
  })
}

// 判断是否已经绑定过上下级关系
export function isBindingPhone(userId) {
  return request({
    url: `/personal/saleorg/isBinding/${userId}`,
    method: 'get'
  })
}

// 判断手机号是否注册
export function isRegisterPhone(data) {
  return request({
    url: `/api/v1/user/checkPhone`,
    method: 'post',
    data: qs.stringify(data)
  })
}