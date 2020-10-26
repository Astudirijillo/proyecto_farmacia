<template>
  <div id="login">
    <h1>Acceso Usuarios</h1>
    <img src="../assets/logo_Web.jpg" height="100" width="100"/>
    <form action="/Home" method="GET" class="login-form">
      <div class="container">

        <label><b>Usuario</b></label>
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
      pass: 'Ingrese su contraseña'
    }
  }
}
</script>