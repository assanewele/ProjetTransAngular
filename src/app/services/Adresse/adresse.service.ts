import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../../models/reponse/api-response.model';
import { LireAdresseModel } from '../../models/Adresse/lire-adresse.model';
import { UpdateAdresseModel } from '../../models/Adresse/update-adresse.model';
import { CreerAdresseModel } from '../../models/Adresse/creer-adresse.model';
import { baseUrl } from '../../helpers/urls';

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  constructor(private http: HttpClient) { }
  // Récupérer toutes les adresses
  getAdresses(): Observable<ApiResponseModel<LireAdresseModel[]>> {
    const url = `${baseUrl}/Adresse`
    return this.http.get<ApiResponseModel<LireAdresseModel[]>>(url);
  }

  // Récupérer une adresse par ID
  getAdresseById(id: string): Observable<ApiResponseModel<LireAdresseModel>> {
    const url = `${baseUrl}/Adresse/${id}`
    return this.http.get<ApiResponseModel<LireAdresseModel>>(url);
  }

  // Mettre à jour une adresse
  updateAdresse(id: string, adresse: UpdateAdresseModel): Observable<ApiResponseModel<string>> {
    const url = `${baseUrl}/Adresse/${id}`
    return this.http.put<ApiResponseModel<string>>(url, adresse);
  }

  // Créer une nouvelle adresse
  createAdresse(adresse: CreerAdresseModel): Observable<ApiResponseModel<LireAdresseModel>> {
    const url = `${baseUrl}/Adresse`
    return this.http.post<ApiResponseModel<LireAdresseModel>>(url, adresse);
  }

  // Supprimer une adresse
  deleteAdresse(id: string): Observable<ApiResponseModel<string>> {
    const url = `${baseUrl}/Adresse/${id}`
    return this.http.delete<ApiResponseModel<string>>(url);
  }
}
