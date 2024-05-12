import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-patient',
  templateUrl: './new-patient.component.html',
  styleUrls: ['./new-patient.component.css']
})
export class NewPatientComponent {
  form = this.formBuilder.group({
    patient_name: ['', Validators.required],
    province: ['', Validators.required],
    contact_no: [, Validators.required],
    prc: ['', Validators.required],
    tos: ['', Validators.required],
    price: ['', Validators.required],
    calling_date: [, Validators.required],
    appointment_date: [],
    remarks: ['',],
    status: ['', Validators.required],
  })
  services: any = [];
  constructor(private locatoin: Location, private formBuilder: FormBuilder, private http: HttpClient) {
    http.get('https://localhost:7158/api/services').subscribe(res => {
      this.services = res;
    })

  }
  goBack() {
    this.locatoin.back()
  }
  save() {
    console.log(this.form.value)
  }

}
