import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";
import {PopupsService} from "../../../services/popups/popups.service";
import {Router} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-creer-utilisateur',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
  templateUrl: './creer-utilisateur.component.html',
  styleUrl: './creer-utilisateur.component.scss'
})
export class CreerUtilisateurComponent {
  registerUserForm!: FormGroup;
  rolesList: Array<any> = ["role1", "role2", "role3"];

  constructor(private formbuilder: FormBuilder,
              private userService: UtilisateurService,
              private router: Router,
              private popupsService: PopupsService
  )
  {
  }

  ngOnInit() {
    this.registerUserForm = this.formbuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      role: [null, [Validators.required]]
    });
  }

  get firstName() {
    return this.registerUserForm.get("firstName") as FormControl;
  }

  get lastName() {
    return this.registerUserForm.get("lastName") as FormControl;
  }

  get email() {
    return this.registerUserForm.get("email") as FormControl;
  }

  get phoneNumber() {
    return this.registerUserForm.get("phoneNumber") as FormControl;
  }

  get role() {
    return this.registerUserForm.get("role") as FormControl;
  }

  onSubmit() {
    alert("yup");
    this.userService.registerUser({
      prenom: this.firstName.value,
      nom: this.lastName.value,
      email: this.email.value,
      telephone: this.phoneNumber.value,
      motDePasse: "MotDePasse123@",
    }).subscribe(response => {

        if (response.statusCode === 200) {
          console.log("Yess")
          this.popupsService.successPopup(`The user ${this.email.value} is successfully created `);
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
