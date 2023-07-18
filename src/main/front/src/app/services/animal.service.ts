import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Animal } from '../models/Animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private baseUrl = 'http://localhost:8080'
  constructor(private http:HttpClient) {  }
  getAnimals():Observable<Animal[]>{
    return this.http.get<Animal[]>(this.baseUrl + "/animals");
  }

  getAnimalById(id: number): Observable<Animal> {
    return this.http.get<Animal>('http://localhost:8000/animals/' + id);
  }

}
