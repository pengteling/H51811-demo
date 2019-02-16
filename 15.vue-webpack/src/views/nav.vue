<template>
  <!--start top-nav -->
  <div
    id="topNav"
    class="top-nav"
  >
    <ul>
      <li class="cur">
        <router-link :to="{name:'newSong'}">
          新歌
        </router-link>
      </li>
      <li class>
        <a href="http://m.kugou.com/rank/list">
          排行
        </a>
      </li>
      <li class>
        <a href="http://m.kugou.com/plist/index">
          歌单
        </a>
      </li>
      <li class>
        <a href="http://m.kugou.com/singer/class">
          歌手
        </a>
      </li>
    </ul>
  </div>
  <!--end top-nav -->
</template>
