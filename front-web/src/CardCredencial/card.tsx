import './style.css';
import {Component} from 'react';
import { useParams } from "react-router-dom";
import { Credencialp, Product } from "./Types"
import { string } from "prop-types";
import {ReactComponent as Logo} from './conamad.svg';
type Props = {

    nome:string;
    cargo:string;
credencial:Credencialp;
   
}

function Card({nome, cargo, credencial} :Props ){


    return (
            <>
            <div className="col-md-4">
            <div className="container-head">
                <p>Credencial de Ministro</p>
            </div>
            <div className="container-card">
                <div className="row">
                    <div className="col-2">
                        <Logo></Logo>
                    </div>

                    <div className="col-9 text-center">
                    <h3>CONAMAD</h3>
                    <p className="container-head-text">CONVEÇÃO NACIONAL DAS ASSEMBLÉIAS DE DEUS NO BRASIL</p>    
                    <h5>MINISTÉRIO DE MADUREIRA</h5>
                    <p className="container-head-text-f">Brasília-DF - 61-3242-8521</p>
                    </div>
                    
                </div>
                <div className='row mgp'>
                        
                        <div className="col-md-4 ">
                            <div className="container-input">
                                <label className="card-label">Matrícula</label>
                                <p className="form-text" >{credencial.matriula}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="container-input">
                                <label className="card-label">Cargo</label>
                                <p className="form-text" >{credencial.cargo}</p>
                            </div>    
                        </div>
                        <div className="col-md-4">
                            <div className="container-input">
                                <label className="form-label">Filiação</label>
                               <p className="form-text" >{credencial.filiacao}</p>
                            </div>
                        </div>

                </div>
                <div className="row">
                        <div className="col-md-1"></div>
                        <div className=" col-md-10 container-input form-group">
                            <label>Ministro</label>
                           <p> {credencial.nome} </p>
                        </div>
                </div>   
                <div className="row">
                <div className=" col-md-10 container-input form-group">
                            <label>Estado</label>
                           <p> {credencial.local} </p>
                        </div>
                        <div className=" col-md-10 container-input form-group">
                            <label>Campo</label>
                           <p> {credencial.campo} </p>
                        </div>

                    </div>
            

            </div>
            </div>            

            </>

    )


    
}
export default Card;

