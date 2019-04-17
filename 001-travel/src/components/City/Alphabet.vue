<template lang="pug">
ul.list
  li.item A
  li.item A
  li.item A


</template>
<script>
</script>
<style lang="stylus" scoped>
@import '~@style/color.styl';

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;
  // background: red;

  .item {
    text-align: center;
    line-height: 0.4rem;
    color: $bg_color;
  }
}
</style>
