import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CollectionsComponent } from './components/pages/collections/collections.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collections/:category', component: CollectionsComponent },
];
