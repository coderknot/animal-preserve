import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <li *ngFor="let animal of animalList">
    {{animal.name}} <button class="btn btn-default" (click)="editButtonClicked(animal)">Update Animal Record</button>
  </li>
  `
})

export class AnimalListComponent {
  @Input() animalList: Animal[];
  @Output() editButtonClickSender = new EventEmitter();

  editButtonClicked(animalToEdit: Animal) {
    this.editButtonClickSender.emit(animalToEdit);
  }
}
