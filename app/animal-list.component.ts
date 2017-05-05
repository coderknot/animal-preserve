import { Component, Input } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <li *ngFor="let animal of animalList">
    {{animal.name}}
  </li>
  `
})

export class AnimalListComponent {
  @Input() animalList: Animal[];
}
