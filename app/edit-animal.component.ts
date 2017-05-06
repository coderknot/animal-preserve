import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div *ngIf="selectedAnimalToEdit">
      <hr>
      <h3>Update Animal Form</h3>
      <div>
        <label>Enter Name:</label>
        <input [(ngModel)]="selectedAnimalToEdit.name">
      </div>
      <div>
        <label>Enter Species:</label>
        <input [(ngModel)]="selectedAnimalToEdit.species">
      </div>
      <div>
        <label>Enter Age:</label>
        <input [(ngModel)]="selectedAnimalToEdit.age">
      </div>
      <div>
        <label>Enter Sex:</label>
        <input [(ngModel)]="selectedAnimalToEdit.sex">
      </div>
      <div>
        <label>Enter Diet:</label>
        <input [(ngModel)]="selectedAnimalToEdit.diet">
      </div>
      <div>
        <label>Enter Likes:</label>
        <input [(ngModel)]="selectedAnimalToEdit.likes">
      </div>
      <div>
        <label>Enter Dislikes:</label>
        <input [(ngModel)]="selectedAnimalToEdit.dislikes">
      </div>
      <div>
        <label>Enter Caretakers:</label>
        <input [(ngModel)]="selectedAnimalToEdit.caretakers">
      </div>
      <div>
        <label>Enter Location:</label>
        <input [(ngModel)]="selectedAnimalToEdit.location">
      </div>
      <button class="btn btn-default" (click)="updateButtonClicked()">Update</button>
    </div>
  `
})

export class EditAnimalComponent {
  @Input() selectedAnimalToEdit: Animal;
  @Output() editFormClickSender = new EventEmitter();

  updateButtonClicked() {
    this.editFormClickSender.emit();
  }
}
