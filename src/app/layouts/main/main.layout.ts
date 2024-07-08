import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/common/header/header.component';

@Component({
  standalone: true,
  selector: 'main-layout',
  templateUrl: 'main.layout.html',
  imports: [RouterOutlet, HeaderComponent],
})
export class MainLayout {}
