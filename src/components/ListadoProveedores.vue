<template>
  <div>
    <access-bar></access-bar>
    <br>
    <h1 v-if="hasError">API no disponible</h1>
    <div v-else>
      <h1 v-if="loading">Cargando listado...</h1>
      <div v-else>
        <br>
        <div v-for="prov in proveedor" :key="prov.id">
          <b>Ingrese rut del Proveedor: </b> <input type="search" name="codProducto">
          <input type="button" value="Buscar">
          <br>
          <br>
          <table class="table" >
            <tr>
              <th>Razon social</th>
              <th>Rut</th>
              <th>Direccion</th>
              <th>Correo electronico</th>
              <th>Numero Telefonico</th>
              <th>Acciones</th>
            </tr>
            <tr>
              <td> <input type="text" class="editProv" :placeholder="prov.razonSocial"></td>
              <td><input type="text" class="editProv" :placeholder="prov.rut"> </td>
              <td><input type="text" class="editProv" :placeholder="prov.direccion"> </td>
              <td><input type="text" class="editProv" :placeholder="prov.correo"> </td>
              <td><input type="text" class="editProv" :placeholder="prov.nroTelefonico"> </td>
              <td><button @click="editarProveedor">Guardar Cambios</button>
                <button @click="removeProveedor(proveedores.id)">Eliminar</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import AccessBar from "./AccessBar";
import axios from "axios";
export default {
  name: "ListadoProveedores",
  components: {AccessBar},
  data(){
    return{
      rz:"xD",
      r:"19769527-7",
      d:"XD",
      c:"XD",
      ce: "XD",
      nt:"xD",
      hasError: false,
      loading: true
    }
  },
  methods:{
    editarProveedor(){
    },
    removeProveedor(id) {
      axios.delete('http://127.0.0.1:8000/api/products/' + id)
          .then(() => {this.products = this.products.filter(product => product.id !== id);});
    },
  },
  mounted() {
    axios
        .get('http://127.0.0.1:8000/proveedores')
        .then(response => (this.proveedores = response.data.data))
        // eslint-disable-next-line no-unused-vars
        .catch(error => this.hasError = true)
        .finally(() => this.loading = false)
  }
}
</script>

<style scoped>

</style>