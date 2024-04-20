import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

export interface StudentResponse{
  id: number,
  name: string,
  course: string,
  email: string,
  phone: string,
  created_at: string,
  updated_at: string
}

export interface StudentResponseType{
  status: Number,
  students: StudentResponse[]
}

export interface StudentEditResponse{
  status: Number,
  student: StudentResponse
}


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private HttpClient: HttpClient) { }

  // Get List of Student Api
  getStudents(){
    return this.HttpClient.get<StudentResponseType>(`http://localhost:8000/api/students`);
  }

  // Save Student Api
  saveStudent(inputData:object){
    return this.HttpClient.post(`http://localhost:8000/api/students`, inputData);
  }

  // fetch Student data by id Api
  getStudent(studentId: number)
  {
    return this.HttpClient.get<StudentEditResponse>(`http://localhost:8000/api/students/${studentId}/edit`);
  }

  // update the data api
  updateStudent(inputData: object, studentId: number){
    return this.HttpClient.put(`http://localhost:8000/api/students/${studentId}/edit`, inputData)
  }

  // delete the data api



}