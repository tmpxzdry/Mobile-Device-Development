<template lang="pug">
div.icons-wrap 
  div.icons
    swiper()
      swiper-slide(v-for="(page,index) in pages" :key="index")
        div.icon(v-for="icon in page" :key="icon.id")
          div.icon-img 
            img.icon-img-content(:src="icon.src" :alt="icon.alt")
          p.icon-desc {{icon.alt}}
  </template>
<script>
export default {
  name: "HomeIcons",
  props: {
    icons: {
      type: Array,
      required: true
    }
  },
  mounted() {
    console.log(this.pages);
  },
  computed: {
    pages() {
      const pages = [];
      this.icons.forEach((item, index) => {
        const page = Math.floor(index / 8);
        !pages[page] && (pages[page] = []);
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@style/color.styl';
@import '~@style/mixins.styl';

.icons >>> .swiper-container { // 宽高比为2
  height: 0;
  padding-bottom: 50%; // 外层元素宽度的50%
}

.icon {
  width: 25%;
  overflow: hidden;
  padding-bottom: 25%;
  float: left;
  position: relative;
  height: 0;

  .icon-img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0.44rem;
    box-sizing: border-box;
    padding: 0.1rem;

    .icon-img-content {
      height: 100%;
      display: block;
      margin: 0 auto;
    }
  }

  .icon-desc {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 0.44rem;
    line-height: 0.44rem;
    color: $dark_text_color;
    text-align: center;
    ellip();
  }
}
</style>

