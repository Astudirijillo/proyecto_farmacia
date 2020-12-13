<template>
  <div>
    <br>
    <div>
      <table class="table">
        <tr>
          <th>Selec.</th>
          <th>Razon social</th>
          <th>Rut</th>
          <th>Direccion</th>
          <th>Ciudad</th>
          <th>Correo electronico</th>
          <th>Numero Telefonico</th>
        </tr>
        <tr>
          <td><input type="radio" name="perfilProveedor" value=""></td>
          <td>FARMACIAS KNOP LIMITADA</td>
          <td>79781370-2</td>
          <td>Av Libertador Bernardo O'Higgins 1665</td>
          <td>Santiago</td>
          <td>contacto@farmaciaknop.cl</td>
          <td>56-225698300</td>
        </tr>
      </table>
    </div>
    <button @click="modificarProveedor" class="modifBtn" >Modificar proveedor seleccionado</button>
    <div id="un_div">
      <RegistroProveedor></RegistroProveedor>
    </div>
  </div>
</template>

<script>
import RegistroProveedor from "./RegistroProveedor";
export default {
  name: "ListadoProveedores",
  components: {RegistroProveedor},
  methods:{
    modificarProveedor(){
      var div = document.getElementById("un_div");
      div.style.display="Block";
    }
  }
}
</script>

<style scoped>

</style>