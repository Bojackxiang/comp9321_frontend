import { Component, OnInit } from "@angular/core";
import { AuthServiceService } from "../services/auth-service.service";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  constructor(private authServce: AuthServiceService) {}

  ngOnInit() {}

  username = "";
  password = "";

  signUp(){
    console.log('sign up page');
    const inform = this.authServce.signUpHandler(this.username, this.password);
    console.log(inform);
    if(inform.msg == "sign up successfully"){
      alert('sign up successfully')
    }else{
      alert('duplicate name')
    }

  }
}
