import { Component } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from 'src/app/models/Animal.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  animals:Animal[]; 
  constructor(private animalService:AnimalService){
    this.animals = this.animalService.getAnimals(); 
  }
}
