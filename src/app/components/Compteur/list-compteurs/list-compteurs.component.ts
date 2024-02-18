import { Component, OnInit } from '@angular/core';
import { CompteurReadModel } from '../../../models/Compteur/compteur-read.model';
import { CompteurService } from '../../../services/Compteur/compteur.service';
import { DatePipe, Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-compteurs',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './list-compteurs.component.html',
  styleUrl: './list-compteurs.component.scss'
})
export class ListCompteursComponent implements OnInit{

  ListCompteur: CompteurReadModel[] = [{}] as CompteurReadModel[];
  constructor(private compteurService: CompteurService,
              private router: Router,
              private location: Location){}
  ngOnInit(): void {
    this.compteurService.GetAllCompteur().subscribe({
      next: (response) => {
        if(response.success){
          this.ListCompteur = response.data;
          console.log(this.ListCompteur);
          console.log(response);
        }
      }
    })
  }

  supprimer(compteurId: string) {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce compteur?")){
      this.compteurService.deleteCompteur(compteurId).subscribe({
        next: (response) => {
          if(response.success){
            this.location.historyGo(0);
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
    mettreAJour(compteurId: string) {
      this.router.navigate(['/modifier-compteur', compteurId]);
    }
  
    voirDetails(compteurId: string) {
      this.router.navigate(['/details-compteur', compteurId]);
    }

}
