import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CreerUtilisateurModel} from "../../models/utilisateur/creer-utilisateur.model";
import {Observable} from "rxjs";
import {ReponseStandardModel} from "../../models/reponse/reponse-standard.model";
import {baseUrl} from "../../helpers/urls";
import {ModifierInformationUtilisateurModel} from "../../models/utilisateur/modifier-information-utilisateur.model";
import {ChangerMotDePasseUtilisateurModel} from "../../models/utilisateur/changer-motDePasse-utilisateur.model";
import {ObtenirUtilisateurModel} from "../../models/utilisateur/obtenir-utilisateur.model";

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http: HttpClient) { }

  // Method that calls api/User/Register endpoint to register a user
  registerUser(model: CreerUtilisateurModel): Observable<ReponseStandardModel>{
    return this.http.post<ReponseStandardModel>(`${baseUrl}/Utilisateurs/creer-utilisateur`, model);
  }

  // Method that calls api/User/get-all-users endpoint to get all the users
  getAllUsers(): Observable<Array<ObtenirUtilisateurModel>>{
    return this.http.get<Array<ObtenirUtilisateurModel>>(`${baseUrl}/Utilisateurs/obtenir-tous-les-utilisateurs`)
  }

  // Method that calls api/User/get-user/{email} endpoint to get a user by using him or her email address

  getUser(id: string): Observable<ObtenirUtilisateurModel>{
    return this.http.get<ObtenirUtilisateurModel>(`${baseUrl}/Utilisateurs/obtenir-utilisateur/${id}` )
  }
  /* Method that calls api/User/modify/{email} endpoint to modify user information such as FirstName,
    LastName, PhoneNumber
   */
  modifyUserInformation(id: string, model: ModifierInformationUtilisateurModel): Observable<ReponseStandardModel>{
    return this.http.put<ReponseStandardModel>(`${baseUrl}/Utilisateurs/modify/${id}`, model)
  }

  // Method that calls api/User/change-password/{email} endpoint to change the user password
  changeUserPassword(id: string, model: ChangerMotDePasseUtilisateurModel): Observable<ReponseStandardModel>{
    return this.http.put<ReponseStandardModel>(`${baseUrl}/Utilisateurs/change-password/${id}`, model )
  }

  // Method that calls api/User/delete/{email} endpoint to delete a user
  deleteUser(id: string): Observable<ReponseStandardModel>{
    return this.http.delete<ReponseStandardModel>(`${baseUrl}/Utilisateurs/delete/${id}`)
  }

}
