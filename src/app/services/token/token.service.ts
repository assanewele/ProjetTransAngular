import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private jwtHelperService: JwtHelperService) { }
  saveToken(token: string){
    localStorage.setItem("token", token);
  }

  removeToken(key: string){
    localStorage.removeItem(key);
  }
  isLogged(): boolean{
    const token = localStorage.getItem("token");
    return !!token
  }

  getUserInfoFromToken() {
    const token = localStorage.getItem('token');

    if (token) {
      return this.jwtHelperService.decodeToken(token);
    }
    return null;
  }
}
