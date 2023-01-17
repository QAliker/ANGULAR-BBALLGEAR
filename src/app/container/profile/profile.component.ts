import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user: User = {username: '', role: 0}
address: Address[] = []

  constructor(
    private _userService: UserService,
    private _authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._userService.getUserInfo().subscribe(data => {
      this.user = data
      //if(data.role === )
    }),
    this._userService.getAdress().subscribe(data => {
      this.address = data
    })
  }

  goToAddingAddress() {
    this.router.navigate(['/address'])
  }
  
edit(addr: Address){
  this.router.navigate(['/editAddress'], { queryParams: { id: addr.id}})
}

delete(addr: Address, index: number){
  this._userService.DeleteAddress(addr.id).subscribe()
  this.address.splice(index, 1)
}
  editUserName(){
    this._userService.EditUsername(this.user).subscribe( 
      () => this.router.navigate(['/']))
  }
}
