import { Component, Input, ViewChild, viewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatIcon } from '@angular/material/icon';
import { ActorAutoCompleteDto } from '../actors';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-actor-autocomplete',
  imports: [
    MatAutocompleteModule, ReactiveFormsModule, 
    MatFormFieldModule, FormsModule, MatTableModule, 
    MatInputModule, MatIcon, DragDropModule
  ],
  templateUrl: './actor-autocomplete.component.html',
  styleUrl: './actor-autocomplete.component.css'
})
export class ActorAutocompleteComponent {

  control = new FormControl();

  @Input({required: true})
  selectedActors: ActorAutoCompleteDto[] = [];

  tableColumns = ['picture', 'name', 'character', 'actions'];

  @ViewChild(MatTable)
  table!: MatTable<ActorAutoCompleteDto>;

  selectActor(event: MatAutocompleteSelectedEvent){
    this.selectedActors.push(event.option.value);
    this.control.setValue('');

    if(this.table != undefined){
      this.table.renderRows();
    }
  }

  finishDragging(event: CdkDragDrop<any[]>) {
    const previousIndex = this.selectedActors.findIndex(x => x === event.item.data);
    moveItemInArray(this.selectedActors, previousIndex, event.currentIndex);
    this.table.renderRows();
  }

  delete(actor: ActorAutoCompleteDto) {
    const index = this.selectedActors.findIndex(x => x.id === actor.id);
    if (index !== -1) {
      this.selectedActors.splice(index, 1);
      this.control.setValue('');
      if(this.table != undefined){
        this.table.renderRows();
      }
    }
  }

  actors: ActorAutoCompleteDto[] = [
    {
      id: 1, 
      name: 'Tom Holland', 
      character: '', 
      picture: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Tom_Holland_by_Gage_Skidmore.jpg'
    },
    {
      id: 2,
      name: 'Zendaya',
      character: '',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Zendaya_-_2019_by_Glenn_Francis.jpg/800px-Zendaya_-_2019_by_Glenn_Francis.jpg'
    },
    {
      id: 3,
      name: 'Robert Downey Jr.',
      character: '',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg/800px-Robert_Downey_Jr_2014_Comic_Con_%28cropped%29.jpg'
    },
    {
      id: 4,
      name: 'Chris Hemsworth',
      character: '',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Chris_Hemsworth_by_Gage_Skidmore_3.jpg/800px-Chris_Hemsworth_by_Gage_Skidmore_3.jpg'
    },
    {
      id: 5,
      name: 'Scarlett Johansson',
      character: '',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Scarlett_Johansson-8588.jpg/800px-Scarlett_Johansson-8588.jpg'
    },
    {
      id: 6,
      name: 'Christopher Robert Evans',
      character: 'Capitan America',
      picture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ChrisEvans2023.jpg/800px-ChrisEvans2023.jpg'
    }
  ];

}
