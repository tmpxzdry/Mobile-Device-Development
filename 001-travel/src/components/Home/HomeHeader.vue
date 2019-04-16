<template lang="pug">
  div.header
    div.header-left: div.iconfont.back-icon &#xe624;
    div.header-input 
      span.iconfont &#xe632; 
      span 输入城市/景点/游玩/主题
    router-link(to="/city").header-right 
      span.city {{city}}
      span.triangle
</template>
<script>
export default {
  name: "HomeHeader",
  props: {
    city: String
  }
};
</script>
<style lang="stylus" scoped>
@import '~@style/color.styl';

.triangle {
  position: absolute;
  font-size: 0.24rem;

  &::after {
    height: 0;
    width: 0;
    border-width: 7px 6px 0px 6px;
    border-color: #fff transparent;
    border-style: solid;
    content: '';
    position: relative;
    top: 10px;
    left: 2px;
    border-radius: 3px 3px 0px 0px;
  }
}

// font-size=50px=1rem;
.header {
  display: flex;
  background: $bg_color;
  line-height: $header_heigth;
  color: #fff;

  .header-left {
    width: 0.64rem;
    float: left;

    .back-icon {
      text-align: center;
      font-size: 0.4rem;
    }
  }

  .header-input {
    padding-left: 0.2rem;
    color: #ccc;
    flex: 1;
    height: 0.63rem;
    line-height: 0.63rem;
    background: #fff;
    margin-top: 0.12rem;
    margin-left: 0.2rem;
    border-radius: 0.07rem;
  }

  .header-right {
    width: 1.24rem;
    float: right;
    color: #fff;

    // text-align: center;
    .city {
      margin-left: 0.18rem;
    }
  }
}
</style>