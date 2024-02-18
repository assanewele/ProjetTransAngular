import {Component, Input} from '@angular/core';
import {ObtenirUtilisateurModel} from "../../../models/utilisateur/obtenir-utilisateur.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-affichage-liste-utiliateurs',
  standalone: true,
  imports: [],
  templateUrl: './affichage-liste-utiliateurs.component.html',
  styleUrl: './affichage-liste-utiliateurs.component.scss'
})
export class AffichageListeUtiliateursComponent {
  @Input() user!:ObtenirUtilisateurModel;
  constructor(private router: Router) {
  }
  onClicOnSpecifiedUser() {
    this.router.navigateByUrl(`utilisateur/afficher-utilisateur/${this.user.id}`)
  }

}
