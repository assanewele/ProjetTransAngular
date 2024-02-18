import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {Location, NgIf} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private location: Location) {
  }

  onGoBack(){
    this.location.back()
  }

  protected readonly localStorage = localStorage;
}
