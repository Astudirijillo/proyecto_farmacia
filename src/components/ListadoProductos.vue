<template>
  <div>
    <Sidebar></Sidebar>
    <header-productos></header-productos>
    <table class="table" style="width: 50%">
      <tr>
        <th>Cod. Producto</th>
        <th>Marca Comercial</th>
        <th>Nombre Cientifico</th>
        <th>Tipo de producto</th>
        <th>¿Bioequivalente?</th>
        <th>Forma Farmaceutica</th>
        <th>Fecha de caducidad</th>
        <th>Simbologia asociada</th>
        <th>Fecha de caducidad</th>
      </tr>
    </table>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import HeaderProductos from "@/components/HeaderProductos";
export default {
name: "ListadoProductos",
  components: {
    HeaderProductos,
    Sidebar
  }
}
</script>

<style scoped>

</style>