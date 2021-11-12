import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  users = new Subject<any>();

  constructor(private http: HttpClient) { }

  getUsersListener() {
    return this.users.asObservable();
  }

  getUsers() {
    this.http.get(`${BACKEND_URL}auth/users`)
    .subscribe(users => {
      console.log(users);
      this.users.next(users);
    })
  }

  updateUser(id: number) {
    console.log(id);
  }

  deleteUser(id: number) {
    console.log(id);
  }
}
