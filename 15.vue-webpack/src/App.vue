<template>
  <div>
    <router-view name="header"></router-view>
    <router-view></router-view>
    <Notification content="你点击了下一首"></Notification>
  </div>
</template>
<script>
import '@/comm.scss'

export default {

}
</script>
