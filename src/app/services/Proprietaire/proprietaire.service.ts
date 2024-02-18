import { Injectable } from '@angular/core';
import { baseUrl } from '../../helpers/urls';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LireProprietaireModel } from '../../models/Proprietaire/lire-proprietaire.model';
import { UpdateProprietaireComponent } from '../../components/Proprietaire/update-proprietaire/update-proprietaire.component';
import { CreerProprietaireModel } from '../../models/Proprietaire/creer-proprietaire.model';

@Injectable({
  providedIn: 'root'
})
export class ProprietaireService {
  private apiUrl = `${baseUrl}/Proprietaires`;

  constructor(private http: HttpClient) { }

  // GET: api/Proprietaires
  getProprietaires(): Observable<LireProprietaireModel[]> {
    return this.http.get<LireProprietaireModel[]>(this.apiUrl);
  }

  // GET: api/Proprietaires/{id}
  getProprietaireById(id: string): Observable<LireProprietaireModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<LireProprietaireModel>(url);
  }

  // GET: api/Proprietaires/GetProprietaireByCNI/{cni}
  getProprietaireByCNI(cni: string): Observable<LireProprietaireModel> {
    const url = `${this.apiUrl}/GetProprietaireByCNI/${cni}`;
    return this.http.get<LireProprietaireModel>(url);
  }

  // PUT: api/Proprietaires/{id}
  updateProprietaire(id: string, proprietaire: UpdateProprietaireComponent): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, proprietaire);
  }

  // POST: api/Proprietaires
  createProprietaire(proprietaire: CreerProprietaireModel): Observable<LireProprietaireModel> {
    return this.http.post<LireProprietaireModel>(this.apiUrl, proprietaire);
  }

  // DELETE: api/Proprietaires/{id}
  deleteProprietaire(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}