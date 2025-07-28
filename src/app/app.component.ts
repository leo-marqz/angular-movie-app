import { CurrencyPipe, DatePipe, NgFor, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListMoviesComponent } from './movies/list-movies/list-movies.component';
import {MatDividerModule} from '@angular/material/divider';
import { MenuComponent } from "./shared/components/menu/menu.component";
import { RatingComponent } from "./shared/components/rating/rating.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [DatePipe, CurrencyPipe, NgOptimizedImage, NgIf],
  imports: [ListMoviesComponent, MatDividerModule, MenuComponent, RatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  title = 'Angular Movie Frontend App';
  description = 'This is a simple Angular application to display movie information.';
  
  moviesOnlyInTheaters!: any[]; //solo en cines
  upcomingReleases!: any[]; // proximos estrenos

  ngOnInit(): void {
    setTimeout(()=>{
      this.moviesOnlyInTheaters = [
        {
          title: 'Inside Out 2',
          releaseDate: new Date(),
          price: 1400.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'
        },
        {
          title: 'Moana 2',
          releaseDate: new Date('2016-05-03'),
          price: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg'
        },
        {
          title: 'Bad Boys: Ride or Die',
          releaseDate: new Date('2016-05-03'),
          price: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg'
        },
        {
          title: 'Deadpool & Wolverine',
          releaseDate: new Date('2016-05-03'),
          price: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Deadpool_%26_Wolverine_poster.jpg/220px-Deadpool_%26_Wolverine_poster.jpg'
        }
      ];
      this.upcomingReleases = [
        {
          title: 'Oppenheimer',
          releaseDate: new Date('2016-05-03'),
          price: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Oppenheimer_%28film%29.jpg/220px-Oppenheimer_%28film%29.jpg'
        },
        {
          title: 'The Flash',
          releaseDate: new Date('2016-05-03'),
          price: 300.99,
          poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/ed/The_Flash_%28film%29_poster.jpg/220px-The_Flash_%28film%29_poster.jpg'
        }
      ];
    }, 2000);
  }

  processVote(vote: number): void {
    console.log(`Vote processed: ${vote}`);
  }
}
