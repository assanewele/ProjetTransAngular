import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PopupsService} from "../../../services/popups/popups.service";
import {ObtenirRoleModel} from "../../../models/role/obtenir-role.model";
import {RoleUtilisateurService} from "../../../services/role/role-utilisateur.service";
import {RoleService} from "../../../services/role/role.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-modifier-information',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './modifier-information.component.html',
  styleUrl: './modifier-information.component.scss'
})
export class ModifierInformationComponent {
  modifyUserInfoForm!: FormGroup;
  email!: string;
  id!: string;
  userRoles!: Array<ObtenirRoleModel>;
  rolesToAssign!: Array<ObtenirRoleModel>;
  roles!: Array<ObtenirRoleModel>;
  constructor(private userService: UtilisateurService,
              private roleUserService: RoleUtilisateurService,
              private roleService: RoleService,
              private router: Router,
              private route: ActivatedRoute,
              private formbuilder: FormBuilder,
              private popupsService: PopupsService) {
  }
  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.userService.getUser(this.id).subscribe(
      user=>{
        this.email = user.email;
        this.modifyUserInfoForm = this.formbuilder.group({
          firstName: [user.prenom],
          lastName: [user.nom],
          phoneNumber: [user.telephone]
        });
        this.userRoles = user.roles;
        this.roleService.getAllRoles().subscribe(roles=>{
          this.roles = roles;
          this.rolesToAssign = roles.filter(role=>!this.userRoles.some(userRole => userRole.name === role.name));
        })
      });

  }
  onModify(){
    this.userService.modifyUserInformation(this.id, {
      prenom: this.modifyUserInfoForm.value.firstName,
      nom: this.modifyUserInfoForm.value.lastName,
      telephone: this.modifyUserInfoForm.value.phoneNumber,
      email: this.email
    }).subscribe(
      resp=>{
        if(resp.statusCode === 200){
          this.popupsService.successPopup(resp.message);
          this.router.navigateByUrl(`utilisateur/afficher-utilisateur/${this.id}`);
        }
      },
      ()=>
        alert("there are errors. Try again!")
    )
  }
  onCancel(){
    this.router.navigateByUrl(`utilisateur/afficher-utilisateur/${this.id}`)
  }

  onModifyRoles(){
    this.router.navigateByUrl(`utilisateur/role-utilisateur/${this.id}`);
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

