import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  userID: any;
  names: any;
  constructor(
    private service: UserService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.userID = data['id'];
    });

    this.service.viewUser(this.userID).subscribe((data) => {
      this.names = data;
      console.log(data);
    });
  }

  onDelete() {
    this.service.deleteUser(this.userID).subscribe((data) => {
      console.log('User deleted.'),
        this._snackBar.open('User deleted.', 'Okay'),
        this.router.navigate(['/users']);
    });
  }
}
