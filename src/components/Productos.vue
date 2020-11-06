<template>
  <div>
    <Sidebar></Sidebar>
    <header-productos></header-productos>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import HeaderProductos from "@/components/HeaderProductos";
export default {
name: "Productos",
    components: {
      HeaderProductos,
      Sidebar
  }
}
</script>

<style scoped>

</style>