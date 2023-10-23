import { VideoStatistic } from './video-statistic.interface';
import { VideoSnippet } from './video-snippet.interface';

export interface VideoPreview {
  kind: string,
  etag: string,
  id: string,
  snippet: VideoSnippet,
  statistics: VideoStatistic
}
