import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  constructor(private stdService:StudentService){
    
  }
  addStudent(name:string,event:string){
    this.stdService.addStudent(name,event);
  }
}
