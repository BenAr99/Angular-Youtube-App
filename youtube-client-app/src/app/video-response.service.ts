import { Injectable } from '@angular/core';
import { VideoPreview } from './shared/interfaces/video-preview.interface';
import videos from './videos.json';

@Injectable({
  providedIn: 'root',
})
export class VideoResponseService {
  getData(): VideoPreview[] {
    return videos.items;
  }
}
