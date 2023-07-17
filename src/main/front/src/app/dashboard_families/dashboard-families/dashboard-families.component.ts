import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-families',
  templateUrl: './dashboard-families.component.html',
  styleUrls: ['./dashboard-families.component.scss']
})
export class DashboardFamiliesComponent {
  constructor(public router: Router) { }

  gotoComponent() {
    this.router.navigate(['/list']);
  }
}

