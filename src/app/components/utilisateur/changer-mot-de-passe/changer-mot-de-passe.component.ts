import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UtilisateurService} from "../../../services/utilisateur/utilisateur.service";
import {TokenService} from "../../../services/token/token.service";
import {PopupsService} from "../../../services/popups/popups.service";

@Component({
  selector: 'app-changer-mot-de-passe',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './changer-mot-de-passe.component.html',
  styleUrl: './changer-mot-de-passe.component.scss'
})
export class ChangerMotDePasseComponent {
  changePasswordForm!: FormGroup;
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private userService: UtilisateurService,
              private tokenService: TokenService,
              private popupsService: PopupsService) {
  }
  ngOnInit() {
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.required]]
    })
  }

  onChangePassword() {
    console.log(this.changePasswordForm.value)
    let a = this.userService.changeUserPassword(this.tokenService.getUserInfoFromToken().Id,
      {actuelMotDePasse: this.changePasswordForm.value.currentPassword
        , nouveauMotDePasse: this.changePasswordForm.value.newPassword});
    let statusCode!: number;
    a.subscribe( response=> {statusCode=response.statusCode;
      if(statusCode===200){
        this.popupsService.successPopup("Password successfully changed")
        this.router.navigateByUrl("")
      }
    })
  }
  onBack() {
    this.router.navigateByUrl("utilisateur/profile-utilisateur")
  }
}
