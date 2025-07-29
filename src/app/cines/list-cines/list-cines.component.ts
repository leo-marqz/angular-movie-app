import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-cines',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './list-cines.component.html',
  styleUrl: './list-cines.component.css'
})
export class ListCinesComponent {

}
