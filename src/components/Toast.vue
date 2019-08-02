/**
 * toast 组件
 */
 
<template>
  <div class="errorToast">
    <div class="errorToast__text">{{message}}</div>
  </div>
</template>

<script>

export default {
  name: "Toast",
  props: {
    message: {
      type: String,
      required: true
    },
    hideEvent: Function
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  create() {},
  mounted() {
    this.timer = setTimeout(() => {
      this.hideEvent();
    }, 2000);
  }
};
</script>

<style lang="less" scoped>
.errorToast {
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 10000001;
    position: fixed; 
    display: flex;
    justify-content:center;
    align-items: center; 
  }
  
  .errorToast__text {
    max-width: 300px;
    max-height: 300px;
    padding: 15px;
    border-radius: 10px;
    color: #fff;
    font-size: 14px;
    background-color: #000;
  }
  
  
</style>
