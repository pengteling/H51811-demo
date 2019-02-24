<template>
  <!--start top-nav -->
  <div
    id="topNav"
    class="top-nav"
  >
    <ul>
      <router-link
        :to="{name:'newSong'}"
        tag="li"
      >
        <a>新歌</a>
      </router-link>


      <router-link
        :to="{name:'toplist'}"
        tag="li"
      >
        <a>排行</a>
      </router-link>

      <router-link
        :to="{name:'plist'}"
        tag="li"
      >
        <a>歌单</a>
      </router-link>
      <router-link
        :to="{name:'search'}"
        tag="li"
      >
        <a>搜索</a>
      </router-link>
    </ul>
  </div>
  <!--end top-nav -->
</template>
