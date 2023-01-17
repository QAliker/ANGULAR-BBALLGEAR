import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLog: boolean = false
  constructor(
    private _authService: AuthService
    ) { }

  ngOnInit(): void {
    this._authService.user.subscribe(data => {
      if (data)
      this.isLog = true 
      else
      this.isLog = false 
    })
  }

    logout() {
      this._authService.logout()
    }
}
