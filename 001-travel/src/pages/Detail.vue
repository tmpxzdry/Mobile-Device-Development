<template lang="pug">
div 
  Banner(:gallary="gallary" :imgSrc="bannerImg" :sightname="sightName")
  Header
  List(:list="list")
  div.fill-blank
</template>
<script>
import Banner from "@/components/Detail/Banner.vue";
import Header from "@/components/Detail/Header.vue";
import List from "@/components/Detail/List.vue";

import api from "../api/getDetailData.js";
export default {
  name: "Detail",
  components: { Banner, Header, List },
  data() {
    return {
      bannerImg: "",
      sightName: "",
      gallary: [],
      list: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      api.getDetailData(this.$route.params.id).then(r => {
        if (r.status == "ok") {
          let data = r.detailData;
          this.bannerImg = data.bannerImg;
          this.sightName = data.sightName;
          this.gallary = data.gallaryImgs;
          this.list = data.list;
        }
      });
    }
  }
};
</script>
<style lang="stylus">
.fill-blank {
  height: 50rem;
}
</style>