import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {


  url = 'https://jsonplaceholder.typicode.com/users';
  baseUrl = "https://reqres.in";
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<user> {
    return this.http.get<user>(this.baseUrl + '/api/users/');
  }

  register(usernameVal, passwordVal) {

    return this.http.post(this.baseUrl + '/api/register',
      { email: usernameVal, password: passwordVal });
  }

  login(emailVal, passwordVal) {

    return this.http.post(this.baseUrl + '/api/login',
      { email: emailVal, password: passwordVal });

  }

}

export interface user {

  name: string,
  job: string
}