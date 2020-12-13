<template>
  <div id='registerUsers' class="regUser">
    <br>
    <div class="register">
      <form id="formulario" method="post" action="datos.php">
        <p class="users">
          <br>
          <b>Primer Nombre</b> <input type="text" name="nombre" id="nombre" value=" " required>
          <b>Apellidos</b> <input  type="text" name="apellido" id="apellido" value=" " required>
          <b>Tipo de documento</b> <br>
          <input type="radio" name="tipoDoc" value="rut"> Rut <b > | </b>
          <input type="radio" name="tipoDoc" value="pasaporte"> Pasaporte<br>
          <br>
          <b>Nro. del documento</b> <input type="text" :placeholder="rutInfo" name="rut"  required>
          <b>Numero telefonico</b> <input type="tel" name="nroTelefonico" required><b> | </b>
          <b>Correo electronico</b> <input type="email" id='email' name="correo" width="150px" required ><br>
          <br>
          <b>Contraseña</b> <input type="password" name="contraseña" required>
          <b>¿Administrador? </b>
            <input type="radio" name="perfilUsuario" value="admin"> SI <b> | </b>
            <input type="radio" name="perfilUsuario" value="admin"> NO <br>
          <br>
          <input type="button" class="formBtn" @click="validarDatos" value="Confirmar">
          <input type="reset" class="formBtn" value="Limpiar formulario">
          <br>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistroUsuario",
    components: {
    },
    data(){
      return{
        rutInfo:"Ej.: 11111111-1 o F11111111",
      }
    },
    methods:{
      validarDatos(){
          alert("Usuario registrado");
        }
      },
    }
</script>

<style scoped>

</style>