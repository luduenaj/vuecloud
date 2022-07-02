import axios from 'axios';

const apiClient =axios .create({
  baseURL:'https://api.lyrics.ovh/v1/',
  withCredentials:false,
  headers:{
    Accept:'application/json',
    'Content-Type':'application/json',
  }
})

export default {
  getCanciones(artista,cancion){
    
    return apiClient.get(`/${artista}/${cancion}`);
  }
}