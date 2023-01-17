import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {
 addr: Address= {id: 0, postalCode: '', country: '', city:'', road: ''}
  constructor(
  private _userService: UserService,
  private router: Router,
  private route: ActivatedRoute
  ) { }
 

  ngOnInit(): void {
    this.route.queryParams
    .subscribe(params => {
      this._userService.getAdressById(params['id']).subscribe(data => {
        this.addr = data
      })
    })
  }
Edit(){
  this._userService.EditAddress(this.addr).subscribe(() => {
    this.router.navigate(['/profile'])
  })
}


}
