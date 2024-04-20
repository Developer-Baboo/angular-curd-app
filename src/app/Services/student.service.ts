import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private HttpClient: HttpClient) { }

  saveStudent(inputData:object){
    return this.HttpClient.post(`http://localhost:8000/api/students`, inputData);
  }
}