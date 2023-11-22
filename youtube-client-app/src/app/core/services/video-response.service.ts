import { Injectable } from '@angular/core';
import { VideoPreview } from '../../youtube/interfaces/video-preview.interface';
import videos from '../../videos.json';

@Injectable({
  providedIn: 'root',
})
export class VideoResponseService {
  getData(): VideoPreview[] {
    return videos.items;
  }

  getVideoById(id:string): VideoPreview | undefined {
    return videos.items.find((value) => {
      return value.id.includes(id);
    });
  }
}
