import { Component } from '@angular/core';
import { MovieFormComponent } from "../movie-form/movie-form.component";
import { CreateMovieDto } from "../movies";
import { MultiSelectOption } from "../../shared/components/multi-select/multiSelectModel";
import { ActorAutoCompleteDto } from "../../actors/actors";

@Component({
  selector: 'app-create-movie',
  imports: [MovieFormComponent],
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css'
})
export class CreateMovieComponent {

  unselectedGenres: MultiSelectOption[] = [
    { key: 1, value: 'Action' },
    { key: 2, value: 'Comedy' },
    { key: 3, value: 'Drama' },
    { key: 4, value: 'Horror' },
    { key: 5, value: 'Sci-Fi' },
    { key: 6, value: 'Romance' },
    { key: 7, value: 'Thriller' }
  ];

  selectedGenres: MultiSelectOption[] = [];

  unselectedCines: MultiSelectOption[] = [
    {key: 1, value: 'Cinemark'},
    {key: 2, value: 'Cinepolis'},
    {key: 3, value: 'Nave Cine Metro'}
  ];
  
  selectedCines: MultiSelectOption[] = [];

  selectedActors: ActorAutoCompleteDto[] = [];

  saveChanges(movie: CreateMovieDto) {
    console.log('Movie to create:', movie);
  }

}
