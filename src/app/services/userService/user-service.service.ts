import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import { HttpServicesService } from '../httpServices/http-services.service';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private http: HttpClient, private router: Router,private hs:HttpServicesService) { }

  url="register/"
  loginUrl="login/"
  forgotUrl="reset/"
  resetUrl="forgot/"

  public httpOptions = {
    headers: new HttpHeaders({
      "content-type": "application/json",
      token: localStorage.getItem("token")
    })
  };
  postLoginData(username,password){
   
   console.log("login inside")
   
    let data = {"username": username, "password":password};
    console.log(data,"dataaa")
    // return this.http.post(this.url+'/login/',data,)
    return this.hs.post(this.loginUrl,data)
   
  }


  postRegisterData(data){
    
    // let data = {"username": username, "password":password,"confirmPassword":confirmPassword,"email":email};
    console.log("inside1",data)
    // url="register/"
    return this.hs.post(this.url,data)
    // return this.http.post('http://localhost:8000/api/register/',data)
    // this.http.post(this.url+'/register/',data,)
    
  }
  
  postForgotPasswordData(email){
    let data = {"email":email};
    return this.hs.post(this.forgotUrl,data)
   
  }


  postResetPasswordData(data){
    let token = localStorage.getItem('token') 
    const headers = new HttpHeaders().set("content-type", "application/json",);
    // let data = { "password":password,"confirmPassword":confirmPassword};
    return this.hs.post(this.resetUrl,data)
    // return this.http.post('http://localhost:8000/api/forgot/',data,)
    

  }
}
