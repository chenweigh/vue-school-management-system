<template>
  <div class="home">
    <div class="home__header">
      <Header @handleClick="handleClickCategory" @handleQuit="logout"/>
    </div>
    <div class="home__container">
      <div class="home__sliderbarContainer"></div>
      <div class="home__rightContainer"></div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
export default {
  name: "Home",
  data() {
    return {
    };
  },
  components: {
      Header,
  },
  methods: {
      handleClickCategory(item, index){
          console.log(item, index);
      },
      logout(){

      }
  },
  create() {},
  mounted() {}
};
</script>

<style lang="less" scoped>
.home{
    min-width: 960px;
    background-color: white;
    /* min-height: 100%; */
    height: 100%;
    /* max-width: 1300px; */
    margin: auto;

    display: flex;
    flex-direction: column;
}
.home__header{
    height: 60px;
}
.home__container{
    display: flex;
    flex: 1;
    height: calc(100% - 60px);
}
.home__sliderbarContainer{
    background-color: white;
}
.home__rightContainer{
    flex:1;
    background-color: #f5f5f5;
}
</style>

