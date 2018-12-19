<template>
  <div>
    用户中心
    推荐用户：
    <RouterLink :to="{name:'User', params:{id:5}}">
      用户5
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
}
</script>
