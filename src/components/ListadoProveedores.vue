<template>
  <div>
    <sidebar></sidebar>
    <header-proveedores></header-proveedores>
    <br>
    <table width="50%" class="table">
        <tr>
          <th>Razon social</th>
          <th>Rut</th>
          <th>Direccion</th>
          <th>Correo electronico</th>
          <th>Numero Telefonico</th>
        </tr>
        <tr>
          <td>FARMACIAS KNOP LIMITADA</td>
          <td>79781370-2</td>
          <td></td>
        </tr>
    </table>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import HeaderProveedores from "@/components/HeaderProveedores";
export default {
  name: "ListadoProveedores",
  components: {HeaderProveedores, Sidebar}
}
</script>

<style scoped>

</style>