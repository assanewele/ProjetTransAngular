import { Component, OnInit } from '@angular/core';
import { CompteurService } from '../../../services/Compteur/compteur.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CompteurRegisterModel } from '../../../models/Compteur/compteur-register.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LireAdresseModel } from '../../../models/Adresse/lire-adresse.model';
import { AdresseService } from '../../../services/Adresse/adresse.service';
import { CreerAdresseModel } from '../../../models/Adresse/creer-adresse.model';

@Component({
  selector: 'app-creer-compteur',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './creer-compteur.component.html',
  styleUrl: './creer-compteur.component.scss'
})
export class CreerCompteurComponent implements OnInit{
  adresseForm!: FormGroup;
  AdresseExist: boolean = false;

  proprietaireId!: string;
  CompteurForm!: FormGroup;
  CompteurAcreer: CompteurRegisterModel = {} as CompteurRegisterModel;
  Adresses: LireAdresseModel[] = [{}] as LireAdresseModel[];
nouveauadresseId!: string;
  constructor(private compteurService: CompteurService,
              private fb: FormBuilder,
              private router: Router,
              private activateroute: ActivatedRoute,
              private adresseService: AdresseService,
              private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.activateroute.params.subscribe(parameters => {
      this.proprietaireId = parameters['proprietaireId']
      
    });
    this.adresseService.getAdresses().subscribe({
      next:(response) => {
        this.Adresses = response.data;
      }
    })
    this.CompteurForm = this.fb.group({
      solde: [0, Validators.required],
      utilisateurId: ['' ,Validators.required],
      proprietaireId: [this.proprietaireId, [Validators.required]],
      adresseId: ['', [Validators.required]],
      numeroCompteur: ['', [Validators.required]]
    })

  }

 CreerCompteur(){
  this.CompteurAcreer = this.CompteurForm.value;
  console.log(this.CompteurAcreer)
  this.compteurService.createCompteur(this.CompteurAcreer).subscribe({
    next: (response) => {
      if(response.success){
        console.log(response)
        this.router.navigate([`/details-compteur/${response.data.id}`])
      }
    },
    error: (er) => {
      console.log(er.error)
    }
  })
 }

 demandecreerAdresse() {
  this.AdresseExist = true;
  this.adresseForm = this.formBuilder.group({
    region: ['', Validators.required],
    commune: ['', Validators.required],
    quartier: [''],
    village: [''],
    numeroMaison: [null, Validators.required] 
  });
  }

  creerAdresse(){
    if (this.adresseForm.valid) {
      const formData = this.adresseForm.value as CreerAdresseModel;
      this.adresseService.createAdresse(formData).subscribe({
        next: (response) => {
          this.adresseService.getAdresses().subscribe({
            next:(responsenouv) => {
              this.Adresses = responsenouv.data;
            }
          })
          this.nouveauadresseId = response.data.id;
          this.annulerCreationAdresse();
        },
        error: (err) => {
          alert('Operation a échoué, veuillez reprendre')
        }
      })
    }
  }
  annulerCreationAdresse(){
    this.AdresseExist = false;
  }
}
