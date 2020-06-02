import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';
import { UserServiceService } from '../services/userService/user-service.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {


  password=new FormControl('',[Validators.required,Validators.minLength(7)]);

  confirmPassword=new FormControl('',[Validators.required,Validators.minLength(7)]);
  
  constructor(private http: HttpClient,private userService:UserServiceService) { }

  ngOnInit() {
  }
  submitReset(){
    
    let data = {"password": this.password.value, "confirmPassword":this.confirmPassword.value};
    // // const headers = new HttpHeaders().set("content-type", "application/json");
      this.userService.postResetPasswordData(data)
      .subscribe((response) => {
        console.log(response)
      
        try{
          if (response['success'] === true){
          
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



  errorForPassword(){
    return this.password.hasError('required') ? 'password field is required':
  this.password.hasError('minlength') ? 'you should enter 8-digit password':
 
  this.password;
  }
  errorForConfirmPassword(){
    return this.confirmPassword.hasError('required') ? 'ConfirmPassword field is required':
   
    this.confirmPassword.hasError('minlength') ? 'you should enter 8-digit password':
    
    this.confirmPassword;
  }
}
