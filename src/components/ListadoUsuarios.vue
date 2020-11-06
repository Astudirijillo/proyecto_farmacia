<template>
    <div>
      <Sidebar></Sidebar>
      <BarraModificaciones></BarraModificaciones>
      <br>
        <table class="table" style="width: 75%">
          <tr class="tabla">
            <th>Selec. usuario</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Rut</th>
            <th>Numero Telefonico</th>
            <th>Correo electronico</th>
            <th>Contraseña</th>
            <th>Perfiles de Usuario</th>
          </tr>
          <tr class="infoTabla">
            <td style="align-content: center"><input type="radio" name="perfilUsuario" value=""></td>
            <td>Cristobal</td>
            <td>Astudillo</td>
            <td>19769527-7</td>
            <td>956110975</td>
            <td>castudillo@gmail.com</td>
            <td><input type="button" value="Cambiar contraseña"></td>
            <td>Admin</td>
          </tr>
        </table>
    </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import BarraModificaciones from "@/components/HeaderUsuarios";
export default {
name: "ListadoUsuarios",
    components: {
      BarraModificaciones,
    Sidebar
    }
}
</script>

<style scoped>

</style>