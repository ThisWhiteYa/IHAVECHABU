import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-location',
  imports: [RouterLink,FormsModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.css',
})
export class LocationComponent {
  formData = {
    name: '',
    address: '',
    road: '',
    subDistrict: '',
    district: '',
    province: '',
    zipCode: '',
  };

  constructor(private router: Router) {}

  submitForm() {
    console.log('Form Data Submitted:', this.formData);
  }
  onSubmit(form: any) {
    if (form.valid) {
      this.router.navigate(['/payment']);
    } else {
      alert('กรุณากรอกข้อมูลให้ครบ');
    }
  }
}
