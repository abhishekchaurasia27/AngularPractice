import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import { Login } from './../models/user';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginUser: any = {};
  loginSuccess: boolean;
  loginUsers: Login[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loginUsers = this.getUsers();
  }

  getUsers(): Login[] {
    return this.userService.getLoginUsersFromData();
  }

  validateUser(user: Login) {
    if (this.userService.checkUser(user)) {
      this.loginSuccess = true;
    }
  }

}
