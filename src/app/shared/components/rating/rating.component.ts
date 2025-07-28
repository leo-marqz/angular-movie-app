import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating',
  imports: [MatIconModule, NgClass],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css'
})
export class RatingComponent{
  

  // Propiedad que define el número máximo de estrellas
  // Se usa un transform para crear un array de longitud maxRating
  @Input({ required: true, transform: (value: number) => Array(value).fill(0) }) 
  maxRating!: number[];

  // Propiedad que define la calificación seleccionada
  // Se inicializa en 0, lo que significa que no hay calificación seleccionada
  @Input() 
  selectedRating: number = 0;

  // Propiedad que almacena la calificación anterior
  // Se usa para restaurar la calificación anterior al salir del hover
  previousRating: number = 0;

  // Evento que se emite cuando el usuario vota
  // Se emite con el valor de la calificación seleccionada
  @Output()
  voted = new EventEmitter<number>();

  handleMouseEnter(index: number): void {
    this.selectedRating = index + 1;
    console.log(`Mouse entered rating: ${this.selectedRating}`);
  }

  handleMouseLeave(): void {
    if(this.previousRating !== 0){
      this.selectedRating = this.previousRating;
    }else{
      this.selectedRating = 0;
    }
  }

  handleClick(index: number): void {
    this.selectedRating = index + 1;
    this.previousRating = this.selectedRating;
    this.voted.emit(this.selectedRating);
  }

}
