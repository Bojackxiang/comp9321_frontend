import { Injectable } from "@angular/core";
import { isDefaultChangeDetectionStrategy } from "@angular/core/src/change_detection/constants";

@Injectable({
  providedIn: "root"
})
export class AuthServiceService {
  constructor() {}

  users = {};

  signInHandler(username, password) {
    if (Object.keys(this.users).indexOf(username) < 1) {
      return { msg: "no such a user" };
    } else {
      if (this.users[username] != password) {
        return { msg: "wrong password" };
      } else {
        return { msg: "success login" };
      }
    }
  }

  signUpHandler(username, password) {
    console.log(username)
    if (Object.keys(this.users).indexOf(username) < 0) {
      this.users[username] = password;
      return {msg: "sign up successfully"}
    } else {
      return { msg: "duplicate user" };
    }
  }
}
