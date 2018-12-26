<template>
  <div class="components-header">
    <router-link :to="{name:'Player'}">
      <img
        src="./../images/logo.png"
        alt=""
        class="logo"
      >
    </router-link>
    <h1 class="caption">
      Vue music player
    </h1>
  </div>
</template>

<script>
import './header.scss'

export default {
  name: 'Header',
}
</script>
