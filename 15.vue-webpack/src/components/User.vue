<template>
  <div>
    用户中心
    推荐用户：
    <RouterLink :to="{name:'User', params:{id:5}}">
      用户5
    </RouterLink>
    <p>
      用户ID:{{ $route.params.id }}
    </p>
  </div>
</template>
