import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/models/user';
import { Address } from 'src/app/models/address';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL =  environment.API_URL

  constructor(
    private http: HttpClient
  ) { }

  getUserInfo(){
    return this.http.get<User>(`${this.API_URL}/me`)
  }

  getAdress(){
    return this.http.get<Address[]>(`${this.API_URL}/address`)
  }

  AddAddress(addr: Address){
    return this.http.post<Address>(`${this.API_URL}/address`, addr)
  }

  getAdressById(id: Number) {
    return this.http.get<Address>(`${this.API_URL}/address/${id}`)
  }
  EditAddress(addr: Address) {
    return this.http.put<Address>(`${this.API_URL}/address/${addr.id}`, addr)
  }
  DeleteAddress(id: number){
  return this.http.delete(`${this.API_URL}/address/${id}`)
  }
  EditUsername(user: User) {
    //return this.http.put<User>(`${this.API_URL}/`)
  }
}

