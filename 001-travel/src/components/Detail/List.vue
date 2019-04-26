<template lang="pug">
div
  div.item(v-for="(item,index) of list" :key="index")
    div.item-title.border-bottom
      span.item-title-icon 
      span {{item.title}}
    div(v-if="item.children").item-children
      detail-list(:list="item.children")
  
</template>
<script>
export default {
  name: "DetailList", //名字的作用之一，递归组件
  props: {
    list: Array
  }
};
</script>
<style lang="stylus" scoped>
@import '~@style/color.styl';

.item {
  .item-title {
    line-height: 0.8rem;
    font-size: 0.32rem;
    padding: 0 0.2rem;

    .item-title-icon {
      display: inline-block;
      position: relative;
      left: 0.06rem;
      top: 0.1rem;
      width: 0.36rem;
      height: 0.36rem;
      margin-right: 0.1rem;
      background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat;
      background-size: 0.4rem 3rem;
    }
  }

  .item-children {
    padding: 0 0.15rem;
  }
}
</style>