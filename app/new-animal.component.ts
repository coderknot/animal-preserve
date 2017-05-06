import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <div>
      <label>Enter Name:</label>
      <input class="form-control" #newAnimalName>
    </div>
    <div>
      <label>Enter Species:</label>
      <input class="form-control" #newAnimalSpecies>
    </div>
    <div>
      <label>Enter Age:</label>
      <input class="form-control" #newAnimalAge>
    </div>
    <div>
      <label>Enter Sex:</label>
      <input class="form-control" #newAnimalSex>
    </div>
    <div>
      <label>Enter Diet:</label>
      <input class="form-control" #newAnimalDiet>
    </div>
    <div>
      <label>Enter Likes:</label>
      <input class="form-control" #newAnimalLikes>
    </div>
    <div>
      <label>Enter Dislikes:</label>
      <input class="form-control" #newAnimalDislikes>
    </div>
    <div>
      <label>Enter Caretakers:</label>
      <input class="form-control" #newAnimalCaretakers>
    </div>
    <div>
      <label>Enter Location:</label>
      <input class="form-control" #newAnimalLocation>
    </div>
    <button type="button" class="btn btn-default"
      (click)="submitNewAnimalForm(newAnimalName.value,
                                   newAnimalSpecies.value,
                                   newAnimalAge.value,
                                   newAnimalSex,
                                   newAnimalDiet,
                                   newAnimalLikes,
                                   newAnimalDislikes,
                                   newAnimalCaretakers,
                                   newAnimalLocation);
      newAnimalName.value='';
      newAnimalSpecies.value='';
      newAnimalAge.value='';
      newAnimalSex.value='';
      newAnimalDiet.value='';
      newAnimalLikes.value='';
      newAnimalDislikes.value='';
      newAnimalCaretakers.value='';
      newAnimalLocation.value='';
      ">Add</button>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitNewAnimalForm(name: string,
                      species: string,
                      age: number,
                      sex: string,
                      diet: string,
                      likes: string,
                      dislikes: string,
                      caretakers: number,
                      location: string) {
    var newAnimalToAdd: Animal = new Animal(name,
                                            species,
                                            age,
                                            sex,
                                            diet,
                                            likes,
                                            dislikes,
                                            caretakers,
                                            location);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
