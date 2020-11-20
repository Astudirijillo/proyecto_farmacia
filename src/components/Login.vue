<template>
  <div id="login">
    <br>
    <img src="../assets/logo_Web.jpg" height="100" width="100"/>
    <br>
    <h1><i>Bienvenido</i></h1>
    <br>
    <form action="/Home" method="GET" class="login-form">
      <div class="container">
        <label><b>Correo electronico</b></label>
        <input type="text" :placeholder="username" name="uname" required> <!-- asi se imprimie una variable dentro de atributos html -->

        <label><b>Contraseña</b></label>
        <input type="text" :placeholder="pass" name="psw" required>

        <button type="submit">Ingresar</button>

      </div>
    </form>

  </div>
</template>

<script>
export default {
  name: 'Login',
    data() {
      return { //Este método retorna la información que se quiere mostrar
        username: 'Ingrese su usuario',
        pass: 'Ingrese su contraseña',
      }
    }
  }
</script>
