import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

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
        r => {
          console.log(r.data);
          if (r.data !== 'Invalid Account') {
            this.loginService.isLoggedIn = true;
            this.loginService.setUserName(r.data[0].Name);
            this.router.navigateByUrl('/main-screen');
          }
        },
        r => {
          this.loginService.logout();
          alert(r.error.error);
        });
  }
}
