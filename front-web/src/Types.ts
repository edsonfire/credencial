import { type } from "os";
import { number, string } from "prop-types";

export type Credencialp = {

    id: number;
    nome: string;
    cargo: string;
    campo: string;
    matriula: number;
    ordenado: Date;
    filiacao: Date;
    emissao: Date;
    validade: Date;
    local: string;
    estadoCiviL: string;
    rg: string;

}


type CredencialId={
    id:number;
}


export type CredencialPayload={

    products: CredencialId[];
}
