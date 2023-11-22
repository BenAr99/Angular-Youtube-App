import {
  Component, EventEmitter, Output,
} from '@angular/core';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent {
  searchValue = '';

  @Output() resultSearchValue = new EventEmitter<string>();

  onSearchButtonClick() :void {
    this.resultSearchValue.emit(this.searchValue.trim());
  }
}
