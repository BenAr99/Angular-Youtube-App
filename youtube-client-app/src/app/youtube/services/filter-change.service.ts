import { Injectable } from '@angular/core';
import { FilterChange } from '../interfaces/filter-change.interface';
import { SortSetting } from '../interfaces/sort-setting.interface';

@Injectable({
  providedIn: 'root',
})
export class FilterChangeService {
  filter?: string;

  sort?: SortSetting;

  filterChange?: FilterChange;
}
