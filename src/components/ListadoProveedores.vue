<template>
  <div>
    <access-bar></access-bar>
    <br>
    <h1 v-if="hasError">API no disponible</h1>
    <div v-else>
      <h1 v-if="loading">Cargando listado...</h1>
      <div v-else>
        <br>
        <div>
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
              <td> <input type="text" class="editProv" :placeholder="rz"></td>
              <td><input type="text" class="editProv" :placeholder="r"> </td>
              <td><input type="text" class="editProv" :placeholder="d"> </td>
              <td><input type="text" class="editProv" :placeholder="ce"> </td>
              <td><input type="text" class="editProv" :placeholder="nt"> </td>
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
      rz:"Laboratorio OPKO S.A.",
      r:"19769527-7",
      d:"Av. Apoquindo 3721, Santiago",
      ce: "contacto@opko.cl",
      nt:"800 383 700",
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
        .catch(error => this.hasError = false)
        .finally(() => this.loading = false)
  }
}
</script>

<style scoped>

</style>