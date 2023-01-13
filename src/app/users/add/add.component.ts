import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  addUserForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: UserService,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.email,
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10),
      ]),
    });
  }

  createUser() {
    this.service.addUser(this.addUserForm.value).subscribe((data) => {
      console.log('User added successfully'),
        this._snackBar.open('User added successfully.', 'Got it!');
    });
  }
}
