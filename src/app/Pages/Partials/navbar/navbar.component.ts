import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  activeLink: string = '';

  constructor(private router: Router) {}

  setActiveLink(link: string) {
    this.activeLink = link;
  }
}