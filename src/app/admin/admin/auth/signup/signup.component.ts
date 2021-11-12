import { Component, OnInit, OnDestroy } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subscription } from "rxjs";
import { AdminService } from "src/app/admin/admin.service";

import { AuthService } from "../auth.service";

@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"]
})
export class SignupComponent implements OnInit, OnDestroy {
  isLoading = false;
  private authStatusSub: Subscription;
  private usersSub: Subscription;
  users;

  constructor(
    public authService: AuthService,
    private adminService: AdminService
  ) {}

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(
      authStatus => {
        this.isLoading = false;
      }
    );

    this.usersSub = this.adminService.getUsersListener().subscribe(
      users => {
        this.users = users;
        console.log(users);
      }
    )

  }

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.isLoading = true;
    this.authService.createUser(form.value.userName, form.value.password);
  }

  ngOnDestroy() {
    this.authStatusSub?.unsubscribe();
  }
}
