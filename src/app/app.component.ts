import { Component } from '@angular/core';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private loginService: LoginService, private router: Router) { }

  title = 'Sample Framework';

  isLoggedIn(): boolean {
    return this.loginService.isLoggedIn;
  }

  getName(): string {
    let name = "Login";
    if (this.loginService.isLoggedIn) {
      name = this.loginService.getUserName()
    }
    return name;
  }

  logout() : void {
    this.loginService.logout();
    this.router.navigateByUrl('/login');
  }

  onTitleClick(): void {
    if (this.loginService.isLoggedIn) {
      this.router.navigateByUrl('/main-screen');
    }
  }

  onIdentityClick(): void {
    if (this.loginService.isLoggedIn) {
      this.router.navigateByUrl('/main-screen');
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
