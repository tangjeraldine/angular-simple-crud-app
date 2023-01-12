import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  names: any;

  constructor(private serv: UserService) {}

  ngOnInit(): void {
    this.serv.listUsers().subscribe((data) => {
      this.names = data;
    });
  }

  viewUser(id: any) {
    this.serv.viewUser(id).subscribe((data) => {
      this.names = data;
    });
  }
}
