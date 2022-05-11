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

    this.login(value,value2).subscribe((res: HttpResponse<any>) =>{
        if(res.status === 200)
        {
          this.router.navigate(['/']);
        }

        console.log(res);
      }

    );

  }



  login(email:string,password:string)
  {
    return this.webserv.login(email,password).pipe(
      shareReplay(),
      tap((res:HttpResponse<any>) => {
        //this.setSess(res.body._id, res.headers.get('x-access-token'),res.headers.get('x-refresh-token') );
        console.log("logged");


      })
    )

  }


}
