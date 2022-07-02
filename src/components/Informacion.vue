<template>
  <div id="info">
    <ul>
      <li>
        <h2>Titulo: {{canciones[0].title}}</h2>
        <h2>Duracion: {{duracion}}min</h2>
        <hr id = "duracion">
        <h2>Autor: {{canciones[0]['artist-credit'][0].name}}</h2>
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  name:'informacionCanciones',
  props:{
    canciones:{
      type: Array,
      required: true,}
  },
  computed:{
    duracion(){
      let segundos=this.canciones[0].length;
     
      return ((segundos /1000)/60).toFixed(2);
    }
  }
}
</script>

<style scoped>
ul{
list-style: none;
}
#duracion{
  width: 30%;
  margin: 0 35%;
  height: 2px;
  background-color: black;
  border: solid black;
}
</style>