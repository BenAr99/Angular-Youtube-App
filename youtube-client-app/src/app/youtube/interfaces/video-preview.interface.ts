import { VideoStatistic } from './video-statistic.interface';
import { VideoSnippet } from './video-snippet.interface';

export interface VideoPreview {
  kind: string,
  etag: string,
  id: {
    kind: string,
    videoId: string,
  }
  snippet: VideoSnippet,
  statistics: VideoStatistic
}
