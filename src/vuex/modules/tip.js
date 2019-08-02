/**
 * 警告弹框的状态管理
 */

export const types = {
  SHOW: "TIP/SHOW",
  HIDE: "TIP/HIDE"
};
const state = {
  status: false,
  message: "我是警告视图",
  submitCB: () => {
    console.log("确定(tip)");
  }
};
const mutations = {
  [types.SHOW](state, dic) {
    state.status = true;
    if (dic && dic.hasOwnProperty("message")) {
      state.message = dic.message;
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
