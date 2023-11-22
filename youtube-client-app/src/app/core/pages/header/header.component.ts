import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FilterChange } from '../../../youtube/interfaces/filter-change.interface';
import { SortSetting } from '../../../youtube/interfaces/sort-setting.interface';
import { FilterChangeService } from '../../../youtube/services/filter-change.service';
import { AuthService } from '../../../auth/services/auth.service';

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

  constructor(
    private router: Router,
    private authService: AuthService,
    private filterChangeService: FilterChangeService,
  ) {
  }

  searchValueChange(value:string): void {
    this.searchValue = value;
    this.filterChangeService.filterChange = { filter: this.searchValue, sort: this.sortValue };
  }

  sortValueChange(value:SortSetting): void {
    this.sortValue = value;
    this.filterChangeService.filterChange = { filter: this.searchValue, sort: this.sortValue };
  }

  setting(): void {
    this.isSetting = !this.isSetting;
  }

  exit() {
    localStorage.removeItem('token');
    this.router.navigate(['/auth']);
    // можно ли как ту функцию guard вызвать а не писать навигацию?
  }
}
