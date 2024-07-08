import { Component } from '@angular/core';
import { NavLinks } from '../nav-links/nav-links.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  standalone: true,
  selector: 'header-component',
  templateUrl: 'header.component.html',
  styleUrl: 'header.component.css',
  imports: [NavLinks, NgOptimizedImage],
})
export class HeaderComponent {}
