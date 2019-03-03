import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { DataTableService } from '../services/data-table.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { User } from '../model/User';

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
  
  constructor(private dataTableService: DataTableService) { 
  }

  ngOnInit() {
    this.getUserList();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
 }

  getUserList(): any {
    this.dataTableService.getUserList('1')
      .subscribe(
        r => {
          this.dataSource.data = r.data as User[];
          console.log(r.data);
          console.log(this.dataSource.data);
        },
        r => {
          alert(r.error.error);
        });
  }
  
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  
}