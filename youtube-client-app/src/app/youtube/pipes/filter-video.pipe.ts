import { Pipe, PipeTransform } from '@angular/core';
import { VideoPreview } from '../interfaces/video-preview.interface';

@Pipe({
  name: 'filterVideo',
})
export class FilterVideoPipe implements PipeTransform {
  transform(videoPreviews: VideoPreview[], filterSearch?:string):VideoPreview[] {
    if (filterSearch) {
      return videoPreviews.filter((value) => {
        return value.snippet.title.toLowerCase().includes(filterSearch.toLowerCase());
      });
    }
    return [];
  }
}
