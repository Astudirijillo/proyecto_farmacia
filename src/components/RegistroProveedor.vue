<template>
  <div>
    <Header></Header>
    <div class="register">
      <form action="../form-result.php" target="_blank">
        <p class="users">
          Razon Social<input type="text" name="razonSocial">
          Rut  <input type="text" name="rut">
          Direccion <input type="text" name="direccion">
          Nro. telefonico <input type="text" name="nroTelefonico">
          Correo Electronico <input type="text" name="correo">
          <input type="button" @click="validarInfo" value="Confirmar">
          <input type="button" value="Resetear">
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
name: "RegistroProveedor",
  components: {Header},
  methods:{
    validarInfo(){
      alert("Proveedor registrado");
    }
  }
}
</script>

<style scoped>

</style>