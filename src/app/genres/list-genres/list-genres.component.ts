import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-genres',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './list-genres.component.html',
  styleUrl: './list-genres.component.css'
})
export class ListGenresComponent {

}
