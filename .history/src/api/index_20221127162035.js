import request from '@/utils/request'

export registerAPI = () => {
  request({
    url: '/api/reg',
    method: 'post',
    data: {
      username:'login',
      password,
      repassword
    }
  })
}