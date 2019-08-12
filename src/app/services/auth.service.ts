import { Injectable } from '@angular/core';

import { Router } from "@angular/router"
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>
  private userDetails: firebase.User = null

  constructor(private _firebaseAuth: AngularFireAuth, private _router: Router) { 
    this.user = _firebaseAuth.authState;
  }

  signInRegular(email, password) {
    return this._firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  }

  signInWithGoogle() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
  }

  signInWithFacebook() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    )
  }

  signInWithGithub() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GithubAuthProvider()
    )
  }

  signInWithTwitter() {
    return this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.TwitterAuthProvider()
    )
  }

  isLoggedIn() {
    if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    } 
  }

  logout() {
    this._firebaseAuth.auth.signOut()
    .then(() => this._router.navigate(['/login']));
  }
}



