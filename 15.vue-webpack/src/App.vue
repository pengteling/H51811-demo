<template>
  <div class="container">
    <router-view class="main"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>
<style lang="scss">
html,body{
  overflow: hidden;
  margin: 0;
}
ul,li{
  margin: 0;
  padding: 0;
  list-style: none
}
a{
  text-decoration: none
}
.container{
  display: flex;
  flex-direction: column;
  height:100vh;
  .main{
    flex:1 1 0%;
  }
  .nav{
    flex:0 0 50px;
  }
}

</style>
