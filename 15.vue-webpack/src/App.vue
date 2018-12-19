<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div class="container">
        <a
          class="navbar-brand"
          href="#"
        >
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div
          id="navbarNav"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <!-- <a
                class="nav-link"
                href="#"
              >
                首页 <span class="sr-only">
                  (current)
                </span>
              </a> -->

              <RouterLink
                class="nav-link"
                :to="{name:'Home'}"
              >
                首页<span class="sr-only">
                  (current)
                </span>
              </RouterLink>
            </li>
            <li class="nav-item">
              <!-- <a
                class="nav-link"
                href="#/about"
              >
                关于我们
              </a> -->
              <router-link
                class="nav-link"
                :to="{name:'About'}"
              >
                关于我们
              </router-link>
            </li>
            <li class="nav-item">
              <!-- <a
                class="nav-link"
                href="#/user"
              >
                用户中心
              </a> -->
              <RouterLink
                class="nav-link"
                :to="{name:'User', params:{userid:5}}"
              >
                用户5
              </RouterLink>
            </li>
            <li class="nav-item">
              <!-- <a
                class="nav-link"
                href="#/contact"
              >
                联系我们
              </a> -->
              <router-link
                class="nav-link"
                :to="{name:'Map'}"
              >
                联系我们
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <div style="height:100px" />
      <div class="row">
        <div class="col-12">
          <router-view name="header"></router-view>
          <RouterView />
          <router-view name="footer"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/dist/js/bootstrap'

export default {

}
</script>
