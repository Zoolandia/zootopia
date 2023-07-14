import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  showDropdown1: boolean = false;
  showDropdown2: boolean = false;

  constructor(private router: Router) {}

  toggleDropdown1() {
    this.showDropdown1 = !this.showDropdown1;
  }

  toggleDropdown2() {
    this.showDropdown2 = !this.showDropdown2;
  }

  addFamily() {
    const newFamily = prompt('Ingrese el nombre de la nueva familia');
    if (newFamily) {
      console.log('Nueva familia:', newFamily);
    }
  }

 goToComponent() {
   
    this.router.navigate(['/login']);
  }
}
