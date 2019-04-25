import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public usernameTxt: string;
  public passwordTxt: string;
  user;

  constructor(private _UserService: UserService, private router: Router) { }

  save() {
    this.user =
      {
        username: this.usernameTxt,
        password: this.passwordTxt
      }
    console.log("U Entered", this.user);
    let dataResponse;
    this._UserService.register(this.usernameTxt, this.passwordTxt)
      .subscribe(data => {
        dataResponse = data;
        console.log(dataResponse);
        if (dataResponse) {
          this.router.navigate(['login']);

        }


      }, (err: HttpErrorResponse) => {

        console.log("Reg Server ERROR...", err);


      });



  }
  registerUser() {
    // let uPromise = this._UserService.register(this.email, this.password);
    // uPromise.then(res => {
    //   console.log("RES", res);
    //   this.user = res;
    // }, err => {
    //   console.log("Error", err);
    // });

  }

  ngOnInit() { }

}

