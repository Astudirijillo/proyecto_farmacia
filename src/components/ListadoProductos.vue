<template>
  <div>
    <br>
    <div>
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
    </div>
    <button @click="modificarProducto" class="modifBtn">Modificar producto seleccionado</button>
    <br>
    <div id="un_div">
      <registro-productos></registro-productos>
    </div>
  </div>
</template>

<script>
import RegistroProductos from "./RegistroProductos";
export default {
name: "ListadoProductos",
  components: {
    RegistroProductos
  },
  data(){

  },
  methods:{
    modificarProducto(){
      var div = document.getElementById("un_div");
      div.style.display="Block";
    }
  }
}
</script>

<style scoped>

</style>