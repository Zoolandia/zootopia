import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Animal } from '../models/Animal.model';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private baseUrl = 'http://localhost:8000'
  constructor(private http:HttpClient) {  }
  getAnimals():Observable<Animal[]>{
    return this.http.get<Animal[]>(this.baseUrl + "/animals");
  }

}