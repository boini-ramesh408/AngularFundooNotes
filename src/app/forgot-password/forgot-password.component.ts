import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email:string;
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

}
