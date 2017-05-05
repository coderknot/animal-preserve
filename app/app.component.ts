import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <h1>Appalachain Animal Preserve</h1>
  <div class="container">
    <ul>
      <animal-list [animalList]="masterAnimalList"></animal-list>
    </ul>
  </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Fluffy','Mountain Lion',2,'Male','Omnivore','Bouncy balls','Kale',3,'Cougar Enclosure'),
    new Animal('Prince','Whitetail Deer',4,'Male','Herbivore','Food','Guns',1,'Section 2'),
    new Animal('Moon','Coyote',3,'Female','Carnivore','Food','Mountain Lions',2,'Section 14')
  ];
}
