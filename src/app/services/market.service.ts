import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { apikeys } from 'apikeys';
import { environment } from '../../environments/environment';

const BASE_URL = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MarketService {

  constructor(
    private http: HttpClient
  ) { }

  get token(): string {
    return localStorage.getItem('token') || '';
  }

  getAccessToken(): Observable<string> {
    const url = `${BASE_URL}/oauth/token?grant_type=password&username=${apikeys.USERNAME}&scope=uaa.user&password=${apikeys.PASSWORD}`;
    
    const headers = new HttpHeaders({
      'Authorization': `Basic ${btoa(apikeys.CLIENT_ID + ':' + apikeys.CLIENT_PASSWORD)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    return this.http.post(url, '', {headers})
            .pipe(
              map((data: any) => data.access_token)
            )
  }

  getQuotes(): Observable<any> {
    const url = `${BASE_URL}/quotes/2970161-1058-814?fields= LVAL_NORM,CLOSE_ADJ_NORM,NC2_PR_NORM,NC2_NORM,VOL,TUR,PY_CLOSE,YTD_PR_NORM`;

    const headers = new HttpHeaders({
      'Accept': 'application/vnd.solid-v1.0+json',
      'Authorization': `Bearer ${this.token}`
    })

    return this.http.get(url, {headers})
            .pipe(
              map((data: any) => data.quotes[0].fields)
            )
  }

}
