<template>
  <div id="app">
   <el-button>123</el-button>
  </div>
</template>
<script>
import { registerAPI } from '@/api'
export default {
  async creared () {
    console.log('123');
    const res = await registerAPI()
    console.log(res)
  }
}
</script>

<style>
</style>
