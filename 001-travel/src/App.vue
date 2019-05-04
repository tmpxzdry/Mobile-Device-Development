<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <PCALERT v-if="isPc" @close="closeQR()"/>
  </div>
</template>

<script>
import PCALERT from "@/components/Qrcode.vue";

export default {
  name: "app",
  components: { PCALERT },
  data() {
    return {
      isPc: false
    };
  },
  mounted(){
    this.webJudgment();
  },
  methods: {
    closeQR() {
      this.isPc = false;
    },
    webJudgment() {
      var userClient = navigator.userAgent.toLowerCase();
      var isIPad = userClient.match(/ipad/i) == "ipad";
      var isIPhoneOs = userClient.match(/iphone os/i) == "iphone os";
      var isMidp = userClient.match(/midp/i) == "midp";
      var isUc7 = userClient.match(/ucweb/i) == "ucweb";
      var isAndroid = userClient.match(/android/i) == "android";
      var isCE = userClient.match(/windows ce/i) == "windows ce";
      var isWM = userClient.match(/windows mobile/i) == "windows mobile";
      !isIPad&&!isIPhoneOs&&!isMidp&&!isUc7&&!isAndroid&&!isCE&&!isWM&&(this.isPc=true)
    }
  }
};
</script>

<style lang="stylus"></style>
