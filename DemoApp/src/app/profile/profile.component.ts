import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  registrationData: any;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.registrationData = this.registrationService.getRegistrationData();
  }
}
