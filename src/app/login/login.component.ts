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
  username= new FormControl('', [Validators.required,Validators.minLength(4),
    Validators.maxLength(20)]);

  password=new FormControl('',[Validators.required,Validators.minLength(7)])

  constructor(private http: HttpClient,private router: Router,
    private userService:UserServiceService) { }

  ngOnInit() {

  }

  submitData(){
    
    // let dataa = {"username": this.username, "password":this.password};
   console.log(this.username.value)

   localStorage.setItem('name',this.username.value);
    this.userService.postLoginData(this.username.value,this.password.value)
    // this.http.post('http://localhost:8000/api/login/',dataa)
    .subscribe((response) => {  
      console.log(response)
      console.log(` response status : ${response['success']}`);
      try{
        if (response['status'] === true){
          // localStorage.setItem('token', response['token']);
          console.log(response['data'])
         
          this.router.navigate(['/dashboard']);
         
        }
        else
        {
         
          alert(response['message']);
         
        } 
      }
      catch(err)
      {
        console.log(err)
          
      }
      
    })

 
}
goRegistration(){
  
  this.router.navigate(['/register']);
 
  
    console.log("reset password")
   
  
}
goForgotPassword(){

  this.router.navigate(['/forgot']);
  console.log("forgot password")
 
}
errorForUsername(){

  return this.username.hasError('required') ? 'username field is required':
        this.username.hasError('minlength') ? 'minimum 4 character are required':
        this.username.hasError('maxlength') ? 'maximum 12 character are required':
        
        this.username;

  
}
errorForPassword(){
  return this.password.hasError('required') ? 'password field is required':
  this.password.hasError('minlength') ? 'you should enter 8-digit password':
  // this.password.hasError('pattern') ? 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters':
  this.password;
}
}
