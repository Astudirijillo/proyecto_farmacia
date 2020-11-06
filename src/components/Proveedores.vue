<template>
  <div>
    <Sidebar></Sidebar>
    <header-proveedores></header-proveedores>
  </div>
</template>

<script>

import Sidebar from "@/components/Sidebar";
import HeaderProveedores from "@/components/HeaderProveedores";
export default {
name: "Proveedores",
  components: {HeaderProveedores, Sidebar}
}
</script>

<style scoped>

</style>