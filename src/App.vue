<template>
  <div id="app">
    <Home></Home>
    <Footer></Footer>
  </div>
</template>

<script>
/*import HelloWorld from './components/HelloWorld.vue'*/
import Home from "@/components/Home";
import Footer from "@/components/Footer";

export default {
  name: 'App',
  components: {
    Footer,
    Home
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
