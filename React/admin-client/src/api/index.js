import ajax from "./ajax";

// export function reqLogin(data) {
//   return ajax('/login', data, 'POST')
// }

export const reqLogin = (data = { username: '', password: '' }) => {
  return ajax(`/login`, data, 'POST')
}

export const reqAddUser = (data) => {
  return ajax(`/manage/user/add`, data, 'POST')
}