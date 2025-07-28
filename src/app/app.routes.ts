import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListGenresComponent } from './genres/list-genres/list-genres.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'genres', component: ListGenresComponent}
];
