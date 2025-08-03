import { Component, Input, numberAttribute } from '@angular/core';
import { ActorDto, CreateActorDto } from '../actors';
import { ActorFormComponent } from "../actor-form/actor-form.component";

@Component({
  selector: 'app-edit-actor',
  imports: [ActorFormComponent],
  templateUrl: './edit-actor.component.html',
  styleUrl: './edit-actor.component.css'
})
export class EditActorComponent {

  @Input({ transform: numberAttribute })
  id!:number;

  actor: ActorDto = {
    id: 1, 
    name: 'Elmer Marquez', 
    dateOfBirth: new Date(1999, 0, 1)
  }; // Date: January 1, 1999

  saveChanges(actor: CreateActorDto) {
    console.log('Saving actor changes:', actor);
  }

}
