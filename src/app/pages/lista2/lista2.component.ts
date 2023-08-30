import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Lista2DataSource, Lista2Item } from './lista2-datasource';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lista2',
  templateUrl: './lista2.component.html',
  styleUrls: ['./lista2.component.css']
})
export class Lista2Component implements AfterViewInit {
  users:User[] = [];
  constructor(private router:Router, public service:UserService) {  }
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<Lista2Item>;
  dataSource = new MatTableDataSource <User> ([]);

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'email', 'phone', 'cpf'];

  ngOnInit() {
    this.getUsers()
  }
  getUsers(): void{
    this.service.getUsers().subscribe(
      {
        next: (response) =>{
          this.dataSource = new MatTableDataSource <User> (response);
        },
        error: (erro: any) =>{
          console.log(erro);
          alert('ocorreu algum erro');
        }
      }
    )

  }
  ngAfterViewInit(): void {
    //this.dataSource.sort = this.sort;
    //this.dataSource.paginator = this.paginator;
    //this.table.dataSource = this.dataSource;
  }
}
