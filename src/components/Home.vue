<template>
  <div>
    <Header></Header>
    <div class="login">
      <div>
        <img alt="Vue logo" src="../assets/logo_Web.jpg" width="200" height="200">
      </div>
      <div class="titleLogin">
        <h1>FarmaStorage</h1>
        <h2>Sistema de inventario para farmacias locales</h2>
      </div>
    </div>

  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "Login",
    components: {
    Header
  }
}
</script>

<style scoped>

</style>