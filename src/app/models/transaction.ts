export class Transaction {
    id!:number;
    montant_a_recevoir!:number;
    date_envoi!:Date;
    frais!:number;
    montant_total!:number;
    status!:string;
    pays_origine!:string;
    pays_destination!:string;
    devise_destination!:string;
    devise_origine!:string;
    createdAt!:Date;
    updatedAt!:Date;
    userLogin!:string;
    emetteurId!:string;
    recepteurId!:string;
}
