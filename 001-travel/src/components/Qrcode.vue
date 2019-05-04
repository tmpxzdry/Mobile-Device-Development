<template>
  <div class="alert-comp">
    <div class="alert-text">
      此项目为移动端项目，请使用手机访问
      <br>或关闭本页在开发者工具中使用手机模式查看
    </div>
    <div class="qr-code-wrapper">
      <img src="https://www.xzdry.net/api/media/1556981520098-qunaer.png" alt="qr-code">
      <div class="qr-code-hint">手机浏览请扫描上方二维码</div>
    </div>
    <div class="close" @click="close">关闭</div>
  </div>
</template>

<script>
export default {
  name: "PCALERT",
  data() {
    return {
      url: "https://www.xzdry.net/qunaer/"
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    makeCode(){
      
    }
  }
};
</script>

<style lang="stylus">
.alert-comp {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  background: rgba(0, 0, 0, 0.9);
  text-align: center;

  .close {
    color: #fff;
    font-size: 20px;
    position: absolute;
    right: 65px;
    top: 20px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  .alert-text {
    margin-top: 60px;
    font-size: 16px;
    color: #fff;
    line-height: 2em;
  }

  .qr-code-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -40%);

    .qr-code-hint {
      margin-top: 40px;
      font-size: 16px;
      color: #fff;
    }
  }
}
</style>
