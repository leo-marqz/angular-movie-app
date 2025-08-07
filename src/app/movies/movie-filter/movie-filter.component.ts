import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ListMoviesComponent } from "../list-movies/list-movies.component";
import { MovieFilter } from './movie-filter';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-filter',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatSelectModule, MatCheckboxModule, ListMoviesComponent],
  templateUrl: './movie-filter.component.html',
  styleUrl: './movie-filter.component.css'
})
export class MovieFilterComponent implements OnInit {

  private formBuilder = inject(FormBuilder);
  private location = inject(Location);
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.getQueryParamsFromUriQueryStrings();

    this.form.valueChanges.subscribe((values)=>{
      this.movies = this.moviesOriginal;
      this.searchOfMovies(values as MovieFilter);
      this.setQueryParamsFromFormValues(values as MovieFilter);
    })
  }

  form = this.formBuilder.group({
    title: '',
    genreId: 0,
    upcomingReleases: false,
    inTheaters: false
  });

  genres = [
    { id: 1, name: 'Drama' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Thriller' },
    { id: 4, name: 'Action' },
    { id: 5, name: 'Horror' },
    { id: 6, name: 'Romance' }
  ];

  moviesOriginal = [
    {
      title: 'Inside Out 2',
      genres: [1, 2],
      releaseDate: new Date('2024-06-14'),
      price: 1400.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832',
      upcomingReleases: true,
      inTheaters: false
    },
    {
      title: 'Moana 2',
      genres: [1, 2],
      releaseDate: new Date('2016-05-03'),
      price: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg',
      upcomingReleases: false,
      inTheaters: false
    },
    {
      title: 'Bad Boys: Ride or Die',
      genres: [4],
      releaseDate: new Date('2016-05-03'),
      price: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
      upcomingReleases: true,
      inTheaters: false
    },
    {
      title: 'Deadpool & Wolverine',
      genres: [4],
      releaseDate: new Date('2016-05-03'),
      price: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg',
      upcomingReleases: true,
      inTheaters: false
    },
    {
      title: 'Oppenheimer',
      genres: [1],
      releaseDate: new Date('2016-05-03'),
      price: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg',
      upcomingReleases: false,
      inTheaters: false
    },
    {
      title: 'The Flash',
      genres: [4],
      releaseDate: new Date('2016-05-03'),
      price: 300.99,
      poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg',
      upcomingReleases: false,
      inTheaters: true
    }
  ];

  movies = this.moviesOriginal;

  searchOfMovies(filter: MovieFilter){

    //titulo
    if(filter.title){
      this.movies = this.movies.filter((movie)=> movie.title.indexOf(filter.title) !== -1);
    }

    //genero
    if(filter.genreId){
      this.movies = this.movies.filter((movie)=>movie.genres.indexOf(filter.genreId) !== -1);
    }

    //proximos estrenos
    if(filter.upcomingReleases){
      this.movies = this.movies.filter((movie)=>movie.upcomingReleases);
    }

    //en cines
    if(filter.inTheaters){
      this.movies = this.movies.filter((movie)=>movie.inTheaters);
    }

  }

  resetFilter() {
    this.form.reset();
    this.movies = this.moviesOriginal;
  }

  setQueryParamsFromFormValues(values: MovieFilter) {
    var queryStrings = [];

    if (values.title) {
      queryStrings.push(`title=${encodeURIComponent(values.title)}`);
    }

    if (values.genreId) {
      queryStrings.push(`genreId=${values.genreId}`);
    }

    if (values.upcomingReleases) {
      queryStrings.push(`upcomingReleases=${values.upcomingReleases}`);
    }

    if (values.inTheaters) {
      queryStrings.push(`inTheaters=${values.inTheaters}`);
    }
    this.location.replaceState('movies/filter', queryStrings.join('&'));
  }

  getQueryParamsFromUriQueryStrings() {
    this.activatedRoute.queryParams.subscribe((params:any)=>{
      let values:any = {};

      if (params.title) {
        values.title = params.title;
      }

      if (params.genreId) {
        values.genreId = Number(params.genreId);
      }

      if (params.upcomingReleases) {
        values.upcomingReleases = params.upcomingReleases;
      }

      if (params.inTheaters) {
        values.inTheaters = params.inTheaters;
      }

      this.form.patchValue(values as MovieFilter);
      this.searchOfMovies(values as MovieFilter);
    })
  }

}
