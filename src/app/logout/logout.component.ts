import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
  }
  handleLogout(){
    this.http.get('http://127.0.0.1:8000/api/logout/')
    .subscribe((response) => {  
      console.log(response)

      if (response['status'] === true){
       
         this.router.navigate(['/']);
       
      }
      else
      {
       
        alert(response['message']);
       
      } 
    })
    // this.router.navigate(['/']);
  }
}
