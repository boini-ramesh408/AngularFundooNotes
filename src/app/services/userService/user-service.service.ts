import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient, private router: Router) { }
  postRegisterData(username,password){
   
    console.log(`Password: ${password}`);
    let data = {"username": username, "password":password};
 
    let option
    this.http.post('http://localhost:8000/api/login/',data,)
    .subscribe((response) => {
      console.log(response)
      console.log(` response status : ${response['success']}`);
      try{
        if (response['success'] === true){
          localStorage.setItem('token', response['token']);
          console.log(response['data'])
          alert(response['message']);
         
        }
        else
        {
          console.log('Fail')
          alert(response['message']);
         
        } 
      }
      catch(err)
      {
        console.log(err)
          
      }
      
    })
  }
}
