import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
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
      username: new FormControl(''),
      email: new FormControl(''),
      phone: new FormControl(''),
    });
  }

  createUser() {
    this.service.addUser(this.addUserForm.value).subscribe((data) => {
      console.log('User added successfully'),
        this._snackBar.open('User added successfully.', 'Got it!');
    });
  }
}
