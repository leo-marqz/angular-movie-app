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
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { EditCineComponent } from './cines/edit-cine/edit-cine.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';

export const routes: Routes = [
    {path: '', component: LandingPageComponent},
    {path: 'cines', component: ListCinesComponent},
    {path: 'cines/create', component: CreateCineComponent},
    {path: 'cines/edit/:id', component: EditCineComponent},
    {path: 'genres', component: ListGenresComponent},
    {path: 'genres/create', component: CreateGenreComponent},
    {path: 'genres/edit/:id', component: EditGenreComponent},
    {path: 'actors', component: ListActorsComponent},
    {path: 'actors/create', component: CreateActorComponent},
    {path: 'actors/edit/:id', component: EditActorComponent},
    {path: 'movies', component: ListMoviesComponent},
    {path: 'movies/create', component: CreateMovieComponent},
    {path: 'movies/edit/:id', component: EditMovieComponent}
];
