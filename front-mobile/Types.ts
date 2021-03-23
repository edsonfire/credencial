import { type } from "os";


export type Product = {

    id?: number;
    name?: string;
    price?: number;
    description?: string;
    imageUri?:string;

}




export type Credencialp = {

    id: number;
    nome: string;
    cargo: string;
    campo: string;
    matriula: number;
    ordenado: string;
    filiacao: string;
    emissao: string;
    validade: string;
    local: string;
    estadoCivil: string;
    rg: string;
    estado: string;
    org_rg:string;


}


export type CredencialId={
    id:number;
}


export type CredencialPayload={

    products: CredencialId[];
}
