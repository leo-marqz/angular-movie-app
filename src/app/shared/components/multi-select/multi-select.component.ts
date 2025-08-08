import { Component, Input } from '@angular/core';
import { MultiSelectOption } from './multiSelectModel';

@Component({
  selector: 'app-multi-select',
  imports: [],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css'
})
export class MultiSelectComponent {

  @Input({required: true}) // This is the list of options that have been selected
  selectedOptions: MultiSelectOption[] = [];

  @Input({required: true}) // This is the list of options that can be selected
  unselectedOptions: MultiSelectOption[] = [];

  // This method is used to select an option from the unselected options list
  select(element: MultiSelectOption, index: number){
    this.selectedOptions.push(element);
    this.unselectedOptions.splice(index, 1);
  }

  // This method is used to unselect an option from the selected options list
  unselect(element: MultiSelectOption, index: number){
    this.unselectedOptions.push(element);
    this.selectedOptions.splice(index, 1);
  }

  // This method is used to select all options from the unselected options list
  selectAll(){
    this.selectedOptions.push(...this.unselectedOptions);
    this.unselectedOptions.length = 0; // Clear the unselected options after selecting all
  }

  // This method is used to unselect all options from the selected options list
  unselectAll(){
    this.unselectedOptions.push(...this.selectedOptions);
    this.selectedOptions.length = 0; // Clear the selected options after unselecting all
  }
}
