import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'header-mobile-nav-links',
  templateUrl: 'mobile-nav-links.component.html',
  styleUrl: 'mobile-nav-links.component.css',
})
export class MobileNavLinks {
  constructor() {}
  navRoutes: Array<string[]> = [
    ['About', '#about'],
    ['Support', '#support'],
    ['Contact', '#contact'],
  ];
}
