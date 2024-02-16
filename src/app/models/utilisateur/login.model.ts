export class LoginModel{

  public motDePasse!: string;
  public email!: string;
  constructor( motDePasse: string, email: string) {
      this.email = email;
    this.motDePasse = motDePasse;
  }
}
