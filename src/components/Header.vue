/**
 * 学管系统登录之后的主页的头部组件
 * categorys:[{"name":"标题"}]  组件数据源
 * selectCategory: 1           当前组件被选中项的下标
 */
<template>
  <div class="header">
    <span class="header__logo">cxy 学管系统</span>
    <ul class="header__categorys">
      <li
        v-for="(item, index) in categorys"
        :key="index"
        :class="`header__category ${index===selectCateory?'header__category--puple':''}`"
        @click="categoryClickEvent(item, index)"
      >{{item.name}}</li>
    </ul>
    <div class="header__rightContainer">
      <span class="header__toDos">待办事项</span>
      <em class="header__line">|</em>
      <div class="header__infoWrapper">
        <button class="header__quit" @click="quitClickEvent">退出</button>
        <span class="header__nickname">啦啦啦啦</span>
        <img
          class="header__avatar"
          src="https://static1.bcjiaoyu.com/5a7ede147308f194ed9b108f98589a07_v.jpg-1080x1920"
          alt
        />
      </div>
    </div>
  </div>
</template>
<script>

const categorys = [
  {
    pk: 9,
    id: 9,
    deleted: false,
    create_time: "2019-04-10T18:05:58.601843",
    order_index: 1000,
    name: "活动课",
    desciption: "活动课",
    public: false
  },
  {
    pk: 8,
    id: 8,
    deleted: false,
    create_time: "2019-04-10T18:05:47.213177",
    order_index: 1000,
    name: "NOIP",
    desciption: "NOIP",
    public: false
  },
  {
    pk: 7,
    id: 7,
    deleted: false,
    create_time: "2019-04-10T18:05:38.715095",
    order_index: 1000,
    name: "IGCSE",
    desciption: "IGCSE",
    public: false
  },
  {
    pk: 6,
    id: 6,
    deleted: false,
    create_time: "2019-04-10T18:05:28.295396",
    order_index: 1000,
    name: "试听体验课",
    desciption: "试听体验课",
    public: true
  },
  {
    pk: 5,
    id: 5,
    deleted: false,
    create_time: "2019-04-10T18:05:17.146709",
    order_index: 1000,
    name: "公开课",
    desciption: "公开课",
    public: true
  },
  {
    pk: 4,
    id: 4,
    deleted: false,
    create_time: "2019-04-10T18:05:04.320200",
    order_index: 1000,
    name: "开发思维",
    desciption: "开发思维",
    public: false
  },
  {
    pk: 3,
    id: 3,
    deleted: false,
    create_time: "2019-04-10T18:04:50.982385",
    order_index: 1000,
    name: "计算思维",
    desciption: "计算思维",
    public: false
  },
  {
    pk: 2,
    id: 2,
    deleted: false,
    create_time: "2019-04-10T18:04:40.084744",
    order_index: 1000,
    name: "编程创作",
    desciption: "编程创作",
    public: false
  },
  {
    pk: 1,
    id: 1,
    deleted: false,
    create_time: "2019-04-10T18:04:30.921940",
    order_index: 1000,
    name: "编程思维",
    desciption: "编程思维",
    public: false
  }
];
export default {
  name: "Header",
  //   props:['handleClick', 'handleQuit'],
  data() {
    return {
      categorys: categorys,
      selectCateory: 1
    };
  },
  components: {},
  methods: {
    quitClickEvent() {
      console.log("退出");
    },
    categoryClickEvent(item, selectIndex) {
      console.log(item, selectIndex);
      //子组件回传父组件方法
      //方法 1，需在父组件指明传递的属性名
      this.$emit("handleClick", item, selectIndex);

      //方法 2，直接调用父组件中的方法(方法属性指明不指明都行)
      this.$parent.handleClickCategory(item, selectIndex);
      // this.handleClick(item, selectIndex)
    }
  },
  create() {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.header {
  width: 100%;
  height: 100%;

  background-color: white;
  border-bottom: solid 1px #e1e1e1;

  display: flex;
  flex-direction: row;
  align-items: center;
}
.header__logo {
  height: 100%;
  width: 170px;
  background-image: linear-gradient(to right, #0024ff, #8400ff);
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;
}
.header__categorys {
  flex: 1;
  height: 100%;
  overflow: auto;

  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
}
.header__category {
  flex: 1;
  height: calc(100% - 2px);
  min-width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.header__category--puple {
  color: #5f0aff;
  border-bottom: solid 2px #5f0aff;
}
.header__rightContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.header__toDos {
  background-color: #5f0aff;
  color: white;
  height: 30px;
  border-radius: 15px;
  padding: 0 10px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header__line {
  color: #333;
  padding: 0 20px;
  font-size: 15px;
}
.header__infoWrapper {
  display: flex;
  align-items: center;
  height: 30px;
  padding-right: 20px;
}
.header__quit {
  color: #5f0aff;
  border: none;
  width: 50px;
  font-size: 15px;
}
.header__nickname {
  color: #333;
  font-size: 14px;
  padding: 0 10px;
}
.header__avatar {
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: solid 1px #e1e1e1;
}
</style>
