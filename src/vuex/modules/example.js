/**
 * `vuex` 中的一个 `module` 样例
 * 默认情况下，模块内部的 `action`、`mutation`、`getter`、是注册在全局命名空间的，这样使得多个模块能够对同一mutation 或 action 做出相应
 * 通过添加 `namespaced:true` 可以使模块具有更高的封装度和复用性，
 * 当模块被注册后，它所有的 `getter`、`action`、`mutation` 都会自动根据模块注册的路径调整命名，解决不同模块内名称冲突问题
 * 模块内的状态state已经是嵌套的了，因此使用 `namespaced` 属性不会对其产生影响
 * 比如原来 `actions` 中一个属性名为 `action_name`的，现在就变成了`moudle_name\action_name`
 * 若需要在全局命名空间内分发 `action` 或 `mutation`，将`{root:true}`作为第三个参数传给 `dispatch` 或 `commit` 即可
 */

/**
 * 对于 getters、actions、mutations 中的事件类型统一在此进行定义
 */
 export const types = {
  MUTATION_TYPE_NAME: "EXAMPLE/MUTATION_TYPE_NAME",
  ACTION_TYPE_NAME: "EXAMPLE/ACTION_TYPE_NAME",
  ACTION_TYPE_NAME_TWO:"EXAMPLE/ACTION_TYPE_NAME_TWO",
  GETTER_TYPE_NAME:"EXAMPLE/GETTER_TYPE_NAME",
  GETTER_TYPE_NAME1:"EXAMPLE/GETTER_TYPE_NAME1"
};

/**
 * `state` 就是该模块内部状态树
 */
 const state = {
  count: 1,
  data:["I", "am", "a", "student"]
};

/**
 * mutations 类似于 react 中的 actions
 * 1. 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
 * 2. mutation 必须是同步函数, vuex 中 mutation 都是同步事务
 * 3. 每个 mutation 都有一个字符串的事件类型 (type) 和 一个回调函数 (handler)
 * 4. 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
 * 5. param_dic = {param1:param1_value, param2:param2_value, ...}
 * 6. 调用方式：commit('mutation_type_name')
 */
const mutations = {
  [types.MUTATION_TYPE_NAME](state, param_dic){
    //这里的 `state` 对象是模块的局部状态
    state.count++
  }
}

/**
 * actions 类似于 mutation
 * 1. 不同的是，action 提交的是 mutation，而不是直接更改状态
 * 2. Action 可以包含任意异步操作
 * 3. Action 通过 store.dispatch 方法触发： store.dispatch('action_name', {param1:""})(载荷式) 或 store.dispatch({type:'action_name', param1:""})(对象式)
 * 4. Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
 * 5. 因此你可以调用 context.commit 提交一个 mutation 
 * 6. 或者通过 context.state 和 context.getters 来获取 state 和 getters
 * 7. param_dic = {param1:param1_value, param2:param2_value, ...}
 * 8. 调用方式：dispatch('action_type_name')
 */
const actions = {
  [types.ACTION_TYPE_NAME](context, param_dic){
    context.commit(types.MUTATION_TYPE_NAME, param_dic)
  },
  [types.ACTION_TYPE_NAME_TWO]({dispatch, commit, state, rootState, rootGetter}){

  }
}

/**
 * getters (类似 react 中的 selectors)(可以认为是 store 中的计算属性)
 * 1. 从 store 中的 state 获取数据 
 * 2. 可以认为是 store 中的计算属性
 * 3. getter 接收 state 作为其第一个参数
 * 4. getter 可以接受其他 getter 作为第二个参数
 * 5. 调用方法：属性访问(getter 作为 vue 的响应式系统的一部分缓存其中) 或 方法访问(每次都会进行调用，而不会缓存结果)
 * 6. 调用方式：getters['getter_name']
 */
const getters = {
  [types.GETTER_TYPE_NAME](state, getters, rootState, rootGetter){
    //模块内部的 getter , 根节点状态会作为第三个参数暴露出来，根 getter 会作为第四个参数暴露出来
    return state.count + rootState.count
  },
  //通过方法访问，store.getters.getter_name1(id_value)
  [types.GETTER_TYPE_NAME1]: (state) => (id) => {
    return state
  }
}

const module = {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
export default module;
