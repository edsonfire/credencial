import { type } from "os";


export type Product = {

    id?: number;
    name?: string;
    price?: number;
    description?: string;
    imageUri?:string;

}




export type Credencialp = {

    id?: number;
    nome?: string;
    cargo?: string;
    campo?: string;
    matriula?: number;
    ordenado?: Date;
    filiacao?: Date;
    emissao?: Date;
    validade?: Date;
    local?: string;
    estadoCiviL?: string;
    rg?: string;

}


export type CredencialId={
    id:number;
}


export type CredencialPayload={

    products: CredencialId[];
}
