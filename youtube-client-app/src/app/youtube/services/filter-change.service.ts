import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SortSetting } from '../interfaces/sort-setting.interface';

@Injectable({
  providedIn: 'root',
})
export class FilterChangeService {
  searchValueSubject = new Subject<string>();

  sortValueSubject = new Subject<SortSetting>();
}
