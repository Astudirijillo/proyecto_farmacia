<template>
  <div>
    <access-bar class="productBar"></access-bar>
    <br>
    <div>
      <b>Ingrese codigo del producto a buscar: </b> <input type="search" name="codProducto">
      <input type="button" value="Buscar">
      <br>
      <br>
      <table class="table">
        <tr>
          <th>Cod. Producto</th>
          <th>Marca Comercial</th>
          <th>Nombre Cientifico</th>
          <th>Tipo de producto</th>
          <th>¿Bioequivalente?</th>
          <th>Forma Farmaceutica</th>
          <th>Fecha de caducidad</th>
          <th>Simbologia asociada</th>
          <th>Acciones</th>
        </tr>
        <td><input type="text" class="editProv" :placeholder="cp"></td>
        <td><input type="text" class="editProv" :placeholder="mc"> </td>
        <td><input type="text" class="editProv" :placeholder="nc"> </td>
        <td><input type="text" class="editProv" :placeholder="tp"> </td>
        <td><input type="text" class="editProv" :placeholder="b"> </td>
        <td><input type="text" class="editProv" :placeholder="ff"> </td>
        <td><input type="text" class="editProv" :placeholder="fc"> </td>
        <td><input type="text" class="editProv" :placeholder="sa"> </td>
        <td><button type="button" @click="editarProducto" >Editar</button>
          <button type="button" @click="eliminarProducto">Eliminar</button></td>
      </table>
    </div>
  </div>
</template>

<script>
import AccessBar from "./AccessBar";
export default {
name: "ListadoProductos",
  components: {
    AccessBar,
  },
  data(){
    return{
      cp:"9999999999999",
      mc:"Loratadina",
      nc:"Loratadina",
      tp:"Antialergico",
      b: "SI",
      ff: "Capsula",
      fc:"25/12/2025",
      sa: "NN",
    }
  },
  methods:{
    editarProducto(){
      alert("Los cambios han sido guardados");
    },
    eliminarProducto(){
      alert("Producto eliminado");
    }
  }
}
</script>

<style scoped>

</style>