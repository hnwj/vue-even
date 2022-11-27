<template>
   <router-view></router-view>
</template>
<script>
export default {
  async created () {
    const res = await registerAPI()
    console.log(res)
  }
}
</script>

<style>
</style>
