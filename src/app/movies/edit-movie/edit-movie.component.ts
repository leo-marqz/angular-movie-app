import { Component, Input, numberAttribute, Output } from '@angular/core';
import { MovieFormComponent } from "../movie-form/movie-form.component";
import { CreateMovieDto, MovieDto } from '../movies';
import { MultiSelectOption } from '../../shared/components/multi-select/multiSelectModel';
import { ActorAutoCompleteDto } from '../../actors/actors';

@Component({
  selector: 'app-edit-movie',
  imports: [MovieFormComponent],
  templateUrl: './edit-movie.component.html',
  styleUrl: './edit-movie.component.css'
})
export class EditMovieComponent {

  @Input({ transform: numberAttribute })
  id!:number;

  movie: MovieDto = {
    id:1, 
    title: 'Inception', 
    releaseDate: new Date('2018-07-25'), 
    trailer: 'https://youtu.be/8hP9D6kZseM?si=febCqXop943ZAWr6', 
    poster: 'https://flhsnavigator.com/wp-content/uploads/2021/10/url-4.jpeg?w=691'
  };

  unselectedGenres: MultiSelectOption[] = [
      { key: 1, value: 'Action' },
      { key: 2, value: 'Comedy' },
      { key: 3, value: 'Drama' },
      { key: 4, value: 'Horror' },
      { key: 5, value: 'Sci-Fi' }
    ];
  
  selectedGenres: MultiSelectOption[] = [
    { key: 6, value: 'Romance' },
    { key: 7, value: 'Thriller' }
  ];

  unselectedCines: MultiSelectOption[] = [
    {key: 2, value: 'Cinepolis'},
    {key: 3, value: 'Nave Cine Metro'}
  ];
  
  selectedCines: MultiSelectOption[] = [
    {key: 1, value: 'Cinemark'}
  ];

  selectedActors: ActorAutoCompleteDto[] = [
    {
      id: 3,
      name: 'Robert Downey Jr.',
      character: '',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/800px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg'
    }
  ];

  saveChanges(movie: CreateMovieDto) {
    console.log('Movie to edit:', movie);
    // Here you would typically call a service to update the movie
  }


}
