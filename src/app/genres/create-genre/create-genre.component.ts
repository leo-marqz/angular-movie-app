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
import { GenreService } from '../genre.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { extractErrors } from '../../shared/functions/catch';
import { ShowErrorsComponent } from "../../shared/components/show-errors/show-errors.component";

@Component({
  selector: 'app-create-genre',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, GenreFormComponent, ShowErrorsComponent],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent {

  private router: Router = inject(Router);
  private genreService = inject(GenreService);
  private snackBar = inject(MatSnackBar);

  errors: string[] = [];
  

  async saveChanges(genre: CreateGenreDto){
    this.genreService.create(genre).subscribe({
      next: () => {
        this.snackBar.open(`✅ El genero fue agregado exitosamente!`, '🞮', { duration: 5000 });
        this.router.navigate(['/genres']);
      },
      error: (err) => {
        const errors = extractErrors(err);
        this.errors = errors;
        this.snackBar.open(`❌ Error, el genero no fue agregado!`, '🞮', { duration: 5000 });
      }
    });
  }
  
  
}
