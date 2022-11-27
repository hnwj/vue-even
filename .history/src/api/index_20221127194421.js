import request from '@/utils/request'

export const registerAPI = ({ username, password, repassword }) => {
  return request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username,
      password,
      repassword
    }
  })
}

export const loginAPI = () => {
  return request({
    url: '/api/login',
    method: 'POST',
    p
  })
}
