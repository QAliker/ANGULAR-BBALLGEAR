import { JsonPipe } from '@angular/common';
import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = ''
  password: string = ''

  constructor(
    private _authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }
  login(){
    this._authService.login(this.username, this.password)
    .subscribe(data => {
      console.log(data)
      localStorage.setItem('UserToken', data.toString())
      this._authService.userSubject.next(data.toString())
      this.router.navigateByUrl('/products')

    })
  }

}
