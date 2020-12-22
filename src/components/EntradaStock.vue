<template>
  <div>
    <access-bar></access-bar>
    <br>
    <div class="enterStock">
      <form action="../form-result.php" target="_blank">
        <p class="stock">
          <br>
          <b>Codigo Producto</b><input type="text" name="razonSocial">
          <b>Rut de proveedor (sin puntos)</b> <input type="text" :placeholder="rutInfo" name="rut" required>
          <b>Nro. de Lote</b> <input type="text" name="direccion">
          <b>Unidades a retirar</b> <input type="text" name="nroTelefonico">
          <b>Fecha de recepcion</b> <input type="date" name="fechaRec">
          <br>
          <br>
          <b>Fecha de vencimiento</b> <input type="date" name="fechaVen">
          <br>
          <br>
          <input type="reset" class="formBtn" value="Ingresar stock">
          <input type="reset" class="formBtn" value="Limpiar formulario">
        </p>
      </form>
      <div class="infoProveedor">
        <label><b>Razon Social: </b> {{razonSocial}}</label><br>
        <label><b>Nro. Telefonico: </b> Proculo</label><br>
        <label><b>Nombre Proveedor: </b> Proculo</label>
      </div>
      <div class="infoProducto">
        <label><b>Nombre comercial: </b> {{marcaComercial}}</label><br>
        <label><b>Nombre cientifico: </b> {{nombreCientifico}}</label>
      </div>
    </div>
  </div>
</template>

<script>
import AccessBar from "./AccessBar";
export default {
name: "EntradaStock",
  components: {AccessBar},
  data(){
    return{
      rutInfo:"Ej.: 11111111-1",
      marcaComercial: "Prueba2.1",
      nombreCientifico: "Prueba2.2",
      razonSocial: "Prueba 1.1"
    }
  },
  methods:{
    ingresoConfirmado(){
      alert("Lote ingresado nro. XXXX");
    }
  }
}
</script>

<style scoped>

</style>