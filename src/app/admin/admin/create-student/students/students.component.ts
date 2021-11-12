import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  @Input() student;
  studentform: FormGroup;
  classes: string[];
  statuses: boolean[];
  isLoading: boolean;

  constructor(
    public studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    this.classes = this.studentsService.classes;
    this.statuses = this.studentsService.statuses;
    
    this.student =
      { 
        id: 1,
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
      }

      this.initForm(this.student);
  }

  onUpdateStudent(id: number) {
    console.log(this.studentform.value, id);
    this.studentsService.updateStudent(id, this.studentform.value);
  }

  onDeleteStudent(id: number) {
    console.log(this.studentform.value, id);
    this.studentsService.deleteStudent(id);
  }

  initForm(student): void {
    this.studentform = new FormGroup({
      id: new FormControl(student.id),
      firstName: new FormControl(student.firstName),
      lastName: new FormControl(student.lastName),
      personalNumber: new FormControl(student.personalNumber),
      phoneNumber: new FormControl(student.phoneNumber),
      email: new FormControl(student.email),
      schoolName: new FormControl(student.schoolName),
      parentFullName: new FormControl(student.parentFullName),
      code: new FormControl(student.code),
      active: new FormControl(student.active),
      schoolClass: new FormControl(student.schoolClass),
    });
  }

}
