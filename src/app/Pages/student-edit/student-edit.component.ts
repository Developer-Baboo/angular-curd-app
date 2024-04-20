import { StudentService } from './../../Services/student.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css'] // Use styleUrls instead of styleUrl
})
export class StudentEditComponent {
  studentId!: any;
  student: any;

  isLoading: boolean = false;
  loadingTitle: string = '';
  errors: any = [];

  constructor(private route: ActivatedRoute, 
              private StudentService: StudentService,
              private router: Router) {} // Inject Router

  ngOnInit() {    
    this.studentId = this.route.snapshot.paramMap.get('id');

    this.StudentService.getStudent(this.studentId).subscribe(res => {
      console.log(res);
      this.student = res.student;
    });
  }

  updateStudent() {    
    var inputData = {
      name: this.student.name,
      course: this.student.course,
      email: this.student.email,
      phone: this.student.phone,
    };

    this.isLoading = true;

    this.StudentService.updateStudent(inputData, this.studentId).subscribe({
      next: (res: any) => {
        console.log(res);
        alert(res.message);
        this.isLoading = false;
        this.router.navigate(['/students']); // Redirect to students page
      },
      error: (err: any) => {
        console.log(err);
        this.errors = err.error.errors;
        this.isLoading = false;
      }
    });
  }
}