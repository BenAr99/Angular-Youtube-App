import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';
import { VideoPreview } from '../../youtube/interfaces/video-preview.interface';
import videos from '../../videos.json';
import { VideoPreviewResponse } from '../../youtube/interfaces/video-preview-response.interface';

@Injectable({
  providedIn: 'root',
})
export class VideoResponseService {
  tokenKey = 'AIzaSyBrvhNcnESOsOQhsqDNCYReglSGSVxWz78';

  constructor(private http: HttpClient) {

  }

  getData(value?:string): Observable<VideoPreview[]> {
    let params = new HttpParams()
      .append('key', this.tokenKey)
      .append('type', 'video')
      .append('part', 'snippet')
      .append('maxResult', '15');
    if (value) {
      params = params.append('q', value);
    }
    return this.http.get<VideoPreviewResponse>(`https://www.googleapis.com/youtube/v3/search?${params}`)
      .pipe(map((item) => {
        return item.items;
      }));
  }

  getDataById(id: string) {
    const params = new HttpParams()
      .append('id', id)
      .append('key', this.tokenKey)
      .append('part', 'snippet')
      .append('part', 'statistics');
    return this.http.get<VideoPreviewResponse>('https://www.googleapis.com/youtube/v3/videos', { params }).pipe(map((item) => {
      return item.items[0];
    }));
  }
}
