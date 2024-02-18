import { Component } from '@angular/core';
import { CompteurService } from '../../../services/Compteur/compteur.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verifier-compteur',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './verifier-compteur.component.html',
  styleUrl: './verifier-compteur.component.scss'
})
export class VerifierCompteurComponent {
  compteurId!: string;
  numeroCompteur: string = '';
  verificationSuccess: boolean = false;
  compteurNotExist: boolean = false;

  constructor(private compteurService: CompteurService,
              private router: Router){}

  verifierCompteur() {
    console.log(this.numeroCompteur);
    this.compteurService.getCompteurByNumeroCompteur(this.numeroCompteur).subscribe({
      next: (response) => {
        if (response) {
          this.verificationSuccess = true;
          this.compteurId = response.data.id;
          console.log(response);
        }
      },
      error: (err) => {
        this.compteurNotExist = true;
      }
    });
  }

  fairePrepaiement() {
    this.router.navigate(['/faire-prepaiement', this.compteurId]);
}


  voirCompteur() {
    this.router.navigate(['/details-compteur', this.compteurId]);
  }
}
