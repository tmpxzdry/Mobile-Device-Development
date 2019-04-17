<template lang="pug">
div
  city-header
  city-search
</template>
<script>
import CityHeader from "@/components/City/Header.vue";
import CitySearch from "@/components/City/Search.vue";

export default {
  name: "City",
  components: { CityHeader, CitySearch }
};
</script>
<style lang="stylus" scoped></style>
