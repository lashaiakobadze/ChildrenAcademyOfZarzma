import { Component, OnInit } from '@angular/core';
import { AuthService } from './admin/admin/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'AcademyZarzma';
  
  constructor(
    private authService: AuthService,
  ) { }

  student = {
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

  ngOnInit() {
    this.authService.autoAuthUser();
  }  
}
