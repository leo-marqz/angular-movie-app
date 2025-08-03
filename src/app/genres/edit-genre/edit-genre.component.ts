import { Component, Input, numberAttribute } from '@angular/core';
import { GenreFormComponent } from "../genre-form/genre-form.component";
import { CreateGenreDto } from '../genre';

@Component({
  selector: 'app-edit-genre',
  imports: [GenreFormComponent],
  templateUrl: './edit-genre.component.html',
  styleUrl: './edit-genre.component.css'
})
export class EditGenreComponent {

  @Input({ transform: numberAttribute })
  id!:number;

  genre = {id: 1, name: 'Action'};

  async saveChanges(genre: CreateGenreDto) {
    console.log(`Saving changes for genre with ID ${this.id}... ${JSON.stringify(genre)}`);
  }
  
}
