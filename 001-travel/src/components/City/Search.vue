<template lang="pug">
div
  div.search
    input.search-input(v-model="keyword" placeholder="输入城市名或拼音")
  div.search-content(ref="search" v-show="keyword")
    ul
      li.search-item.border-bottom(@click="changeCity(city.name)" v-for="city of list" :key="city.id") {{city.name}}
      li(v-show="!list.length").search-item.border-bottom 没有找到该城市...
</template>
<script>
import Bscroll from "better-scroll";
import { mapMutations } from "vuex";

export default {
  name: "CitySearch",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  watch: {
    keyword() {
      this.timer && clearTimeout(this.timer);
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.search);
  },
  methods: {
    changeCity(city) {
      this.changeHotCity(city);
      this.$router.push("/");
      Object.assign(this.$data, this.$options.data());
    },
    ...mapMutations(["changeHotCity"])
  }
};
</script>
<style lang="stylus" scoped>
@import '~@style/color.styl';

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

.search-content {
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 1.72rem;
  left: 0;
  bottom: 0;
  right: 0;
  background: #eee;

  .search-item {
    line-height: 0.62rem;
    padding-left: 0.2rem;
    background: #fff;
    color: #666;
  }
}
</style>
