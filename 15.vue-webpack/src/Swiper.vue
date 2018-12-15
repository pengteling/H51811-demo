<template>
  <div
    ref="slider"
    class="swiper-container"
  >
    <div class="swiper-wrapper">
      <div
        v-for="(slider,index) in banners"
        :key="index"
        class="swiper-slide"
      >
        <img
          :src="slider.imgUrl"
          alt=""
        >
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div
      ref="pagination"
      class="swiper-pagination"
    />
  </div>
</template>

<script>
// import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'

export default {
  data() {
    return {
      banners: [{
        sourceUrl: 'https://i1.mifile.cn/a4/xmad_15234553192824_sTkYv.jpg',
        imgUrl: 'https://i1.mifile.cn/a4/xmad_15234553192824_sTkYv.jpg',
      },
      {
        sourceUrl: 'https://i1.mifile.cn/a4/xmad_1523852977495_RedjU.jpg',
        imgUrl: 'https://i1.mifile.cn/a4/xmad_1523852977495_RedjU.jpg',
      },
      {
        sourceUrl: 'https://i1.mifile.cn/a4/xmad_15239326176265_HDrpS.jpg',
        imgUrl: 'https://i1.mifile.cn/a4/xmad_15239326176265_HDrpS.jpg',
      },
      ],
    }
  },
  mounted() {
    console.log(this.$refs)
    /* eslint no-new : 'off' */
    // new Swiper(this.$refs.slider, {
    //   // 如果需要分页器
    //   pagination: {
    //     el: this.$refs.pagination,
    //   },

    // })
    /* eslint no-unused-vars:'off' */
    const mySwiper = new Swiper('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项
      // loop: true, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: true,
    })
  },
}
</script>
<style lang="scss">
// @import url();
@import '~swiper/dist/css/swiper.css';
.swiper-container img{
  width: 100%;
}
</style>
