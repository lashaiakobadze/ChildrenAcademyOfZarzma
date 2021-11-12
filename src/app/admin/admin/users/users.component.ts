import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userForm: FormGroup;
  isLoading: false;

  @Input() user;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.initForm(this.user);
  }

  onUpdateUser(id: number) {
    this.adminService.updateUser(id);
  }

  onDeleteUser(id: number) {
    this.adminService.deleteUser(id);
  }

  initForm(user): void {
    this.userForm = new FormGroup({
      // id: new FormControl({ value: user?.id, disabled: true}),
      // docType: new FormControl({ value: user?.docType, disabled: true}),
      id: new FormControl(user?.id),
      userName: new FormControl(user?.docType),
      password: new FormControl(user?.title),
    });
  }

}
