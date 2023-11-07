import { Pipe, PipeTransform } from '@angular/core';
import { VideoPreview } from '../../../shared/interfaces/video-preview.interface';
import { SortStatus } from '../../../shared/enum/sort-button-status.enum';
import { FilterVideoPipe } from './filter-video.pipe';

@Pipe({
  name: 'sortVideoData',
})
export class SortVideoDataPipe implements PipeTransform {
  constructor(private filterVideoPipe: FilterVideoPipe) {

  }

  transform(videoData: VideoPreview[], sort?:{
    date: SortStatus
    countOfViews: SortStatus
    wordOrSentance: string
  }): VideoPreview[] {
    let resultVideoData = [...videoData];
    if (resultVideoData && resultVideoData.length) {
      let elementTypeSort = 0;
      if (sort !== undefined) {
        Object.values(sort).forEach((value) => {
          if (sort !== undefined) {
            const typeSort = Object.keys(sort);
            if (typeSort[elementTypeSort] === 'date' || 'countOfViews') {
              this.sortDateOfView(resultVideoData, value, typeSort[elementTypeSort]);
            }
            if (typeSort[elementTypeSort] === 'wordOrSentance') {
              resultVideoData = this.sortByWord(resultVideoData, value);
            }
            elementTypeSort += 1;
          }
        });
      }
      return resultVideoData;
    }
    return [];
  }

  sortDateOfView(videoData:VideoPreview[], statusValue: SortStatus | string, typeSort: string): VideoPreview[] {
    videoData.forEach((value) => {
      // eslint-disable-next-line no-param-reassign
      value.snippet.publishedAt = new Date(value.snippet.publishedAt).getTime();
    });

    switch (statusValue) {
      case 'notIncluded':
        return videoData;
      case 'desc':
        return videoData.sort((a, b) => {
          return Number(this.pathVideoDate(a, b, typeSort)[1]) - Number(this.pathVideoDate(a, b, typeSort)[0]);
        });
      case 'asc':
        return videoData.sort((a, b) => Number(this.pathVideoDate(a, b, typeSort)[0]) - Number(this.pathVideoDate(a, b, typeSort)[1]));
      default:
        return videoData;
    }
  }

  sortByWord(videoData: VideoPreview[], word:string) {
    if (word) {
      return this.filterVideoPipe.transform(videoData, word);
    }
    return videoData;
  }

  private pathVideoDate(a: VideoPreview, b: VideoPreview, typeSort: string): (string | number)[] {
    if (typeSort === 'date') {
      return [a.snippet.publishedAt, b.snippet.publishedAt];
    }
    if (typeSort === 'countOfViews') {
      return [a.statistics.viewCount, b.statistics.viewCount];
    }
    return [];
  }
}
