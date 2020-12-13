<template>
  <div>
    <div class="reportes">
      <form action="../form-result.php" target="_blank">
        <br>
        <b style="margin-right: 10px;">Fecha inicio</b><input type="date" name="fecInicio"><br>
        <b style="margin-right: 8px;">Fecha final</b><input style="margin-left: 12px;" type="date" name="fecFinal"><br>
        <br>
        <b>Cod. Producto</b> <input type="search" name="nombre"><br>
        <b>Nombre Comercial  </b> <input type="search" name="nombre">
        <br>
        <br>
        <input type="button" class="formBtn" value="Buscar"><br>
        <br>
      </form>
    </div>
  </div>
</template>

<script>
export default {
name: "Reportes",
  components: {}
}
</script>

<style scoped>

</style>