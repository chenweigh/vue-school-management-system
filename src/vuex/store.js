import Vue from "vue";
import Vuex from "vuex";

import example from './modules/example.js'
import loading from './modules/loading.js'
import tip from './modules/tip.js'
import confirm from './modules/confirm.js'
import toast from './modules/toast.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    count:0,
  },
  mutations: {},
  actions: {},
  getters:{},
  modules:{
    example,
    loading,
    tip,
    confirm,
    toast,
  }
})
export default store;
/**
 * 1. 访问模块的状态: store.state.example
 * 2. vuex store 是全局注册的，因为使用带命名空间的模块可以解决名称冲突的问题
 */
