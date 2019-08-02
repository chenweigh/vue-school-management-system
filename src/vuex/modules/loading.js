/**
 * 加载动画的状态管理
 */

export const types = {
  SHOW: "LOADING/SHOW",
  HIDE: "LOADING/HIDE",
  GET_LOADING_STATUS: "LOADING/GET_LOADING_STATUS"
};
const state = {
  status: false
};
const mutations = {
  [types.SHOW](state) {
    state.status = true;
  },
  [types.HIDE](state) {
    state.status = false;
  }
};
const actions = {};
const getters = {
  [types.GET_LOADING_STATUS](state) {
    return state.status;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
