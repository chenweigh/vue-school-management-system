<template>
  <div id="app">
    <router-view></router-view>
    <example v-if="exampleStatus" />
    <Loading v-if="loadingStatus" />
    <Tip v-if="tipStatus" :message="tipMessage" :submit-event="tipSubmitCB" />
    <Confirm
      v-if="confirmStatus"
      :content="confirmContent"
      :cancel-text="confirmCancelText"
      :submit-text="confirmSubmitText"
      :cancel-event="confirmCancelCB"
      :submit-event="confirmSubmitCB"
    />
    <Toast v-if="toastStatus" :message="toastMessage" :hide-event="hideToast" />
  </div>
</template>

<script>
import Login from "./views/Login";
import Home from "./views/Home";
import example from "./views/example";
import Loading from "./components/Loading";
import Tip from "./components/Tip";
import Confirm from "./components/Confirm";
import Toast from "./components/Toast";

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import { types as LoadingTypes } from "./vuex/modules/loading";
import { types as TipTypes } from "./vuex/modules/tip";
import { types as ConfirmTypes } from "./vuex/modules/confirm";
import { types as ToastTypes } from "./vuex/modules/toast";

export default {
  name: "app",
  data() {
    return {
      exampleStatus: false
    };
  },
  components: {
    example,
    Loading,
    Tip,
    Confirm,
    Toast,

    Login,
    Home
  },
  computed: {
    ...mapState({
      //confirm 组件需要的参数
      confirmStatus: state => state.confirm.status,
      confirmContent: state => state.confirm.content,
      confirmCancelCB: state => state.confirm.cancelCB,
      confirmSubmitCB: state => state.confirm.submitCB,
      confirmCancelText: state => state.confirm.cancelText,
      confirmSubmitText: state => state.confirm.submitText,

      //tip 组件
      tipStatus: state => state.tip.status,
      tipMessage: state => state.tip.message,
      tipSubmitCB: state => state.tip.submitCB,

      //loading 组件
      loadingStatus: state => state.loading.status,

      //toast 组件
      toastStatus: state => state.toast.status,
      toastMessage: state => state.toast.message
    })
  },
  methods: {
    ...mapMutations({
      showLoading: LoadingTypes.SHOW,
      hideLoading: LoadingTypes.HIDE,

      showTip: TipTypes.SHOW,
      hideTip: TipTypes.HIDE,

      showConfirm: ConfirmTypes.SHOW,
      hideConfirm: ConfirmTypes.HIDE,

      showToast: ToastTypes.SHOW,
      hideToast: ToastTypes.HIDE
    })
  },
  create() {},
  mounted() {
    /**
     * confirm 调用方式
     */
    var dic = {
      content: "很多事",
      submitCB: () => {
        console.log("点了确定");
      },
      cancelCB: () => {
        console.log("点了取消");
      },
      submitText: "YES",
      cancelText: "NO"
    };
    this.showConfirm(dic);
    this.hideConfirm();

    /**
     * tip 调用方式
     */
    var dic = {
      message: "我就是 tip",
      submitCB: () => {
        console.log("点了确定");
      }
    };
    this.showTip(dic);
    this.hideTip();

    /**
     * loading 调用方式
     */
    this.showLoading();
    this.hideLoading();

    /**
     * toast 调用方式
     */
    var dic = {
      message: "我就是 toast"
    };
    this.showToast(dic);
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  word-break: break-all;
  /*word-wrap: break-word;*/
  outline: none;
  /*-webkit-user-select: none;*/
}
input,
textarea {
  -webkit-user-select: auto;
}
button {
  border: none;
  background: none;
  outline: none;
  -webkit-appearance: none;
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
