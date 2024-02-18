import {ObtenirRoleModel} from "../role/obtenir-role.model";

export class ObtenirUtilisateurModel {
  public prenom!: string;
  public  nom!: string;
  public email!: string;
  public telephone!: string;
  public motDePasse!: string ;
  public roles!: Array<ObtenirRoleModel>;
  public id!: string;
}
