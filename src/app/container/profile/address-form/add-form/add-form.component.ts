import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})
export class AddFormComponent implements OnInit {
addr: Address = {id:0, postalCode: '', country: '', city: '', road: ''}
  constructor(
    private _userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  Add() {
    this._userService.AddAddress(this.addr).subscribe(
      () => this.router.navigate(['/profile'])
    )
  }
}
