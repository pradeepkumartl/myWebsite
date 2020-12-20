import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginSvc: LoginService) { }

  @ViewChild("loginForm") inpForm: NgForm;
  username: string;
  password: string = "";

  ngOnInit() {
    this.inpForm.reset();
  }
  

  login(){
    //if(this.inpForm.valid){
    this.loginSvc.login(this.username, this.password).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['home',response.user]);
    });
    //}
    // else {
    //   alert('Form has errors');
    // }
  }

  signup(){
    this.router.navigate(['signup']);
  }

}
