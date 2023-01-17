import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalizedString } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private API_URL = environment.API_URL

  optionRequete = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }), responseType: 'text' as 'json'
  }
  public user: Observable<string>
  public userSubject: BehaviorSubject<string>

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.userSubject = new BehaviorSubject<string>(localStorage.getItem('UserToken') || '' )
    this.user = this.userSubject.asObservable();
  }
  
  login(username: string, password: string){
    return this.http.post(`${this.API_URL}/login`, {username: username, password: password })
  }
  register(username: string, password: string, email: string, Adresse: string){
    return this.http.post(`${this.API_URL}/register`, {username: username, password: password, email: email, Adresse: Adresse})
  }

  logout() {
    localStorage.removeItem('UserToken')
    this.userSubject.next('')
    this.user = this.userSubject.asObservable();
    this.router.navigate(['/'])

  }
}
