import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import {Continent} from '../models/Continent.model';

@Injectable({
  providedIn: 'root'
})
export class ContinentService {
    private baseUrl = 'http://localhost:8080'
    constructor(private http:HttpClient) {  }
    getContinentById(id: number): Observable<Continent> {
        return this.http.get<Continent>('http://localhost:8000/continents/' + id);
      }
  
  }