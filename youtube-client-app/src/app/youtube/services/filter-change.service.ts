import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FilterChange } from '../interfaces/filter-change.interface';

@Injectable({
  providedIn: 'root',
})
export class FilterChangeService {
  filterChangeBySubject = new Subject<string>();

  filterChange?: FilterChange;
}
