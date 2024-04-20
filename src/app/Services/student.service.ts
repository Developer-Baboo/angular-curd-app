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

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private HttpClient: HttpClient) { }

  getStudents(){
    return this.HttpClient.get(`http://localhost:8000/api/students`);
  }

  saveStudent(inputData:object){
    return this.HttpClient.post(`http://localhost:8000/api/students`, inputData);
  }
}