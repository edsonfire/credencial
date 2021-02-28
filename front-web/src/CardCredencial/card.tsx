import {Component} from 'react';
import { useParams } from "react-router-dom";
import { Credencialp, Product } from "./Types"
import { string } from "prop-types";

type Props = {

    nome:string;
    cargo:string;
credencial:Credencialp;
   
}

function Card({nome, cargo, credencial} :Props ){


    return (
            <div className="row">
                    <div className="form-control">
                        <label>Nome - {nome}</label>
                       <p>Recendo { credencial.nome}</p>
                       <p>Recendo { credencial.cargo}</p>
                    </div>

            </div>


    )


    
}
export default Card;

