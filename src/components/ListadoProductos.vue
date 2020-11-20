<template>
  <div>
    <AccessBar></AccessBar>
    <br>
    <table class="table">
      <tr>
        <th>Selec. Producto</th>
        <th>Cod. Producto</th>
        <th>Marca Comercial</th>
        <th>Nombre Cientifico</th>
        <th>Tipo de producto</th>
        <th>¿Bioequivalente?</th>
        <th>Forma Farmaceutica</th>
        <th>Fecha de caducidad</th>
        <th>Simbologia asociada</th>
      </tr>
        <td style="align-content: center"><input type="radio" name="perfilProducto" value=""></td>
        <td>999999999</td>
        <td>Loratadima</td>
        <td>Loratadina</td>
        <td>Antialergias</td>
        <td>Si</td>
        <td>Capsulas</td>
        <td>03-06-2021</td>
        <td>NN</td>
    </table>
      <button @click="modificarProducto" class="modifBtn">Modificar producto seleccionado</button>
      <br>
  </div>
</template>

<script>
import AccessBar from "@/components/AccessBar";
export default {
name: "ListadoProductos",
  components: {
    AccessBar,
  },
  methods:{
    modificarProducto(){
      alert("Proveedor seleccionado para modificar");
    }
  }
}
</script>

<style scoped>

</style>