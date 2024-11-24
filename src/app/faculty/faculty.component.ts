import { Component,OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrl: './faculty.component.css'
})
export class FacultyComponent {
  studlist:any[]=[];
  // stdService:StudentService
  constructor(private studService:StudentService){
  }
  ngOnInit():void{
    this.studlist=this.studService.getAll();
  }
}
