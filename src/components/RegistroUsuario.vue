<template>
  <div id='registerUsers' class="regUser">
    <Header></Header>
    <div class="register">
      <form action="../form-result.php" target="_blank">
        <p class="users">
          Nombre <input type="text" name="nombre" required>
          Apellido <input  type="text" name="apellido" required>
          Rut (sin guiones) <input type="text" name="rut" required>
          Numero telefonico <input type="text" name="nroTelefonico" required>
          Correo electronico <input type="email" id='email' name="correo" required><br>
          <br>
          Contraseña <input type="password" name="contraseña" required>
          Perfil de Usuario <br>
            <input type="radio" name="perfilUsuario" value="admin">Administrador
            <input type="radio" name="perfilUsuario" value="productos">Productos
            <input type="radio" name="perfilUsuario" value="productos">Proveedor<br>
          <br>
          <input type="button" @click="validarDatos" value="Confirmar">
          <input type="button" value="Resetear">
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "RegistroUsuario",
    components: {
    Header
    },
    methods:{
      validarDatos(){

        }
      }
    }
</script>

<style scoped>

</style>