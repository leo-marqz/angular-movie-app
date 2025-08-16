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

@Component({
  selector: 'app-create-genre',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule, GenreFormComponent],
  templateUrl: './create-genre.component.html',
  styleUrl: './create-genre.component.css'
})
export class CreateGenreComponent {

  private router: Router = inject(Router);
  private genreService = inject(GenreService);
  private snackBar = inject(MatSnackBar);
  

  async saveChanges(genre: CreateGenreDto){
    this.genreService.create(genre).subscribe(()=>{
      this.snackBar.open(
        `✅ El genero ${genre.name} ha sido agregado!`, 
        'X', 
        { 
          duration: 3000
         }
      );
      this.router.navigate(['/genres']);
    });
  }

}
