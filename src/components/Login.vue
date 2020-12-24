<template>
  <div id="login">
    <br>
    <br>
    <img src="../assets/logo_Web.jpg" height="100" width="100"/><br>
    <h4><i>FarmaStorage</i></h4>
    <br>
    <br>
    <h1><i>Bienvenido</i></h1>
    <br>
    <form action="/Home" method="GET" class="login-form">
      <div class="container">
        <label><b>Correo electronico</b></label>
        <input type="text" :placeholder="username" name="uname" required> <!-- asi se imprimie una variable dentro de atributos html -->
        <label><b>Contraseña</b></label>
        <input type="password" :placeholder="pass" name="psw" required>
        <button type="submit" class="loginButton"><b>Ingresar</b></button>
      </div>
    </form>
    <br>
    <h4><i>Ante cualquier problema contactarse con uno de los administradores.</i></h4>
  </div>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data() {
      return { //Este método retorna la información que se quiere mostrar
        username: 'Ingrese su usuario',
        pass: 'Ingrese su contraseña',
      }
    },
  }
</script>
