import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Family } from '../models/Family.model';

@Injectable({
  providedIn: 'root'
})
export class FamilyService {
    private baseUrl = 'http://localhost:8080'
    constructor(private http:HttpClient) {  }
    getFamilyById(id: number): Observable<Family> {
        return this.http.get<Family>('http://localhost:8000/families/' + id);
    }
  
  }