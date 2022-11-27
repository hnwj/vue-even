import request from '@/utils/request'

export const registerAPI = ({username, password,repassword}) => {
  return request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username,
      password: '123456',
      repassword: '123456'
    }
  })
}
