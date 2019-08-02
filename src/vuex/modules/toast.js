/**
 * toast弹框的状态管理
 */

export const types = {
    SHOW: "TOAST/SHOW",
    HIDE: "TOAST/HIDE"
  };
  const state = {
    status: false,
    message: "我是Toast视图"
  };
  const mutations = {
    [types.SHOW](state, dic) {
      state.status = true;
      if (dic && dic.hasOwnProperty("message")) {
        state.message = dic.message;
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
  