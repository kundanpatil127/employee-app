import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Employee {

  
  private baseUrl = 'http://localhost:8080/employee';

  constructor(private http: HttpClient){

  }

  save(employee:any){
    return this.http.post(this.baseUrl, employee)
  }
  
}
