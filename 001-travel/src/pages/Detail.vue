<template lang="pug">
div 
  Banner(:gallary="gallary" :imgSrc="bannerImg" :sightname="sightName")
  Header
</template>
<script>
import Banner from "@/components/Detail/Banner.vue";
import Header from "@/components/Detail/Header.vue";

import api from "../api/getDetailData.js";
export default {
  name: "Detail",
  components: { Banner, Header },
  data() {
    return {
      bannerImg: "",
      sightName: "",
      gallary: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      api.getDetailData().then(r => {
        if (r.status == "ok") {
          let data = r.detailData;
          this.bannerImg = data.bannerImg;
          this.sightName = data.sightName;
          this.gallary = data.gallaryImgs;
        }
      });
    }
  }
};
</script>
<style lang="stylus"></style>