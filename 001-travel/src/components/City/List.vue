<template lang="pug">
mixin area(title)
  div.area
    div.title.border-topbottom=title
    div.locations
        +location
mixin location
  div.btn-wrapper: div.location {{cut(this.currentCity)}}
div.list(ref="scroll")
 div
  +area('当前城市')
  div.area
    div.title.border-topbottom 热门城市
    div.locations
      div.btn-wrapper(@click="changeCity(hot.name)" v-for="hot in hotCities" :key="hot.id"): div.location {{hot.name}}
  div.area(v-for="(citiesItem,key) of cities" :key="key" :ref="key")
    div.title.border-topbottom {{key}}
    div.area-list
      div.area-item.border-bottom(@click="changeCity(city.name)" v-for="city in citiesItem" :key="city.id") {{city.name}}
</template>
<script>
import Bscroll from "better-scroll";
import { mapState, mapMutations } from "vuex";

export default {
  name: "CityList",
  computed: {
    ...mapState({
      currentCity: "city"
    })
  },
  props: {
    hotCities: {
      type: Array
    },
    cities: {
      type: Object,
      required: true
    },
    letter: String
  },
  mounted() {
    this.scroll = new Bscroll(this.$refs.scroll);
  },
  methods: {
    changeCity(city) {
      // this.$store.commit("changeHotCity", city);
      this.changeHotCity(city);
      this.$router.push("/");
    },
    cut(value) {
      return value.length > 5 ? value.substr(0, 4) + "..." : value;
    },
    ...mapMutations(["changeHotCity"])//使用此接口不能和methods里的函数重名
  },
  watch: {
    letter() {
      const el = this.$refs[this.letter][0];
      this.scroll.scrollToElement(el); //自动滚动到某元素
    }
  }
  // beforeUpdate() {
  //   console.log(this.hotCities);
  //   console.log(this.cities);
  //   console.log(this.a);
  // }
};
</script>
<style lang="stylus" scoped>
@import '~@style/color.styl';

.list {
  overflow: hidden;
  position: absolute;
  top: 1.72rem;
  left: 0;
  right: 0;
  bottom: 0;
  // background: red;
}

.area-list {
  .area-item {
    line-height: 0.76rem;
    padding-left: 0.2rem;
  }
}

.border-topbottom {
  &:before, &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.title {
  line-height: 0.54rem;
  font-size: 0.26rem;
  background: #eee;
  padding-left: 0.2rem;
  color: #666;
}

.locations {
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
  overflow: hidden;

  .btn-wrapper {
    width: 33.333%;
    float: left;

    .location {
      text-align: center;
      margin: 0.1rem;
      border: 0.02rem solid #ccc;
      padding: 0.1rem 0;
      border-radius: 0.06rem;
    }
  }
}
</style>
