import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";
import {Router} from "@angular/router";
import {PopupsService} from "../../../services/popups/popups.service";
import {ProprietaireService} from "../../../services/Proprietaire/proprietaire.service";
import {TokenService} from "../../../services/token/token.service";

@Component({
  selector: 'app-crerr-proprietaire',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './crerr-proprietaire.component.html',
  styleUrl: './crerr-proprietaire.component.scss'
})
export class CrerrProprietaireComponent {

  registerProprietaireForm!: FormGroup;
  rolesList: Array<any> = ["role1", "role2", "role3"];

  constructor(private formbuilder: FormBuilder,
              private tokenService: TokenService,
              private proprietaireService: ProprietaireService,
              private router: Router,
              private popupsService: PopupsService
  )
  {
  }

  ngOnInit() {
    this.registerProprietaireForm = this.formbuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      cni: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],

    });
  }

  get firstName() {
    return this.registerProprietaireForm.get("firstName") as FormControl;
  }

  get lastName() {
    return this.registerProprietaireForm.get("lastName") as FormControl;
  }

  get email() {
    return this.registerProprietaireForm.get("email") as FormControl;
  }

  get phoneNumber() {
    return this.registerProprietaireForm.get("phoneNumber") as FormControl;
  }

  get cni() {
    return this.registerProprietaireForm.get("cni") as FormControl;
  }

  onSubmit() {
    this.proprietaireService.createProprietaire({
      prenom: this.firstName.value,
      nom: this.lastName.value,
      email: this.email.value,
      telephone: this.phoneNumber.value,
      cni: this.cni.value,
      utilisateurId: this.tokenService.getUserInfoFromToken().Id

    }).subscribe(response => {

        if (response.statusCode === 200) {
          console.log("Yess")
          this.popupsService.successPopup(`Proprietaire crée avec success `);
          this.router.navigateByUrl("");
        }
      },
      () => {
        alert("there is an error")
      });
  }
  onCancel(){
    this.router.navigateByUrl("")
  }

}
