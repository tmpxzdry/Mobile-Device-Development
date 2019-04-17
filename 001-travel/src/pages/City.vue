<template lang="pug">
div
  city-header
  city-search
  city-list
  city-alphabet
</template>
<script>
import CityHeader from "@/components/City/Header.vue";
import CitySearch from "@/components/City/Search.vue";
import CityList from "@/components/City/List.vue";
import CityAlphabet from "@/components/City/Alphabet.vue";

export default {
  name: "City",
  components: { CityHeader, CitySearch, CityList,CityAlphabet }
};
</script>
<style lang="stylus" scoped></style>
