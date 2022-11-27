<template>
  <!-- 注册页面的整体盒子 -->
  <div class="reg-container">
    <!-- 注册的盒子 -->
    <div class="reg-box">
      <!-- 标题的盒子 -->
      <div class="title-box"></div>
      <!-- 注册的表单区域 -->
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称" v-model="form.username">
          <el-input placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" v-model="form.password">
          <el-input placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" v-model="form.repassword">
          <el-input placeholder="请输入确认密码"></el-input>
        </el-form-item>
        <el-button type="primary" @click="registerFn">注册</el-button>
        <el-link type="info">去登录</el-link>
      </el-form>
    </div>
  </div>
</template>

<script>
import { registerAPI } from '@/api'
export default {
  name: 'my-register',
  data () {
    return {
      form: {
        username: '',
        password: '',
        repassword: ''
      }
    }
  },
  methods () {
    // 注册事件
  async  registerFn(){
      const res = await registerAPI()
    }
  }
}
</script>

<style lang="less" scoped>
.reg-container {
  background: url('../../assets/images/login_bg.jpg') center;
  background-size: cover;
  height: 100%;

  .reg-box {
    width: 400px;
    height: 335px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0 30px;
    box-sizing: border-box;

    .title-box {
      height: 60px;
      background: url('../../assets/images/login_title.png') center no-repeat;
    }

    .btn-reg {
      width: 100%;
    }
  }
}
</style>
