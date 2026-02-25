import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  selector: 'employee-app',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {

  employees : any[]=[];

  employee = {
    name : '',
    email: '',
    salary: 0
  };

  constructor(private service: Employee){}

  save(){
    
  }

}