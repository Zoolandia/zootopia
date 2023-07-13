import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accessform',
  templateUrl: './accessform.component.html',
  styleUrls: ['./accessform.component.scss']
})
export class AccessFormComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private router: Router) {}
  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/header']);
    } else {
      this.errorMessage = 'Los datos introducidos no son correctos, por favor compruébelos.';
    }
  }
}
