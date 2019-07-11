<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";

export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Login,
    Home
  }
};
</script>

<style lang="less">
html,body{
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
