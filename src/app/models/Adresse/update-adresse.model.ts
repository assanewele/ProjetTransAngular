export interface UpdateAdresseModel {
    id: string;
    region: string;
    commune: string;
    quartier?: string;
    village?: string;
    numeroMaison: number;
}
