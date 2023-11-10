import { PageInfo } from './page-info.interface';
import { VideoPreview } from './video-preview.interface';

export interface VideoPreviewResponse {
  kind: string,
  etag: string,
  pageInfo: PageInfo,
  items: VideoPreview[],
}
