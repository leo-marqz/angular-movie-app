import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenreService } from '../genre.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-list-genres',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './list-genres.component.html',
  styleUrl: './list-genres.component.css'
})
export class ListGenresComponent {

  genreService = inject(GenreService);

  constructor() {
    this.genreService.get().subscribe((genres)=>{
      console.log(genres);
      console.log(`Environment(production): ${environment.production}`);
    });
  }

}
