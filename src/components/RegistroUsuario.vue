<template>
  <div id='registerUsers' class="regUser">
    <access-bar></access-bar>
    <br>
    <br>
    <h1 v-if="hasError">API No disponible</h1>
    <div v-else class="register">
      <h1 v-if="loading">Cargando formulario...</h1>
      <div v-else>
        <form id="formulario" method="post" action="datos.php">
          <p class="users">
            <br>
            <b>Primer Nombre</b> <input v-model="nombre" type="text" required>
            <b>Apellidos</b> <input v-model="apellidos" type="text" required>
            <b>Tipo de documento</b> <br>
            <input v-model="tipoDoc" type="radio" value=""> Rut <b > | </b>
            <input v-model="tipoDoc" type="radio"> Pasaporte<br>
            <br>
            <b>Nro. del documento</b> <input v-model="rut" type="text" :placeholder="rutInfo" required>
            <b>Numero telefonico</b> <input v-model="nroTelefonico" type="tel"  required><b> | </b>
            <b>Correo electronico</b> <input v-model="correo" type="email"  width="150px" required ><br>
            <br>
            <b>Contraseña</b> <input v-model="contraseña" type="password" required>
            <b>¿Administrador? </b>
            <input v-model="perfilUsuario" type="radio" value="true"> SI <b> | </b>
            <input v-model="perfilUsuario" type="radio" value="false"> NO <br>
            <br>
            <button value="Confirmar">Confirmar</button>
            <input type="reset" value="Limpiar formulario">
            <br>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import AccessBar from "./AccessBar";
import axios from 'axios';

export default {
  name: "RegistroUsuario",
    components: {
      AccessBar
    },
    data(){
      return{
        products: null,
        hasError: false,
        loading: true,
        rutInfo:"Ej.: 11111111-1 o F11111111",
      }
    },
    mounted() {
        axios
        .get('http://127.0.0.1:8000/products')
        .then(response => (this.products = response.data.data))
        // eslint-disable-next-line no-unused-vars
        .catch(error => this.hasError = false)
        .finally(() => this.loading = false)
  }
}
</script>

<style scoped>

</style>
