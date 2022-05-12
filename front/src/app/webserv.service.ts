import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WebservService {


  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    this.ROOT_URL = `http://localhost:3000`
  }


  post(uri:String, payload:Object){

    return this.http.post(`${this.ROOT_URL}/${uri}`,payload);
  }


  login(email:string, password:string)
  {
    return this.http.post(`${this.ROOT_URL}/users/login`, {
        email,
        password,
      });


  }

  signup(email:string, password:string)
  {
    return this.http.post(`${this.ROOT_URL}/users`, {
        email,
        password,
      },
      {observe: 'response'
      });


  }
}
