import { Component } from '@angular/core';
import { NavLinks } from '../nav-links/nav-links.component';
import { NgOptimizedImage } from '@angular/common';
import { MobileNavLinks } from '../mobile-nav-links/mobile-nav-links.component';

@Component({
  standalone: true,
  selector: 'header-component',
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.css',
  imports: [NavLinks, NgOptimizedImage, MobileNavLinks],
})
export class HeaderComponent {
  mobileNavOpen: boolean;
  constructor() {
    this.mobileNavOpen = false;
  }

  handleMobileNavMenu() {
    this.mobileNavOpen = !this.mobileNavOpen;
  }
}
