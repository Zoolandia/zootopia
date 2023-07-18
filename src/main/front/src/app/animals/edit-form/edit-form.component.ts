import { Component,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from "src/app/models/Animal.model";
import {  Family  } from 'src/app/models/Family.model';
import {Continent } from 'src/app/models/Continent.model';
import { Observable } from 'rxjs/internal/Observable';
import { AnimalService } from 'src/app/services/animal.service';
@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent {
  animal: Animal | null = null
  animalId: number;
  name: string = "";
  type: string = "";
  families_id: number | null = null
  gender: string = "";
  admission:  string = "";
  image: File | null = null;
  continents_id: number | null = null
  familyList: Family[] = [];
  continentList: Continent [] = [];

  @ViewChild('selectedImage') selectedImage: any;
  constructor(private router: Router,private route: ActivatedRoute, private http: HttpClient,private  animalService:AnimalService) {
    this.animalId = 0; 
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {

      const animalIdParam = params.get('id');
      this.getFamilyes().subscribe((response) => {
        this.familyList = response;
      });
    
      this.getContinents().subscribe((response) => {
        this.continentList = response;
      });
      if (animalIdParam !== null) {
        this.animalId = +animalIdParam;
        this.animalService.getAnimalById(this.animalId).subscribe((response) => {
          this.animal = response;
          this.populateFormWithAnimalData();
         
        });
      }
    });
  }

 

  populateFormWithAnimalData() {
    if (this.animal) {
      this.name = this.animal.name;
      this.type = this.animal.type;
      this.gender = this.animal.gender;
  
      this.families_id = this.animal.family.id ;
      this.continents_id = this.animal.continent.id ;
  
      console.log(this.animal.family.id);
  
      const familyIndex = this.familyList.findIndex(
        family => family.id === this.families_id
      );
      if (familyIndex !== -1) {
        this.families_id = this.familyList[familyIndex].id;
      }
      console.log(this.families_id);
  
      this.admission = this.formatDate(this.animal.date);
  
      if (this.animal.continent.id) {
        const continentIndex = this.continentList.findIndex(
          continent => continent.id === this.continents_id
        );
        if (continentIndex !== -1) {
          this.continents_id = this.continentList[continentIndex].id;
        }
      }
  
      if (this.animal.imgUrl) {
        this.convertImageUrlToFile(this.animal.imgUrl)
          .then(file => {
            this.image = file;
          })
          .catch(error => {
            console.error('Error converting image URL to file:', error);
          });
      }
      console.log(this.animal);
      console.log(this.families_id);
      console.log(this.families_id);
    }
  }
  getFamilyes(): Observable<Family[]> {
    return this.http.get<Family[]>('http://localhost:8000/families');
  }
  
  getContinents(): Observable<Continent []> {
    return this.http.get<Continent []>('http://localhost:8000/continents');
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
    const file = this.image as File;
    const imageUrl = URL.createObjectURL(file); 
    const id = this.animalId;
    const updatedAnimal = {
      name: this.name,
      type: this.type,
      gender: this.gender,
      family: { id: this.families_id },
      continent: {id: this.continents_id},
      date: this.admission,
      imgUrl: imageUrl
    };
    console.log(updatedAnimal);
  
    this.http.put<Animal>('http://localhost:8000/animals/' + id, updatedAnimal)
      .subscribe(
        (response) => {
          console.log('Actualización exitosa:', response);
        },
        (error) => {
          console.error('Error al actualizar la base de datos:', error);
        }
      );
      this.router.navigate(['dashboard']);
  }
  redirectToDashboard(){
      this.router.navigate(['dashboard']);
  }
}


