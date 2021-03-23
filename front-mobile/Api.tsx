import axios from "axios"

const API_URL= 'http://54.39.67.224:8080'


export function fechCredenciais(){

   return  axios(`${API_URL}/credencial` );
}



export function fechCredencial(cred:number){

  return  axios(`${API_URL}/credencial/${cred}` );
}

export function confirmDelivery(orderId:number){
  return axios.put(`${API_URL}/orders/${orderId}/delivered`)

}