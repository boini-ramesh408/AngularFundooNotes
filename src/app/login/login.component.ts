import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { UserServiceService } from '../services/userService/user-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // username:string;
  // password:string;
  username= new FormControl('', [Validators.required,Validators.minLength(4),Validators.maxLength(12)]);
  password=new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" )])
  constructor(private http: HttpClient,private router: Router,private userService:UserServiceService) { }

  ngOnInit() {

  }

  submitData(){
    
    // let dataa = {"username": this.username, "password":this.password};
    // // const headers = new HttpHeaders().set("content-type", "application/json");
    this.userService.postRegisterData(this.username,this.password)
    // this.http.post('http://localhost:8000/api/login/',dataa)
    // .subscribe((response) => {
      // console.log(response)
      // alert(response['message']);
      // localStorage.setItem("token",response.data)
    
    // }
    // )

 
}
goRegistration(){
  
  this.router.navigate(['/register']);
 
  
    console.log("reset password")
   
  
}
goForgotPassword(){

  this.router.navigate(['/forgot']);
 
  
  console.log("forgot pasword")
 
}
errorForUsername(){
  return this.username.hasError('required') ? 'username field is required':
  
  "";
}
errorForPassword(){
  return this.password.hasError('required') ? 'password field is required':
  "";
}
}
