import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  submitData(){
    console.log("hshs")
    let data = {"username": this.username, "password":this.password};
    // // const headers = new HttpHeaders().set("content-type", "application/json");

    this.http.post('http://localhost:8000/api/login/',data)
    .subscribe((response) => {
      console.log(response)
    }
    )
   
  
}
}
