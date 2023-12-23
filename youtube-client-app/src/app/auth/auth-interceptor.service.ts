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
  token = 'AIzaSyAHtAeF63-xGd4jO6yITz0f6BT7G0gNNcw';

  googleApiDomen = 'https://www.googleapis.com/youtube/v3/';

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentUrl = request.urlWithParams;
    const modifiedUrl = currentUrl.replace('key=token', `key=${this.token}`);
    const modifiedReq = request.clone({
      url: this.googleApiDomen + modifiedUrl,
    });
    return next.handle(modifiedReq);
  }
}
