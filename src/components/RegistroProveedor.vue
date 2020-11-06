<template>
  <div>
    <Sidebar></Sidebar>
    <header-proveedores></header-proveedores>
    <br>
    <div class="register">
      <form action="../form-result.php" target="_blank">
        <p class="users">
          Razon Social<input type="text" name="razonSocial">
          Rut (sin puntos) <input type="text" :placeholder="rutInfo" name="rut">
          Direccion <input type="text" name="direccion">
          Nro. telefonico <input type="text" name="nroTelefonico">
          Correo Electronico <input type="text" name="correo">
          <input type="button" @click="validarInfo" value="Confirmar">
          <input type="reset" value="Limpiar formulario">
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import HeaderProveedores from "@/components/HeaderProveedores";
export default {
name: "RegistroProveedor",
  components: {
    HeaderProveedores,
    Sidebar
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