import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-actors',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './list-actors.component.html',
  styleUrl: './list-actors.component.css'
})
export class ListActorsComponent {

}
