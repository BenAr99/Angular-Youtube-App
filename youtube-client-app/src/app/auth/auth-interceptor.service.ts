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

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentUrl = request.urlWithParams;
    const modifiedUrl = currentUrl.replace('key=', `key=${this.token}`);
    const modifiedReq = request.clone({
      url: this.googleApiDomain + modifiedUrl,
    });
    return next.handle(modifiedReq).pipe(map((event: HttpEvent<VideoPreviewResponse>) => {
      if (event instanceof HttpResponse) {
        if (event.body) {
          const modifiedBody = this.mapData(event.body);
          return event.clone({ body: modifiedBody });
        }
      }
      return event;
    }));
  }

  private mapData(response:VideoPreviewResponse) {
    if (response) {
      return response.items.map((item) => {
        // eslint-disable-next-line no-param-reassign
        item.snippet.publishedAt = new Date(item.snippet.publishedAt);
        return item;
      });
    }
    return {};
  }
}
