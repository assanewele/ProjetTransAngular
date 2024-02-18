import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreerPrepaimentModel } from '../../../models/Prepaiement/creer-prepaiment.model';
import { PrepaiementService } from '../../../services/Prepaiement/prepaiement.service';
import { ActivatedRoute } from '@angular/router';
import { CompteurService } from '../../../services/Compteur/compteur.service';
import { CompteurReadModel } from '../../../models/Compteur/compteur-read.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-creer-prepaiement',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './creer-prepaiement.component.html',
  styleUrl: './creer-prepaiement.component.scss'
})
export class CreerPrepaiementComponent implements OnInit{
  prepaiementForm!: FormGroup;
  compteur!: CompteurReadModel;
  compteurId: string = "";

  constructor(private fb: FormBuilder,
              private prepaiementService: PrepaiementService,
              private compteurService: CompteurService,
              private activateRoute: ActivatedRoute,
              private location: Location) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((parms) => {
      this.compteurId = parms['compteurId'];
    })
    if(this.compteurId){
      this.compteurService.getCompteurById(this.compteurId).subscribe({
      next: (res) => {
        this.compteur = res.data;

      },
      error: () => {
        //this.location.historyGo(0);
      }
    })
    this.prepaiementForm = this.fb.group({
      montant: ['', [Validators.required, Validators.max(25)]],
      compteurId: [this.compteurId, Validators.required]
    });
    }else{
      this.location.historyGo(-1);
    }

  }

  onSubmit() {
    if (this.prepaiementForm.valid) {
      const prepaiementData: CreerPrepaimentModel = this.prepaiementForm.value;
      this.prepaiementService.createPrepaiement(prepaiementData).subscribe({
        next: (response) => {

        }
      })
      console.log(prepaiementData);
    } else {
      console.log('error');
    }
  }
}
