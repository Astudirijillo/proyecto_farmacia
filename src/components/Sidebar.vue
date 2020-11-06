<template>
  <div id="header">
    <div class="sidenav">
      <div class="inicio">
        <router-link to="/home">Inicio</router-link>
      </div>
      <div class="redireccionar">
        <router-link to="/users">Usuarios</router-link>
        <router-link to="/products">Producto</router-link>
        <router-link to="/proveedor">Proveedor</router-link>
      </div>
      <div class="cerrar">
        <a href="/Login">Cerrar Sesión</a> <!-- navegación entre pantallas sin router link (se recarga la página) -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  components: {}
}
</script>