import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  stdlist:any[]=[];
  addStudent(n:string,act:string){
    this.stdlist.push({name:n,activity:act});
  }
  getAll(){
    return this.stdlist;
  }
}
