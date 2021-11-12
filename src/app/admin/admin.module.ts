import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './admin/auth/auth.component';
import { LoginComponent } from './admin/auth/login/login.component';
import { SignupComponent } from './admin/auth/signup/signup.component';
import { CreateStudentComponent } from './admin/create-student/create-student.component';
import { UsersComponent } from './admin/users/users.component';
import { StudentsComponent } from './admin/create-student/students/students.component';



@NgModule({
  declarations: [
    AdminComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    CreateStudentComponent,
    UsersComponent,
    StudentsComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '', 
        component: AdminComponent, 
        children: [
          { path: "login", component: LoginComponent },
          { path: "signup", component: SignupComponent },
          { path: "create", component: CreateStudentComponent },
        ] 
      }
    ])
  ]
})
export class AdminModule { }
