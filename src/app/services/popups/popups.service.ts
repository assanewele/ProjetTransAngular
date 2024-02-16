import { Injectable } from '@angular/core';
import {NgToastService} from "ng-angular-popup";

@Injectable({
  providedIn: 'root'
})
export class PopupsService {

  constructor(private toast: NgToastService) {}
  successPopup(message: string){
    this.toast.success({detail: "SUCCESS", summary: message, duration: 5000, position: "topCenter" });
  }

  errorPopup(message: string){
    this.toast.error({detail: "ERROR", summary:message, duration: 5000, position: "topCenter"});
  }
}
