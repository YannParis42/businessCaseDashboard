import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlApi } from './url-api';

@Injectable({
  providedIn: 'root'
})
export class HttpClientServiceService {

  constructor(
    private httpClient: HttpClient,
    private datePipe: DatePipe
  ) { }

  getRequest(url: string): Observable<any> {
    const token: string|null = localStorage.getItem(UrlApi.keyTokenJWT);
    let headers = undefined;
    if (token) {
      // console.log(token);

      headers = {
        'Content-type': 'application/json',
        'Authorization': 'Bearer ' + token,
        // 'Access-Control-Allow-Origin': '*'
      };
    }
    const currentDate = new Date();
    const minDate = new Date(new Date().setMonth(2));
    let params = new HttpParams();
    params = params.append('min_date', this.datePipe.transform(minDate, 'yyyy-MM-dd')!);
    params = params.append('max_date', this.datePipe.transform(currentDate, 'yyyy-MM-dd')!);

    return this.httpClient.get(url, {
      headers: headers,
      params: params,
    });
  }

loginCheck(data: {email: string, password: string}): Observable<any>{
  return this.httpClient.post(UrlApi.loginCheck, data)

}
}
