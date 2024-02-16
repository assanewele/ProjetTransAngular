import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginReponseModel} from "../../models/reponse/login-reponse.model";
import {LoginModel} from "../../models/utilisateur/login.model";
import {baseUrl} from "../../helpers/urls";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  // Method that calls api/Authentication/login endpoint to log in a user
  login(email:string, motDePasse:string): Observable<LoginReponseModel>{
    const requestBody = new LoginModel(email, motDePasse)
    return this.http.post<LoginReponseModel>(`${baseUrl}/Authentification/login`, requestBody);
  };

  // Method that calls api/Authentication/logout endpoint to log out a user
  logout(){
    return this.http.post<any>(`${baseUrl}/Authentification/logout`, {});
  }
}
