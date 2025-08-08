import { Component } from '@angular/core';
import { MovieFormComponent } from "../movie-form/movie-form.component";
import { CreateMovieDto } from '../movies';

@Component({
  selector: 'app-create-movie',
  imports: [MovieFormComponent],
  templateUrl: './create-movie.component.html',
  styleUrl: './create-movie.component.css'
})
export class CreateMovieComponent {

  saveChanges(movie: CreateMovieDto) {
    console.log('Movie to create:', movie);
  }

}
