import { Component } from '@angular/core';
import { CreateCineDto } from '../cines';
import { CineFormComponent } from "../cine-form/cine-form.component";

@Component({
  selector: 'app-create-cine',
  imports: [CineFormComponent],
  templateUrl: './create-cine.component.html',
  styleUrl: './create-cine.component.css'
})
export class CreateCineComponent {

  saveChanges(cine: CreateCineDto){
    console.log('Creando nuevo cine', cine);
  }

}
