<template>
  <div>
    <Header></Header>
    <p></p>
    <img src="../assets/error_404.png" height="500" width="1000"/>
    <h1>Error 404 Page not found</h1>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
name: "ErrorComponent",
  components: {Header}
}
</script>

<style scoped>

</style>