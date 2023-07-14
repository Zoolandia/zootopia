import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = 'http://localhost:8000/animals'; 
  constructor(private http: HttpClient) {}

  saveFormData(formData: any): Observable<any> {
    const endpoint = `${this.apiUrl}/data`; 
    return this.http.post(endpoint, formData);
  }
}