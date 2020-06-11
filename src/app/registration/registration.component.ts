import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { UserServiceService } from '../services/userService/user-service.service';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  patternForPassword="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  
  username= new FormControl('', [Validators.required,Validators.maxLength(15),

                  Validators.minLength(4)]);

  password=new FormControl('',[Validators.required,Validators.minLength(7)] );

  confirmPassword=new FormControl('',[Validators.required,Validators.minLength(7)]);

  email=new FormControl('', [Validators.required,]);
 
  constructor(private http: HttpClient,private router: Router,

    private userService:UserServiceService) { }

  ngOnInit() {
  }
  submitRegister(){
    
    console.log("regstration works",this.username.value)

    let data=
    {"username":this.username.value,
    "password":this.password.value,
    "confirmPassword":this.confirmPassword.value,
    "email":this.email.value


  }
    this.userService.postRegisterData(data)
    .subscribe((response) => {
      console.log(response)
      console.log(` response status : ${response['success']}`);
      try{
        if (response['status'] === true){
          localStorage.setItem('token', response['data']);
          localStorage.setItem('email', response['email']);
         
          alert(response['message']);
         
        }
        else
        {
          console.log('Fail')
          alert(response['message']);
         
        } 
      }
      catch(err)
      {
        console.log(err)
          
      }
      
    })
     
  }
  goLogin(){
    this.router.navigate(['']);
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
  errorForConfirmPassword(){
    return this.confirmPassword.hasError('required') ? 'ConfirmPassword field is required':
   
    this.confirmPassword.hasError('minlength') ? 'you should enter 8-digit password':
    // this.confirmPassword.hasError('pattern') ? 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters':
    this.confirmPassword;
  }
  errorForEmail(){
    return this.email.hasError('required') ? 'email field is required':
    // this.email.hasError('email') ? 'Enter valid email':
    this.email;
  }
}
