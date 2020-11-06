<template>
  <div id='registerUsers' class="regUser">
    <Sidebar></Sidebar>
    <barra-modificaciones></barra-modificaciones>
    <br>
    <div class="register">
      <form id="formulario" method="post" action="datos.php">
        <p class="users">
          <b>Nombre</b> <input type="text" name="nombre" id="nombre" value=" " required>
          <b>Apellido</b> <input  type="text" name="apellido" id="apellido" value=" " required>
          <b>Rut (sin puntos)</b> <input type="text" :placeholder="rutInfo" name="rut" value=" " required>
          <b>Numero telefonico</b> <input type="text" name="nroTelefonico" required>
          <b>Correo electronico</b> <input type="email" id='email' name="correo" required><br>
          <br>
          <b>Contraseña</b> <input type="password" name="contraseña" required>
          <b>Perfil de Usuario</b> <br>
            <input type="radio" name="perfilUsuario" value="admin">Administrador
            <input type="radio" name="perfilUsuario" value="productos">Productos
            <input type="radio" name="perfilUsuario" value="productos">Proveedor<br>
          <br>
          <input type="button" @click="validarDatos" value="Confirmar">
          <input type="reset" value="Limpiar formulario">
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import BarraModificaciones from "@/components/HeaderUsuarios";
export default {
  name: "RegistroUsuario",
    components: {
      BarraModificaciones,
      Sidebar
    },
    methods:{
      validarDatos(){
          alert("Usuario registrado");
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