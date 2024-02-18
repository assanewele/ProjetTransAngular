import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProprietaireService } from '../../../services/Proprietaire/proprietaire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifier-proprietaire-existe',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './verifier-proprietaire-existe.component.html',
  styleUrl: './verifier-proprietaire-existe.component.scss'
})
export class VerifierProprietaireExisteComponent {
  proprietaireId!: string;
  cniProprietaire: string = '';
  verificationSuccess: boolean = false;
  ProprietaireExistPas: boolean = false;
  constructor(private proprietaireService: ProprietaireService,
              private router: Router){}

  verifierProprietaire() {
    console.log(this.cniProprietaire)
    this.proprietaireService.getProprietaireByCNI(this.cniProprietaire).subscribe({
      next: (Response) => {
        if(Response){
          this.verificationSuccess = true;
          this.proprietaireId = Response.id;
          console.log(Response)
        }
      },
      error: (er) => {
        this.ProprietaireExistPas = true;
      }
    })
  }
  creerProprietaire() {
    this.router.navigate(['/creer-proprietaire']);
  }

  creerCompteur() {
    this.router.navigate(['/creer-compteur',this.proprietaireId]);
  }

  voirProprietaire() {
    this.router.navigate(['/details-proprietaire', this.proprietaireId]);
  }
}
