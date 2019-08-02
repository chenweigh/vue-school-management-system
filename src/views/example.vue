<template>
  <div class="example">
    <div class="example__container">
    <h3>我就是一个例子</h3>
    <p>根状态中的count:{{rootCount}}</p>
     <p>模块状态中的count:{{exampleCount}}</p>
     <p>模块状态中的count和根状态的和:{{totalCount}}</p>
     <button @click="add()">mutation触发模块 count+1</button>
     <button @click="action_add()">action触发模块 count+1</button>
     </div>
  </div>
</template>

<script>
/** 这是一个视图与 vuex 交互的示例.
 * 如果模块内部 namespaced:true，vuex store 是全局注册的，因此模块内部的 getters、actions、mutations里面的类型名会自动加上模块名前缀。
 * 根辅助函数中加上模块的前缀，如 mapGetters(['example/getter_type_name'])、mapMutations({mutation_type_newname:'example/mutation_type_name'})、mapMutations(['example/'])
 * 模块辅助函数中不需要加前缀，如 mapExampleGetters(['getter_type_name'])
 * 访问根状态，如 mapState({count:state=>state.count}) 
 * 访问模块状态，如 mapExampleState({count:state=>state.count}) 或 mapState({count:state=>state.example.count}) 
 * 根辅助函数 mapState 中的 state 指的是全局的状态树，模块辅助函数 mapState 中的 state 指的是局部的状态树
 * 这里的 example 代指某个模块. 
 * 具体模块内部要不要带命名空间，看个人习惯了。加上的话，即使不同模块中定义的类型名称相同，也不影响结果。不加的话，会出现名称冲突问题。
 * 我比较喜欢不加，我会手动在模块中定义类型名称的时候给其加上本身模块的名字前缀，避免不同模块文件名称冲突.
 */
import { types as ExampleTypes } from "../vuex/modules/example"
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

//如果使用的是带命名空间的绑定函数，可以借助于 vuex 中的 createNamespacedHelpers 工具，直接访问模块内中定义的东西
// import {createNamespacedHelpers, mapState, mapGetters, mapMutations, mapActions} from 'vuex'
// const { mapState:mapExampleState, mapGetters:mapExampleGetters, mapMutations:mapExampleMutations, mapActions:mapExampleActions } = createNamespacedHelpers('example')

export default {
  name: "app",
  data() {
    return {
      num:2,
    };
  },
  computed:{
      ...mapState({
        //箭头函数可使代码更简练
        oneCount:state => state.count,

        //'count' 等价于 `state=>state.count`
        twoCount:'count',

        //为了能够使用`this`获取局部状态，必须使用常规函数
        threeCount(state, rootState){
          return state.count + this.num
        },

        //更状态参数获取
        rootCount: 'count',

        //模块内部参数获取
        exampleCount: state => state.example.count,
      }),

      ...mapGetters({
        totalCount: ExampleTypes.GETTER_TYPE_NAME,
      })
  },
  components: {
  },
  methods: {
      ...mapMutations({
        //将 this.add() 映射为 this.$store.commit('mutation_type_name')
        //将 mutation_type_name 重命名为 add
        add:ExampleTypes.MUTATION_TYPE_NAME,
      }),
      ...mapActions({
        action_add:ExampleTypes.ACTION_TYPE_NAME
      }),
  },
  create() {},
  mounted() {

  }
};
</script>
<style scoped>
.example {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 10000001;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
.example__container{
}
p{
  margin: 10px; 
  font-size: 16px;
}
button{
  background-color: orange;
  padding: 5px 10px;
  margin: 20px 0;
  display: block;
  font-size: 16px;
}
</style>

