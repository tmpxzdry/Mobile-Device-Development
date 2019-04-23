<template lang="pug">
div
  router-link(v-show="showAbs" to="/" tag="div").header-abs
    div.iconfont.header-back-icon &#xe624;
  div.header-fixed(
    v-show="!showAbs"
    :style="opacityStyle"
  )
    div 景点详情
    router-link(to="/"): div.iconfont.header-fixed-back &#xe624;
  div.content
</template>
<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  activated() {
    //keep-alive钩子
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity > 1 ? 1 : opacity;
        this.opacityStyle = {
          opacity
        };
        this.showAbs = false;
      } else {
        this.showAbs = true;
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@style/color.styl';

.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  font-size: 0.32rem;
  height: $header_height;
  line-height: $header_height;
  text-align: center;
  color: #fff;
  background: $bg_color;

  .header-fixed-back {
    top: 0;
    left: 0;
    width: 0.64rem;
    font-size: 0.4rem;
    text-align: center;
    position: absolute;
    color: #fff;
  }
}

.content {
  height: 50rem;
}

.header-abs {
  position: absolute;
  left: 0.2rem;
  top: 0.2rem;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 0.4rem;
  background: rgba(0, 0, 0, 0.8);
  text-align: center;
  line-height: 0.8rem;

  .header-back-icon {
    color: #fff;
    font-size: 0.4rem;
  }
}
</style>