import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
// import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {

  }

  submitData(){
    
    let dataa = {"username": this.username, "password":this.password};
    // // const headers = new HttpHeaders().set("content-type", "application/json");

    this.http.post('http://localhost:8000/api/login/',dataa)
    .subscribe((response) => {
      console.log(response)
      alert(response['message']);
      // localStorage.setItem("token",response.data)
    
    }
    )

 
}
goRegistration(){
  this.router.navigate(['/register']);
 
  
    console.log("reset password")
   
  
}
goForgotPassword(){
  this.router.navigate(['/forgot']);
 
  
  console.log("forgot pasword")
 
}
}
