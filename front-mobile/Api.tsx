import axios from "axios"

const API_URL= 'http://192.168.0.107:8080'


export function fechCredenciais(){

   return  axios(`${API_URL}/decredencial` );
}



export function fechCredencial(cred:number){

  return  axios(`${API_URL}/decredencial/${cred}` );
}

export function confirmDelivery(orderId:number){
  return axios.put(`${API_URL}/orders/${orderId}/delivered`)

}