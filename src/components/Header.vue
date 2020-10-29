<template>
  <div id='header' class="header">
    <div class="topnav">
      <div>
        <router-link to="/home">Inicio</router-link>
      </div>
      <div>
        <router-link to="/registerUsers">Crear usuario</router-link>
        <router-link to="/registerProduct">Crear Producto</router-link>
        <router-link to="/registerProveedor">Crear Proveedor</router-link>
        <a href="/Login">Cerrar Sesión</a> <!-- navegación entre pantallas sin router link (se recarga la página) -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>