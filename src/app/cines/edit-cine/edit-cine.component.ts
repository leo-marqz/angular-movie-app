import { Component, Input, numberAttribute } from '@angular/core';
import { CineFormComponent } from "../cine-form/cine-form.component";
import { CineDto, CreateCineDto } from '../cines';

@Component({
  selector: 'app-edit-cine',
  imports: [CineFormComponent],
  templateUrl: './edit-cine.component.html',
  styleUrl: './edit-cine.component.css'
})
export class EditCineComponent {

  @Input({ transform: numberAttribute })
  id!:number;

  //13.6764414,-89.2558525 - la Gran Via
  cine: CineDto = {id: 1, name: 'Cinemark', latitude: 13.6764414, longitude: -89.2558525};

  saveChanges(cine: CreateCineDto){
    console.log('Editando cine....', cine);
  }

}
