import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  password:string;
  confirmPassword:string;
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
}
