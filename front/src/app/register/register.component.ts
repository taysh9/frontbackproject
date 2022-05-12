import { Component, OnInit } from '@angular/core';
import {HttpResponse} from "@angular/common/http";
import {shareReplay, tap} from "rxjs";
import {WebservService} from "../webserv.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private webserv: WebservService) { }

  ngOnInit(): void {
  }



  onSignupButtonClicked(value: string, value2: string) {

    this.signup(value,value2).subscribe((res: HttpResponse<any>) =>{

        console.log(res);
      }

    );

  }



  signup(email:string,password:string)
  {
    return this.webserv.signup(email,password).pipe(
      shareReplay(),
      tap((res:HttpResponse<any>) => {

        console.log("logged");


      })
    )

  }

}
