<template>
  <div>
    用户中心
    推荐用户：
    <RouterLink :to="{name:'User', params:{userid:5}}">
      用户5
    </RouterLink>
    <RouterLink :to="{name:'User', params:{userid:12}}">
      用12
    </RouterLink>
    <p>
      用户ID:{{ userid }} -- {{ str }}
    </p>
    <p>照片</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ['userid', 'str', 'pid', 'sokey'],
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate')
    // next((vm) => {
    //   console.log('beforeRouteUpdate2')
    // })
    next()
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter')
    next()
  },
}
</script>
