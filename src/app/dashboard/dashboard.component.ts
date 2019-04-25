import { Component, OnInit } from '@angular/core';

import { UserService } from '../shared/user.service'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  configUrl = 'assets/config.json';

  // users = [{
  //   "id": 1,
  //   "name": "Leanne Graham",
  //   "username": "Bret",
  // },
  // {
  //   "id": 2,
  //   "name": "John Graham",
  //   "username": "Great",
  // }]

  users;

  constructor(private _UserService: UserService) { }

  ngOnInit() {

    this._UserService.getAllUsers()
      .subscribe((response) => {
        console.log("Users Data", response);
        this.users = response;

        console.log(this.users);


      }, (err: HttpErrorResponse) => {
        console.log("Dashboard Server Error.. ", err);
      })

  }

}

interface dashboardData { }






