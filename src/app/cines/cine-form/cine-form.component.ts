import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { CreateCineDto } from '../cines';
import { CustomValidators } from '../../shared/functions/validations';
import { MapComponent } from "../../shared/components/map/map.component";
import { Coordinate } from '../../shared/components/map/coordinate';

@Component({
  selector: 'app-cine-form',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatInputModule, MatButtonModule, RouterLink, MapComponent],
  templateUrl: './cine-form.component.html',
  styleUrl: './cine-form.component.css'
})
export class CineFormComponent implements OnInit {
  
  ngOnInit(): void {
    if(this.model){
      this.form.patchValue(this.model);
      this.initialCoordinates
        .push({latitude: this.model.latitude, longitude: this.model.longitude});
    }
  }

  @Input()
  model?: CreateCineDto;

  @Output()
  postForm = new EventEmitter<CreateCineDto>();

  initialCoordinates: Coordinate[] = [];

  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', {validators: [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(25),
      CustomValidators.firstLetterCapitalized()
    ]}
  ],
  latitude: new FormControl<number|null>(null, {validators: [Validators.required]}),
  longitude: new FormControl<number|null>(null, {validators: [Validators.required]})
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

  onCoordinateSelected(coordinates: Coordinate) {
    this.form.patchValue(coordinates);
    console.log('Selected coordinates:', coordinates);
  }
}
