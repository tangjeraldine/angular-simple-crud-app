import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

export interface User {
  name: string;
  id: number;
  username: string;
  email: string;
}

const ELEMENT_DATA: User[] = [];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'actions'];
  dataSource = ELEMENT_DATA;

  names: any;

  listUsers: User[] = [];

  constructor(private serv: UserService) {}

  ngOnInit(): void {
    this.serv.listUsers().subscribe((data) => {
      this.listUsers = data;
      console.log(data);
    });
  }

  viewUser(id: any) {
    this.serv.viewUser(id).subscribe((data) => {
      this.names = data;
    });
  }
}
