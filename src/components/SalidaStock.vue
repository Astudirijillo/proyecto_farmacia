<template>
  <div>
    <AccessBar></AccessBar>
    <br>
    <div class="register">
      <form action="../form-result.php" target="_blank">
        <p class="stock">
          <br>
          <b>Codigo Producto</b><input type="text" name="razonSocial">
          <b>Nro. de Lote</b> <input type="text" name="rut" required>
          <b>Cantidad a ingresar</b> <input type="text" name="nroTelefonico">
          <b>Fecha de retiro</b> <input type="date" name="fechaRetiros">
          <br>
          <br>
          <b>Motivo del retiro</b> <input type="text" name="motivRetiro">
          <br>
          <br>
          <input type="button" class="formBtn" @click="descuentoConfirmado" value="Confirmar">
          <input type="reset" class="formBtn" value="Limpiar formulario">
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import AccessBar from "@/components/AccessBar";
export default {
name: "SalidaStock",
  components: {AccessBar},
  methods:{
    descuentoConfirmado(){
      alert("Se ha descontado el producto");
    }
  }
}
</script>

<style scoped>

</style>