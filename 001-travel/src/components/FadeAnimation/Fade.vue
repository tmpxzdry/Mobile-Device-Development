<template lang="pug">
div 
  transition(name="fade")
    slot
</template>
<script>
export default {
  name: "FadeAnimation"
};
</script>
<style lang="stylus">
.fade-enter, .fade-leave-to {
  opacity: 0;
}
//注释：入场效果用v-if才会生效,v-show不行
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
</style>