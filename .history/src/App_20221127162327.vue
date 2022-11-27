<template>
  <div id="app">
   <el-button>123</el-button>
  </div>
</template>
<script>
import { registerAPI } from '@/api'
export default {
  async creared () {
    const res = await registerAPI()
    log
  }
}
</script>

<style>
</style>
