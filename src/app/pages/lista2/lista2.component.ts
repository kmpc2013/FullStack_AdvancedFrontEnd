import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista2',
  templateUrl: './lista2.component.html',
  styleUrls: ['./lista2.component.css']
})
export class Lista2Component implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable, { static: false }) table!: MatTable<User>;
  dataSource = new MatTableDataSource <User> ([]);
  constructor(private router:Router, public service:UserService) {  }
  ngOnInit() {
    this.getUsers()
  }
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'phone', 'cpf'];

  getUsers(): void {
    this.service.getUsers().subscribe(
      {
        next: (response) =>{
          this.dataSource = new MatTableDataSource <User> (response);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error: (erro: any) =>{
          console.log(erro);
          alert('ocorreu algum erro');
        }
      }
    )

  }
  ngAfterViewInit() {
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
