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
      // Inicio de sesión exitoso
      console.log('Inicio de sesión exitoso');
    } else {
      // Generar error y mostrar mensaje
      this.errorMessage = 'Los datos introducidos no son correctos, por favor compruébelos.';
    }
  }
}
