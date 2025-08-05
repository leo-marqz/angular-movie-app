import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CreateCineDto } from '../cines';
import { CustomValidators } from '../../shared/functions/validations';

@Component({
  selector: 'app-cine-form',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink],
  templateUrl: './cine-form.component.html',
  styleUrl: './cine-form.component.css'
})
export class CineFormComponent implements OnInit {
  
  ngOnInit(): void {
    if(this.model){
      this.form.patchValue(this.model);
    }
  }

  @Input()
  model?: CreateCineDto;

  @Output()
  postForm = new EventEmitter<CreateCineDto>();

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', {validators: [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25),
      CustomValidators.firstLetterCapitalized()
    ]}
  ]
  });

  getNameErrors(){

    const nameControl = this.form.get('name');

    if(nameControl?.hasError('required')){
      return 'El nombre de cine es requerido';
    }

    if(nameControl?.hasError('minlength')){
      return 'El nombre de cine debe ser de al menos 5 caracteres!';
    }

    if(nameControl?.hasError('maxlength')){
      return 'El nombre de cine puede tener maximo 25 caracteres!';
    }

    if(nameControl?.hasError('firstLetterCapitalized')){
      return 'El nombre del cine debe iniciar con letra mayuscula!'
    }

    return '';
  }

  loadChanges(){
    if(this.form.invalid) return;

    const cine = this.form.value as CreateCineDto;

    this.postForm.emit(cine);
  }

}
