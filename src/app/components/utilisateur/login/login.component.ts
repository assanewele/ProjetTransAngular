import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {PopupsService} from "../../../services/popups/popups.service";
import {Router} from "@angular/router";
import {AuthentificationService} from "../../../services/utilisateur/authentification.service";
import {TokenService} from "../../../services/token/token.service";

@Component({
  selector: 'app-login',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder,
              private authenticationService: AuthentificationService,
              private tokenService: TokenService,
              private router: Router,
              private popupsService: PopupsService) {
  }
  ngOnInit() {
    this.loginForm = this.formbuilder.group(
      {
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required]]
      }
    )
  }

  get email(){
    return this.loginForm.get("email") as FormControl
  };
  get password(){
    return this.loginForm.get("password") as FormControl
  }

  onSubmit(){
    console.log(this.loginForm.value);
    let a = this.authenticationService.login(this.email.value, this.password.value );
    a.subscribe({
        next: (res)=>{
          console.log(res);
          this.tokenService.saveToken(res.token);
          this.popupsService.successPopup("You are successfully logged in")
          this.router.navigateByUrl("")
        },
        error:(): any => alert("There is an error")
      }
    )
  }

}
