export interface CompteurReadModel {
    id: string;
    solde: number;
    dateCreation: Date;
    numeroCompteur: string;
    consommationJournaliere?: number;
    seuilDeConsommationPourAlerte?: number;    
    utilisateurId: string;
    proprietaireId: string;
    adresseId: string;
    fullnameProprietaire?: string;
}
