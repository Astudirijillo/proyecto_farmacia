<template>
  <div>
    <access-bar></access-bar>
    <br>
    <div class="reportes">
      <br>
      <b>Fecha inicio</b><input type="date" name="fecInicio"><b>    |     </b>
      <b>Fecha final</b><input style="margin-left: 12px;" type="date" name="fecFinal"> <br>
      <br>
      <input type="button" class="formBtn" value="Buscar" @click="busqueda"><br>
      <br>
    </div>
    <div class="tablaReportes">
      <form action="../form-result.php" target="_blank" >
        <tr class="tabla">
          <th>Codigo producto</th>
          <th>Nombre Comercial</th>
          <th>Unidades Recibidas</th>
          <th>Proveedor</th>
          <th>Rut Empresa</th>
          <th>Numero Telefonico</th>
          <th>Correo electronico</th>
        </tr>
      </form>
    </div>
  </div>
</template>

<script>
import AccessBar from "./AccessBar";
export default {
name: "Reportes",
  components: {AccessBar},
  methods: {
    busqueda(){
        ('tablaReportes').css('visbility','visible');
    }
  }
}
</script>

<style scoped>

</style>