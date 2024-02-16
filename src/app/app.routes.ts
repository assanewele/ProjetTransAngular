import { Routes } from '@angular/router';
import {CreerUtilisateurComponent} from "./components/utilisateur/creer-utilisateur/creer-utilisateur.component";
import {AccueilComponent} from "./components/general/accueil/accueil.component";

export const routes: Routes = [
  {path:"creer-utilisateur", component: CreerUtilisateurComponent},
  {path:"", component:AccueilComponent}
];
