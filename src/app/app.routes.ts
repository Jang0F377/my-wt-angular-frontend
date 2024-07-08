import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main/main.layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        component: undefined,
      },
    ],
  },
];
