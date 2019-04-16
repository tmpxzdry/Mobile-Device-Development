<template lang="pug">
div.recommend
  div.title-wrap
    span.title-icon.iconfont &#xe61a;
    span.title 周末去哪儿
  ul
    li.item(v-for="item in weekends")
      div.item-img-wrap: img.item-img(:src="item.src")
      div.item-info
        p.item-title {{item.title}}
        p.item-desc {{item.desc}}
</template>
<script>
export default {
  name: "HomeWeekend",
  props: {
    weekends: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      recommondItem: {
        title: "温都水城大峡谷",
        desc: "你的不二选择你的不二选择你的不二选择你的不二选择你的不二选择"
      }
    };
  },
  methods: {
    cut(value, length) {
      //传入值和想保留的长度
      return value.length < length ? value : value.substr(0, length) + "...";
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@style/color.styl';

.recommend {
  margin-top: 0.3rem;
  background: #fff;
}

ul {
  padding: 0 0.2rem 0.01rem 0.2rem !important;
}

.title-wrap {
  line-height: 1rem;
  padding-bottom: 0.05rem;
  margin-top: 0.2rem;
  text-indent: 0.2rem;

  .title-icon {
    margin-right: 0.1rem;

    img {
      width: 0.4rem;
    }
  }

  .title {
    position: relative;
    top: 0.04rem;
    font-size: 0.3rem;
  }
}

.item {
  margin-bottom: 0.7rem;

  .item-img-wrap {
    height: 0;
    overflow: hidden;
    padding-bottom: 37.09%;
  }

  // background: #c1c;
  .item-img {
    width: 100%;
  }

  .item-info {
    padding-top: 0.2rem;
    margin-bottom: 0.4rem;

    .item-title {
      font-size: 0.28rem;
      font-weight: 500;
      padding: 0.08rem 0 0.12rem 0;
    }

    .item-desc {
      font-size: 0.24rem;
      color: #999999;
    }
  }
}
</style>
