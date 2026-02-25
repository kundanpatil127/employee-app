import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Employee } from "./employee/employee";

@Component({
  selector: 'employee-app',
  imports: [RouterOutlet, Employee],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employee-app');
}
