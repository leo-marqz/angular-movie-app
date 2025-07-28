import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { GenericListComponent } from "../../shared/components/generic-list/generic-list.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-list-movies',
  imports: [CurrencyPipe, DatePipe, GenericListComponent, MatButtonModule, MatIconModule],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent implements OnInit {

  @Input({required: true}) // Input property to receive movies data
  movies!: any[]; // <app-list-movies [movies]="moviesOnlyInTheaters"></app-list-movies>

  ngOnInit(): void {}

  
}
