<template>
  <div>
    <br>
    <div class="register">
      <form action="../form-result.php" target="_blank">
        <p class="users">
          <br>
          <b>Razon Social</b><input type="text" name="razonSocial">
          <b>Rut (sin puntos)</b> <input type="text" :placeholder="rutInfo" name="rut" required>
          <b>Direccion</b> <input type="text" name="direccion">
          <b>Nro. telefonico</b> <input type="text" name="nroTelefonico">
          <b>Correo Electronico</b> <input type="text" name="correo">
          <br>
          <br>
          <input type="button" class="formBtn" @click="validarInfo" value="Confirmar">
          <input type="reset" class="formBtn" value="Limpiar formulario">
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
name: "RegistroProveedor",
  components: {
  },
  methods:{
    validarInfo(){
      alert("Proveedor registrado");
    }
  },
  data(){
    return{
      rutInfo:"Ej.: 11111111-1"
    }
  }
}
</script>

<style scoped>

</style>