<template>
  <div id="app">
    <access-bar></access-bar>
    <router-view></router-view>
  </div>
</template>

<script>

import AccessBar from "./components/AccessBar";
export default {
  name: 'App',
  components: {
    AccessBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import "./assets/css/styles.css";
</style>
