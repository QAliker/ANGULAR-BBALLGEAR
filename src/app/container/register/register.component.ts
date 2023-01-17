import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
username: string = ''
password: string = ''
email: string = ''
Adresse: string = ''
  constructor(
    private _authService : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  register(){
    this._authService.register(this.username, this.password, this.email, this.Adresse)
    .subscribe(data => {
      console.log(data)
      this.router.navigateByUrl('/login')
    })
  }

}
