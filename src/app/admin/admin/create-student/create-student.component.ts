import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {
  studentform: FormGroup;
  classes: string[];
  statuses: boolean[];
  isLoading: false;
  students;

  constructor(
    public studentsService: StudentsService
  ) { }

  ngOnInit(): void {
    this.classes = this.studentsService.classes;
    this.statuses = this.studentsService.statuses;

    this.students = this.studentsService.getStudents();
    console.log(this.students);

    this.initForm();
  }

  onAddStudent() {
    console.log(this.studentform.value);
    this.studentsService.addStudent(this.studentform.value);
  }

  tabLoadTimes: Date[] = [];

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  initForm(): void {
    this.studentform = new FormGroup({
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      personalNumber: new FormControl(null),
      phoneNumber: new FormControl(null),
      email: new FormControl(null),
      schoolName: new FormControl(null),
      parentFullName: new FormControl(null),
      code: new FormControl(null),
      active: new FormControl(null),
      schoolClass: new FormControl(null),
    });
  }
}
