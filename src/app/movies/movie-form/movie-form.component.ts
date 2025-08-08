import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { InputImgComponent } from '../../shared/components/input-img/input-img.component';
import { CreateMovieDto, MovieDto } from '../movies';
import moment from 'moment';

@Component({
  selector: 'app-movie-form',
  imports: [
    MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, 
    RouterLink, MatDatepickerModule, InputImgComponent
  ],
  templateUrl: './movie-form.component.html',
  styleUrl: './movie-form.component.css'
})
export class MovieFormComponent implements OnInit {

  ngOnInit(): void {
    if(this.model){
      this.form.patchValue(this.model);
    }
  }

  @Input() 
  model?: MovieDto;

  @Output()
  postForm = new EventEmitter<CreateMovieDto>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    title: ['', { validators: [Validators.required, Validators.minLength(3)] }],
    releaseDate: new FormControl<Date | null>(null, { validators: [Validators.required] }),
    trailer: new FormControl<string | null>(null, { validators: [Validators.required] }),
    poster: new FormControl<File|string|null>(null, { validators: [Validators.required] }),
  });

  selectedFile(file: File){
    this.form.controls.poster.setValue(file);
  }

  loadChanges(){
    if(this.form.invalid) return;

    const movie = this.form.value as CreateMovieDto;
    movie.releaseDate = moment(movie.releaseDate).toDate();

    this.postForm.emit(movie);

  }

  getTitleErrors(){
    const control = this.form.get('title');
    if(control?.hasError('required')){
      return 'TEl titulo es requerido';
    }
    if(control?.hasError('minlength')){
      return 'El titulo debe tener al menos 3 caracteres';
    }
    return '';
  }

  getReleaseDateErrors(): string{
    const control = this.form.get('releaseDate');
    if(control?.hasError('required')){
      return 'La fecha de lanzamiento es requerida';
    }
    return '';
  }

  getTrailerErrors(): string {
    const control = this.form.get('trailer');
    if(control?.hasError('required')){
      return 'El tráiler es requerido';
    }
    return '';
  }

  getPosterErrors(): string {
    const control = this.form.get('poster');
    if(control?.hasError('required')){
      return 'El póster es requerido';
    }
    return '';
  }

}
