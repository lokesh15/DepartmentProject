import { Injectable } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public services:ServicesService) { }
  isLoggedIn(){
    return !!this.services.jwt;
  }
}
