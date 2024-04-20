import { Component } from '@angular/core';
import { StudentResponse, StudentService } from '../../Services/student.service';
import { log } from 'console';

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrl: './student-page.component.css'
})
export class StudentPageComponent {
  constructor(private studentService: StudentService){}

  students!:StudentResponse[];
  isLoading: boolean = false;
  ngOnInit(){
    this.getStudentLists();
  }

  getStudentLists(){
    this.isLoading = true;
    this.studentService.getStudents().subscribe((res:any)=>{
      console.log(res.students);
      this.students = res.students;
      this.isLoading = false;
    })
  }

}
