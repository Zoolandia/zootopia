import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showDropdown1: boolean = false;
  showDropdown2: boolean = false;
  user: string = '';

  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUsername();
  }

  toggleDropdown1() {
    this.showDropdown1 = !this.showDropdown1;
  }

  toggleDropdown2() {
    this.showDropdown2 = !this.showDropdown2;
  }

  addFamily() {
      this.router.navigate(['/add-form']); 
    }
  
  

  goToComponent() {
    this.router.navigate(['/login']);
  }
}
