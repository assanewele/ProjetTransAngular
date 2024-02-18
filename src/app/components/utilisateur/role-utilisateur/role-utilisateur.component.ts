import { Component } from '@angular/core';
import {ObtenirRoleModel} from "../../../models/role/obtenir-role.model";
import {ActivatedRoute, Router} from "@angular/router";
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";
import { RoleUtilisateurService} from "../../../services/role/role-utilisateur.service";
import {RoleService} from "../../../services/role/role.service";
import {PopupsService} from "../../../services/popups/popups.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-role-utilisateur',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './role-utilisateur.component.html',
  styleUrl: './role-utilisateur.component.scss'
})
export class RoleUtilisateurComponent {
  id!: string;
  email!: string;
  userRoles!: Array<ObtenirRoleModel>;
  rolesToAssign!: Array<ObtenirRoleModel>;
  roles!: Array<ObtenirRoleModel>;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UtilisateurService,
              private roleUserService: RoleUtilisateurService,
              private roleService: RoleService,
              private popupsService: PopupsService) {
  }
  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.userService.getUser(this.id).subscribe(user=>{
      this.userRoles = user.roles;
      this.email = user.email;
      this.roleService.getAllRoles().subscribe(roles=>{
        this.roles = roles;
        this.rolesToAssign = roles.filter(role=>!this.userRoles.some(userRole => userRole.name === role.name));
      })
    });
  }
  onAssign(roleName: string) {
    const confirm = window.confirm(`You want to assign '${roleName}' to '${this.email}'`)
    if (confirm){
      this.roleUserService.assignRoleToUser(this.id, roleName).subscribe(resp => {
        if (resp.statusCode === 200) {
          this.popupsService.successPopup(resp.message);
          this.roleUserService.getRolesOfUser(this.id).subscribe(roles => {
            this.userRoles = roles;
            this.rolesToAssign = this.roles.filter(role => !this.userRoles.some(userRole => userRole.name === role.name));
            this.router.navigateByUrl(`utilisateur/role-utilisateur/${this.id}`)
          });
        }
      })
    }
  }
  onRemoveRoleFromUser(roleName: string) {
    const confirm = window.confirm(`You want to remove '${roleName}' from '${this.email}'`)
    if (confirm){
      this.roleUserService.removeRoleFromUser(this.id, roleName).subscribe(resp=>{
        if(resp.statusCode === 200){
          this.popupsService.successPopup(resp.message)
          this.userRoles = this.userRoles.filter(role=>role.name !== roleName);
          this.rolesToAssign = this.roles.filter(role=> !this.userRoles.some(userRole=> userRole.name===role.name))
        }
      })}
  }

}
