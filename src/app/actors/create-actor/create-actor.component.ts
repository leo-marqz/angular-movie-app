import { Component, inject, Input, OnInit } from '@angular/core';
import { ActorsService } from '../actors.service';
import { Router } from '@angular/router';
import { ActorFormComponent } from '../actor-form/actor-form.component';
import { CreateActorDto } from '../actors';
import { MatSnackBar } from '@angular/material/snack-bar';
import { extractErrors } from '../../shared/functions/catch';
import { ShowErrorsComponent } from "../../shared/components/show-errors/show-errors.component";

@Component({
  selector: 'app-create-actor',
  imports: [ActorFormComponent, ShowErrorsComponent],
  templateUrl: './create-actor.component.html',
  styleUrl: './create-actor.component.css'
})
export class CreateActorComponent {

  snackBar = inject(MatSnackBar);
  actorService = inject(ActorsService);
  router = inject(Router);
  errors: string[] = [];

  saveChanges(actor: CreateActorDto) {
    this.actorService.create(actor).subscribe({
      next: ()=>{
        this.snackBar.open(`✅ El actor fue agregado exitosamente!`, '🞮', { duration: 5000 });
        this.router.navigate(['/actors']);
      },
      error: (err)=>{
        const errors = extractErrors(err);
        this.errors = errors;
        this.snackBar.open(`❌ Error, el genero no fue agregado!`, '🞮', { duration: 5000 });
      }
    });
  }

}
