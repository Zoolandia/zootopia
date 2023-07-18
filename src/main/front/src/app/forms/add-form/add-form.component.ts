import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent {
  name: string = "";
  type: string = "";
  family: string = "";
  gender: string = "";
  admission: string = "";
  image: File | null = null;

  constructor(private http: HttpClient ,private router: Router) {}

  onFileSelected(event: any) {
    this.image = event.target.files[0];
  }

  getObjectURL(file: File): string {
    return URL.createObjectURL(file);
  }

  submitForm() {
    const formData = {
      name: this.name,
      type: this.type,
      family: this.family,
      gender: this.gender,
      admission: this.admission,
      image: this.image
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    this.http.post('http://localhost:8000/animals', formData, { headers })
      .subscribe(
        response => {
          console.log('Datos guardados correctamente');
        },
        error => {
          console.error('Error al guardar los datos:', error);
        }
      );
  }
  cancel() {
    this.router.navigate(['/header']);
  }
}
