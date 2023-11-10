import { Component } from '@angular/core';
import { FilterChange } from './youtube/interfaces/filter-change.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  resultSearchValueFromHeader?:FilterChange;

  title = 'youtube-client-app';

  onSearchButtonClickFromHeader(resultSearchValue:FilterChange) {
    this.resultSearchValueFromHeader = resultSearchValue;
  }
}
