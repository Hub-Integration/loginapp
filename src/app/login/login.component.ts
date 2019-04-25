import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public emailVal;
  public passwordVal;


  constructor(private router: Router, private _UserService: UserService) { }


  login() {

    let loginObj = { email: this.emailVal, password: this.passwordVal }
    console.log("Enterd Data", loginObj);

    this._UserService.login(this.emailVal, this.passwordVal)
      .subscribe(data => {

        let loginData = data;
        console.log(loginData);

        if (loginData) {

          this.router.navigate(['dashboard']);
        }

      }, (err: HttpErrorResponse) => {

        console.log("Server ERROR...", err);
      }
      )






    /* if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(['dashboard']);
    }
    else {

      alert("Invalid Crediantials");
    } */
  }

  ngOnInit() {
  }

}
