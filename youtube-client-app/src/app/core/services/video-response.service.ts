import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VideoPreview } from '../../youtube/interfaces/video-preview.interface';

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
    return this.http.get<VideoPreview[]>(`search?${params}`);
  }

  getVideoPreviews(idArray: string[]): Observable<VideoPreview[]> {
    const joinedIdArray = idArray.join(',');
    const params = new HttpParams()
      .append('id', joinedIdArray)
      .append('key', '')
      .append('part', 'snippet')
      .append('part', 'statistics');
    return this.http.get<VideoPreview[]>(`videos?${params}`);
  }
}
