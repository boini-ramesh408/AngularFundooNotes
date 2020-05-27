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
    let dataa = {"username": this.username, "password":this.password,"confirmPassword":this.confirmPassword,"email":this.email};
    // const headers = new HttpHeaders().set("content-type", "application/json");
    
    console.log(dataa,"hjgh")
    this.http.post('http://localhost:8000/api/register/',dataa)
    .subscribe((response) => {
      localStorage.setItem('token', response['token']);
      // console.log(response['data'])
      // localStorage.setItem('user', response['data']);
      // localStorage.setItem("token",this.response.data)
      console.log(response)
      alert(response['message']);
      // if (response['success'] === true){
      //   alert(response['message']);
      // }else{
      //   console.log('Unsuccessful')
      // }
      
    }
    )
  }
}
