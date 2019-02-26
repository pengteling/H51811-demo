<template>
  <!-- 只缓存Search组件 需要知道name 也可以能过meta中保存需要缓存的字段 https://www.jianshu.com/p/0b0222954483-->
  <keep-alive include="Search">
    <router-view></router-view>
  </keep-alive>
</template>
