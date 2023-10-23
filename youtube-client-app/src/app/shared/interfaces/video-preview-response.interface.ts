export interface VideoPreviewResponse {
  kind: string,
  etag: string,
  pageInfo: PageInfo,
  items: VideoPreview[],
}

export interface PageInfo {
  totalResults: number,
  resultsPerPage: number
}

export interface VideoPreview {
  'kind': string
  'etag': string,
  'id': string,
  'snippet': {
    'publishedAt': string,
    'channelId': string,
    'title': string,
    'description': string;
    'thumbnails': {
      'default': VideoCharacteristics
      'medium': VideoCharacteristics
      'high': VideoCharacteristics
      'standard': VideoCharacteristics;
      'maxres': VideoCharacteristics;
    },
    'channelTitle': string,
    tags: string[],
    'categoryId': string,
    'liveBroadcastContent': string,
    'localized': {
      'title': string,
      'description': string,
    },
    'defaultAudioLanguage': string
  },
  'statistics': {
    'viewCount': string,
    'likeCount': string,
    'dislikeCount': string,
    'favoriteCount': string,
    'commentCount': string
  }
}

export interface VideoCharacteristics {
  url: string;
  width: number;
  height: number;
}
