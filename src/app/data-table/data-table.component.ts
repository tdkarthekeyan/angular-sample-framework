import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { User } from '../model/User';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit, AfterViewInit {
  public displayedColumns = ['Name', 'Designation', 'Phonenumber', 'EmailId', 'AddBy', 'UserId', 'Level'];
  public dataSource = new MatTableDataSource<User>();

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(private userService: UserService, private loginService: LoginService) { 
  }

  ngOnInit() {
    this.getUserList();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
 }

  getUserList(): any {
    this.userService.getUserList(this.loginService.emailId)
      .subscribe(
        response => {
          this.dataSource.data = response.data as User[];
        },
        errorResponse => {
          console.log(errorResponse.error.error);
        });
  }
  
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  
}