import request from "../utils/request6"
import qs from "qs"

export function getBusinessData(params) {
  return request({
    url:""+params,
    method:"get",
  })
}