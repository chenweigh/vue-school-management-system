/**
 * Confirm 弹框的状态管理
 */

export const types = {
  SHOW: "CONFIRM/SHOW",
  HIDE: "CONFIRM/HIDE"
};
const state = {
  status: false,
  content: "我是confirm视图",
  cancelText: "取消",
  submitText: "确定",
  cancelCB: () => {
    console.log("取消(confirm)");
    //   store.commit(types.HIDE);
  },
  submitCB: () => {
    console.log("确定(confirm)");
  }
};
const mutations = {
  [types.SHOW](state, dic) {
    state.status = true;
    if (dic && dic.hasOwnProperty("content")) {
      state.content = dic.content;
    }
    if (dic && dic.hasOwnProperty("cancelText")) {
      state.cancelText = dic.cancelText;
    }
    if (dic && dic.hasOwnProperty("submitText")) {
      state.submitText = dic.submitText;
    }
    if (dic && dic.hasOwnProperty("cancelCB")) {
      state.cancelCB = dic.cancelCB;
    }
    if (dic && dic.hasOwnProperty("submitCB")) {
      state.submitCB = dic.submitCB;
    }
  },
  [types.HIDE](state) {
    state.status = false;
  }
};
const actions = {};
const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
};
