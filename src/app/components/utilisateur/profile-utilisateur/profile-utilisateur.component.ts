import { Component } from '@angular/core';
import {ObtenirRoleModel} from "../../../models/role/obtenir-role.model";
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";
import {TokenService} from "../../../services/token/token.service";
import {Router} from "@angular/router";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-profile-utilisateur',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './profile-utilisateur.component.html',
  styleUrl: './profile-utilisateur.component.scss'
})
export class ProfileUtilisateurComponent {
  firstName!: string;
  lastName!: string;
  email!: string;
  phoneNumber!: string;
  roles!: Array<ObtenirRoleModel>;

  constructor(private userService: UtilisateurService,
              private tokenService: TokenService,
              private router: Router) {
  }

  ngOnInit() {

    this.userService.getUser(this.tokenService.getUserInfoFromToken().Id)
      .subscribe(user => {
        console.log(user.roles[0].name);
        this.firstName = user.prenom;
        this.lastName = user.nom;
        this.email = user.email;
        this.phoneNumber = user.telephone;
        this.roles = user.roles;
      });
  }

  onLogout() {
    this.tokenService.removeToken("token");
    this.router.navigateByUrl("");
  }

  onChangePassword() {
    this.router.navigateByUrl("/utilisateur/changer-mot-de-passe");
  }

}
