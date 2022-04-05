import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServicesService } from 'src/app/services.service';
// import { ValueConverter } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-dept',
  templateUrl: './dept.component.html',
  styleUrls: ['./dept.component.scss']
})
export class DeptComponent implements OnInit {
list:any=[];
totalPages=0;
departmentTotalCount=0;
pageArray:any=[];

constructor(public services:ServicesService, private http: HttpClient) { }

  ngOnInit(): void {
    this.departmentList('1');

  }
  departmentList(page:any){
    let headers = new HttpHeaders({
      'limit': '5',
      'offset': page.toString() });
  let options = { headers: headers };
    this.http.get("http://3.108.34.27:5000/test/department/list",options)
    .subscribe((res:any) =>{
      this.list =res.data.rows;
      this.departmentTotalCount=res.data.count;
      this.totalPages=Math.ceil(this.departmentTotalCount/5)
      this.pageArray = Array(this.totalPages).fill(0,0,0)
console.log(this.pageArray)
      console.log('this is res',res)
      console.log("this is list",this.list);
    },error =>{
      console.log(error);
      console.log('error')
    })
  }
}
