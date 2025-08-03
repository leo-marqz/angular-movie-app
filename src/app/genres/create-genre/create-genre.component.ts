import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CustomValidators } from '../../shared/functions/validations';

import color from 'picocolors';
import { GenreFormComponent } from "../genre-form/genre-form.component";
import { CreateGenreDto } from '../genre';

@Component({
  selector: 'app-create-genre',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, GenreFormComponent],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent {

  private router: Router = inject(Router);
  

  async saveChanges(genre: CreateGenreDto){
    console.log(`Saving new genre... ${JSON.stringify(genre)}`);
  }

}
