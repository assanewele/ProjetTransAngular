import { Routes } from '@angular/router';
import {CreerUtilisateurComponent} from "./components/utilisateur/creer-utilisateur/creer-utilisateur.component";
import {AccueilComponent} from "./components/general/accueil/accueil.component";
import {LoginComponent} from "./components/utilisateur/login/login.component";
import {ChangerMotDePasseComponent} from "./components/utilisateur/changer-mot-de-passe/changer-mot-de-passe.component";
import {ProfileUtilisateurComponent} from "./components/utilisateur/profile-utilisateur/profile-utilisateur.component";
import {RoleUtilisateurComponent} from "./components/utilisateur/role-utilisateur/role-utilisateur.component";
import {ListeUtilisateursComponent} from "./components/utilisateur/liste-utilisateurs/liste-utilisateurs.component";
import {
  AffichageUtiliateurComponent
} from "./components/utilisateur/affichage-utiliateur/affichage-utiliateur.component";
import {
  ModifierInformationComponent
} from "./components/utilisateur/modifier-information/modifier-information.component";
import {CreerCompteurComponent} from "./components/Compteur/creer-compteur/creer-compteur.component";
import {ListCompteursComponent} from "./components/Compteur/list-compteurs/list-compteurs.component";
import {DetailsCompteurComponent} from "./components/Compteur/details-compteur/details-compteur.component";
import {UpdateCompteurComponent} from "./components/Compteur/update-compteur/update-compteur.component";
import {VerifierCompteurComponent} from "./components/Compteur/verifier-compteur/verifier-compteur.component";
import {CrerrProprietaireComponent} from "./components/Proprietaire/crerr-proprietaire/crerr-proprietaire.component";
import {
  DetailsProprietaireComponent
} from "./components/Proprietaire/details-proprietaire/details-proprietaire.component";
import {UpdateProprietaireComponent} from "./components/Proprietaire/update-proprietaire/update-proprietaire.component";
import {
  VerifierProprietaireExisteComponent
} from "./components/Proprietaire/verifier-proprietaire-existe/verifier-proprietaire-existe.component";
import {CreerAdresseComponent} from "./components/Adresse/creer-adresse/creer-adresse.component";
import {ListAdresseComponent} from "./components/Adresse/list-adresse/list-adresse.component";
import {DetailsAdresseComponent} from "./components/Adresse/details-adresse/details-adresse.component";
import {UpdateAdresseComponent} from "./components/Adresse/update-adresse/update-adresse.component";
import {ListeProprietairesComponent} from "./components/Proprietaire/liste-proprietaires/liste-proprietaires.component";
import {CreerPrepaiementComponent} from "./components/Prepaiement/creer-prepaiement/creer-prepaiement.component";
import {ListPrepaiementComponent} from "./components/Prepaiement/list-prepaiement/list-prepaiement.component";
import {DetailsPrepaiementComponent} from "./components/Prepaiement/details-prepaiement/details-prepaiement.component";
import {UpdatePrepaiementComponent} from "./components/Prepaiement/update-prepaiement/update-prepaiement.component";

export const routes: Routes = [

  //---------------Assane--------------
  //###################################################################################################
  // Les routes pour utilisateur

  {path: "utilisateur/modifier-information/:id", component: ModifierInformationComponent},
  {path: "utilisateur/afficher-utilisateur/:id", component:AffichageUtiliateurComponent },
  {path: "utilisateur/role-utilisateur/:id", component: RoleUtilisateurComponent},
  {path: "utilisateur/liste-utilisateurs", component: ListeUtilisateursComponent},
  {path: "utilisateur/profile-utilisateur", component: ProfileUtilisateurComponent},
  {path: "utilisateur/changer-mot-de-passe", component: ChangerMotDePasseComponent},
  {path: "utilisateur/login", component: LoginComponent},
  {path:"utilisateur/creer-utilisateur", component: CreerUtilisateurComponent},
  {path:"", component:AccueilComponent},


  //---------------Hamady--------------

  //###################################################################################################
  // Les routes pour compteur
  {
    path: "creer-compteur/:proprietaireId", component: CreerCompteurComponent
  },
  {
    path:"list-compteur", component: ListCompteursComponent
  },
  {
    path:"details-compteur/:compteurId", component: DetailsCompteurComponent
  },
  {
    path:"modifier-compteur/:compteurId", component: UpdateCompteurComponent
  },
  {
    path:"verifier-compteur", component: VerifierCompteurComponent
  },

//###################################################################################################
  // Proprietaire
  {
    path:"creer-proprietaire", component: CrerrProprietaireComponent
  },

  {
    path:"liste-proprietaires", component: ListeProprietairesComponent
  },
  {
    path:"details-proprietaire/:proprietaireId", component: DetailsProprietaireComponent
  },
  {
    path:"modifier-proprietaire/:proprietaireId", component: UpdateProprietaireComponent
  },
  {
    path:"verifier-proprietaire", component: VerifierProprietaireExisteComponent
  },

//###################################################################################################
  // adresse routes
  {
    path: "creer-adresse", component: CreerAdresseComponent
  },
  {
    path:"list-adresse", component: ListAdresseComponent
  },
  {
    path:"details-adresse/:adresseId", component: DetailsAdresseComponent
  },
  {
    path:"modifier-adresse/:adresseId", component: UpdateAdresseComponent
  },


//###################################################################################################
  // Prepaiment routes

  {
    path: "faire-prepaiement/:compteurId", component: CreerPrepaiementComponent
  },
  {
    path:"list-prepaiment", component: ListPrepaiementComponent
  },
  {
    path:"details-prepaiment/:repaimentId", component: DetailsPrepaiementComponent
  },
  {
    path:"modifier-prepaiment/:repaimentId", component: UpdatePrepaiementComponent
  },
];
