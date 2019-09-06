import request from "../utils/request1"
import qs from "qs";

export function isSigned(params) {
  return request({
    url:"personal/signlog/isSigned",
    method:"post",
    data:qs.stringify(params)
  })
}

// 查询体验卡列表
export function findCardList(params) {
  return request({
    url: '/card/listCard',
    method: 'post',
    data: params
  })
}

// 查询体验卡详情
export function findCardDetail(params) {
  return request({
    url: `/card/getCardDetail/${params}`,
    method: 'get'
  })
}

// 查询银行卡列表信息
export function findBankCardList(params) {
  return request({
    url: '/personal/userbank/querybankcardlists',
    method: 'post',
    data: qs.stringify(params)
  })
}

// 体验卡提现
export function getCardCash(params) {
  return request({
    url: '/card/getCardCash',
    method: 'post',
    data: params
  })
}

// 根据城市得到天气
export function getWeather(params) {
  return request({
    url: `/userGetMotto/getWeather`,
    method: 'get',
    params
  })
}

// 得到格言
export function getMotto() {
  return request({
    url: '/userGetMotto/getMotto',
    method: 'get'
  })
}