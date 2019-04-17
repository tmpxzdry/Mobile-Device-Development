<template lang="pug">
  div.search
    input.search-input(placeholder="输入城市名或拼音")
</template>
<script>
export default {
  name: "CitySearch"
};
</script>
<style lang="stylus" scoped>
@import '~@style/color.styl';

// .search {
//   height: 0.72rem;
//   padding: 0.2rem;
//   background: $bg_color;

//   .search-input {
//     box-sizing: border-box;
//     width: 100%;
//     padding: 0 0.1rem;
//     height: 0.62rem;
//     line-height: 0.62rem;
//     border-radius: 0.06rem;
//     color: #555;
//     text-align: center;
//   }
// }
.search {
  background: $bg_color;
  height: 0.72rem;
  padding: 0.1rem;

  .search-input {
    width: 100%;
    height: 0.64rem;
    line-height: 0.64rem;
    text-align: center;
    border-radius: 0.04rem;
    color: #444444;
    box-sizing: border-box;
    padding: 0 0.1rem;
  }
}
</style>
