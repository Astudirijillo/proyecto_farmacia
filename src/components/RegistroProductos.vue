<template>
  <div>
    <Header></Header>
    <div class="register">
      <form action="../form-result.php" target="_blank">
        <p class="users">
          Codigo del Producto <input type="text" name="codigo">
          Nombre Producto <input type="text" name="nombreProducto">
          Nombre Cientifico  <input type="text" name="nombreCientifico">
          ¿Bioequivalente? <br>
            <input type="radio" name="bioequivalente" value="si">SI
            <input type="radio" name="bioequivalente" value="no">NO<br>
          <br>
          Tipo de Uso <select name="tipoUso">
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
          Fecha de caducidad <input type="date" name="fechaCaducidad" ><br>
          <br>
          Simbolos Asociados <br>
            <input type="checkbox" name="simbAsociado">Con receta medica <br>
            <input type="checkbox" name="simbAsociado">Conservacion en frigorifico<br>
            <input type="checkbox" name="simbAsociado">Caducidad inferior a 5 años <br>
            <input type="checkbox" name="simbAsociado">Psicótropos <br>
            <input type="checkbox" name="simbAsociado">Estupefacientes <br>
            <input type="checkbox" name="simbAsociado">Aportación reducida Seguridad Social <br>
          <input type="button" @click="ingresarInfo" value="Confirmar">
          <input type="button" value="Resetear">
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
name: "RegistroProductos",
  components:{
    Header
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