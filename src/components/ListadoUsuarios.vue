<template>
    <div>
      <AccessBar></AccessBar>
      <br>
        <table class="table">
          <tr class="tabla">
            <th>Selec. usuario</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Rut</th>
            <th>Numero Telefonico</th>
            <th>Correo electronico</th>
            <th>Perfiles de Usuario</th>
          </tr>
          <tr class="infoTabla">
            <td style="align-content: center"><input type="radio" name="perfilUsuario" value=""></td>
            <td>Cristobal</td>
            <td>Astudillo</td>
            <td>19769527-7</td>
            <td>956110975</td>
            <td>castudillo@gmail.com</td>
            <td>Admin</td>
          </tr>
        </table>
        <br>
        <button @click="modificarUsuario" class="modifBtn">Modificar usuario seleccionado</button>
    </div>
</template>

<script>
import AccessBar from "@/components/AccessBar";
export default {
name: "ListadoUsuarios",
    components: {
      AccessBar
    },
    methods:{
      modificarUsuario(){
        alert("Usuario seleccionado para modificar");
      }
    }
}
</script>

<style scoped>

</style>