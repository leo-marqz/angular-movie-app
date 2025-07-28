import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-movies',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent implements OnInit {

  @Input({required: true}) // Input property to receive movies data
  movies!: any[]; // <app-list-movies [movies]="moviesOnlyInTheaters"></app-list-movies>

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.movies = [];
    // }, 2000);
  }

  addNewMovie(): void {
    this.movies.push({
      title: 'Inception',
      releaseDate: new Date('2010-07-16'),
      price: 999.99,
      poster: ''
    });
    console.log('New movie added:', this.movies[this.movies.length - 1]);
  }

  removeMovie(movie: any): void {
    const index = this.movies.findIndex((current)=>current.title === movie.title);
    if (index > -1) {
      this.movies.splice(index, 1);
    }
    console.log('Movie removed:', movie);
  }
}
