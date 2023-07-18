import { Component, ViewChild } from '@angular/core';
import { AnimalService } from 'src/app/services/animal.service';
import { Animal } from 'src/app/models/Animal.model';
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  columnas: string[] = ['name', 'type', 'gender','date','origin','img_url','family'];
    
  animals!:Animal[]; 
  dataSource:any;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  
  constructor( private animalService:AnimalService){
      
  }
  ngOnInit(){
    this.animalService.getAnimals().subscribe((data:Animal[])=>{
      this.animals = data;
      this.dataSource = new MatTableDataSource<Animal>(this.animals);
      this.dataSource.paginator = this.paginator;
    }) 
    
  }
 
 
}