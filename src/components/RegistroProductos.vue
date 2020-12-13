<template>
  <div>
    <br>
    <div class="register">
      <form action="../form-result.php" target="_blank">
        <p class="users">
          <br>
          <b>Codigo del Producto</b> <input type="text" name="codigo">
          <b>Nombre Producto</b> <input type="text" name="nombreProducto">
          <b>Nombre Cientifico</b><input type="text" name="nombreCientifico">
          <b>¿Bioequivalente?</b> <br>
            <input type="radio" name="bioequivalente" value="si">SI
            <input type="radio" name="bioequivalente" value="no">NO<br>
          <br>
          <b>Tipo de Uso</b> <select name="tipoUso">
            <option>Analgésicos</option>
            <option>Antiácidos</option>
            <option>Antialérgicos</option>
            <option>Antidiarreicos</option>
            <option>Laxante</option>
            <option>Anti infecciosos</option>
            <option>Anti inflamatorios</option>
            <option>Antipiréticos</option>
            <option>Anti tusivos </option>
            <option>Mucolíticos</option>
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
export default {
name: "RegistroProductos",
  components:{
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