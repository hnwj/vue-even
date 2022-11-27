import request from '@/utils/request'

export const registerAPI = () => {
  request({
    url: '/api/reg',
    method: 'POST',
    data: {
      username: 'login123',
      password: '123456',
      repassword: '123456'
    }
  })
}
