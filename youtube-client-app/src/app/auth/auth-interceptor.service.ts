import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  token = 'AIzaSyAHtAeF63-xGd4jO6yITz0f6BT7G0gNNcw'; // сделать логику получения токена)

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentUrl = request.urlWithParams;

    const modifiedUrl = currentUrl.replace('key=token', `key=${this.token}`);

    const modifiedReq = request.clone({
      url: modifiedUrl,
    });
    return next.handle(modifiedReq);
  }
}
