import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CreerAdresseModel } from '../../../models/Adresse/creer-adresse.model';
import { AdresseService } from '../../../services/Adresse/adresse.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-creer-adresse',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './creer-adresse.component.html',
  styleUrl: './creer-adresse.component.scss'
})
export class CreerAdresseComponent {
  adresseForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private adresseService: AdresseService,
              private router: Router,
              private location: Location) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.adresseForm = this.formBuilder.group({
      region: ['', Validators.required],
      commune: ['', Validators.required],
      quartier: [''],
      village: [''],
      numeroMaison: [null, Validators.required] 
    });
  }

  onSubmit(): void {
    if (this.adresseForm.valid) {
      const formData = this.adresseForm.value as CreerAdresseModel;
      this.adresseService.createAdresse(formData).subscribe({
        next: (response) => {
          this.router.navigate(['details-adresse', response.data.id])
        },
        error: (err) => {
          alert('Operation a échoué, veuillez reprendre')
        }
      })
    }
  }
  retour(): void{
    this.location.historyGo(-1);
  }
}
