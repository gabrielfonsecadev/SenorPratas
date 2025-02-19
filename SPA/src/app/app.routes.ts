import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { CollectionsComponent } from './components/pages/collections/collections.component';
import { SearchPageComponent } from './components/pages/search-page/search-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'collections',
    children: [
      {
        path: ':collection',
        component: CollectionsComponent,
      },
      {
        path: ':collection/:category',
        component: CollectionsComponent,
      }
    ]
  },
  { path: 'search', component: SearchPageComponent },
];
