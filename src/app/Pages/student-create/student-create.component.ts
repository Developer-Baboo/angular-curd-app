import { Component } from '@angular/core';
import { StudentService } from './../../Services/student.service';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router
@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrl: './student-create.component.css'
})
export class StudentCreateComponent {
  constructor(private StudentService: StudentService, private router: Router){}

  name!: string
  course!: string
  email!: string
  phone!: string

  isLoading: boolean = false;
  loadingTitle: string = 'Loading'
  errors: any = [];

  
  saveStudent(){
    this.isLoading = true
    this.loadingTitle = 'Saving'
    var inputData= {
      name: this.name,
      course: this.course,
      email: this.email,
      phone: this.phone
    }

    this.StudentService.saveStudent(inputData).subscribe({
      next:(res: any) => {
        console.log(res, 'response'); 
        alert(res.message);
        this.name = '';
        this.course = '';
        this.email = '';
        this.phone = '';

        this.isLoading = false;

        this.router.navigate(['/students']);

      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors');
        this.isLoading = false;
      }
    })
  }
}
