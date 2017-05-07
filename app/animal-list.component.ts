import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <div class="selectMenu">
    <select (change)="onChange($event.target.value)">
      <option value="all">All Animals</option>
      <option value="young">Young Animals (2 years or younger)</option>
      <option value="mature">Mature Animal (Older than 2 years)</option>
    </select>
  </div>

  <li *ngFor="let animal of animalList | age:filterByAge">
    {{animal.name}} <button class="btn btn-default" (click)="editButtonClicked(animal)">Update Animal Record</button>
  </li>
  `
})

export class AnimalListComponent {
  @Input() animalList: Animal[];
  @Output() editButtonClickSender = new EventEmitter();
  filterByAge: string = "age";

  onChange(optionFromMenu) {
    this.filterByAge = optionFromMenu;
  }

  editButtonClicked(animalToEdit: Animal) {
    this.editButtonClickSender.emit(animalToEdit);
  }
}
