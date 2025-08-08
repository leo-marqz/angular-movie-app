import { Component, Input, numberAttribute, Output } from '@angular/core';
import { MovieFormComponent } from "../movie-form/movie-form.component";
import { CreateMovieDto, MovieDto } from '../movies';

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
    trailer: 'https://www.youtube.com/watch?v=YoHD9XEInc0', 
    poster: 'https://image.tmdb.org/t/p/w500/8h58l2d3k4j5k6l7m8n9o0p1q2r3s4t5.jpg'
  };

  saveChanges(movie: CreateMovieDto) {
    console.log('Movie to edit:', movie);
    // Here you would typically call a service to update the movie
  }

}
