import { Component } from '@angular/core';
import {ObtenirRoleModel} from "../../../models/role/obtenir-role.model";
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PopupsService} from "../../../services/popups/popups.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-affichage-utiliateur',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './affichage-utiliateur.component.html',
  styleUrl: './affichage-utiliateur.component.scss'
})
export class AffichageUtiliateurComponent {
  id!: string;
  firstName!: string;
  lastName!: string;
  email!: string;
  roles!: Array<ObtenirRoleModel>;
  phoneNumber!: string;

  constructor(private userService: UtilisateurService,
              private route: ActivatedRoute,
              private router: Router,
              private popupsService: PopupsService) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params["id"]

    this.userService.getUser(this.id)
      .subscribe(user => {
        console.log(user);
        this.firstName = user.prenom;
        this.lastName = user.nom;
        this.email = user.email;
        this.phoneNumber = user.telephone
        this.roles = user.roles;

      });
  }

  onDelete(){
    var confirm = window.confirm(`This action will completely delete the user '${this.email}'`)
    if (confirm) {
      this.userService.deleteUser(this.id).subscribe(response => {
        if (response.statusCode === 200) {
          this.popupsService.successPopup(response.message);
          this.router.navigateByUrl("utilisateur/liste-utilisateurs")
        }
      })
    }
  }


  onModify() {
    this.router.navigateByUrl(`utilisateur/modifier-information/${this.id}`);
  }
}
