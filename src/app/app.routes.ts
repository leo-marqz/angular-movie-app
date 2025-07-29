import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ListGenresComponent } from './genres/list-genres/list-genres.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { ListMoviesComponent } from './movies/list-movies/list-movies.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { ListCinesComponent } from './cines/list-cines/list-cines.component';
import { CreateCineComponent } from './cines/create-cine/create-cine.component';
import { ListActorsComponent } from './actors/list-actors/list-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'cines', component: ListCinesComponent},
    {path: 'cines/create', component: CreateCineComponent},
    {path: 'genres', component: ListGenresComponent},
    {path: 'genres/create', component: CreateGenreComponent},
    {path: 'actors', component: ListActorsComponent},
    {path: 'actors/create', component: CreateActorComponent},
    // {path: 'movies', component: ListMoviesComponent},
    {path: 'movies/create', component: CreateMovieComponent},
];
