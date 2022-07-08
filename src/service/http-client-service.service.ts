import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from './url-api';

@Injectable({
  providedIn: 'root'
})
export class HttpClientServiceService {

  constructor(private httpClient: HttpClient) { }

getRequest(): Observable<any>{
  return this.httpClient.get('oui');
}

loginCheck(data: {email: string, password: string}): Observable<any>{
  return this.httpClient.post(UrlApi.loginCheck, data)

}
}
