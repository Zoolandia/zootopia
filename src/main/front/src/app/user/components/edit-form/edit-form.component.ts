import { Component } from '@angular/core';
import { Animal } from '../../../models/Animal.model';
import { animals } from 'src/app/mockup-animals';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent {
  animal: Animal | undefined;
  animalId: number;
  name: string = "";
  type: string = "";
  family: string = "";
  gender: string = "";
  admission: string = "";
  image: File | null = null;

  constructor(private route: ActivatedRoute) {
    
    this.animalId = 0; 
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const animalIdParam = params.get('id');
      if (animalIdParam !== null) {
        this.animalId = +animalIdParam;
        this.animal = this.getAnimalById(this.animalId);
        this.populateFormWithAnimalData();
      }
    });
  }

  getAnimalById(id: number): Animal | undefined {
    
    return animals.find(animal => animal.id === id);
  }

  populateFormWithAnimalData() {
    if (this.animal) {
      this.name = this.animal.name;
      this.type = this.animal.type;
      this.family = this.animal.family;
      this.gender = this.animal.gender;
      this.admission = this.formatDate(this.animal.admission);
      if (this.animal.image) {
        this.convertImageUrlToFile(this.animal.image)
          .then(file => {
            this.image = file;
          })
          .catch(error => {
            console.error('Error converting image URL to file:', error);
          });
      }
      console.log(this.animal)
    }
  }
  formatDate(date: Date): string {
    const formattedDate = new Date(date).toISOString().split('T')[0];
    return formattedDate;
  }
  convertImageUrlToFile(imageUrl: string): Promise<File> {
    return fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        const file = new File([blob], 'animalImage', { type: blob.type });
        return Promise.resolve(file);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
        return Promise.reject(error);
      });
  }
  onFileSelected(event: any) {
    this.image = event.target.files[0];
  }
  getObjectURL(file: File): string {
    return URL.createObjectURL(file);
  }
  submitForm() {
    const updatedAnimal: Animal = {
      id: this.animalId,
      name: this.name,
      type: this.type,
      family: this.family,
      gender: this.gender,
      admission: new Date(this.admission), 
      image: this.image ? URL.createObjectURL(this.image) : '',
      origin: this.animal?.origin ?? ""
    };
  
    console.log(updatedAnimal);
  
    const index = animals.findIndex(animal => animal.id === this.animalId);
    if (index !== -1) {
      animals[index] = updatedAnimal;
      console.log('Datos actualizados:', animals);
      
    } else {
      console.log('Animal no encontrado en el JSON.');
    }
  }
}


