import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { MainLayout } from './app/layouts/main/main.layout';

bootstrapApplication(MainLayout, appConfig).catch((err) => console.error(err));
