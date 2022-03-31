import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent } from '@angular/common/http';
import { ServicesService } from './services.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor{

  constructor(private commons: ServicesService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    if (this.commons.jwt) {
    request = request.clone({
        setHeaders: {
            // Authorization: `Bearer ${currentUser.jwttoken}`
            Authorization: `Bearer ` + this.commons.jwt
        }
    });
    }
    console.log('using interseptor',request)
    return next.handle(request);
}
}
