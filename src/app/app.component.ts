import { CurrencyPipe, DatePipe, NgFor, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListMoviesComponent } from './movies/list-movies/list-movies.component';
import {MatDividerModule} from '@angular/material/divider';
import { MenuComponent } from "./shared/components/menu/menu.component";

@Component({
  selector: 'app-root',
  standalone: true,
  // imports: [DatePipe, CurrencyPipe, NgOptimizedImage, NgIf],
  imports: [ListMoviesComponent, MatDividerModule, MenuComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{

}
