import request from "../utils/request7"
import qs from "qs"

export function getGoodsList(params) {
  return request({
    url: `/goods/search`,
    method: 'get',
    params: params
  })
}

export function getGoodsList1(type_id,params) {
  return request({
    url: `/goods/member/activity/${type_id}/list`,
    method: 'get',
    params: params
  })
}

export function postRoleAdd(params) {
  return request({
    url: `/members/apply/role/add`,
    method: 'post',
    params: params
  })
}

export function getRoleAdd(params) {
  return request({
    url: `/members/apply/role`,
    method: 'get',
    params: params
  })
}

export function getFindCardDetail(params) {
  return request({
    url: `/membershipCard/findCard/detail/v1`,
    method: 'get',
    params: params
  })
}

export function getShowList(params) {
  return request({
    url: `/personal/center/list`,
    method: 'get',
    params
  })
}