import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {ObtenirUtilisateurModel} from "../../../models/utilisateur/obtenir-utilisateur.model";
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";
import {AffichageListeUtiliateursComponent} from "../affichage-liste-utiliateurs/affichage-liste-utiliateurs.component";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
  selector: 'app-liste-utilisateurs',
  standalone: true,
  imports: [
    AffichageListeUtiliateursComponent,
    NgForOf,
    AsyncPipe
  ],
  templateUrl: './liste-utilisateurs.component.html',
  styleUrl: './liste-utilisateurs.component.scss'
})
export class ListeUtilisateursComponent {
  usersList$: Observable<ObtenirUtilisateurModel[]> = this.userService.getAllUsers();
  constructor(private userService: UtilisateurService) {
  }
  ngOnInit() {
    this.usersList$ = this.userService.getAllUsers();
  }
}
