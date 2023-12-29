import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpClient, HttpResponse,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { VideoPreviewResponse } from '../youtube/interfaces/video-preview-response.interface';
import { VideoResponseService } from '../core/services/video-response.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private http:HttpClient) {
  }

  readonly token = 'AIzaSyAHtAeF63-xGd4jO6yITz0f6BT7G0gNNcw';

  readonly googleApiDomain = 'https://www.googleapis.com/youtube/v3/';

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const currentUrl = request.urlWithParams;
    const modifiedUrl = currentUrl.replace('key=', `key=${this.token}`);
    const modifiedReq = request.clone({
      url: this.googleApiDomain + modifiedUrl,
    });
    return next.handle(modifiedReq).pipe(map((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (event.body) {
          const modifiedBody = this.mapData(event.body);
          return event.clone({ body: modifiedBody });
        }
      }
      console.log(event);
      return event;
    }));
  }

  private mapData(response:VideoPreviewResponse) {
    if (response) {
      return response.items.map((item) => {
        item.snippet.publishedAt = new Date(item.snippet.publishedAt);
        return item;
      });
    }
    return {};
  }
}
