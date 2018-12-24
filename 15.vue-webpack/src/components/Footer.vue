<template>
  <ul class="nav">
    <li>
      <router-link
        :to="{name:'Mobile'}"
        :class="{active: 1===cate}"
      >
        首页
      </router-link>
    </li>
    <li>
      <router-link
        :to="{name:'Category'}"
        :class="{active: 2===cate}"
      >
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
<script>
export default {
  data() {
    return {
      cate: 0,
    }
  },
  watch: {
    $route: {
      /* 修正链接的bug */
      handler(newVal, oldVal) {
        if (newVal.meta.cate) {
          this.cate = newVal.meta.cate
        } else {
          this.cate = 0
        }
      },
      immediate: true,
    },
  },
}
</script>

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
      &.router-link-exact-active,&.active{
        color:#e00
      }
    }
  }
}
</style>
