import ajax from "./ajax";
import { message } from "antd";

const BASEURL = 'http://localhost:5000'
// export function reqLogin(data) {
//   return ajax('/login', data, 'POST')
// }

export const reqLogin = (data = { username: '', password: '' }) => {
  return ajax(`${BASEURL}/login`, data, 'POST')
}

export const reqAddUser = (data) => {
  return ajax(`${BASEURL}/manage/user/add`, data, 'POST')
}