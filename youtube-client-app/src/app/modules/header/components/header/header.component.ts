import { Component, EventEmitter, Output } from '@angular/core';
import { FilterChange } from '../../../../shared/interfaces/filter-change.interface';
import { SortSetting } from '../../../../shared/interfaces/sort-setting.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() filterChange = new EventEmitter<FilterChange>();

  private searchValue?: string;

  private sortValue?: SortSetting;

  isSetting = false;

  searchValueChange(value:string): void {
    this.searchValue = value;
    this.filterChange.emit({ filter: this.searchValue, sort: this.sortValue });
  }

  sortValueChange(value:SortSetting): void {
    this.sortValue = value;
    this.filterChange.emit({ filter: this.searchValue, sort: this.sortValue });
  }

  setting(): void {
    this.isSetting = !this.isSetting;
  }
}
