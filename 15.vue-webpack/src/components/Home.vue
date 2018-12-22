<template>
  <div>
    <nav>
      <router-link :to="{name:'Mobile'}">
        手机
      </router-link>
      <router-link :to="{name:'TV'}">
        电视
      </router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
