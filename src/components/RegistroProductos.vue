<template>
  <div>
    <sidebar></sidebar>
    <header-productos></header-productos>
    <br>
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
            <input type="checkbox" name="simbAsociado">Con receta medica
            <input type="checkbox" name="simbAsociado">Conservacion en frigorifico
            <input type="checkbox" name="simbAsociado">Caducidad inferior a 5 años <br>
            <input type="checkbox" name="simbAsociado">Psicótropos
            <input type="checkbox" name="simbAsociado">Estupefacientes
            <input type="checkbox" name="simbAsociado">Aportación reducida Seguridad Social <br>
          <input type="button" @click="ingresarInfo" value="Confirmar">
          <input type="reset" value="Limpiar formulario">
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import HeaderProductos from "@/components/HeaderProductos";
export default {
name: "RegistroProductos",
  components:{
    HeaderProductos,
    Sidebar
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