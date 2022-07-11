import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import { UrlApi } from "src/service/url-api";

export class JwtInterceptor implements HttpInterceptor{
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let token: string | null = localStorage.getItem('token');
      if(token){
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${localStorage.getItem(UrlApi.keyTokenJWT)}`
          }
        })
      }

      return next.handle(request);
  }

}
