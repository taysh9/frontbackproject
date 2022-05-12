import { Component, OnInit } from '@angular/core';

import {HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {shareReplay, tap} from "rxjs";
import {WebservService} from "../webserv.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private webserv :WebservService, private router: Router) { }

  ngOnInit(): void {
  }

  onLoginButtonClicked(value: string, value2: string) {
    console.log("here");
    this.login(value,value2).subscribe((res:any) =>{
      console.log(res.email);
      this.router.navigate(['/task']);
      }

    );

  }



  login(email:string,password:string)
  {
    console.log("login post");
    console.log(this.webserv.login(email,password));
    return this.webserv.login(email,password);

  }


}
