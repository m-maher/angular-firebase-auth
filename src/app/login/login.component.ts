import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private _authService: AuthService, private _router: Router) { 
  }

  signInWithEmail() {
    return this._authService.signInRegular(this.user.email, this.user.password)
       .then((res) => {
          console.log(res);
    
          this._router.navigate(['dashboard']);
       })
       .catch((err) => console.log('error: ' + err));
  }

  signInWithGoogle() {
    return this._authService.signInWithGoogle()
    .then(() => {
      this._router.navigate(['dashboard'])
    })
    .catch((err) => console.log(err))
  }

  signInWithFacebook() {
    return this._authService.signInWithFacebook()
    .then(() => {
      this._router.navigate(['dashboard'])
    })
    .catch((err) => console.log(err))
  }

  signInWithGithub() {
    return this._authService.signInWithGithub()
    .then(() => {
      this._router.navigate(['dashboard'])
    })
    .catch((err) => console.log(err))
  }

  signInWithTwitter() {
    return this._authService.signInWithTwitter()
    .then(() => {
      this._router.navigate(['dashboard'])
    })
    .catch((err) => console.log(err))
  }



  ngOnInit() {
  }

}
