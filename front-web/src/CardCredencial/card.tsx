import { Credencialp } from "../Types"
import {Component} from 'react';
import { useParams } from "react-router-dom";


type Props = {

    credencialP: Credencialp;
   
}

function Card1({credencialP} :Props ){


    return (
            <div className="row">
                    <div className="form-control">
                        <label>Nome - {credencialP.nome}</label>
                        <label>{credencialP.cargo}</label>
                    </div>

            </div>


    )


    
}
export default Card1;

