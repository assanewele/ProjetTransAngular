import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ObtenirRoleModel} from "../../models/role/obtenir-role.model";
import {baseUrl} from "../../helpers/urls";
import {ReponseStandardModel} from "../../models/reponse/reponse-standard.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class RoleUtilisateurService {

  constructor(private http: HttpClient) { }
  getRolesOfUser(userId: string): Observable<ObtenirRoleModel[]>{
    return this.http.get<ObtenirRoleModel[]>(`${baseUrl}/RolesUtilisateurs/get-roles-of-user/${userId}`);
  }
  assignRoleToUser(userId: string, roleName: string):Observable<ReponseStandardModel>{
    return this.http.post<ReponseStandardModel>(`${baseUrl}/RolesUtilisateurs/assign-role-to-user/${userId}/${roleName}`, {})
  }
  removeRoleFromUser(userId: string, roleName: string): Observable<ReponseStandardModel>{
    return this.http.post<ReponseStandardModel>(`${baseUrl}/RolesUtilisateurs/remove-role-from-user/${userId}/${roleName}`,{})
  }
}
