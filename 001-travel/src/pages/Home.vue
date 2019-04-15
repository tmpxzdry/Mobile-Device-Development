<template lang="pug">
  div
    home-header
    home-swiper(:swipers="swiperList")
    home-icons(:icons="iconList")
    div 测试
</template>
<script>
import HomeHeader from "@/components/HomeHeader.vue";
import HomeSwiper from "@/components/HomeSwiper.vue";
import HomeIcons from "@/components/HomeIcons.vue";
export default {
  name: "Home",
  components: { HomeHeader, HomeSwiper, HomeIcons },
  data() {
    return {
      swiperList: [
        {
          id: "001",
          src:
            "https://img1.qunarzz.com/vc/5a/8f/69/16cbf52c43d04f6940a6786679.jpg",
          alt: "三峡踏青"
        },
        {
          id: "002",
          src:
            "https://img1.qunarzz.com/vc/bf/9d/a3/67b7b37511fa26a78298bf1da1.jpg",
          alt: "五星级酒店"
        },
        {
          id: "003",
          src:
            "https://img1.qunarzz.com/vc/b8/25/51/f6173dbd12c1a0f783abe73855.jpg",
          alt: "春游"
        },
        {
          id: "004",
          src:
            "https://img1.qunarzz.com/vc/d3/79/22/687da305c0ea0532a2c7d3cc23.jpg",
          alt: "春季踏青行"
        },
        {
          id: "005",
          src:
            "https://img1.qunarzz.com/vc/80/80/1a/72b8f423c33e581ca72fc136da.jpg",
          alt: "探春大会"
        }
      ],
      iconList: [
        {
          id: "0001",
          src:
            "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
          alt: "景点门票"
        },
        {
          id: "0002",
          src:
            "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
          alt: "滑雪季"
        },
        {
          id: "0003",
          src:
            "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
          alt: "泡温泉"
        },
        {
          id: "0004",
          src:
            "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
          alt: "动植园"
        },
        {
          id: "0005",
          src:
            "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
          alt: "游乐园"
        },
        {
          id: "0006",
          src:
            "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
          alt: "必游榜单"
        },
        {
          id: "0007",
          src:
            "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
          alt: "演出"
        },
        {
          id: "0008",
          src:
            "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
          alt: "城市观光"
        },
        {
          id: "0009",
          src:
            "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
          alt: "一日游"
        },
        {
          id: "0010",
          src:
            "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
          alt: "城市观光瓦大我的阿瓦打我"
        },
        {
          id: "0011",
          src:
            "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
          alt: "一日游达"
        }
      ]
    };
  }
};
</script>