import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  password=new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" )]);
  confirmPassword=new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" )]);
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  submitReset(){
    console.log("hshs")
    let dataa = {"password": this.password, "confirmPassword":this.confirmPassword};
    // // const headers = new HttpHeaders().set("content-type", "application/json");

    this.http.post('http://localhost:8000/api/forgot/',dataa)
    .subscribe((response) => {
      console.log(response)
      alert(response['message']);
      // localStorage.setItem("token",response.data)
    
    }
    )
  }



  errorForPassword(){
    return this.password.hasError('required') ? 'password field is required':
    "";
  }
  errorForConfirmPassword(){
    return this.confirmPassword.hasError('required') ? 'ConfirmPassword field is required':
    "";
  }
}
