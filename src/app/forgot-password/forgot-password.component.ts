import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl,Validators} from '@angular/forms'
import { UserServiceService } from '../services/userService/user-service.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email:string;
  // email=new FormControl('', [Validators.required, Validators.email,Validators.maxLength(15),]);
  constructor(private http: HttpClient,private userService:UserServiceService) { }

  ngOnInit() {
  }
  ForgotPassword(){
  
    
    console.log(this.email)
    localStorage.setItem('email',this.email );
    // // const headers = new HttpHeaders().set("content-type", "application/json");
    // this.http.post('http://localhost:8000/api/reset/',dataa)
    this.userService.postForgotPasswordData(this.email)
    .subscribe((response) => {

      console.log(response)
    
      try{
        if (response['status'] === true){
        
          console.log(response['data'])
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
//   errorMessageForForgotPassword(){
//   return this.email.hasError('required') ? 'email field is required':
//   this.email.hasError('email') ? 'Enter valid email':
//   this.email;
// }
}
