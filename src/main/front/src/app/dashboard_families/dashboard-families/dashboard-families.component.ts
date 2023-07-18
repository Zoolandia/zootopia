import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/services/animal.service';


@Component({
  selector: 'app-dashboard-families',
  templateUrl: './dashboard-families.component.html',
  styleUrls: ['./dashboard-families.component.scss']
})
export class DashboardFamiliesComponent {
  AnimalService: any;
  constructor(private router: Router, private animal: AnimalService) {}
  ngOnInit() {
    this.animal = this.AnimalService.getAnimal();
  }

  listanimals() {
    this.router.navigate(['/list']);
  }
}

