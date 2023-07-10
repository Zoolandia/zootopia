import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent {
  name: string ="";
  type: string ="";
  family: string ="";
  gender: string ="";
  admission: string ="";
  image: File | null = null;

  onFileSelected(event: any) {
    this.image = event.target.files[0];
  }
  getObjectURL(file: File): string {
    return URL.createObjectURL(file);
  }
  submitForm() {

    const formData = {
      name: this.name,
      type: this.type,
      family: this.family,
      gender: this.gender,
      admission: this.admission,
      image: this.image
    };

    
    console.log(formData);
   
  }
}


