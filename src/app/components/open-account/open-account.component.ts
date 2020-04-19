import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-open-account',
  templateUrl: './open-account.component.html',
  styleUrls: ['./open-account.component.scss']
})
export class OpenAccountComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    let resp = this.http.get("http://localhost:8080/invest-me-app/api/v1/user/login");
    // https://jsonplaceholder.typicode.com/users
    resp.subscribe((data)=>console.log(data));

    let resp2 = this.http.get("http://localhost:8080/invest-me-app/api/v1/td/getaccounts");
    resp2.subscribe((data)=>console.log(data));
  }



}
