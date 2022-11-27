import request from '@/utils/request'

const registerAPI = () => {
  request({
    url: '/api/reg',
    method: 'post',
    data: {
      username:'login123',
      password:'123456',
      repassword:'123456'
    }
  })
}

export default 