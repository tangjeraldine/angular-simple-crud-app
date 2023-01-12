import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  userID: any;
  names: any;
  constructor(
    private serv: UserService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.serv.viewUser(id).subscribe((data) => {
    //   this.names = data;
    // });

    this.activatedroute.params.subscribe((data) => {
      this.userID = data['id'];
    });

    this.serv.viewUser(this.userID).subscribe((data) => {
      this.names = data;
      console.log(data);
    });
  }
}
