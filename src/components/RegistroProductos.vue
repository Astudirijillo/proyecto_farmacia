<template>
  <div>
    <access-bar></access-bar>
    <br>
    <div class="register">
      <form action="../form-result.php" target="_blank">
        <p class="users">
          <br>
          <b>Codigo del Producto</b> <input type="text" name="codigo">
          <b>Nombre Producto</b> <input type="text" name="nombreProducto">
          <b>Nombre Cientifico</b><input type="text" name="nombreCientifico">
          <b>¿Bioequivalente?</b> <br>
            <input type="radio" name="bioequivalente" value="true">SI
            <input type="radio" name="bioequivalente" value="false">NO<br>
          <br>
          <b>Tipo de Uso</b> <select name="tipoUso">
            <option value="1">Analgésicos</option>
            <option value="2">Antiácidos</option>
            <option value="3">Antialérgicos</option>
            <option value="4">Antidiarreicos</option>
            <option value="5">Laxante</option>
            <option value="6">Anti-infecciosos</option>
            <option value="7">Anti-inflamatorios</option>
            <option value="8">Antipiréticos</option>
            <option value="9">Anti-tusivos</option>
            <option value="10">Mucolíticos</option>
          </select><br>
          <br>
          <b>Fecha de caducidad</b> <input type="date" name="fechaCaducidad" ><br>
          <br>
          <b>Simbolos Asociados</b> <br>
            <input type="checkbox" name="simbAsociado" class="simbolos">Con receta medica |
            <input type="checkbox" name="simbAsociado" class="simbolos">Psicótropos |
            <input type="checkbox" name="simbAsociado" class="simbolos">Estupefacientes<br>
            <input type="checkbox" name="simbAsociado" class="simbolos">Conservacion en frigorificos |
            <input type="checkbox" name="simbAsociado" class="simbolos">Caducidad inferior a 5 años<br>
            <input type="checkbox" name="simbAsociado" class="simbolos">Aportacion Seguridad social<br>
          <br>
          <input type="button" class="formBtn" @click="ingresarInfo" value="Confirmar">
          <input type="reset" class="formBtn" value="Limpiar formulario">
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import AccessBar from "./AccessBar";
export default {
name: "RegistroProductos",
  components:{
    AccessBar
  },
  methods:{
    ingresarInfo(){
      alert("Producto ingresado");
    }
  }
}
</script>

<style scoped>

</style>