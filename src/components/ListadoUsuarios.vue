<template>
    <div>
      <access-bar class="userBar"></access-bar>
      <br>
      <div>
        <table class="table">
          <tr class="tabla">
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Rut</th>
            <th>Numero Telefonico</th>
            <th>Correo electronico</th>
            <th>¿Es Administrador?</th>
            <th>Acciones</th>
          </tr>
          <tr class="infoTabla">
            <td> <input type="text" class="editProv" :placeholder="rz"></td>
            <td><input type="text" class="editProv" :placeholder="r"> </td>
            <td><input type="text" class="editProv" :placeholder="d"> </td>
            <td><input type="text" class="editProv" :placeholder="c"> </td>
            <td><input type="text" class="editProv" :placeholder="ce"> </td>
            <td><input type="text" class="editProv" :placeholder="nt"> </td>
            <td><button @click="editarUsuario">Guardar Cambios</button>
              <button type="button" @click="eliminarUsuario">Eliminar</button></td>
          </tr>
        </table>
      </div>
    </div>
</template>

<script>
import AccessBar from "./AccessBar";
export default {
name: "ListadoUsuarios",
    components: {
      AccessBar,
    },
    data(){
      return{
        rz:"xD",
        r:"19769527-7",
        d:"XD",
        c:"XD",
        ce: "XD",
        nt:"xD",
      }
    },
    methods:{
      editarUsuario(){
        alert("Los cambios han sido guardados");
      },
      eliminarUsuario(){
        alert("Usuario Eliminado");
      }
    }
}
</script>

<style scoped>

</style>