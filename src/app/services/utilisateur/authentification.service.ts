import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginReponseModel} from "../../models/reponse/login-reponse.model";
import {baseUrl} from "../../helpers/urls";
import {LoginModel} from "../../models/utilisateur/login.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }
  // Method that calls api/Authentication/login endpoint to log in a user
  login(email:string, password:string): Observable<LoginReponseModel>{
    const requestBody = new LoginModel(email, password);
    return this.http.post<LoginReponseModel>(`${baseUrl}/Authentification/login`, requestBody);
  }
  // Method that calls api/Authentication/logout endpoint to log out a user
  logout(){
    return this.http.post<any>(`${baseUrl}/Authentification/logout`, {});
  }
}
