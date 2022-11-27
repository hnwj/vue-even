import request from '@/utils/request'

exconst registerAPI = () => {
  request({
    url: '/api/reg',
    method: 'post',
    data: {
      username: 'login123',
      password: '123456',
      repassword: '123456'
    }
  })
}


