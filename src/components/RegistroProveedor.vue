<template>
  <div>
    <Header></Header>
    <div>
      <form action="../form-result.php" target="_blank">
        <p class="users">
          Razon Social<input type="text" name="razonSocial">
          Rut  <input type="text" name="rut">
          Direccion <input type="text" name="direccion">
          Nro. telefonico <input type="text" name="nroTelefonico">
          Correo Electronico <input type="text" name="correo">
          <input type="button" @click="ingresarInfo" value="Confirmar">
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
    ingresarInfo(){
      alert("Proveedor registrado");
    }
  }
}
</script>

<style scoped>

</style>