import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {
  url=environment.baseUrl
  constructor(private http: HttpClient) { }

post(data){
  console.log("inside service")
  return this.http.post(`${this.url}register/`,data);
}

}
