import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../../helpers/urls';
import { ApiResponseModel } from '../../models/reponse/api-response.model';
import { UpdatePrepaimentModel } from '../../models/Prepaiement/update-prepaiment.model';
import { LirePrepaimentModel } from '../../models/Prepaiement/lire-prepaiment.model';
import { CreerPrepaimentModel } from '../../models/Prepaiement/creer-prepaiment.model';

@Injectable({
  providedIn: 'root'
})
export class PrepaiementService {

  constructor(private http: HttpClient) { }
    // Récupérer tous les prépaiements
    getPrepaiements(): Observable<ApiResponseModel<LirePrepaimentModel[]>> {
      const url = `${baseUrl}/Prepaiement`;
      return this.http.get<ApiResponseModel<LirePrepaimentModel[]>>(url);
    }
  
    // Récupérer un prépaiement par ID
    getPrepaiementById(id: string): Observable<ApiResponseModel<LirePrepaimentModel>> {
      const url = `${baseUrl}/Prepaiement/${id}`;
      return this.http.get<ApiResponseModel<LirePrepaimentModel>>(url);
    }
  
    // Récupérer les prépaiements d'un compteur par ID de compteur
    getPrepaiementsByCompteurId(compteurId: string): Observable<ApiResponseModel<LirePrepaimentModel[]>> {
      const url = `${baseUrl}/Prepaiement/GetCompteurByCompteurId/${compteurId}`;
      return this.http.get<ApiResponseModel<LirePrepaimentModel[]>>(url);
    }
  
    // Mettre à jour un prépaiement
    updatePrepaiement(id: string, prepaiement: UpdatePrepaimentModel): Observable<ApiResponseModel<string>> {
      const url = `${baseUrl}/Prepaiement/${id}`;
      return this.http.put<ApiResponseModel<string>>(url, prepaiement);
    }
  
    // Créer un nouveau prépaiement
    createPrepaiement(prepaiement: CreerPrepaimentModel): Observable<ApiResponseModel<LirePrepaimentModel>> {
      const url = `${baseUrl}/Prepaiement`;
      return this.http.post<ApiResponseModel<LirePrepaimentModel>>(url, prepaiement);
    }
  
    // Supprimer un prépaiement
    deletePrepaiement(id: string): Observable<ApiResponseModel<string>> {
      const url = `${baseUrl}/Prepaiement/${id}`;
      return this.http.delete<ApiResponseModel<string>>(url);
    }
}
