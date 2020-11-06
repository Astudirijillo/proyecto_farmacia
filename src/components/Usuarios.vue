<template>
  <div>
    <Sidebar></Sidebar>
    <HeaderUsuarios></HeaderUsuarios>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import HeaderUsuarios from "@/components/HeaderUsuarios";
export default {
  name: "Usuarios",
  components: {
    HeaderUsuarios,
    Sidebar
  }
}
</script>

<style scoped>

</style>