import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  username:string;
  password:string;
  confirmPassword:string;
  email:string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  submitRegister(){
    console.log("regstration works",)
    let data = {"username": this.username, "password":this.password,"confirmPassword":this.confirmPassword,"email":this.email};
    // const headers = new HttpHeaders().set("content-type", "application/json");
    
    console.log(data,"hjgh")
    this.http.post('http://localhost:8000/api/register/',data)
    .subscribe((response) => {
      console.log(response)
    }
    )
  }
}
