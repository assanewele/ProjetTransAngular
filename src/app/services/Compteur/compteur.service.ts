import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../helpers/urls';
import { ApiResponseModel } from '../../models/reponse/api-response.model';
import { CompteurReadModel } from '../../models/Compteur/compteur-read.model';
import { CompteurRegisterModel } from '../../models/Compteur/compteur-register.model';
import { CompteurUpdateModel } from '../../models/Compteur/compteur-update.model';

const httpOptions = {
  headers: new HttpHeaders(
                          {'content-type': 'application/json'},
                          )
}
@Injectable({
  providedIn: 'root'
})
export class CompteurService {

  constructor(private http: HttpClient) { 

  }


  GetAllCompteur():Observable<ApiResponseModel<CompteurReadModel[]>>{
    const url = `${baseUrl}/Compteur`
    return this.http.get<ApiResponseModel<CompteurReadModel[]>>(url, httpOptions);
  }

    // Récupérer un compteur par ID
    getCompteurById(id: string): Observable<ApiResponseModel<CompteurReadModel>> {
      const url = `${baseUrl}/Compteur/${id}`;
      return this.http.get<ApiResponseModel<CompteurReadModel>>(url);
    }
     // Récupérer un compteur par numero compteur
     getCompteurByNumeroCompteur(numeroCompteur: string): Observable<ApiResponseModel<CompteurReadModel>> {
      const url = `${baseUrl}/Compteur/GetCompteursBynumeroCompteur/${numeroCompteur}`;
      return this.http.get<ApiResponseModel<CompteurReadModel>>(url);
    }   
  
    // Récupérer les compteurs par le CNI du propriétaire
    getCompteursByProprietaireCNI(cni: string): Observable<ApiResponseModel<CompteurReadModel[]>> {
      const url = `${baseUrl}/Compteur/GetCompteursByProprietaireCNI/${cni}`;
      return this.http.get<ApiResponseModel<CompteurReadModel[]>>(url);
    }
    createCompteur(model: CompteurRegisterModel): Observable<ApiResponseModel<CompteurReadModel>> {
      const url = `${baseUrl}/Compteur`;
      return this.http.post<ApiResponseModel<CompteurReadModel>>(url, model);
    }
  
    updateCompteur(id: string, model: CompteurUpdateModel): Observable<ApiResponseModel<CompteurReadModel>> {
      const url = `${baseUrl}/Compteur/${id}`;
      return this.http.put<ApiResponseModel<CompteurReadModel>>(url, model);
    }
  
    deleteCompteur(id: string): Observable<ApiResponseModel<string>> {
      const url = `${baseUrl}/Compteur/${id}`;
      return this.http.delete<ApiResponseModel<string>>(url);
    }
}
