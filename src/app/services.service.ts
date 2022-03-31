import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  issignin:boolean=true;
  jwt:string="";
  constructor(private http:HttpClient) { }

  signInsucess(){
    this.issignin = !this.issignin;
  }

}
