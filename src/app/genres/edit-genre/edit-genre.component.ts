import { Component, inject, Input, numberAttribute, OnInit } from '@angular/core';
import { GenreFormComponent } from "../genre-form/genre-form.component";
import { CreateGenreDto, GenreDto } from '../genre';
import { GenreService } from '../genre.service';
import { LoadingComponent } from "../../shared/components/loading/loading.component";
import { ShowErrorsComponent } from "../../shared/components/show-errors/show-errors.component";
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { extractErrors } from '../../shared/functions/catch';

@Component({
  selector: 'app-edit-genre',
  imports: [GenreFormComponent, LoadingComponent, ShowErrorsComponent],
  templateUrl: './edit-genre.component.html',
  styleUrl: './edit-genre.component.css'
})
export class EditGenreComponent implements OnInit {

  ngOnInit(): void {
    this.genreService.getById(this.id).subscribe((genre)=>{
      this.genre = genre;
    });
  }
  
  @Input({ transform: numberAttribute })
  id!:number;
  
  genreService = inject(GenreService);
  router = inject(Router);
  private snackBar = inject(MatSnackBar);

  genre?: GenreDto;

  errors: string[] = [];

  async saveChanges(genre: CreateGenreDto) {
    this.genreService.update(this.id, genre).subscribe({
      next: ()=>{
        this.snackBar.open(`✅ El genero fue actualizado exitosamente!`, '🞮', { duration: 5000 });
        this.router.navigate(['/genres']);
      },
      error: (err)=>{
        let errors = extractErrors(err);
        this.errors = errors;
      }
    });
  }
  
}
