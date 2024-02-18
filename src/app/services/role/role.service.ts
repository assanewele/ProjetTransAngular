import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ObtenirRoleModel} from "../../models/role/obtenir-role.model";
import {baseUrl} from "../../helpers/urls";

@Injectable({
    providedIn: 'root'
  })
  export class RoleService {

  constructor(private http: HttpClient) { }

  // Method that calls api/Role/get-roles endpoint to get all roles
  getAllRoles(): Observable<ObtenirRoleModel[]>{
    return this.http.get<ObtenirRoleModel[]>(`${baseUrl}/Roles/obtenir-tous-les-roles`);
  }
  // Method that calls api/Role/get-role endpoint to get all roles
  getRole(id: string):Observable<ObtenirRoleModel>{
    return this.http.get<ObtenirRoleModel>(`${baseUrl}/Roles/obtenir-role/${id}`)
  }

  // Method that calls api/Role/modify-role/{id} endpoint to update a role information like its
  // name and its description
  /*modifyRole(id: string, model: ): Observable<DefaultResponseModel>{
    return this.http.put<DefaultResponseModel>(`${roleUrl}/modify-role/${id}`, model)
  }*/

}
