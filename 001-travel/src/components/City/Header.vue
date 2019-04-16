<template lang="pug">
  div.header 城市选择
    router-link(to="/"): div.iconfont.header-back &#xe624;
</template>
<script>
export default {
  name: "CityHeader"
};
</script>
<style lang="stylus" scoped>
@import '~@style/color.styl';

.header {
  position: relative;
  font-size: 0.32rem;
  overflow: hidden;
  height: $header_heigth;
  line-height: $header_heigth;
  text-align: center;
  color: #fff;
  background: $bg_color;

  .header-back {
    top: 0;
    left: 0;
    width: 0.64rem;
    font-size: 0.4rem;
    text-align: center;
    position: absolute;
    color: #fff;
  }
}
</style>
