import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from 'src/app/services.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.scss']
})
export class DeptComponent implements OnInit {
list:any=[];

  constructor(public services:ServicesService, private http: HttpClient) { }

  ngOnInit(): void {
    this.departmentList()
    // this.list = this.departmentList().subscribe(res:any) =>{
    //   this.list = res;
    // })
  }
  departmentList(){
    this.http.get("http://3.108.34.27:5000/test/department/list")
    .subscribe((res:any) =>{
      this.list =res.data.rows;
      console.log('this is res',res)
      console.log("this is list",this.list);
      // if(res.statuscode=200){
      // console.log('sucess')
      // console.log(this.list)
      //localStorage.setItem('token',res.token)
      // this.services.jwt=res.token;
      // console.log('token',this.services.jwt)
      // }
    },error =>{
      console.log(error);
      console.log('error')
    })
  }
}
