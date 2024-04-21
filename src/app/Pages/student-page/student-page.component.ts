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

  // Get List of Students functionality
  getStudentLists(){
    this.isLoading = true;
    this.studentService.getStudents().subscribe((res:any)=>{
      console.log(res.students);
      this.students = res.students;
      this.isLoading = false;
    })
  }


  // Delete Student Functionality
  deleteStudent(event:any, studentId: Number)
  {
    if(confirm('Are you sure you want to delete this data ?')){
      event.target.innerText = "Deleting.......";

      this.studentService.destroyStudent(studentId).subscribe((res:any)=>{
        this.getStudentLists();
        alert(res.message);
      })
    }
  }

  

}
