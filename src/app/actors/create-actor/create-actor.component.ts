import { Component, Input, OnInit } from '@angular/core';
import { ActorFormComponent } from "../actor-form/actor-form.component";
import { ActorDto, CreateActorDto } from '../actors';

@Component({
  selector: 'app-create-actor',
  imports: [ActorFormComponent],
  templateUrl: './create-actor.component.html',
  styleUrl: './create-actor.component.css'
})
export class CreateActorComponent {

  async saveChanges(actor: CreateActorDto) {
    console.log('Saving new actor:', actor);
  }

}
