<template lang="pug">
div
  city-header
  city-search(:cities="cities")
  city-list(:cities="cities" :hotCities="hotCities" :letter="letter")
  city-alphabet(:cities="cities" @change="handleLetterChange")
</template>
<script>
import CityHeader from "@/components/City/Header.vue";
import CitySearch from "@/components/City/Search.vue";
import CityList from "@/components/City/List.vue";
import CityAlphabet from "@/components/City/Alphabet.vue";
import api from "../api/getCityData.js";

export default {
  name: "City",
  components: { CityHeader, CitySearch, CityList, CityAlphabet },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ""
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      api.getCityData().then(r => {
        if (r.status == "ok") {
          let cityData = r.cityData;
          this.cities = cityData.cities;
          this.hotCities = cityData.hotCities;
        } else {
          console.log("获取数据失败");
        }
      });
    },
    handleLetterChange(letter) {
      this.letter = letter;
    }
  }
};
</script>
<style lang="stylus" scoped></style>
