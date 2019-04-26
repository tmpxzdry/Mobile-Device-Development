<template lang="pug">
div
  div.banner(@click="showGallary")
    img.banner-img(:src="imgSrc")
    div.banner-info
      div.banner-title {{sightname}}
      div.banner-number
        span.iconfont.banner-icon &#xe6dd; {{gallarys.length}}
  gallary(@close="hiddenGallary" :swiperGallarys="gallary" v-show="show")
</template>
<script>
import Gallary from "@gallary/Gallary.vue";
export default {
  name: "Banner",
  props: {
    imgSrc: String,
    sightname: String,
    gallary: {
      type: Array
    }
  },
  data() {
    return {
      show: false,
      gallarys: {}
    };
  },
  // updated() {
  //   this.$el.scrollIntoView();
  // },
  methods: {
    showGallary() {
      this.show = true;
    },
    hiddenGallary() {
      this.show = false;
    }
  },
  components: { Gallary }
};
</script>
<style lang="stylus" scoped>
.banner {
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  position: relative;

  .banner-img {
    width: 100%;
  }

  .banner-info {
    display: flex;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 0.6rem;
    color: #fff;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));

    .banner-title {
      flex: 1;
      font-size: 0.32rem;
      padding: 0 0.2rem;
    }

    .banner-number {
      margin-top: 0.16rem;
      margin-right: 0.1rem;
      padding: 0 0.2rem 0.07rem 0.2rem;
      line-height: 0.4rem;
      height: 0.32rem;
      font-size: 0.24rem;
      border-radius: 0.2rem;
      background: rgba(0, 0, 0, 0.8);

      .banner-icon {
        font-size: 0.24rem;
      }
    }
  }
}
</style>