import { Component, OnInit } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  username= new FormControl('', [Validators.required,Validators.maxLength(10)]);
  password=new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" )]);
  confirmPassword=new FormControl('',[Validators.required,Validators.minLength(8),Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" )]);
  email=new FormControl('', [Validators.required, Validators.email,Validators.maxLength(15),]);
  constructor(private http: HttpClient,private router: Router) { }

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
      // alert(response['message']);
      if (response['success'] === true){
        alert(response['message']);
      }else{
        console.log('Unsuccessful')
      }
      
    }
    )
  }
  goLogin(){
    this.router.navigate(['']);
  }

  errorForUsername(){
    return this.username.hasError('required') ? 'username field is required':
    "";
  }
  errorForPassword(){
    return this.password.hasError('required') ? 'password field is required':
    "";
  }
  errorForConfirmPassword(){
    return this.confirmPassword.hasError('required') ? 'ConfirmPassword field is required':
    "";
  }
  errorForEmail(){
    return this.email.hasError('required') ? 'email field is required':
    "";
  }
}
