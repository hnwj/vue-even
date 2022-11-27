import request from '@/utils/request'

export const registerAPI = ({username}) => {
  return request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username: 'login1234',
      password: '123456',
      repassword: '123456'
    }
  })
}
