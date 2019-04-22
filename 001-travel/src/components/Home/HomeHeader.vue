<template lang="pug">
  div.header
    div.header-left: div.iconfont.back-icon &#xe624;
    div.header-input 
      span.iconfont &#xe632; 
      span 输入城市/景点/游玩/主题
    router-link(to="/city").header-right 
      span.city {{cut(this.city)}}
      span.triangle
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "HomeHeader",
  computed:{
    ...mapState(['city'])
  },
  methods: {
    cut(value) {
      return value.length > 5 ? value.substr(0, 4) : value;
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@style/color.styl';
@import '~@style/mixins.styl';

.triangle {
  position: absolute;
  font-size: 0.24rem;
  margin-left: -0.1rem;

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
  line-height: $header_height;
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
    min-width: 1.04rem;
    padding: 0 0.1rem;
    float: right;
    color: #fff;
    text-align: center;
    margin-right: 0.1rem;
    margin-left: 0.1rem;

    // text-align: center;
    .city {
      // ellip();
      padding-right: 0.1rem;
      font-size: 0.25rem;
      // min-width: 1.04rem;
      letter-spacing: 0.03rem;
    }
  }
}
</style>