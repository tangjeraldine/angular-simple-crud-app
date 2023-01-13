import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  updateUserForm!: FormGroup;
  names: any;
  id!: number;

  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((data) => {
      this.id = data['id'];
    });

    this.id != null
      ? this.service
          .viewUser(this.id)
          .toPromise()
          .then((data) => {
            (this.names = data),
              console.log(this.names),
              (this.updateUserForm = this.formBuilder.group({
                username: new FormControl(this.names?.username, [
                  Validators.required,
                  Validators.minLength(3),
                  Validators.maxLength(20),
                ]),
                email: new FormControl(this.names?.email, [
                  Validators.required,
                  Validators.minLength(5),
                  Validators.maxLength(20),
                  Validators.email,
                ]),
                phone: new FormControl(this.names?.phone, [
                  Validators.required,
                ]),
              }));
          })
      : console.log('Unable to fetch user');
  }

  // prefill() {
  //   this.updateUserForm.patchValue({
  //     username: this.names?.username,
  //     email: this.names?.email,
  //     phone: this.names?.phone,
  //   });
  // }

  updateUser() {
    this.service
      .updateUser(this.id, this.updateUserForm.value)
      .subscribe((data) => {
        this._snackBar.open('User updated successfully.', 'Got it!'),
          console.log(data),
          this.router.navigate(['/users']);
      });
  }
}
