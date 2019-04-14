<template lang="pug">
  div
    home-header
    home-swiper(:swipers="swiperList")
    div 测试
</template>
<script>
import HomeHeader from "@/components/HomeHeader.vue";
import HomeSwiper from "@/components/HomeSwiper.vue";
export default {
  name: "Home",
  components: { HomeHeader, HomeSwiper },
  data() {
    return {
      swiperList: [
        {
          id:"001",
          src:
            "https://img1.qunarzz.com/vc/5a/8f/69/16cbf52c43d04f6940a6786679.jpg",
          alt: "三峡踏青"
        },
        {
          id:"002",
          src:
            "https://img1.qunarzz.com/vc/bf/9d/a3/67b7b37511fa26a78298bf1da1.jpg",
          alt: "五星级酒店"
        },
        {
          id:"003",
          src:
            "https://img1.qunarzz.com/vc/b8/25/51/f6173dbd12c1a0f783abe73855.jpg",
          alt: "春游"
        },
        {
          id:"004",
          src:
            "https://img1.qunarzz.com/vc/d3/79/22/687da305c0ea0532a2c7d3cc23.jpg",
          alt: "春季踏青行"
        },
        {
          id:"005",
          src:
            "https://img1.qunarzz.com/vc/80/80/1a/72b8f423c33e581ca72fc136da.jpg",
          alt: "探春大会"
        }
      ]
    };
  }
};
</script>