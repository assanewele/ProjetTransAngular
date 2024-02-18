import { Component, OnInit } from '@angular/core';
import { CompteurReadModel } from '../../../models/Compteur/compteur-read.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CompteurService } from '../../../services/Compteur/compteur.service';
import { DatePipe, Location } from '@angular/common';
import { AdresseService } from '../../../services/Adresse/adresse.service';
import { LireAdresseModel } from '../../../models/Adresse/lire-adresse.model';

@Component({
  selector: 'app-details-compteur',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './details-compteur.component.html',
  styleUrl: './details-compteur.component.scss'
})
export class DetailsCompteurComponent implements OnInit{

  compteurId!:string
  compteur: CompteurReadModel = {} as CompteurReadModel;
  adresse: LireAdresseModel = {} as LireAdresseModel;

  constructor(private activateroute: ActivatedRoute,
              private compteurService: CompteurService,
              private adresseService: AdresseService,
              private location: Location,
              private router: Router){

  }
  ngOnInit(): void {
    this.activateroute.params.subscribe((parameters) => {
      this.compteurId = parameters['compteurId'];
      console.log(this.compteurId)
    })

this.compteurService.getCompteurById(this.compteurId).subscribe({
  next: (response) => {
      this.compteur = response.data;
      // Obtention des détails de l'adresse du compteur
      this.adresseService.getAdresseById(this.compteur.adresseId).subscribe({
          next: (adresseResponse) => {
              this.adresse = adresseResponse.data;
          },
          error: (adresseError) => {
              alert("Une erreur est survenue lors de la récupération des détails de l'adresse.");
          }
      });
  },
  error: (err) => {
      alert("Une erreur est survenue lors de la récupération des détails du compteur. Veuillez recharger la page.");
  }
});

  }

  fairePrepaiement() {
    throw new Error('Method not implemented.');
    }
    supprimer() {
      if (window.confirm("Êtes-vous sûr de vouloir supprimer ce compteur?")){
        this.compteurService.deleteCompteur(this.compteur.id).subscribe({
          next: (response) => {
            if(response.success){
              this.router.navigate(['/list-compteur']);
            }else{
              this.location.historyGo(0);
            }
          },
          error: (err) => {
            alert("Une erreur s'est produite, veuillez reprendre la suppression")
          }
        })
      }
    }

    modifier() {
      this.router.navigate(['/modifier-compteur', this.compteur.id]);
    }

    retour() {
      this.location.historyGo(-1);
    }
}
