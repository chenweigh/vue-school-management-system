/**
 * 警告弹框组件
 */
 
<template>
  <div class="tip">
    <div class="tip__alert">
      <div class="tip__content">{{message}}</div>
      <div class="tip__btns">
        <a class="tip__btn" @click="submitEvent">确定</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "Tip",
  props: {
    message: {
      type: String,
      required: true
    },
    submitEvent:Function
  },
  data() {
    return {};
  },
  components: {},
  methods: {
  },
  create() {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.tip {
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 300;
  position: fixed;
}

.tip__alert {
  width: 280px;
  background: #fff;
  border-radius: 10px;
  left: 50%;
  top: 50%;
  border: 1px solid #efefef;
  margin: -50px 0 0 -140px;
  z-index: 10000002;
  position: fixed;
  text-align: center;
}

.tip__content {
  padding: 20px;
  border-bottom: solid 1px #efefef;
}

.tip__btns {
  font-size: 14px;
  height: 40px;
  line-height: 40px;
}

.tip__btn {
  color: #08c;
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
}
</style>
