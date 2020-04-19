import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TDAmeritradeResponse } from 'src/app/models/TDAmeritradeResponse';
import { TDAmeritradeService } from 'src/app/services/TDAmeritradeService';
// import * as request from 'request';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title='Invest Me';

  tdResponse: TDAmeritradeResponse;
  // users: any;

  constructor(private tDAmeritradeService:TDAmeritradeService) { }

  ngOnInit() {


    this.tDAmeritradeService.getTDAccount()
      .subscribe((data: TDAmeritradeResponse) => this.tdResponse = { ...data })


    // let resp1 = this.http.get("http://localhost:8080/invest-me-app/api/v1/td/getaccounts");
    // resp1.subscribe((data)=>console.log(data));

    // let resp2 = this.http.get("http://localhost:8080/invest-me-app/api/v1/td/getaccounts");
    // resp2.subscribe((data)=>this.tdResponse=data);


    // request.get('http://localhost:8080/invest-me-app/api/v1/td/getaccounts' , (error: any, response: any, body: any) => {
    //   let tdResponse = new TDAmeritradeResponse(body);
    //   console.log(tdResponse);
    // })   

    // let resp3 = this.http.get("https://jsonplaceholder.typicode.com/users");
    // resp3.subscribe((data)=>this.users=data);
    
  
  }



}
