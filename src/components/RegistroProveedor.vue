<template>
  <div>
    <access-bar></access-bar>
    <br>
    <h1 v-if="hasError">Api no disponible</h1>
    <div v-else>
      <h1 v-if="loading">Cargando formulario...</h1>
      <div v-else class="register">
        <br>
        <b>Razon Social</b><input v-model="razonSocialProveedor" type="text">
        <b>Rut Proveedor </b><input v-model="rutProveedor" type="text" :placeholder="rutInfo">
        <b>Direccion</b> <input v-model="direccionProveedor" type="text">
        <b>Nro. telefonico</b> <input v-model="nroTelefonicoProveedor" type="text">
        <b>Correo Electronico</b> <input v-model="correoProveedor" type="text">
        <br>
        <br>
        <button class="formBtn" @click="addProveedor(razonSocialProveedor, rutProveedor,
        direccionProveedor, nroTelefonicoProveedor, correoProveedor)">Confirmar</button>
        <button type="reset" class="formBtn">Limpiar formulario</button>
      </div>
    </div>
  </div>
</template>

<script>
import AccessBar from "./AccessBar";
import axios from "axios";
export default {
name: "RegistroProveedor",
  components: {
    AccessBar
  },
  data(){
    return{
      hasError: false,
      loading: true,
      rutInfo:"Ej.: 11111111-1",
    }
  },
  methods: {
    addProveedor (razonSocialProv, rutProv, direccionProv, nroTelefonicoProv, correoProv){
      const newProv = {
        razonSocialProveedor: razonSocialProv,
        rutProveedor: rutProv,
        correoProveedor: correoProv,
        direccionProveedor: direccionProv,
        nroTelefonicoProveedor: nroTelefonicoProv
      };
      axios.post('http://127.0.0.1:8000/api/proveedores', newProv)
          .then(response => {this.proveedores.push(response.data.data);
            alert("Proveedor Añadido")})
      }
    },
  mounted() {
    axios
        .get('http://127.0.0.1:8000/proveedores')
        .then(response => (this.proveedores = response.data.data))
        // eslint-disable-next-line no-unused-vars
        .catch(error => this.hasError = false)
        .finally(() => this.loading = false)
  }
  }
</script>

<style scoped>

</style>