import { Component, EventEmitter, Output } from '@angular/core';
import { SortStatus } from '../../../../shared/enum/sort-button-status.enum';
import { SortSetting } from '../../../../shared/interfaces/sort-setting.interface';

@Component({
  selector: 'app-search-settings',
  templateUrl: './search-settings.component.html',
  styleUrls: ['./search-settings.component.scss'],
})

export class SearchSettingsComponent {
  @Output() sortArray = new EventEmitter<SortSetting>();

  date = SortStatus.notIncluded;

  countOfViews = SortStatus.notIncluded;

  wordOrSentance = '';

  sortDataDate(): void {
    this.date = this.switchingValues(this.date);
    this.sortArray.emit(
      { date: this.date, countOfViews: this.countOfViews, wordOrSentance: this.wordOrSentance },
    );
  }

  sortDataViews(): void {
    this.countOfViews = this.switchingValues(this.countOfViews);
    this.sortArray.emit(
      { date: this.date, countOfViews: this.countOfViews, wordOrSentance: this.wordOrSentance },
    );
  }

  sortDataWordOrSentance(): void {
    this.sortArray.emit(
      { date: this.date, countOfViews: this.countOfViews, wordOrSentance: this.wordOrSentance },
    );
  }

  switchingValues(value:SortStatus): SortStatus {
    switch (value) {
      case SortStatus.notIncluded:
        return SortStatus.desc;
      case SortStatus.desc:
        return SortStatus.asc;
      case SortStatus.asc:
        return SortStatus.notIncluded;
      default: return SortStatus.notIncluded;
    }
  }
}
