<template>
  <div>
  <input id="btn-letra" type = "button" value="Mostrar Letras" @click="cargarLetras">

  <div v-show="mostrar">
    <pre v-if="this.letras !=''">{{ letras }}</pre>
    <p v-else>Cargando...</p>
  </div>
  </div>
</template>

<script>
import consultarLetras from '@/service/consultarLetras';
export default{
  name: 'LetrasCancion',
  props:{
    autor: {
      type:String,
      required: true,},
    cancion: {
      type:String,
      required: true,}
  },
  data() {
    return {
      letras: '',
      mostrar: false,
    }
  },
  methods: {
    cargarLetras(){
      this.mostrar = true;
      consultarLetras.getLetras(this.autor,this.cancion)
      .then(response => {
        this.letras = response.data.lyrics;
        
        
    });
    }
  }
}
</script>

<style scoped>
#btn-letra{
  margin-bottom: 20px;
  background:#6067A5;
  border: none;
  padding: 15px;
  border-radius: 10px;
}

</style>