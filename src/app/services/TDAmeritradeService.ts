import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SecuritiesAccount } from '../models/SecuritiesAccount';
import { Observable } from 'rxjs';


export interface TDAmeritradeResponse {
    securitiesAccount: SecuritiesAccount;
}

@Injectable()
export class TDAmeritradeService {

    url = 'http://localhost:8080/invest-me-app/api/v1/td/getaccounts';

    constructor(private http: HttpClient) {}

    //Should I have this ovserable below? : Observable<TDAmeritradeResponse>
    getTDAccount() {
        return this.http.get<TDAmeritradeResponse>(this.url);

    }

    
}