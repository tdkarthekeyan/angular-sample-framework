import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../model/User';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public userForm: FormGroup;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      designation: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('^(0|[1-9][0-9]*)$')]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]),
      password: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      addBy: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      level: new FormControl('', [Validators.required, Validators.maxLength(15)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.userForm.controls[controlName].hasError(errorName);
  }

  public addUser = (userFormValue) => {
    if (this.userForm.valid) {
      let user: User = {
        Name: userFormValue.name,
        Designation: userFormValue.designation,
        Phone_number: userFormValue.phoneNumber,
        Email_id: userFormValue.email,
        Password: userFormValue.password,
        Add_by: userFormValue.addBy,
        Level: userFormValue.level,
        user_id: null,
        resigned: null
      };

      this.userService.addUser(user)
        .subscribe(
          response => {
            console.log(response.data);
            this.router.navigateByUrl('/data-table');
          },
          errorResponse => {
            console.log(errorResponse.error.error);
          });
    }
  }
}
