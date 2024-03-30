import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private registrationData: any;

  constructor() { }

  storeRegistrationData(data: any) {
    this.registrationData = data;
  }

  getRegistrationData() {
    return this.registrationData;
  }
}
