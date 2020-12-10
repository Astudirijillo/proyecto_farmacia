<template>
  <div id="header" style="z-index: 100">
    <ul class="nav">
      <li><a href="">Usuario</a>
        <ul>
          <li><a href="/registerUsers">Crear</a></li>
          <li><a href="/listUsers">Listado</a></li>
        </ul>
      </li>
      <li><a href="">Productos</a>
        <ul>
          <li><a href="/registerProduct">Crear</a></li>
          <li><a href="/listProducts">Listado</a></li>
        </ul>
      </li>
      <li><a href="">Proveedores</a>
        <ul>
          <li><a href="/registerProveedor">Crear</a></li>
          <li><a href="/listProveedor">Listado</a></li>
        </ul>
      </li>
    </ul>
    <ul class="navStock">
        <li><a href="">Stock Productos</a>
          <ul>
            <li><a href="/addStock">Agregar</a></li>
            <li><a href="/discountStock">Descontar</a></li>
            <li><a href="/reports">Reportes</a></li>
          </ul>
        </li>
      <br>
    </ul>
    <a href="/login" class="cancelbtn">Cerrar Sesion</a>
  </div>
</template>

<script>
export default {
  name: "AccessBar",
  components: {}
}
</script>

<style type="text/css">


</style>