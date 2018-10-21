import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from "../services/auth-service.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private authServce: AuthServiceService) {}

  ngOnInit() {
  }

  username = "";
  userPassword = "";
  signIn(){
    const inform = this.authServce.signInHandler(this.username, this.userPassword)
    if(inform.msg == "no such a user"){
      alert('not such a user, please sign up')
    }else if(inform.msg == "wrong password"){
      alert('not such a user, please sign up')
    }else{
      alert('log in successfully')
    }
  }

}
