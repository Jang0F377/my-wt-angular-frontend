import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'header-nav-links',
  templateUrl: 'nav-links.component.html',
  styleUrl: 'nav-links.component.css',
})
export class NavLinks {
  constructor() {}
  navRoutes: Array<string[]> = [
    ['About', '#about'],
    ['Support', '#support'],
    ['Contact', '#contact'],
  ];
}
