<template lang="pug">
div.container(@click="hiddenGallary")
  div.wrapper
    swiper(:options='swiperOption' v-if="showSwiper")
      swiper-slide( v-for="item of swiperGallarys" :key="item.id"): img.gallary-img(:src="item.src" )
      .swiper-pagination(slot='pagination')  
</template>
<script>
export default {
  name: "Gallary",
  props: {
    swiperGallarys: Array,
    default() {
      return [
        // {id:1,
        // src:"http://img1.qunarzz.com/sight/p0/1803/f9/f96ac7520e964ad4a3.img.jpg_350x240_51e3c791.jpg"},
        // {id:2,
        // src:"http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_350x240_cb0e55ff.jpg"}
      ];
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        paginationType: "fraction",
        // loop: true,
        autoplay: 5000, //3.0以下api
        observeParents: true, //父级元素变化自我刷新
        observer: true
      }
    };
  },
  computed: {
    showSwiper() {
      return !!this.swiperGallarys.length;
    }
  },
  methods: {
    hiddenGallary() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="stylus" scoped>
.container >>>.swiper-container {
  overflow: inherit;
}

.container {
  // touch-action: none;
  display: flex;
  z-index: 99;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #000;

  .wrapper {
    background: #fff;
    width: 100%;
    height: 0;
    padding-bottom: 66%;
    // overflow: hidden;
  }

  .gallary-img {
    width: 100%;
  }

  .swiper-pagination {
    color: #fff;
    bottom: -1rem;
  }
}
</style>