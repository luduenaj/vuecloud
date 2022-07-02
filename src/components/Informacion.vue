<template>
  <div id="info">
    <ul>
      <li>
        <h2>Titulo: {{canciones[0].title}}</h2>
        <h2>Duracion: {{duracion}}min</h2>
        <h2>Autor: {{canciones[0]['artist-credit'][0].name}}</h2>
      </li>
      <hr id = "duracion">
    </ul>
    <Letras :cancion="canciones[0].title" :autor="canciones[0]['artist-credit'][0].name"></Letras>
    <router-link id="discografia" :to="{name: 'DiscografiaView', params: {artista_id: idArtista}}">Discografia</router-link>
  </div>
</template>

<script>
import Letras from '@/components/Letras.vue';
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
    },
    idArtista(){
      console.log(this.canciones[0]['artist-credit'][0].artist.id);
      return this.canciones[0]['artist-credit'][0].artist.id;
    },
  },
  components:{
    Letras,
  },
  data(){
    return{
      
    }
  }
}
</script>

<style scoped>
ul{
list-style: none;
}

h2{
  color: #333;
  margin: 5px;
}

#duracion{
  display: ;
  width: 70%;
  margin: 10px 5%;
  height: 1px;
  background-color: #6067A5;
  border: solid #6067A5;
}

#info{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
}

#discografia{
  margin-bottom: 20px;
  background:#6067A5;
  border: none;
  padding: 15px;
  border-radius: 10px;
  text-decoration: none;
  color: #111;
}

</style>