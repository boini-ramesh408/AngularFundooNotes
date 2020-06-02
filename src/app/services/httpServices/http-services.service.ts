import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpServicesService {
  url=environment.baseUrl
  constructor(private http: HttpClient) { }



public post(url1,data) {
  return this.http.post(this.url+url1,data);
}
public get(url1){
  return this.http.get(this.url+url1);
}
public put(url1,data){
  return this.http.put(this.url+url1,data);
}
public delete(url1,data){
  return this.http.delete(this.url+url1,data);
}
}
