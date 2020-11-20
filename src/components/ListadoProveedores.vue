<template>
  <div>
    <AccessBar></AccessBar>
    <br>
    <table class="table">
        <tr>
          <th>Selec. Proveedor</th>
          <th>Razon social</th>
          <th>Rut</th>
          <th>Direccion</th>
          <th>Ciudad</th>
          <th>Correo electronico</th>
          <th>Numero Telefonico</th>
        </tr>
        <tr>
          <td style="align-content: center"><input type="radio" name="perfilProveedor" value=""></td>
          <td>FARMACIAS KNOP LIMITADA</td>
          <td>79781370-2</td>
          <td>Av Libertador Bernardo O'Higgins 1665</td>
          <td>Santiago</td>
          <td>contacto@farmaciaknop.cl</td>
          <td>56-225698300</td>
        </tr>
    </table>
        <button @click="modificarProveedor" class="modifBtn">Modificar proveedor seleccionado</button>
  </div>
</template>

<script>
import AccessBar from "@/components/AccessBar";
export default {
  name: "ListadoProveedores",
  components: {AccessBar},
  methods:{
    modificarProveedor(){
      alert("Proveedor seleccionado para modificar");
    }
  }
}
</script>

<style scoped>

</style>