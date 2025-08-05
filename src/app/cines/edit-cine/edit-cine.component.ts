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

  cine: CineDto = {id: 1, name: 'Cine Plus'};

  saveChanges(cine: CreateCineDto){
    console.log('Editando cine....', cine);
  }

}
