import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  families: string[] = [];
  showDropdown1: boolean = false;
  showDropdown2: boolean = false;


  toggleDropdown1() {
    this.showDropdown1 = !this.showDropdown1;
  }

  toggleDropdown2() {
    this.showDropdown2 = !this.showDropdown2;
  }

  addFamily() {
    const newFamily = prompt('Ingrese el nombre de la nueva familia');
    if (newFamily) {
      this.families.push(newFamily);
      console.log('Nueva familia:', newFamily);
    }
  }
  
}
