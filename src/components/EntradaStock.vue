<template>
  <div>
    <br>
    <div class="enterStock">
      <form action="../form-result.php" target="_blank">
        <p class="stock">
          <br>
          <b>Codigo Producto</b><input type="text" name="razonSocial">
          <b>Rut de proveedor (sin puntos)</b> <input type="text" :placeholder="rutInfo" name="rut" required>
          <b>Nro. de Lote</b> <input type="text" name="direccion">
          <b>Unidades a retirar</b> <input type="text" name="nroTelefonico">
          <b>Fecha de recepcion</b> <input type="date" name="fechaRec">
          <br>
          <br>
          <b>Fecha de vencimiento</b> <input type="date" name="fechaVen">
          <br>
          <br>
          <input type="reset" class="formBtn" value="Limpiar formulario">
        </p>
      </form>
    </div>
    <div>
      <button class="agrStockBtn" >Agregar al lote</button>
      <br>
      <button class="deleteBtn">Quitar seleccion del lote</button>
      <br>
      <button class="loadSistemBtn" @click="ingresoConfirmado">Guardar lote en sistema</button>
    </div>
    <div>
      <table class="enterStockTable">
        <tr>
          <th></th>
          <th>Cod. Producto</th>
          <th>Rut Proveedor</th>
          <th>Nro. de Lote</th>
          <th>Cantidad a ingresar</th>
          <th>Fecha de recepcion</th>
          <th>Fecha de vencimiento</th>
        </tr>
        <td style="align-content: center"><input type="radio" name="perfilProducto" value=""></td>
        <td>999999999</td>
        <td>Loratadima</td>
        <td>Loratadina</td>
        <td>Antialergias</td>
        <td>Si</td>
        <td>Capsulas</td>
      </table>
    </div>
  </div>
</template>

<script>
export default {
name: "EntradaStock",
  components: {},
  data(){
    return{
      rutInfo:"Ej.: 11111111-1"
    }
  },
  methods:{
    ingresoConfirmado(){
      alert("Lote ingresado nro. XXXX");
    }
  }
}
</script>

<style scoped>

</style>