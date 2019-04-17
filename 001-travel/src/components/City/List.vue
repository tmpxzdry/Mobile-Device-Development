<template lang="pug">
mixin area(title)
  div.area
    div.title.border-topbottom=title
    div.locations
      each n in new Array(7).fill(0)
        +location
mixin location
  div.btn-wrapper: div.location 北京
div.list(ref="scroll")
 div
  +area('当前城市')
  +area('热门城市')
  div.area
    div.title.border-topbottom A
    div.area-list
      div.area-item.border-bottom 阿拉尔
      div.area-item.border-bottom 阿拉尔
      div.area-item.border-bottom 阿拉尔
      div.area-item.border-bottom 阿拉尔
    div.title.border-topbottom A
    div.area-list
      div.area-item.border-bottom 阿拉尔
      div.area-item.border-bottom 阿拉尔
      div.area-item.border-bottom 阿拉尔
      div.area-item.border-bottom 阿拉尔
    div.title.border-topbottom A
    div.area-list
      div.area-item.border-bottom 阿拉尔
      div.area-item.border-bottom 阿拉尔
      div.area-item.border-bottom 阿拉尔
      div.area-item.border-bottom 阿拉尔
    div.title.border-topbottom A
    div.area-list
      div.area-item.border-bottom 阿拉尔
      div.area-item.border-bottom 阿拉尔
      div.area-item.border-bottom 阿拉尔
      div.area-item.border-bottom 阿拉尔


</template>
<script>
import Bscroll from "better-scroll";


export default {
  name: "CityList",
  mounted() {
    this.scroll = new Bscroll(this.$refs.scroll);
  }
};
</script>
<style lang="stylus" scoped>
@import '~@style/color.styl';

.list {
  overflow: hidden;
  position: absolute;
  top: 1.72rem;
  left: 0;
  right: 0;
  bottom: 0;
  // background: red;
}

.area-list {
  .area-item {
    line-height: 0.76rem;
    padding-left: 0.2rem;
  }
}

.border-topbottom {
  &:before, &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.title {
  line-height: 0.54rem;
  font-size: 0.26rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
}

.locations {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;

  .btn-wrapper {
    width: 33.333%;
    float: left;

    .location {
      text-align: center;
      margin: 0.1rem;
      border: 0.02rem solid #ccc;
      padding: 0.1rem 0;
      border-radius: 0.06rem;
    }
  }
}
</style>
