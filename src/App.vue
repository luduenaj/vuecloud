<template>
  <div id = "fondo">
    <div id ="contenido">
      <form id="form-buscar" >
        <input v-model="nombreCancion" id="input-buscar" type="text">
        <button id = "btnBuscar" @click="buscarCancion">buscars</button>
      </form>
      <informacion class="info" v-if="canciones.length>0" :canciones="this.canciones"></informacion>

    <router-view></router-view>
    </div>  
  </div>
  
</template>

<script>
import consultarApi from '@/service/consultarApi';
import informacion from '@/components/Informacion.vue'
export default{
  data(){
    return {
      nombreCancion:"",
      canciones: [],
    }
  },
  methods: {
    buscarCancion() {
      
      consultarApi.getCanciones(this.nombreCancion)
        .then(response => {
          this.canciones = response.data.recordings;
          
        });
    }
  },components:{
    informacion,
  }
}
</script>

<style>
*{
  margin: 0;
}
#fondo{
  background-color: #6067A5;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%234e5793' fill-opacity='0.4'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.4'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
  height: 100vh;
  overflow: hidden;
  display: flex;
justify-content: center;
  align-items: center;
}
#contenido{
  width: 80vw;
 
  margin: 20px;
  height: 90vh;
  display: flex;
  align-items: flex-start;
  flex-flow: row wrap;
  justify-content: center;
  padding-top:30px ;
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

}
.info{
  text-align: center;
  width: 100%;
  text-decoration: none;
  list-style: none;
}

#form-buscar{
 
height: 30px;
display: flex;
justify-content: center;
align-items: center;

}

#btnBuscar{
  background: none;
  border:none;
  outline: none;
  border-radius: 5px;
  background-color: rgb(120, 151, 252);
}

</style>
