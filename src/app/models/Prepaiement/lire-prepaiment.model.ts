export interface LirePrepaimentModel {
    id: string;
    datePrepaiement: Date;
    montant: number;
    volumePrepaye: number;
    nombrePropulsionPrepaye?: number;
    compteurId: string;
}
