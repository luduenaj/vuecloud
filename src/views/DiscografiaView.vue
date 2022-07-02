<template>
<div>
<div class="discografia">
  
  <div v-for="discos in discografia" :key="discos.barcode" class="about">
    <p>{{discos.date}}</p>
    <p>{{discos.title}}</p>
    
  </div>
  </div>
  <router-link id='volver' to="/">Volver</router-link>
 
 </div>
</template>

<script>
import consultarApi from "@/service/consultarApi";
export default ({
  name: 'DiscografiaView',
  props:{
    artista_id:{
      type: String,
      required:true,
    }
  },
  data() {
    return {
      discografia: [],
    }
  },
  created() {
    consultarApi.getDiscografia(this.artista_id).then(response => {this. discografia = response.data.releases})
  },
})
</script>

<style scoped>
.discografia{
  text-align: center;
  width: 60vw;
  display: flex;
  flex-flow: column wrap;
  background: rgba( 255, 255, 255, 0.65 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8px );
-webkit-backdrop-filter: blur( 8px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
height: 80vh;
overflow-x:scroll ;
overflow-y:hidden ;
}
.about{
  border-bottom: 1px solid #000;
  padding: 10px;
}
#id{
  text-decoration: none;
}

</style>