// 基于axios封装，网络请求的函数
import axios from 'axios'

const axios = axios.create({
  baseURL: 'http://big-event-vue-api-t.itheima.net'
})