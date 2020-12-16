import axios from 'axios'
import { message } from 'antd'

export default function ajax(url, data = {}, method = 'GET') {
  if (method == "GET") {
    return axios.get(url, {
      params: data
    })
  } else {
    return axios.post(url, data)
      .then(response => {
        console.log('response', response.data)
      })
      .catch(error => {
        message.error(error)
      })
  }
}

// ajax('/login', { username: 'Tom', password: '12345' }, 'POST').then()











