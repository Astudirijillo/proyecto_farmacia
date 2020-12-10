<template>
  <div>
    <AccessBar></AccessBar>
    <div class="reportes">
      <form action="../form-result.php" target="_blank">
        <br>
        <b style="margin-right: 10px;">Fecha inicio</b><input type="date" name="fecInicio">
        <b class="space">Fecha final</b><input type="date" name="fecFinal"><br>
        <br>
        <input type="button" class="formBtn" value="Buscar">
      </form>
    </div>
  </div>
</template>

<script>
import AccessBar from "@/components/AccessBar";
export default {
name: "Reportes",
  components: {AccessBar}
}
</script>

<style scoped>

</style>