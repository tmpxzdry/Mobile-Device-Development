<template lang="pug">
ul.list(ref="ul")
  li.item(
    @click="handleLetterClick" 
    v-for="item in letters" 
    :key="item"
    :ref="item"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd") {{item}}

</template>
<script>

export default {
  name: "CityAlphabet",
  props: {
    cities: {
      type: Object
    }
  },
  computed: {
    letters() {
      let letters = [];
      for (let key in this.cities) letters.push(key);
      return letters;
    }
  },
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    };
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop;
  },
  methods: {
    handleLetterClick(e) {
      this.$emit("change", e.target.innerText);
      this.isActive(e.target);
    },
    handleTouchStart(e) {
      this.touchStatus = true;
      this.addActive(e.target);
    },
    handleTouchMove(e) {
      //延迟16ms执行滑动操作，如果这16ms里又进行了新的滑动，就取消之clear
      //之前的操作，这样就可以大大降低函数的执行频率
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        const touchY = e.touches[0].clientY - 79;
        const index = Math.floor((touchY - this.startY) / 20);
        if (index >= 0 && index < this.letters.length) {
          this.$emit("change", this.letters[index]);
          let target = this.$refs[this.letters[index]][0];

          this.isActive(target);
        }
      },16);
    },
    handleTouchEnd() {
      this.touchStatus = false;
      // this.removeActive();
    },
    isActive(target) {
      this.removeActive();
      this.addActive(target);
    },
    addActive(target) {
      target.classList.add("active");
    },
    removeActive() {
      let lis = this.$refs.ul.children;
      for (let li = 0; li < lis.length; li++) {
        lis[li].classList.remove("active");
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '~@style/color.styl';

.list .item.active {
  color: tomato;
}

.list {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  top: 1.58rem;
  right: 0;
  bottom: 0;
  width: 0.4rem;

  // background: red;
  .item {
    text-align: center;
    line-height: 0.4rem;
    color: $bg_color;
  }
}
</style>
