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
    name: 'Thomas Stanley Holland', 
    dateOfBirth: new Date(1996, 5, 1),
    picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Tom_Holland_by_Gage_Skidmore.jpg/250px-Tom_Holland_by_Gage_Skidmore.jpg'
  }; 

  saveChanges(actor: CreateActorDto) {
    console.log('Saving actor changes:', actor);
  }

}
