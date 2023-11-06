import { VideoThumbnails } from './video-thumbnails.interface';
import { VideoLocalization } from './video-localization.interface';

export interface VideoSnippet {
  publishedAt: string | number,
  channelId: string,
  title: string,
  description: string;
  thumbnails: VideoThumbnails,
  channelTitle: string,
  tags: string[],
  categoryId: string,
  liveBroadcastContent: string,
  localized: VideoLocalization,
  defaultAudioLanguage: string
}
