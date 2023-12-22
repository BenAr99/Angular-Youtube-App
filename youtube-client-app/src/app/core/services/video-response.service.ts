import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { VideoPreview } from '../../youtube/interfaces/video-preview.interface';
import { VideoPreviewResponse } from '../../youtube/interfaces/video-preview-response.interface';

@Injectable({
  providedIn: 'root',
})
export class VideoResponseService {
  tokenKey = 'AIzaSyBrvhNcnESOsOQhsqDNCYReglSGSVxWz78';

  constructor(private http: HttpClient) {

  }

  getData(value?: string): Observable<VideoPreview[]> {
    let params = new HttpParams()
      .append('key', this.tokenKey)
      .append('type', 'video')
      .append('part', 'snippet')
      .append('maxResult', '15');
    if (value) {
      params = params.append('q', value);
    }
    return this.http.get<VideoPreviewResponse>(`https://www.googleapis.com/youtube/v3/search?${params}`)
      .pipe(map(this.mapData));
  }

  getDataById(idArray: string[]) {
    const joinedIdArray = idArray.join(',');
    const params = new HttpParams()
      .append('id', joinedIdArray)
      .append('key', this.tokenKey)
      .append('part', 'snippet')
      .append('part', 'statistics');
    return this.http.get<VideoPreviewResponse>('https://www.googleapis.com/youtube/v3/videos', { params })
      .pipe(map(this.mapData));
  }

  private mapData(response:VideoPreviewResponse) {
    return response.items.map((item) => {
      // eslint-disable-next-line no-param-reassign
      item.snippet.publishedAt = new Date(item.snippet.publishedAt);
      return item;
    });
  }
}
