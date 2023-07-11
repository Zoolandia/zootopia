import { Component } from '@angular/core';


@Component({
  selector: 'app-accessform',
  templateUrl: './accessform.component.html',
  styleUrls: ['./accessform.component.scss']
})
export class AccessFormComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
    } else {
      this.errorMessage = 'Los datos introducidos no son correctos, por favor compruébelos.';
    }
  }
}
