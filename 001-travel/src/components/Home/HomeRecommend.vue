<template lang="pug">
div.recommend
  div.title-wrap
    span.title-icon: img(src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png")
    span.title 猜你喜欢
  ul
    router-link.item.border-bottom(:to="'/detail/'+recommend.id" tag="li" v-for="recommend in recommends" :key="recommend.id")
      div.item-img-wrap: img.item-img(:src="recommend.src")
      div.item-info
        p.item-title {{cut(recommend.title,5)}}
        p.item-desc {{cut(recommend.desc,12)}}
        div.detail.clear
          span.price {{recommend.price}}
          // a.recommend-detail 查看详情
</template>
<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: {
      type: Array,
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
  padding: 0 0.2rem !important;

  &>*:last-of-type.border-bottom::before {
    border: none;
  }
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
  display: flex;
  // overflow: hidden;
  height: 1.9rem;
  box-sizing: border-box;
  padding: 0.2rem 0 0.3rem 0;

  // background: #c1c;
  .item-img {
    width: 1.5rem;
    height: 1.5rem;
  }

  .item-info {
    flex: 1;
    padding-left: 0.3rem;
    margin-bottom: 0.2rem;

    .item-title {
      font-size: 0.28rem;
      font-weight: 500;
      padding: 0.08rem 0 0.12rem 0;
    }

    .item-desc {
      font-size: 0.24rem;
      color: #999999;
    }

    .detail {
      .price {
        color: #c10;
        // margin-right: 3.5rem;
        float: left;
      }

      .recommend-detail {
        float: right;
        margin-right: 0.06rem;
      }

      line-height: 0.4rem;
      margin-top: 0.4rem;
      color: #fff;
    }
  }
}

.clear:after, .clear:before {
  content: '';
  display: block;
  clear: both;
}
</style>
