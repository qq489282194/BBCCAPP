import request from "../utils/request2"
import qs from "qs";

export function messageList(userId) {
  return request({
    url:"/api/v1/user/findByUserId?userId=" + userId,
    method:"get",
  })
}
