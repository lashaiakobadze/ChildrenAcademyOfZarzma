import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  classes: string[] = ['6', '7', '8'];
  statuses: boolean[] = [true, false];

  private students: any = [];
  private studentsUpdated = new Subject<any>();

  constructor(private http: HttpClient, private router: Router) {}

    // localhost:8081/students **** get, all student
    // localhost:8081/students **** post, add student
    // localhost:8081/students/${id} **** put, update student
    // localhost:8081/students/${id} **** delete, update student

  getStudents() {
    this.http.get(`${BACKEND_URL}students`)
    .subscribe(students => {
      console.log(students);
      this.studentsUpdated.next(students);
    });

    this.students = [
      {
        firstName: "Shako",
        lastName: 'Shaklamazi',
        schoolClass: 6,
        email: "shako.shaklamaza@shakalamazoglu.com",
        personalNumber: 59001124444,
        phoneNumber: '89327423894',
        schoolName: '982137892173',
        parentFullName: 'Shaka',
        code: "H12",
        active: true
      },
      {
        firstName: "Shako",
        lastName: 'Shaklamazi',
        schoolClass: 6,
        email: "shako.shaklamaza@shakalamazoglu.com",
        personalNumber: 59001124444,
        phoneNumber: '89327423894',
        schoolName: '982137892173',
        parentFullName: 'Shaka',
        code: "H12",
        active: true
      },
      {
        firstName: "Shako",
        lastName: 'Shaklamazi',
        schoolClass: 7,
        email: "shako.shaklamaza@shakalamazoglu.com",
        personalNumber: 59001124444,
        phoneNumber: '89327423894',
        schoolName: '982137892173',
        parentFullName: 'Shaka',
        code: "H12",
        active: true
      },
      {
        firstName: "Shako",
        lastName: 'Shaklamazi',
        schoolClass: 8,
        email: "shako.shaklamaza@shakalamazoglu.com",
        personalNumber: 59001124444,
        phoneNumber: '89327423894',
        schoolName: '982137892173',
        parentFullName: 'Shaka',
        code: "H12",
        active: true
      }
    ];
    this.studentsUpdated.next([...this.students]);

    return this.students;
  }

  getStudentsUpdateListener() {
    return this.studentsUpdated.asObservable();
  }

  addStudent(student) {
    this.http.post(`${BACKEND_URL}students`, student)
    .subscribe(students => {
      console.log(students);
    })
  }

  updateStudent(id: number, student) {
    this.http.put(`${BACKEND_URL}students/${id}`, student)
    .subscribe(students => {
      console.log(students);
    })
  }

  deleteStudent(id: number) {
    this.http.delete(`${BACKEND_URL}students/${id}`)
    .subscribe(students => {
      console.log(students);
    })
  }
}
