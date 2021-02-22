import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredencial } from '../api';

import { Credencialp } from "../Types";
import Card1 from './card';


interface RouteParams {
    id: string
}
  

function CardCredencial(){
   
   const {id} = useParams<RouteParams>();



    const [credencialP, setCredencialP] = useState<Credencialp>();

    useEffect(()=>{
        
        fetchCredencial(Number(id)).
        then(response=>setCredencialP(response.data))
       
    })


return  (
<>
<div>
    <Card1 credencialP={credencialP}
    ></Card1>

    <p>ola, {credencialP?.nome}</p>
    
</div>
</>
)}

export default CardCredencial;


