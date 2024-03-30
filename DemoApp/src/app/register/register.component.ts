import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;


  constructor(private fb: FormBuilder, private registrationService: RegistrationService,private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      photo: ['', Validators.required],
      age: ['', Validators.required],
      interest: ['', Validators.required],
      addressType: ['home', Validators.required],
      address1: [''],
      address2: [''],
      companyAddress1: [''],
      companyAddress2: [''],
      firstName: ['', [Validators.required, Validators.pattern('[A-Za-z]{1,20}')]],
    });
  }

  submitRegistrationForm() {
    if (this.registrationForm.valid) {
      this.registrationService.storeRegistrationData(this.registrationForm.value);
      this.router.navigate(['/profile']); // Navigate to profile component
    } else {
      // Handle form validation errors
    }
  }

  get addressType() {
    return this.registrationForm.get('addressType');
  }
}