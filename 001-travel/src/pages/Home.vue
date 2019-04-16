<template lang="pug">
  div.container
    home-header(:city="city")
    home-swiper(:swipers="swiperList")
    home-icons(:icons="iconList")
    home-recommend(:recommends="recommendList")
    home-weekend(:weekends="weekendList")
    div 测试
</template>
<script>
import HomeHeader from "@/components/HomeHeader.vue";
import HomeSwiper from "@/components/HomeSwiper.vue";
import HomeIcons from "@/components/HomeIcons.vue";
import HomeRecommend from "@/components/HomeRecommend.vue";
import HomeWeekend from "@/components/HomeWeekend.vue";
import api from "../api/getHomeData";

export default {
  name: "Home",
  components: { HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend },
  data() {
    return {
      city: "",
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      api
        .getHomeData()
        .then(r => {
          if (r.status == "ok") {
            console.log(r);
            let data = r.HomeData[0];
            this.city = data.city;
            this.swiperList = data.swiperList;
            this.iconList = data.iconList;
            this.recommendList = data.recommendList;
            this.weekendList = data.weekendList;
          } else {
            console.log("获取数据失败");
          }
        })
        .catch(e => {
          alert("会话过期，请手动刷新");
        });
    }
  }
};
</script>
<style lang="stylus">
.container {
  background: #eee;
}
</style>