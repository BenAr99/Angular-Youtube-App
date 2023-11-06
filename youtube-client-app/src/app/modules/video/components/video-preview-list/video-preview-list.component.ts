import {
  Component, Input, OnChanges,
} from '@angular/core';
import { filter } from 'rxjs';
import { VideoPreview } from '../../../../shared/interfaces/video-preview.interface';
import { VideoResponseService } from '../../../../video-response.service';
import { FilterChange } from '../../../../shared/interfaces/filter-change.interface';
import { SortStatus } from '../../../../shared/enum/sort-button-status.enum';

@Component({
  selector: 'app-video-preview-list',
  templateUrl: './video-preview-list.component.html',
  styleUrls: ['./video-preview-list.component.scss'],
})
export class VideoPreviewListComponent implements OnChanges {
  @Input() searchValue?: FilterChange;

  videoData: VideoPreview[] = [];

  constructor(private dataService: VideoResponseService) {
  }

  ngOnChanges(): void {
    const filterSearch = this.searchValue?.filter;
    if (filterSearch) {
      this.videoData = this.dataService.getData().filter((value) => {
        return value.snippet.title.toLowerCase().includes(filterSearch.toLowerCase());
      });
    }
    let i = 0;
    if (this.searchValue?.sort !== undefined) {
      Object.values(this.searchValue?.sort).forEach((value) => {
        if (this.searchValue?.sort !== undefined) {
          const typeSort = Object.keys(this.searchValue?.sort);
          if (typeSort[i] === 'date' || 'countOfViews') {
            this.sortDateOfView(value, typeSort[i]);
          }
          if (typeSort[i] === 'wordOrSentance') {
            this.sortByWord(value);
          }
          i += 1;
          // задать норм название I, она если что показывает элементы typeSort
        }
      });
    }
  }

  sortDateOfView(statusValue: SortStatus | string, typeSort: string): undefined {
    this.videoData.forEach((value) => {
      // eslint-disable-next-line no-param-reassign
      value.snippet.publishedAt = new Date(value.snippet.publishedAt).getTime();
    });

    switch (statusValue) {
      case 'notIncluded':
        break;
      case 'desc':
        this.videoData.sort((a, b) => {
          // eslint-disable-next-line @typescript-eslint/no-use-before-define
          return Number(this.pathVideoDate(a, b, typeSort)[0]) - Number(this.pathVideoDate(a, b, typeSort)[1]);
        });
        break;
      case 'asc':
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        this.videoData.sort((a, b) => Number(this.pathVideoDate(a, b, typeSort)[1]) - Number(this.pathVideoDate(a, b, typeSort)[0]));
        break;
      default:
        break;
    }
    return undefined;
  }

  sortByWord(word:string) {
    this.videoData = this.videoData.filter((value) => {
      return value.snippet.title.toLowerCase().includes(word.toLowerCase());
    });
  }

  private pathVideoDate(a: VideoPreview, b: VideoPreview, typeSort: string): (string | number)[] {
    if (typeSort === 'date') {
      return [a.snippet.publishedAt, b.snippet.publishedAt];
    }
    if (typeSort === 'countOfViews') {
      return [b.statistics.viewCount, a.statistics.viewCount];
    }
    return [a.snippet.publishedAt, b.snippet.publishedAt];
    // Я хз как еще return Обойти вставил не нужное значение
  }
}
