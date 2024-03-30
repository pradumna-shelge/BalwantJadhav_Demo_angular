import { Component } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  registrationData: any;

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.registrationData = this.registrationService.getRegistrationData();
  }
}
