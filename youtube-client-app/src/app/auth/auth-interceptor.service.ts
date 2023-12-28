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
  readonly token = 'AIzaSyAHtAeF63-xGd4jO6yITz0f6BT7G0gNNcw';

  readonly googleApiDomain = 'https://www.googleapis.com/youtube/v3/';

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentUrl = request.urlWithParams;
    const modifiedUrl = currentUrl.replace('key=', `key=${this.token}`);
    const modifiedReq = request.clone({
      url: this.googleApiDomain + modifiedUrl,
    });
    return next.handle(modifiedReq);
  }
}
