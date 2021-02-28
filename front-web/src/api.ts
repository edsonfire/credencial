import axios from "axios";
import { CredencialPayload } from "./CardCredencial/Types";


const API_URL = 'http://localhost:8080';
/*const API_URL = 'http://localhost:8080';*/
const mapboxToken =process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;
export function fetchCredenciais(){

return axios(`${API_URL}/credencial`)    
}
/*
export function fetchLocalMapBox(local:string){

    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
};*/

export function saveCredencial(payload: CredencialPayload){

    return axios.post(`${API_URL}/`, payload)
}

export function fetchCredencial(id:number){
  return axios.get(`${API_URL}/credencial/${id}`)
    
}