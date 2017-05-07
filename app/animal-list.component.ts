import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `

    <div class="navbar-form">

      <div class="selectMenu">
        <select class="form-control" (change)="onChange($event.target.value)">
          <option value="" disabled selected>Filter By Age</option>
          <option value="all">All Animals</option>
          <option value="young">Young Animals (2 years or younger)</option>
          <option value="mature">Mature Animal (Older than 2 years)</option>
        </select>
      </div>

    </div>

    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Species</th>
          <th>Age</th>
          <th>Sex</th>
          <th>Diet</th>
          <th>Likes</th>
          <th>Dislikes</th>
          <th>Caretakers</th>
          <th>Location</th>
          <th>Options</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let animal of animalList | age:filterByAge">
          <td>{{animal.name}}</td>
          <td>{{animal.species}}</td>
          <td>{{animal.age}}</td>
          <td>{{animal.sex}}</td>
          <td>{{animal.diet}}</td>
          <td>{{animal.likes}}</td>
          <td>{{animal.dislikes}}</td>
          <td>{{animal.caretakers}}</td>
          <td>{{animal.location}}</td>
          <td><button class="btn btn-default" (click)="editButtonClicked(animal)">Update Animal Record</button></td>
        </tr>
      </tbody>
    </table>
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
