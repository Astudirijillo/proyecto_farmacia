<template>
  <div>
    <Header></Header>
    <div>
      <form action="../form-result.php" target="_blank">
        <p class="users">
          Nombre Producto <input type="text" name="nombre">
          Componente  <input type="text" name="apellido">
          Farmaceutica <input type="text" name="rut">
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
          </select><br><br>
          ¿Bioequivalente? <br>
            <input type="radio" name="bioequivalente" value="si">SI
            <input type="radio" name="bioequivalente" value="no">NO<br>
          <br>
          Extras <input type="text" name="contraseña">
          <input type="button" @click="ingresarInfo" value="Confirmar">
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