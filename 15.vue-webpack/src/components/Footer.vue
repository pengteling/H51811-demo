<template>
  <ul class="nav">
    <li>
      <router-link :to="{name:'Mobile'}">
        首页
      </router-link>
    </li>
    <li>
      <router-link :to="{name:'Category'}">
        分类
      </router-link>
    </li>
    <li>
      <router-link :to="{name:'Cart'}">
        购物车
      </router-link>
    </li>
    <li>
      <router-link :to="{name:'Me'}">
        我的
      </router-link>
    </li>
  </ul>
</template>
<style lang="scss">
.nav{
  display: flex;
  align-items: center;
  background: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.8));
  li{
    flex:1 1 0%;
    display: flex;
    justify-content: center;
    align-items: center;
    a{
      color:#ddd;
      &.router-link-active{
        color:#e00
      }
    }
  }
}
</style>
