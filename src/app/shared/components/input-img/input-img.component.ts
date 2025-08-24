import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { toBase64 } from "../../functions/toBase64";

@Component({
  selector: 'app-input-img',
  imports: [MatButtonModule],
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css'
})
export class InputImgComponent {

  @Input({required: true})  // entrada - titulo del input
  title: string = '';

  @Input()
  currentPictureUrl?: string;

  @Output() //salida de archivo seleccionado
  fileSelected = new EventEmitter<File>();

  imageBase64: string = '';

  // Lee el componente <app-input-img></app-input-img>
  change(event: Event){
    const input = event.target as HTMLInputElement;
    if(input.files && input.files.length > 0) {
      const file: File = input.files[0];
      toBase64(file)
        .then((value: string)=> this.imageBase64 = value) //transformamos el archivo para visualizarlo
        .catch((error)=> console.error(error));
      this.fileSelected.emit(file); //Enviamos un evento al componente padre
      this.currentPictureUrl = undefined; //si se elige nueva imagen eliminamos la actual de la memoria
    }
  }

}
