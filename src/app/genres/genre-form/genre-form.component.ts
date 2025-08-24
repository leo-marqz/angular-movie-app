import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomValidators } from "../../shared/functions/validations";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';

import color from 'picocolors';
import { CreateGenreDto, GenreDto } from "../genre";

@Component({
  selector: 'app-genre-form',
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
  templateUrl: './genre-form.component.html',
  styleUrl: './genre-form.component.css'
})
export class GenreFormComponent implements OnInit {

  private formBuilder = inject(FormBuilder);

  @Input()
  model: GenreDto | undefined;

  @Output()
  postForm = new EventEmitter<CreateGenreDto>();

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  form = this.formBuilder.group({
    name: ['', {validators: [
      Validators.required, 
      Validators.minLength(3),
      Validators.maxLength(50),
      CustomValidators.firstLetterCapitalized()
    ]}]
  });


  getNameErrors(): string {
    const control = this.form.controls.name;
    if (!control || !control.errors) return '';

    if (control.hasError('required')) {
      return 'El campo nombre es obligatorio.';
    }

    if (control.hasError('minlength')) {
      const requiredLength = control.getError('minlength').requiredLength;
      return `Debe tener al menos ${requiredLength} caracteres.`;
    }

    if (control.hasError('maxlength')) {
      const requiredLength = control.getError('maxlength').requiredLength;
      return `Debe tener máximo ${requiredLength} caracteres.`;
    }

    if (control.hasError('firstLetterCapitalized')) {
      return control.getError('firstLetterCapitalized').message; 
    }

    return '';
  }

  async loadChanges(){

    console.log(`Loading genre... ${JSON.stringify(this.form.value)}`);

    if(!this.form.valid) {
      console.error('Form is invalid, please correct the errors.');
      return;
    }
    const genre: CreateGenreDto = this.form.value as CreateGenreDto;
    this.postForm.emit(genre);
  }

}
