import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-edit-cine',
  imports: [],
  templateUrl: './edit-cine.component.html',
  styleUrl: './edit-cine.component.css'
})
export class EditCineComponent {

  @Input({ transform: numberAttribute })
  id!:number;

}
