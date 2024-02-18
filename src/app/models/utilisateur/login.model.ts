export class LoginModel{

  public motDePasse!: string;
  public email!: string;
  constructor( email: string, motDePasse: string) {
      this.email = email;
    this.motDePasse = motDePasse;
  }
}
