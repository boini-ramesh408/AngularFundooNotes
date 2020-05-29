import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {FormControl,Validators} from '@angular/forms'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  // email:string;
  email=new FormControl('', [Validators.required, Validators.email,Validators.maxLength(15),]);
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  ForgotPassword(){
  
    let dataa = {"email": this.email};
    // // const headers = new HttpHeaders().set("content-type", "application/json");

    this.http.post('http://localhost:8000/api/reset/',dataa)
    .subscribe((response) => {
      console.log(response)
      alert(response['message']);
      // localStorage.setItem("token",response.data)
    
    }
    )
  }
abc(){
  return this.email.hasError('required') ? 'username field is required':
  "";
}
}
