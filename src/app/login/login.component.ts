import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  emailId : string
  password : string

  ngOnInit() {
  }

  login() : void {
    this.loginService.login(
      this.emailId,
      this.password
    )
      .subscribe(
        response => {
          console.log(response.data);
          if (response.data !== 'Invalid Account') {
            this.loginService.isLoggedIn = true;
            this.loginService.setUserName(response.data[0].Name);
            this.loginService.setEmailId(response.data[0].Email_id);
            this.router.navigateByUrl('/main-screen');
          }
        },
        errorResponse => {
          this.loginService.logout();
          alert(errorResponse.error.error);
        });
  }
}
