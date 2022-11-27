import request from '@/utils/request'

export registerAPI = () => {
  request({
    url: '/api/reg',
    method: 'post',
    data: {
      
    }
  })
}