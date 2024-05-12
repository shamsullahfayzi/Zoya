import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  MatSnackBar,

} from '@angular/material/snack-bar';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private http: HttpClient, private _user: UserService) { }

  form = this.formBuilder.group({
    userName: ['', Validators.required],
    password: ['', Validators.required],
  })
  login() {
    if (!this.form.valid) {
      console.log('invalid')
      this._snackBar.open('Username and password are required!', '❌', {
        duration: 5000,
      })
    }
    this._user.login(this.form.value).subscribe((res: any) => {
      localStorage.setItem('token', (res.token))
      this.router.navigateByUrl('/home');
    }, err => {
      if (err.status == 400)
        this._snackBar.open("Invalid Username or Password.", "❌")
      console.log(err)
    })
  }

}