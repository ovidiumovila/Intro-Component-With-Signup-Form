import { Component, NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private snackbar: MatSnackBar,

  ) { 
    this.createForm();
  }

  loginUser() {
    console.warn(this.form.value)
  }
  createForm(): void {

    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: [''],
      email: [''],
      password: ['']
    })
  }
  login() {
    const isValid = this.form.valid;
    if (!isValid) {
      this.snackbar.open("Something went wrong", '', {
        duration: 2000
      });
      return;
    }
    console.log("is valid");
    this.firstName = this.form.get('firstName')?.value;
    this.lastName = this.form.get('lastName')?.value;
    this.email = this.form.get('email')?.value;
    this.password = this.form.get('password')?.value;

  }
}

