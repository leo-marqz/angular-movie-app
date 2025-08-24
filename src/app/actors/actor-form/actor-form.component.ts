import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ActorDto, CreateActorDto } from "../actors";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CustomValidators } from "../../shared/functions/validations";
import moment from 'moment';
import { InputImgComponent } from "../../shared/components/input-img/input-img.component";

@Component({
  selector: 'app-actor-form',
  imports: [MatInputModule, MatButtonModule, MatFormFieldModule, RouterLink, ReactiveFormsModule, MatDatepickerModule, InputImgComponent],
  templateUrl: './actor-form.component.html',
  styleUrl: './actor-form.component.css'
})
export class ActorFormComponent implements OnInit {

  private formBuilder = inject(FormBuilder);

  @Input()
  model!: ActorDto;

  @Output()
  postForm = new EventEmitter<CreateActorDto>();
  
  ngOnInit(): void {
    if (this.model) {
      this.form.patchValue({ ...this.model });
    }
  }
  
  form = this.formBuilder.group({
    name: ['', { validators: [
      Validators.required, 
      Validators.minLength(5), 
      Validators.maxLength(50),
      CustomValidators.firstLetterCapitalized()
    ]}],
    dateOfBirth: new FormControl<Date | null>(null, {
      validators: [
        Validators.required,
        CustomValidators.dateNotInFuture()
      ]
    }),
    picture: new FormControl<File|string|null>(null)
  });

  actor: CreateActorDto = {
    name: 'Elmer Marquez',
    dateOfBirth: new Date(1999, 2, 24) // Date: March 24, 1999
  };

  loadChanges(){

    if(!this.form.valid) return;

    const actor = this.form.value as CreateActorDto;
    actor.dateOfBirth = moment(actor.dateOfBirth).toDate();

    if(typeof actor.picture === 'string'){
      actor.picture = undefined;
    }

    this.postForm.emit(actor);
  }

  getNameErrors(){
    const nameControl = this.form.get('name');
    if (nameControl?.hasError('required')) {
      return 'El nombre es requerido';
    }
    if (nameControl?.hasError('minlength')) {
      return 'El nombre debe tener al menos 5 caracteres';
    }
    if (nameControl?.hasError('maxlength')) {
      return 'El nombre no puede exceder los 50 caracteres';
    }
    if (nameControl?.hasError('firstLetterCapitalized')) {
      return 'La primera letra del nombre debe ser mayúscula';
    }
    return '';
  }

  getDateOfBirthErrors() {
    const dateControl = this.form.get('dateOfBirth');
    if (dateControl?.hasError('required')) {
      return 'La fecha de nacimiento es requerida';
    }
    if (dateControl?.hasError('dateNotInFuture')) {
      return 'La fecha de nacimiento no puede ser en el futuro';
    }
    return '';
  }

  fileSelected(file: File){
    this.form.controls.picture.setValue(file);
  }

}
