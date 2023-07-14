import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface User {
  id: number;
  username: string;
  password: string;
}

@Component({
  selector: 'app-accessform',
  templateUrl: './accessform.component.html',
  styleUrls: ['./accessform.component.scss']
})
export class AccessFormComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    this.http.get<User[]>('http://localhost:8000/users').subscribe((usuarios: User[]) => {
      const foundUser = usuarios.find(u => u.username === this.username && u.password === this.password);
      if (foundUser) {
        this.router.navigate(['/header']);
      } else {
        this.errorMessage = 'Los datos introducidos no son correctos, por favor compruébelos.';
      }
    });
  }
}
