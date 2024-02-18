export interface CompteurUpdateModel {
  id: string;
  solde: number;
  consommationJournaliere: number;
  seuilDeConsommationPourAlerte: number;
  proprietaireId: string;
  adresseId: string;
}
