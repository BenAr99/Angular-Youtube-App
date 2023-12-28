import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { VideoPreview } from '../../youtube/interfaces/video-preview.interface';
import { VideoPreviewResponse } from '../../youtube/interfaces/video-preview-response.interface';

@Injectable({
  providedIn: 'root',
})
export class VideoResponseService {
  constructor(private http: HttpClient) {

  }

  getVideoList(value?: string): Observable<VideoPreview[]> {
    let params = new HttpParams()
      .append('key', '')
      .append('type', 'video')
      .append('part', 'snippet')
      .append('maxResult', '15');
    if (value) {
      params = params.append('q', value);
    }
    return this.http.get<VideoPreviewResponse>(`search?${params}`)
      .pipe(map(this.mapData));
  }

  getVideoPreviews(idArray: string[]) {
    const joinedIdArray = idArray.join(',');
    const params = new HttpParams()
      .append('id', joinedIdArray)
      .append('key', '')
      .append('part', 'snippet')
      .append('part', 'statistics');
    return this.http.get<VideoPreviewResponse>(`videos?${params}`)
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
