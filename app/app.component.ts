import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1 class="container">Appalachian Animal Preserve</h1>
      </div>
      <!-- Trigger the modal with a button -->
      <button type="button" class="btn btn-default" data-toggle="modal" data-target="#myModal">Add Animal</button>
      <ul>
        <animal-list [animalList]="masterAnimalList" (editButtonClickSender)="editAnimal($event)"></animal-list>
      </ul>
      <edit-animal [selectedAnimalToEdit]="selectedAnimal" (editFormClickSender)="editAnimalComplete()"></edit-animal>
      <hr>
    </div>
    <div class="container">

      <!-- Modal -->
      <div class="modal fade" id="myModal" role="dialog">
        <div class="modal-dialog">

          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">New Animal</h4>
            </div>
            <div class="modal-body">
              <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
            </div>
          </div>

        </div>
      </div>

    </div>
  `
})

export class AppComponent {
  selectedAnimal = null;
  masterAnimalList: Animal[] = [
    new Animal('Fluffy','Mountain Lion',2,'Male','Omnivore','Bouncy balls','Kale',3,'Cougar Enclosure'),
    new Animal('Prince','Whitetail Deer',4,'Male','Herbivore','Food','Guns',1,'Section 2'),
    new Animal('Moon','Coyote',3,'Female','Carnivore','Food','Mountain Lions',2,'Section 14')
  ];

  addAnimal(newAnimal: Animal) {
    this.masterAnimalList.push(newAnimal);
  }

  editAnimal(selectedAnimalFromList) {
    this.selectedAnimal = selectedAnimalFromList;
  }

  editAnimalComplete() {
    this.selectedAnimal = null;
  }
}
