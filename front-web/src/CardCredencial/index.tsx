import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCredencial } from '../api';
import Card from './card';
import { Credencialp, Product } from "./Types";


interface RouteParams {
    id: string
}

function CardCredencial(){
   
   const {id} = useParams<RouteParams>();



    const [credencialP, setCredencialP] = useState<Credencialp>({nome:"edson"});

    useEffect(()=>{
        
        fetchCredencial(Number(id)).
        then(response=>setCredencialP(response.data)
        
        )
        
    })


return  (
<>
<div>
  olá, {credencialP?.nome}

<br/>
<Card cargo="teste" nome="edson" credencial={credencialP} ></Card>

  

</div>
</>
)}

export default CardCredencial;


