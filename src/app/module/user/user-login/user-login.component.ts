import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import { Observable } from 'rxjs';
import { Token } from '@angular/compiler';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  api=environment.url;
  logIn:FormGroup|any;
  username:string='';
  password:string='';
  constructor(public services:ServicesService, private http: HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.logIn = new FormGroup({
      username : new FormControl("", [Validators.required,emailStandardValidator]),
      password : new FormControl(null, [Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])
    }) 
    
  }
  
  loginValid(){
    console.log(this.logIn);
    this.http.post(this.api+'auth/login',this.logIn.value).subscribe((res:any) =>{
      console.log('success')
      alert("Log-in Success");
      //console.log(res)
      this.services.jwt=res.token;
      //console.log('token',this.services.jwt)
      this.router.navigateByUrl("dept")      
    },error =>{
      console.log(error);
      alert("Log-in Failed");
      console.log('error')
    })
  }
}

function emailStandardValidator(control: any): { [key: string]: any } | null { 
  const symbol=control.value.split('@')
  if(symbol.length < 2 || symbol > 2){
    //it will return the validator if this condition is 'true' 
    return {'emailStandardValidator' : true};
  }
  //if the if condition is not true it will check the else statement
  else{
    const dot=symbol[1].split('.')
    if(symbol.length && dot.length === 2){
      return null;
  }
  else{
    return {'emailStandardValidator' : "Email is wrong"}
  }
  }
}

// localStorage.setItem('user_name', 'Lokesh'); 
// var retrievedUsername = localStorage.getItem('user_name'); 
// console.log(retrievedUsername)
