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
import HomeHeader from "@/components/Home/HomeHeader.vue";
import HomeSwiper from "@/components/Home/HomeSwiper.vue";
import HomeIcons from "@/components/Home/HomeIcons.vue";
import HomeRecommend from "@/components/Home/HomeRecommend.vue";
import HomeWeekend from "@/components/Home/HomeWeekend.vue";
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
            let data = r.HomeData;
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