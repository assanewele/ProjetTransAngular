import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../../models/reponse/api-response.model';
import { LireConsoModel } from '../../models/Consommation/lire-conso.model';
import { baseUrl } from '../../helpers/urls';
import { CreerConsoModel } from '../../models/Consommation/creer-conso.model';

@Injectable({
  providedIn: 'root'
})
export class ConsommationService {

  constructor(private http: HttpClient) { }

  // Récupérer toutes les consommations
  getConsommations(): Observable<ApiResponseModel<LireConsoModel[]>> {
    const url = `${baseUrl}/Consommation`;
    return this.http.get<ApiResponseModel<LireConsoModel[]>>(url);
  }

  // Récupérer une consommation par ID
  getConsommationById(id: string): Observable<ApiResponseModel<LireConsoModel>> {
    const url = `${baseUrl}/Consommation/${id}`;
    return this.http.get<ApiResponseModel<LireConsoModel>>(url);
  }

  // Récupérer les consommations par ID de compteur
  getConsommationsByCompteurId(compteurId: string): Observable<ApiResponseModel<LireConsoModel[]>> {
    const url = `${baseUrl}/Consommation/GetConsommationsByCompteurId/${compteurId}`;
    return this.http.get<ApiResponseModel<LireConsoModel[]>>(url);
  }

  // Créer une nouvelle consommation
  createConsommation(consommation: CreerConsoModel): Observable<ApiResponseModel<LireConsoModel>> {
    const url = `${baseUrl}/Consommation`;
    return this.http.post<ApiResponseModel<LireConsoModel>>(url, consommation);
  }

  // Supprimer une consommation
  deleteConsommation(id: string): Observable<ApiResponseModel<string>> {
    const url = `${baseUrl}/Consommation/${id}`;
    return this.http.delete<ApiResponseModel<string>>(url);
  }}
